import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, get, update, onValue, child } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// ==========================================
// 1. НАЛАШТУВАННЯ FIREBASE
// ==========================================
const firebaseConfig = {
  apiKey: "AIzaSyC6L1rs5460sRUYjuPjAr_WbwWxOhHD5pU",
  authDomain: "nmt-prep-6b815.firebaseapp.com",
  databaseURL: "https://nmt-prep-6b815-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nmt-prep-6b815",
  storageBucket: "nmt-prep-6b815.firebasestorage.app",
  messagingSenderId: "752540646602",
  appId: "1:752540646602:web:cedb749dc8399d2a6bc833",
  measurementId: "G-KM1MJJP4BJ"
};

let db = null;
let useCloud = false;

try {
  const app = initializeApp(firebaseConfig);
  db = getDatabase(app);
  useCloud = true;
} catch (e) {
  console.warn("Firebase не підключено, використовується локальний режим:", e);
}
// ==========================================
// 2. ДАНІ АДМІНІСТРАТОРА ТА СТАН ДОДАТКУ
// ==========================================
const ADMIN_LOGIN = "Ярослав Шаблієнко";
const ADMIN_PASS = "88357";

let currentUser = null;
let currentSubject = "ua";
let activeQuiz = null;
let currentQuestionIdx = 0;
let userAnswers = [];
let allUsersCache = {};
let heartbeatInterval = null;

// Допоміжна функція для безпечного ключа в базі даних
function makeUserKey(fullName) {
  return fullName.trim().toLowerCase().replace(/\s+/g, "_").replace(/[.#$\[\]]/g, "");
}

function formatDateTime(ts) {
  if (!ts) return "—";
  const d = new Date(ts);
  return d.toLocaleString("uk-UA", {
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit"
  });
}

function formatDuration(seconds) {
  if (!seconds || seconds < 60) return `${seconds || 0} сек`;
  const mins = Math.floor(seconds / 60);
  if (mins < 60) return `${mins} хв`;
  const hrs = Math.floor(mins / 60);
  const remMins = mins % 60;
  return `${hrs} год ${remMins} хв`;
}

// ==========================================
// 3. РОБОТА З БАЗОЮ ДАНИХ (ХМАРА АБО ЛОКАЛЬНО)
// ==========================================
async function fetchUser(userKey) {
  if (useCloud) {
    const snapshot = await get(child(ref(db), `users/${userKey}`));
    return snapshot.exists() ? snapshot.val() : null;
  } else {
    const localUsers = JSON.parse(localStorage.getItem("nmt_users") || "{}");
    return localUsers[userKey] || null;
  }
}

async function saveUser(userKey, userData) {
  if (useCloud) {
    await set(ref(db, `users/${userKey}`), userData);
  } else {
    const localUsers = JSON.parse(localStorage.getItem("nmt_users") || "{}");
    localUsers[userKey] = userData;
    localStorage.setItem("nmt_users", JSON.stringify(localUsers));
  }
}

async function updateUserFields(userKey, fields) {
  if (useCloud) {
    await update(ref(db, `users/${userKey}`), fields);
  } else {
    const localUsers = JSON.parse(localStorage.getItem("nmt_users") || "{}");
    if (localUsers[userKey]) {
      localUsers[userKey] = { ...localUsers[userKey], ...fields };
      localStorage.setItem("nmt_users", JSON.stringify(localUsers));
    }
  }
}

// ==========================================
// 4. РЕЄСТРАЦІЯ, ВХІД ТА ТРЕКЕР АКТИВНОСТІ
// ==========================================
window.handleRegister = async function (e) {
  e.preventDefault();
  const name = document.getElementById("reg-name").value.trim();
  const surname = document.getElementById("reg-surname").value.trim();
  const phone = document.getElementById("reg-phone").value.trim() || "Не вказано";
  const password = document.getElementById("reg-password").value.trim();

  const fullName = `${name} ${surname}`;
  const userKey = makeUserKey(fullName);

  if (fullName.toLowerCase() === ADMIN_LOGIN.toLowerCase()) {
    alert("Це ім'я зарезервовано адміністратором платформи.");
    return;
  }

  const existing = await fetchUser(userKey);
  if (existing) {
    alert("Користувач із таким ім'ям та прізвищем уже зареєстрований. Скористайтеся формою входу.");
    return;
  }

  const now = Date.now();
  const newUser = {
    key: userKey,
    fullName,
    phone,
    password,
    registeredAt: now,
    lastActive: now,
    totalSeconds: 0,
    testHistory: []
  };

  await saveUser(userKey, newUser);
  startSession(newUser, false);
};

window.handleLogin = async function (e) {
  e.preventDefault();
  const fullName = document.getElementById("login-fullname").value.trim();
  const password = document.getElementById("login-password").value.trim();
  const errBox = document.getElementById("auth-error");
  errBox.classList.add("hidden");

  // Перевірка входу Адміністратора
  if (fullName.toLowerCase() === ADMIN_LOGIN.toLowerCase() && password === ADMIN_PASS) {
    const adminUser = {
      key: "admin_yaroslav",
      fullName: ADMIN_LOGIN,
      isAdmin: true
    };
    startSession(adminUser, true);
    return;
  }

  const userKey = makeUserKey(fullName);
  const user = await fetchUser(userKey);

  if (!user || user.password !== password) {
    errBox.textContent = "Неправильне ім'я/прізвище або пароль, або ви ще не зареєстровані.";
    errBox.classList.remove("hidden");
    return;
  }

  await updateUserFields(userKey, { lastActive: Date.now() });
  startSession(user, false);
};

function startSession(user, isAdmin) {
  currentUser = { ...user, isAdmin };
  sessionStorage.setItem("nmt_active_session", JSON.stringify(currentUser));

  document.getElementById("view-auth").classList.add("hidden");
  document.getElementById("top-bar").classList.remove("hidden");
  document.getElementById("current-user-name").textContent = isAdmin ? `👑 ${user.fullName}` : `👤 ${user.fullName}`;

  if (isAdmin) {
    document.getElementById("btn-admin-panel").classList.remove("hidden");
    subscribeAdminData();
  } else {
    document.getElementById("btn-admin-panel").classList.add("hidden");
    startHeartbeat();
  }

  goToSubjects();
}

function startHeartbeat() {
  if (heartbeatInterval) clearInterval(heartbeatInterval);
  heartbeatInterval = setInterval(async () => {
    if (!currentUser || currentUser.isAdmin) return;
    currentUser.totalSeconds = (currentUser.totalSeconds || 0) + 15;
    currentUser.lastActive = Date.now();
    await updateUserFields(currentUser.key, {
      totalSeconds: currentUser.totalSeconds,
      lastActive: currentUser.lastActive
    });
  }, 15000); // Оновлення кожні 15 секунд
}

window.logoutUser = function () {
  if (heartbeatInterval) clearInterval(heartbeatInterval);
  sessionStorage.removeItem("nmt_active_session");
  currentUser = null;
  hideAllViews();
  document.getElementById("top-bar").classList.add("hidden");
  document.getElementById("view-auth").classList.remove("hidden");
};

// Автоматичне відновлення сесії при оновленні сторінки
window.addEventListener("DOMContentLoaded", async () => {
  const saved = sessionStorage.getItem("nmt_active_session");
  if (saved) {
    const parsed = JSON.parse(saved);
    if (parsed.isAdmin) {
      startSession(parsed, true);
    } else {
      const fresh = await fetchUser(parsed.key);
      if (fresh) startSession(fresh, false);
    }
  }
});

// ==========================================
// 5. НАВІГАЦІЯ ПО ПРЕДМЕТАХ, ТЕМАХ ТА ТЕСТАХ
// ==========================================
function hideAllViews() {
  ["view-auth", "view-subjects", "view-subject-workspace", "view-admin"].forEach(id => {
    document.getElementById(id).classList.add("hidden");
  });
}

window.goToSubjects = function () {
  hideAllViews();
  document.getElementById("view-subjects").classList.remove("hidden");
};

window.openSubject = function (subj) {
  if (subj !== "ua") {
    alert("Цей предмет готується до додавання! Зараз повністю доступна Українська мова.");
    return;
  }
  currentSubject = subj;
  hideAllViews();
  document.getElementById("view-subject-workspace").classList.remove("hidden");
  document.getElementById("workspace-subject-title").textContent = "Українська мова";
  switchSubjectMode("themes");
};

window.switchSubjectMode = function (mode) {
  document.getElementById("tab-themes").classList.toggle("active", mode === "themes");
  document.getElementById("tab-tests").classList.toggle("active", mode === "tests");

  document.getElementById("workspace-themes-list").classList.toggle("hidden", mode !== "themes");
  document.getElementById("workspace-theme-reader").classList.add("hidden");
  document.getElementById("workspace-tests-list").classList.toggle("hidden", mode !== "tests");
  document.getElementById("workspace-quiz-runner").classList.add("hidden");
  document.getElementById("workspace-quiz-result").classList.add("hidden");

  if (mode === "themes") renderThemesList();
  if (mode === "tests") renderTestsList();
};

function renderThemesList() {
  const container = document.getElementById("themes-container");
  const themes = window.THEORY_UA || [];
  if (!themes.length) {
    container.innerHTML = `<p class="subtitle">Конспекти завантажуються...</p>`;
    return;
  }

  container.innerHTML = themes.map((t, idx) => `
    <div class="theme-item-card" onclick="openThemeReader(${idx})">
      <div>
        <span class="theme-badge">${t.section}</span>
        <h3 style="margin-top:6px;">${t.title}</h3>
      </div>
      <p style="color:var(--text-muted); font-size:0.88rem;">${t.shortDesc}</p>
    </div>
  `).join("");
}

window.openThemeReader = function (idx) {
  const theme = (window.THEORY_UA || [])[idx];
  if (!theme) return;

  document.getElementById("workspace-themes-list").classList.add("hidden");
  document.getElementById("workspace-theme-reader").classList.remove("hidden");

  document.getElementById("theme-reader-content").innerHTML = `
    <span class="theme-badge">${theme.section}</span>
    <h2>${theme.title}</h2>
    ${theme.contentHtml}
  `;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.backToThemesList = function () {
  document.getElementById("workspace-theme-reader").classList.add("hidden");
  document.getElementById("workspace-themes-list").classList.remove("hidden");
};

// ==========================================
// 6. СПИСОК ТЕСТІВ ТА РУШІЙ ТЕСТУВАННЯ
// ==========================================
function renderTestsList() {
  const topicContainer = document.getElementById("topic-tests-container");
  const variantsContainer = document.getElementById("nmt-variants-container");
  const testsData = window.TESTS_UA || { topicTests: [], nmtVariants: [] };
  const history = currentUser?.testHistory || [];

  topicContainer.innerHTML = testsData.topicTests.map((test, idx) => {
    const done = history.find(h => h.testId === test.id);
    return `
      <div class="test-tile ${done ? "completed" : ""}" onclick="startQuiz('topic', ${idx})">
        <strong>${test.title}</strong>
        <div style="font-size:0.82rem; color:var(--text-muted); margin-top:4px;">
          Завдань: ${test.questions.length} ${done ? `• Лучший: ${done.score}/${done.total}` : ""}
        </div>
      </div>
    `;
  }).join("");

  variantsContainer.innerHTML = testsData.nmtVariants.map((variant, idx) => {
    const done = history.find(h => h.testId === variant.id);
    return `
      <div class="test-tile ${done ? "completed" : ""}" onclick="startQuiz('variant', ${idx})">
        <strong>${variant.title}</strong>
        <div style="font-size:0.8rem; color:var(--text-muted); margin-top:4px;">
          ${variant.questions.length} завдань ${done ? `✅ ${done.score}/${done.total}` : ""}
        </div>
      </div>
    `;
  }).join("");
}

window.startQuiz = function (type, idx) {
  const testsData = window.TESTS_UA;
  activeQuiz = type === "topic" ? testsData.topicTests[idx] : testsData.nmtVariants[idx];
  if (!activeQuiz) return;

  currentQuestionIdx = 0;
  userAnswers = [];

  document.getElementById("workspace-tests-list").classList.add("hidden");
  document.getElementById("workspace-quiz-result").classList.add("hidden");
  document.getElementById("workspace-quiz-runner").classList.remove("hidden");
  document.getElementById("quiz-title-badge").textContent = activeQuiz.title;

  renderQuestion();
};

function renderQuestion() {
  const q = activeQuiz.questions[currentQuestionIdx];
  const total = activeQuiz.questions.length;

  document.getElementById("quiz-progress-text").textContent = `Питання ${currentQuestionIdx + 1} з ${total}`;
  document.getElementById("quiz-progress-fill").style.width = `${((currentQuestionIdx) / total) * 100}%`;

  const box = document.getElementById("quiz-question-box");

  // Тип 1: Звичайний вибір 1 правильної відповіді
  if (!q.type || q.type === "single") {
    box.innerHTML = `
      <span class="theme-badge">Тема: ${q.topic || "Загальна перевірка"}</span>
      <h3 style="margin: 10px 0 18px;">${q.question}</h3>
      <div>
        ${q.options.map((opt, i) => `
          <button class="option-btn" onclick="submitSingleAnswer(${i})">${opt}</button>
        `).join("")}
      </div>
    `;
  }
  // Тип 2: Логічні пари (встановлення відповідності 1-4 / А-Д)
  else if (q.type === "match") {
    const letters = ["А", "Б", "В", "Г", "Д"];
    box.innerHTML = `
      <span class="theme-badge">Відповідність (логічні пари) • ${q.topic || ""}</span>
      <h3 style="margin: 10px 0 16px;">${q.question}</h3>
      <div class="matching-grid">
        <div>
          <strong style="color:#93c5fd; display:block; margin-bottom:8px;">Умови:</strong>
          ${q.left.map((item, i) => `
            <div class="match-row">
              <span>${item}</span>
              <select id="match-sel-${i}" class="match-select">
                <option value="-1">—</option>
                ${q.right.map((_, rIdx) => `<option value="${rIdx}">${letters[rIdx]}</option>`).join("")}
              </select>
            </div>
          `).join("")}
        </div>
        <div>
          <strong style="color:#93c5fd; display:block; margin-bottom:8px;">Варіанти:</strong>
          ${q.right.map((item, rIdx) => `
            <div class="match-row">
              <span><strong>${letters[rIdx]}.</strong> ${item}</span>
            </div>
          `).join("")}
        </div>
      </div>
      <button class="btn btn-primary mt-20" onclick="submitMatchAnswer()">Підтвердити відповідність →</button>
    `;
  }
}

window.submitSingleAnswer = function (selectedIdx) {
  const q = activeQuiz.questions[currentQuestionIdx];
  const isCorrect = selectedIdx === q.correct;

  userAnswers.push({
    question: q.question,
    topic: q.topic || "Загальні знання",
    isCorrect,
    explanation: q.explanation || ""
  });

  nextQuestionOrFinish();
};

window.submitMatchAnswer = function () {
  const q = activeQuiz.questions[currentQuestionIdx];
  let earned = 0;
  q.correctPairs.forEach((correctRightIdx, leftIdx) => {
    const chosen = parseInt(document.getElementById(`match-sel-${leftIdx}`).value, 10);
    if (chosen === correctRightIdx) earned++;
  });

  const isFullyCorrect = earned === q.correctPairs.length;
  userAnswers.push({
    question: q.question,
    topic: q.topic || "Відповідність",
    isCorrect: isFullyCorrect,
    partialScore: earned,
    maxPartial: q.correctPairs.length,
    explanation: q.explanation || ""
  });

  nextQuestionOrFinish();
};

async function nextQuestionOrFinish() {
  currentQuestionIdx++;
  if (currentQuestionIdx < activeQuiz.questions.length) {
    renderQuestion();
  } else {
    await finishQuiz();
  }
}

async function finishQuiz() {
  document.getElementById("workspace-quiz-runner").classList.add("hidden");
  document.getElementById("workspace-quiz-result").classList.remove("hidden");

  let score = 0;
  let maxScore = 0;
  const mistakesByTopic = {};

  userAnswers.forEach(ans => {
    if (ans.maxPartial) {
      score += ans.partialScore;
      maxScore += ans.maxPartial;
      if (ans.partialScore < ans.maxPartial) {
        mistakesByTopic[ans.topic] = (mistakesByTopic[ans.topic] || 0) + 1;
      }
    } else {
      maxScore += 1;
      if (ans.isCorrect) score += 1;
      else mistakesByTopic[ans.topic] = (mistakesByTopic[ans.topic] || 0) + 1;
    }
  });

  document.getElementById("result-score-circle").textContent = `${score} / ${maxScore}`;
  const percent = Math.round((score / maxScore) * 100);
  document.getElementById("result-summary-text").textContent =
    percent >= 80 ? "Чудовий результат! Ви впевнено володієте матеріалом." :
    percent >= 50 ? "Непоганий рівень, але є теми, які варто закріпити." :
    "Рекомендуємо спочатку уважно опрацювати конспекти до цих тем.";

  // Розумний аналіз помилок
  const analysisBox = document.getElementById("ai-mistake-analysis");
  const weakTopics = Object.entries(mistakesByTopic);

  if (weakTopics.length === 0) {
    analysisBox.innerHTML = `<h4 style="color:var(--success);">🎉 Жодної помилки! Усі теми засвоєно бездоганно.</h4>`;
  } else {
    analysisBox.innerHTML = `
      <h4 style="color:#fbbf24; margin-bottom:10px;">🔍 Аналіз помилок — на що звернути увагу:</h4>
      <ul style="padding-left:20px;">
        ${weakTopics.map(([topic, count]) => `
          <li style="margin-bottom:6px;">
            <strong>Тема «${topic}»:</strong> допущено помилок — ${count}. Перейдіть у вкладку «Теми (Конспекти)» та повторіть ключові правила й винятки.
          </li>
        `).join("")}
      </ul>
    `;
  }

  // Збереження результату в профіль учня
  if (currentUser && !currentUser.isAdmin) {
    const record = {
      testId: activeQuiz.id,
      testTitle: activeQuiz.title,
      score,
      total: maxScore,
      percent,
      weakTopics: weakTopics.map(w => w[0]),
      finishedAt: Date.now()
    };
    currentUser.testHistory = currentUser.testHistory || [];
    currentUser.testHistory.push(record);
    await updateUserFields(currentUser.key, {
      testHistory: currentUser.testHistory,
      lastActive: Date.now()
    });
  }
}

window.exitQuiz = function () {
  if (confirm("Ви впевнені, що хочете перервати тест? Прогрес не збережеться.")) {
    backToTestsList();
  }
};

window.backToTestsList = function () {
  document.getElementById("workspace-quiz-runner").classList.add("hidden");
  document.getElementById("workspace-quiz-result").classList.add("hidden");
  document.getElementById("workspace-tests-list").classList.remove("hidden");
  renderTestsList();
};

// ==========================================
// 7. ПАНЕЛЬ АДМІНІСТРАТОРА
// ==========================================
function subscribeAdminData() {
  if (useCloud) {
    onValue(ref(db, "users"), (snapshot) => {
      allUsersCache = snapshot.val() || {};
      renderAdminTable();
    });
  } else {
    allUsersCache = JSON.parse(localStorage.getItem("nmt_users") || "{}");
    renderAdminTable();
  }
}

window.openAdminPanel = function () {
  hideAllViews();
  document.getElementById("view-admin").classList.remove("hidden");
  subscribeAdminData();
};

function renderAdminTable() {
  const usersList = Object.values(allUsersCache);
  const now = Date.now();
  let onlineCount = 0;
  let totalTestsCount = 0;

  const tbody = document.getElementById("admin-users-tbody");
  tbody.innerHTML = usersList.map(u => {
    const isOnline = (now - (u.lastActive || 0)) < 60000; // активний протягом останньої хвилини
    if (isOnline) onlineCount++;
    const testsDone = (u.testHistory || []).length;
    totalTestsCount += testsDone;

    return `
      <tr onclick="openUserDetailsModal('${u.key}')">
        <td>
          <span class="${isOnline ? "online-dot" : "offline-dot"}"></span>
          <strong>${u.fullName}</strong>
        </td>
        <td>${u.phone || "—"}</td>
        <td>${formatDateTime(u.registeredAt)}</td>
        <td>${formatDuration(u.totalSeconds)}</td>
        <td><strong>${testsDone}</strong></td>
        <td>${isOnline ? '<span class="text-success">В мережі зараз</span>' : formatDateTime(u.lastActive)}</td>
      </tr>
    `;
  }).join("");

  document.getElementById("admin-total-users").textContent = usersList.length;
  document.getElementById("admin-online-users").textContent = onlineCount;
  document.getElementById("admin-total-tests").textContent = totalTestsCount;
}

window.openUserDetailsModal = function (userKey) {
  const u = allUsersCache[userKey];
  if (!u) return;

  document.getElementById("modal-student-name").textContent = u.fullName;
  const history = u.testHistory || [];

  document.getElementById("modal-student-body").innerHTML = `
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:18px; background:#0f172a; padding:14px; border-radius:10px;">
      <div><span style="color:var(--text-muted);">Телефон:</span><br><strong>${u.phone || "Не вказано"}</strong></div>
      <div><span style="color:var(--text-muted);">Дата реєстрації:</span><br><strong>${formatDateTime(u.registeredAt)}</strong></div>
      <div><span style="color:var(--text-muted);">Загальний час на сайті:</span><br><strong>${formatDuration(u.totalSeconds)}</strong></div>
      <div><span style="color:var(--text-muted);">Останній раз у мережі:</span><br><strong>${formatDateTime(u.lastActive)}</strong></div>
    </div>

    <h4 style="margin-bottom:10px;">Прогрес та результати тестів (${history.length}):</h4>
    ${history.length === 0 ? '<p style="color:var(--text-muted);">Учень ще не проходив жодного тесту.</p>' : `
      <div style="display:flex; flex-direction:column; gap:10px;">
        ${history.slice().reverse().map(h => `
          <div style="background:#0f172a; border:1px solid var(--border-color); padding:12px; border-radius:10px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <strong>${h.testTitle}</strong>
              <span style="color:${h.percent >= 70 ? "var(--success)" : "#fbbf24"}; font-weight:700;">
                ${h.score} / ${h.total} (${h.percent}%)
              </span>
            </div>
            <div style="font-size:0.82rem; color:var(--text-muted); margin-top:4px;">
              Дата: ${formatDateTime(h.finishedAt)}
              ${h.weakTopics && h.weakTopics.length ? ` • Помилки в темах: <span style="color:#fca5a5;">${h.weakTopics.join(", ")}</span>` : " • Без помилок"}
            </div>
          </div>
        `).join("")}
      </div>
    `}
  `;

  document.getElementById("modal-user-details").classList.remove("hidden");
};

window.closeUserModal = function () {
  document.getElementById("modal-user-details").classList.add("hidden");
};