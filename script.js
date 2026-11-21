// Повна база даних курсу 11 класу з Історії України (офіційна нумерація тем програми НМТ)
const subjectsData = {
  ukrainian: {
    title: "📘 Українська мова (11 клас): Головні правила та пастки НМТ",
    slides: [
      {
        title: "Блок 1: Наголоси НМТ (топ слів, які трапляються щороку)",
        points: [
          "<strong>Перший склад:</strong> <em>зАгадка, зАїзд, зАкладка (у книзі), дОнька, фАртух, цЕнтнер, рУсло, кОлесо, кИшка</em>.",
          "<strong>Другий склад:</strong> <em>випАдок, видАння, віршІ, граблІ, дочкА, дровА, завдАння, здобутОк, камбАла, кропивА, олені (Олені), перелЯк, підлІток, псевдонІм, спинА, тризУб, чорнОзем, шофЕр</em>.",
          "<strong>Третій склад (і далі):</strong> <em>алфавІт, бюлетЕнь, громадянИн, децимЕтр, кіломЕтр, мілімЕтр, сантимЕтр, кулінАрія, листопАд, металУргія, новИй, одинАдцять, чотирнАдцять, посередИні, сільськогосподАрський, украЇнський, феномен (фенОмен)</em>.",
          "<strong>Дієслова:</strong> <em>везтИ, нестИ, пітИ, бюлЕтень, завЕзти, занЕсти, привЕзти, принести (принЕсти), перевЕсти, перенЕсти, пізнАння, робИти (роблЮ)</em>."
        ]
      },
      {
        title: "Блок 2: Правопис (новий правопис 2019 р. на НМТ)",
        points: [
          "<strong>Разом пишемо слова з іншомовними компонентами:</strong> <em>авіа-, авто-, агро-, анти-, аудіо-, біо-, веб-, відео-, гео-, гідро-, екстра-, еко-, кібер-, макро-, мега-, мета-, мікро-, міні-, моно-, мульти-, нано-, нео-, поп-, псевдо-, супер-, топ-, ультра-, флеш-, фолк-</em> (наприклад: <em>вебсайт, мініпроєкт, топменеджер, попмузика</em>).",
          "<strong>Пів завжди окремо з іменниками в Р. в.:</strong> <em>пів Києва, пів яблука, пів години, пів України</em> (разом тільки тоді, коли утворюється єдине поняття в Н. в.: <em>півострів, півкуля, південь, півмісяць</em>).",
          "<strong>Звук [g] та [h] у запозиченнях:</strong> <em>проєкт, проєкція, траєкторія</em> (через <strong>є</strong>); <em>фоє, Мая, Гоя</em> (без й); <em>священник, письменник</em> (подвоєння).",
          "<strong>Спрощення в групах приголосних:</strong> <em>тижневий, проїзний, радісний, чесний, контрастний</em>, АЛЕ винятки (без спрощення): <em>шістнадцять, зап'ястний, хвастливий, пестливий, кістлявий</em>."
        ]
      },
      {
        title: "Блок 3: Лексикологія (пароніми, фразеологізми, антисуржик)",
        points: [
          "<strong>Антисуржик (правильно → неправильно):</strong> <em>брати участь</em> (не приймати участь), <em>наступного разу</em> (не слідуючого разу), <em>відчинити двері / розплющити очі / відкрити книжку</em>.",
          "<strong>Пароніми:</strong> <em>ефективний</em> (дієвий) vs <em>ефектний</em> (яскравий); <em>музичний</em> (інструмент, слух) vs <em>музикальний</em> (здібний до музики, мелодійний); <em>військовий</em> (людина, техніка) vs <em>воєнний</em> (час, стан, дії).",
          "<strong>Популярні фразеологізми НМТ:</strong> <em>пасти задніх</em> (відставати), <em>бити байдики</em> (ледарювати), <em>пекти раків</em> (червоніти), <em>накивати п'ятами</em> (утекти), <em>як кіт наплакав</em> (мало).",
          "<strong>Лексична помилка (плеоназм):</strong> не можна казати <em>«вільна вакансія»</em>, <em>«пам'ятний сувенір»</em>, <em>«перша прем'єра»</em>, <em>«прейскурант цін»</em>."
        ]
      },
      {
        title: "Блок 4: Морфологія (рід іменників, кличний відмінок, числівники)",
        points: [
          "<strong>Рід незмінюваних іменників:</strong> професії/особи — ч. р. (<em>маестро, аташе</em>); тварини — ч. р. (<em>шимпанзе, поні, фламінго, какаду</em>, АЛЕ <em>цеце, івасі</em> — ж. р.); неістоти — с. р. (<em>метро, таксі, кіно, меню, інтерв'ю, журі</em>), АЛЕ винятки: <em>шампунь, тюль, нежить, біль, степ, собака, насип, продаж, дріб</em> — <strong>чоловічий рід</strong>; <em>мігрень, гуаш, вуаль, бандероль, путь, розкіш, фальш</em> — <strong>жіночий рід</strong>.",
          "<strong>Кличний відмінок:</strong> <em>Олегу, Ігорю, Дмитре, Андрію, Сергію, друже, козаче, пані, бабусю, Наталю (Наталіє), Софіє, земле</em>.",
          "<strong>Числівники (узгодження):</strong> 2, 3, 4 + іменник у Н. в. множини (<em>три столи, чотири учні</em>); 5 і більше + Р. в. множини (<em>п'ять столів</em>); дробові — тільки Р. в. однини (<em>три з половиною кілограми, півтора року, півтори години</em>).",
          "<strong>Ступені порівняння прикметників:</strong> не можна поєднувати просту і складену форми (неправильно: <em>«більш кращий»</em>, <em>«самий високий»</em>; правильно: <em>кращий / більш високий / найвищий</em>)."
        ]
      },
      {
        title: "Блок 5: Синтаксис і пунктуація (тире, коми, відокремлені члени)",
        points: [
          "<strong>Тире між підметом і присудком ставимо:</strong> коли обидва виражені іменником або інфінітивом (<em>Київ — столиця України; Життя прожити — не поле перейти</em>). НЕ ставимо перед <em>є, не, як, наче, ніби</em>.",
          "<strong>Відокремлені означення (дієприкметниковий зворот):</strong> виділяємо комами, якщо стоїть <strong>після</strong> означуваного слова (<em>Книжка, прочитана вчора, лежить на столі</em>), або стосується особового займенника (<em>Стомлений, він заснув</em>).",
          "<strong>Відокремлені обставини (дієприслівниковий зворот):</strong> виділяємо комами <strong>завжди</strong> незалежно від місця в реченні (крім фразеологізмів типу <em>бігти не чуючи ніг</em> та одиничних дієприслівників у кінці речення в значенні способу дії).",
          "<strong>Типи підрядних речень:</strong> означальне (<em>який? чий?</em>), з'ясувальне (<em>питання непрямих відмінків: що? про що?</em>), обставинне (<em>де? коли? чому? навіщо? за якої умови?</em>)."
        ]
      },
      {
        title: "Блок 6: Узгодження дієприслівникових зворотів та активні дієприкметники",
        points: [
          "<strong>Золоте правило дієприслівникового звороту:</strong> основну дію (присудок) і додаткову дію (дієприслівник) <strong>мусить виконувати один і той самий підмет</strong>! Неправильно: <em>«Під'їжджаючи до станції, у мене злетів капелюх»</em>. Правильно: <em>«Коли я під'їжджав до станції, у мене злетів капелюх»</em>.",
          "<strong>Уникаємо активних дієприкметників на -учий/-ючий, -ачий/-ячий:</strong> замість <em>«початкуючий письменник»</em> → <em>письменник-початківець</em>; замість <em>«оточуюче середовище»</em> → <em>довкілля</em>; замість <em>«діючий закон»</em> → <em>чинний закон</em>.",
          "<strong>Однорідні члени з узагальнювальним словом:</strong> після УС перед однорідними ставимо двокрапку (<em>Усе навколо: дерева, кущі, трава — вкрилося росою</em>), після однорідних перед УС — тире.",
          "<strong>Пряма мова:</strong> А: «П?!» або «П,» — а. Якщо слова автора розривають речення: «П, — а, — п»."
        ]
      }
    ],
    quiz: [
      {
        question: "На перший склад падає наголос у слові:",
        options: [
          "цЕнтнер",
          "випАдок",
          "листопАд",
          "завдАння"
        ],
        correct: 0
      },
      {
        question: "Разом треба писати всі слова в рядку:",
        options: [
          "вебсайт, мініпроєкт, топменеджер",
          "пів/Києва, екс/президент, віце/прем'єр",
          "авіа/рейс, пів/яблука, супер/маркет",
          "біо/логія, пів/години, фолк/музика"
        ],
        correct: 0
      },
      {
        question: "Правильно утворено форму кличного відмінка в рядку:",
        options: [
          "Олегу, Андрію, Софіє",
          "Олеже, Андріє, Софія",
          "Ігоре, Дмитро, земле",
          "Сергіє, друже, Наталія"
        ],
        correct: 0
      },
      {
        question: "Помилку в узгодженні числівника з іменником допущено в рядку:",
        options: [
          "три з половиною кілограмів",
          "чотири ноутбуки",
          "півтори години",
          "п'ять зошитів"
        ],
        correct: 0
      },
      {
        question: "Лексичну помилку (плеоназм) допущено в словосполученні:",
        options: [
          "вільна вакансія",
          "цікавий проєкт",
          "брати участь",
          "відчинити вікно"
        ],
        correct: 0
      },
      {
        question: "Усі іменники належать до чоловічого роду в рядку:",
        options: [
          "шампунь, тюль, нежить",
          "мігрень, біль, степ",
          "собака, вуаль, дріб",
          "путь, продаж, насип"
        ],
        correct: 0
      },
      {
        question: "Граматично правильним є речення:",
        options: [
          "Читаючи книжку, я виписував цікаві цитати.",
          "Читаючи книжку, у мене розболілася голова.",
          "Під'їжджаючи до Києва, почався сильний дощ.",
          "Зайшовши до класу, пролунав дзвоник на урок."
        ],
        correct: 0
      },
      {
        question: "Спрощення в групах приголосних позначається на письмі в усіх словах рядка:",
        options: [
          "тижневий, проїзний, чесний",
          "шістнадцять, радісний, обласний",
          "кістлявий, захисний, корисний",
          "зап'ястний, контрастний, виїзний"
        ],
        correct: 0
      },
      {
        question: "Фразеологізм «пекти раків» має значення:",
        options: [
          "червоніти від сорому",
          "дуже швидко бігти",
          "ледарювати без діла",
          "гірко плакати"
        ],
        correct: 0
      },
      {
        question: "Літеру «є» на місці пропуску треба писати в усіх словах рядка:",
        options: [
          "про..кт, тра..кторія, об'..кт",
          "фо.., про..кція, суб'..кт",
          "Ма..я, кар'..ра, бар'..р",
          "Го..я, ін'..кція, кон'..ктура"
        ],
        correct: 0
      }
    ]
  },
  history: {
    title: "🇺🇦 Історія України (11 клас): Повний курс підготовки до НМТ",
    slides: [
      {
        title: "Тема 25 (Ч. 1): Поділ територій та окупація (1939–1942)",
        points: [
          "<strong>23 серпня 1939 р.</strong> — підписання пакту Молотова — Ріббентропа.",
          "<strong>17 вересня 1939 р.</strong> — вступ Червоної армії до Західної України.",
          "<strong>30 червня 1941 р.</strong> — Акт відновлення Української Держави у Львові.",
          "<strong>План «Ост»</strong> — поділ України на чотири окупаційні зони; трагедія Бабиного Яру."
        ]
      },
      {
        title: "Тема 25 (Ч. 2): Боротьба за визволення (1942–1945)",
        points: [
          "<strong>14 жовтня 1942 р.</strong> — утворення УПА на чолі з Романом Шухевичем; «Поліська Січ» Т. Бульби-Боровця.",
          "<strong>1943 р.</strong> — Карпатський рейд радянських партизанів Сидора Ковпака.",
          "<strong>6 листопада 1943 р.</strong> — вигнання нацистів із Києва.",
          "<strong>28 жовтня 1944 р.</strong> — повне визволення території України."
        ]
      },
      {
        title: "Тема 26: Україна в перші повоєнні роки (1945–1953)",
        points: [
          "<strong>1945 р.</strong> — Україна стала співзасновницею ООН; приєднання Закарпаття до УРСР.",
          "<strong>1946–1947 рр.</strong> — масовий повоєнний голод в Україні.",
          "<strong>1946 р.</strong> — Львівський псевдособор («самоліквідація» УГКЦ).",
          "<strong>1947 р.</strong> — операція «Вісла» (примусове виселення українців із Закерзоння)."
        ]
      },
      {
        title: "Тема 28: Період «застою» та дисиденти (1964–1985)",
        points: [
          "<strong>1963–1972 рр.</strong> — П. Шелест («Україно наша Радянська»); з 1972 р. — В. Щербицький (посилення русифікації).",
          "<strong>УРСС (Л. Лук'яненко)</strong> — мета: мирний вихід УРСР із СРСР конституційним шляхом.",
          "<strong>1976 р.</strong> — створення Української Гельсінської групи (Микола Руденко).",
          "<strong>1978 р.</strong> — Конституція УРСР, закріплення концепції «розвинутого соціалізму»."
        ]
      },
      {
        title: "Тема 30 (Ч. 1): Конституційний процес та символи (1991–1996)",
        points: [
          "<strong>6 грудня 1991 р.</strong> — створення Збройних Сил України; 1992 р. — затвердження державних символів.",
          "<strong>5 грудня 1994 р.</strong> — Будапештський меморандум (відмова України від ядерної зброї).",
          "<strong>28 червня 1996 р.</strong> — ухвалення Конституції України в «конституційну ніч».",
          "<strong>Вересень 1996 р.</strong> — введення національної валюти — гривні."
        ]
      },
      {
        title: "Тема 30 (Ч. 2): Президентство Леоніда Кучми (1994–2004)",
        points: [
          "<strong>1995 р.</strong> — вступ України до Ради Європи.",
          "<strong>1997 р.</strong> — Договір про дружбу і співробітництво з РФ; політ першого космонавта незалежної України Леоніда Каденюка.",
          "<strong>2000–2001 рр.</strong> — «касетний скандал» та акція протесту «Україна без Кучми».",
          "<strong>Осінь 2003 р.</strong> — територіальний конфлікт навколо острова Тузла."
        ]
      },
      {
        title: "Тема 31 (Ч. 1): Помаранчева революція (2004–2013)",
        points: [
          "<strong>Листопад — грудень 2004 р.</strong> — масові протести проти фальсифікації президентських виборів.",
          "<strong>8 грудня 2004 р.</strong> — конституційна реформа, перехід до парламентсько-президентської республіки.",
          "<strong>26 грудня 2004 р.</strong> — переголосування II туру та перемога Віктора Ющенка.",
          "<strong>2008 р.</strong> — вступ України до Світової організації торгівлі (СОТ)."
        ]
      },
      {
        title: "Тема 31 (Ч. 2): Революція Гідності (2013–2014)",
        points: [
          "<strong>21 листопада 2013 р.</strong> — початок Євромайдану через відмову влади підписати Угоду з ЄС.",
          "<strong>16 січня 2014 р.</strong> — ухвалення владою «диктаторських законів».",
          "<strong>18–20 лютого 2014 р.</strong> — розстріли на вул. Інститутській та подвиг Небесної Сотні.",
          "<strong>Червень 2014 р.</strong> — підписання Угоди про асоціацію між Україною та Євросоюзом."
        ]
      },
      {
        title: "Тема 32: Російсько-українська війна та поступ (з 2014 р.)",
        points: [
          "<strong>Березень 2014 р.</strong> — окупація Криму РФ та початок АТО на Донбасі; <strong>2014–2015 рр.</strong> — оборона ДАПу («кіборги»).",
          "<strong>Червень 2017 р.</strong> — безвізовий режим із країнами ЄС; <strong>січень 2019 р.</strong> — Томос про автокефалію ПЦУ.",
          "<strong>24 лютого 2022 р.</strong> — початок повномасштабного російського вторгнення в Україну.",
          "<strong>Червень 2022 р.</strong> — надання Україні статусу кандидата на вступ до ЄС."
        ]
      },
      {
        title: "Довідник НМТ: Культура та персоналії (XX — XXI ст.)",
        points: [
          "<strong>Кінематограф:</strong> Сергій Параджанов (поетичне кіно, «Тіні забутих предків»).",
          "<strong>Живопис:</strong> Катерина Білокур, Марія Примаченко, Тетяна Яблонська.",
          "<strong>Музика:</strong> Володимир Івасюк («Червона рута»).",
          "<strong>Дисиденти:</strong> Василь Стус, В'ячеслав Чорновіл, Петро Григоренко."
        ]
      }
    ],
    quiz: [
      {
        question: "Коли було проголошено Акт відновлення Української Держави у Львові?",
        options: [
          "23 серпня 1939 р.",
          "17 вересня 1939 р.",
          "30 червня 1941 р.",
          "14 жовтня 1942 р."
        ],
        correct: 2
      },
      {
        question: "Хто очолив Українську повстанську армію (УПА), утворену 14 жовтня 1942 р.?",
        options: [
          "Тарас Бульба-Боровець",
          "Роман Шухевич",
          "Сидір Ковпак",
          "Левко Лук'яненко"
        ],
        correct: 1
      },
      {
        question: "Яка з перелічених подій відбулася у 1945 році?",
        options: [
          "Операція «Вісла»",
          "Приєднання Закарпаття до УРСР та вступ до ООН",
          "Масовий повоєнний голод",
          "«Самоліквідація» УГКЦ у Львові"
        ],
        correct: 1
      },
      {
        question: "Вихід у світ якої праці у 1970 р. став приводом для звинувачення П. Шелеста в «ідеалізації українського минулого»?",
        options: [
          "«Інтернаціоналізм чи русифікація?»",
          "«Україно наша Радянська»",
          "«Собор»",
          "«Правосуддя чи рецидиви терору?»"
        ],
        correct: 1
      },
      {
        question: "Яку головну мету ставила перед собою підпільна УРСС на чолі з Левком Лук'яненком?",
        options: [
          "Збройне повстання проти радянської влади",
          "Створення легальної опозиційної партії на виборах",
          "Мирний вихід УРСР зі складу СРСР конституційним шляхом",
          "Проведення ринкових економічних реформ"
        ],
        correct: 2
      },
      {
        question: "Який міжнародний документ був підписаний 5 грудня 1994 р. у зв'язку з відмовою України від ядерної зброї?",
        options: [
          "Угода про асоціацію з ЄС",
          "Будапештський меморандум",
          "Договір про вступ до Ради Європи",
          "Біловезька угода"
        ],
        correct: 1
      },
      {
        question: "Коли Верховна Рада ухвалила Конституцію незалежної України?",
        options: [
          "6 грудня 1991 р.",
          "28 червня 1996 р.",
          "8 грудня 2004 р.",
          "21 листопада 2013 р."
        ],
        correct: 1
      },
      {
        question: "Наслідком конституційної реформи від 8 грудня 2004 р. (під час Помаранчевої революції) став перехід України до:",
        options: [
          "Президентської республіки",
          "Парламентсько-президентської республіки",
          "Федеративного устрою",
          "Унітарної монархії"
        ],
        correct: 1
      },
      {
        question: "Яка подія стала безпосереднім поштовхом до початку Євромайдану 21 листопада 2013 р.?",
        options: [
          "Ухвалення «диктаторських законів»",
          "Відмова уряду від підписання Угоди про асоціацію з ЄС",
          "Конфлікт навколо острова Тузла",
          "Окупація Криму"
        ],
        correct: 1
      },
      {
        question: "Коли Україна отримала Томос про автокефалію Православної церкви України (ПЦУ)?",
        options: [
          "Червень 2014 р.",
          "Червень 2017 р.",
          "Січень 2019 р.",
          "Червень 2022 р."
        ],
        correct: 2
      },
      {
        question: "Хто з митців є режисером культового фільму українського поетичного кіно «Тіні забутих предків»?",
        options: [
          "Володимир Івасюк",
          "Сергій Параджанов",
          "Олександр Довженко",
          "Василь Стус"
        ],
        correct: 1
      },
      {
        question: "Коли розпочалося повномасштабне російське вторгнення в Україну?",
        options: [
          "20 лютого 2014 р.",
          "16 січня 2014 р.",
          "24 лютого 2022 р.",
          "28 червня 2022 р."
        ],
        correct: 2
      }
    ]
  },
  math: {
    title: "📐 Математика (11 клас): База формул та правил НМТ",
    slides: [
      {
        title: "Блок 1: Алгебра та вирази (ФСУ, степені, корені)",
        points: [
          "<strong>Квадрат суми/різниці:</strong> (a ± b)² = a² ± 2ab + b²; <strong>Різниця квадратів:</strong> a² − b² = (a − b)(a + b).",
          "<strong>Властивості степенів:</strong> aⁿ · aᵐ = aⁿ⁺ᵐ; aⁿ / aᵐ = aⁿ⁻ᵐ; (aⁿ)ᵐ = aⁿ·ᵐ; a⁻ⁿ = 1 / aⁿ (a ≠ 0).",
          "<strong>Арифметичний корінь:</strong> √(a²) = |a| (модуль обов'язковий, якщо знак числа невідомий!).",
          "<strong>Квадратне рівняння ax² + bx + c = 0:</strong> D = b² − 4ac; за теоремою Вієта (при a = 1): x₁ + x₂ = −b, x₁ · x₂ = c."
        ]
      },
      {
        title: "Блок 2: Показникові та логарифмічні функції",
        points: [
          "<strong>Означення логарифма:</strong> logₐ(b) = c ⇔ aᶜ = b (ОДЗ: a > 0, a ≠ 1, b > 0).",
          "<strong>Основна тотожність:</strong> a^(logₐ b) = b; logₐ(1) = 0; logₐ(a) = 1.",
          "<strong>Властивості:</strong> logₐ(x · y) = logₐ x + logₐ y; logₐ(x / y) = logₐ x − logₐ y; logₐ(xᵏ) = k · logₐ x.",
          "<strong>Нерівності:</strong> якщо основа a > 1 — знак нерівності зберігається; якщо 0 < a < 1 — знак змінюється на протилежний."
        ]
      },
      {
        title: "Блок 3: Тригонометрія (головні формули довідника)",
        points: [
          "<strong>Основна тригонометрична тотожність:</strong> sin²α + cos²α = 1; tg α = sin α / cos α.",
          "<strong>Подвійний кут:</strong> sin 2α = 2 sin α · cos α; cos 2α = cos²α − sin²α.",
          "<strong>Значення для 30°, 45°, 60°:</strong> sin 30° = 1/2, sin 45° = √2/2, sin 60° = √3/2; cos 30° = √3/2, cos 45° = √2/2, cos 60° = 1/2.",
          "<strong>Парність:</strong> cos(−α) = cos α (парна); sin(−α) = −sin α, tg(−α) = −tg α (непарні)."
        ]
      },
      {
        title: "Блок 4: Похідна, первісна та прогресії",
        points: [
          "<strong>Таблиця похідних:</strong> (C)' = 0; (xⁿ)' = n·xⁿ⁻¹; (eˣ)' = eˣ; (ln x)' = 1/x; (sin x)' = cos x; (cos x)' = −sin x.",
          "<strong>Геометричний зміст похідної:</strong> f'(x₀) = k = tg α (кутовий коефіцієнт дотичної в точці x₀).",
          "<strong>Арифметична прогресія:</strong> aₙ = a₁ + d(n − 1); Sₙ = ((a₁ + aₙ) / 2) · n.",
          "<strong>Геометрична прогресія:</strong> bₙ = b₁ · qⁿ⁻¹; Sₙ = b₁(qⁿ − 1) / (q − 1) (при q ≠ 1)."
        ]
      },
      {
        title: "Блок 5: Планіметрія (трикутники та кола)",
        points: [
          "<strong>Теорема Піфагора:</strong> c² = a² + b² (для прямокутного трикутника).",
          "<strong>Площа трикутника:</strong> S = ½ · a · hₐ або S = ½ · a · b · sin γ.",
          "<strong>Теорема синусів:</strong> a / sin α = b / sin β = c / sin γ = 2R.",
          "<strong>Теорема косинусів:</strong> c² = a² + b² − 2ab · cos γ."
        ]
      },
      {
        title: "Блок 6: Стереометрія (об'єми та площі поверхонь)",
        points: [
          "<strong>Призма та циліндр:</strong> V = S_осн · H; для циліндра V = πR²H, S_біч = 2πRH.",
          "<strong>Піраміда та конус:</strong> V = ⅓ · S_осн · H; для конуса V = ⅓ · πR²H, S_біч = πRl.",
          "<strong>Куля та сфера:</strong> об'єм кулі V = ⁴⁄₃ · πR³; площа сфери S = 4πR².",
          "<strong>Теорема про три перпендикуляри:</strong> пряма на площині перпендикулярна до похилої ⇔ вона перпендикулярна до її проєкції."
        ]
      }
    ],
    quiz: [
      {
        question: "Обчисліть значення виразу: log₂(16) + log₃(1/9)",
        options: [
          "2",
          "6",
          "−2",
          "4"
        ],
        correct: 0
      },
      {
        question: "Чому дорівнює похідна функції f(x) = 3x⁴ − 5x + 7?",
        options: [
          "12x³ − 5",
          "12x³ − 5x + 7",
          "3x³ − 5",
          "12x⁴ − 5"
        ],
        correct: 0
      },
      {
        question: "У прямокутному трикутнику катети дорівнюють 6 см і 8 см. Знайдіть радіус описаного навколо нього кола.",
        options: [
          "5 см",
          "10 см",
          "4 см",
          "7 см"
        ],
        correct: 0
      },
      {
        question: "Розв'яжіть показникову нерівність: (0,5)ˣ > (0,5)³",
        options: [
          "x < 3",
          "x > 3",
          "x > −3",
          "x < −3"
        ],
        correct: 0
      },
      {
        question: "Радіус основи циліндра дорівнює 3 см, а його висота — 5 см. Знайдіть об'єм циліндра.",
        options: [
          "45π см³",
          "15π см³",
          "30π см³",
          "75π см³"
        ],
        correct: 0
      },
      {
        question: "Спростіть вираз: 1 − sin²α",
        options: [
          "cos²α",
          "−cos²α",
          "tg²α",
          "sin 2α"
        ],
        correct: 0
      },
      {
        question: "Знайдіть корінь рівняння: √(x + 4) = 3",
        options: [
          "x = 5",
          "x = −1",
          "x = 13",
          "x = 2"
        ],
        correct: 0
      },
      {
        question: "Знайдіть п'ятий член арифметичної прогресії (aₙ), якщо a₁ = 4, а різниця d = 3.",
        options: [
          "16",
          "19",
          "15",
          "12"
        ],
        correct: 0
      },
      {
        question: "Кутовий коефіцієнт дотичної, проведеної до графіка функції y = f(x) у точці x₀ = 2, дорівнює 4. Чому дорівнює f'(2)?",
        options: [
          "4",
          "2",
          "8",
          "0,5"
        ],
        correct: 0
      },
      {
        question: "Об'єм кулі дорівнює 36π см³. Знайдіть радіус цієї кулі.",
        options: [
          "3 см",
          "6 см",
          "9 см",
          "2 см"
        ],
        correct: 0
      }
    ]
  },
 english: {
    title: "🇬🇧 Англійська мова (11 клас): Граматика та лексика НМТ",
    slides: [
      {
        title: "Блок 1: Основні часи (Tenses: Simple, Continuous, Perfect)",
        points: [
          "<strong>Present Simple vs Continuous:</strong> регулярна дія (<em>usually, always</em> — V / V+s) проти дії прямо зараз (<em>now, at the moment</em> — am/is/are + V-ing).",
          "<strong>Past Simple vs Present Perfect:</strong> чіткий час у минулому (<em>yesterday, in 2020</em> — V₂ / V-ed) проти результату в теперішньому без вказівки точного часу (<em>already, just, yet, ever, since, for</em> — have/has + V₃).",
          "<strong>Past Continuous:</strong> тривала дія в певний момент у минулому (<em>was/were + V-ing</em>), часто перебита дією в Past Simple (<em>when I came</em>).",
          "<strong>State Verbs (дієслова стану):</strong> <em>know, believe, love, hate, want, understand, belong</em> зазвичай НЕ вживаються у Continuous."
        ]
      },
      {
        title: "Блок 2: Умовні речення (Conditionals: 0, 1, 2, 3)",
        points: [
          "<strong>Zero Conditional (факти, закони природи):</strong> If + Present Simple, Present Simple (<em>If you heat ice, it melts</em>).",
          "<strong>First Conditional (реальна умова в майбутньому):</strong> If + Present Simple, will + V₁ (<em>If it rains, we will stay at home</em>). Після <em>if / when</em> майбутній час <em>will</em> не ставимо!",
          "<strong>Second Conditional (нереальна уява зараз):</strong> If + Past Simple (were), would + V₁ (<em>If I were you, I would study harder</em>).",
          "<strong>Third Conditional (жаль про минуле):</strong> If + Past Perfect (had + V₃), would have + V₃ (<em>If I had known, I would have helped</em>)."
        ]
      },
      {
        title: "Блок 3: Пасивний стан (Passive Voice) та Узгодження",
        points: [
          "<strong>Формула Passive:</strong> дієслово <strong>to be</strong> у потрібному часі + <strong>V₃ (Past Participle)</strong>.",
          "<strong>Present / Past Simple Passive:</strong> <em>am/is/are + V₃</em> (The room is cleaned daily); <em>was/were + V₃</em> (The book was written in 1996).",
          "<strong>Present Perfect / Future Passive:</strong> <em>have/has been + V₃</em>; <em>will be + V₃</em>.",
          "<strong>by vs with:</strong> виконавець дії — <strong>by</strong> (<em>written by Shevchenko</em>), інструмент або матеріал — <strong>with</strong> (<em>cut with a knife</em>)."
        ]
      },
      {
        title: "Блок 4: Герундій (V-ing) та Інфінітив (to V)",
        points: [
          "<strong>Лише Gerund (V-ing) після:</strong> <em>enjoy, avoid, mind, suggest, finish, keep, give up, look forward to, be used to</em>.",
          "<strong>Лише Infinitive (to + V) після:</strong> <em>decide, promise, refuse, hope, afford, manage, agree, seem, would like</em>.",
          "<strong>Зміна значення:</strong> <em>stop smoking</em> (кинути курити) vs <em>stop to smoke</em> (зупинитися, щоб покурити).",
          "<strong>Прийменники + V-ing:</strong> після будь-якого прийменника (<em>in, on, at, for, without, after</em>) дієслово завжди має закінчення <strong>-ing</strong>."
        ]
      },
      {
        title: "Блок 5: Модальні дієслова та ступені порівняння",
        points: [
          "<strong>Обов'язок і заборона:</strong> <em>must</em> (внутрішній обов'язок), <em>have to</em> (вимушеність), <em>mustn't</em> (сувора заборона) vs <em>don't have to</em> (немає потреби).",
          "<strong>Порада та ймовірність:</strong> <em>should / ought to</em> (слід), <em>might / may / could</em> (можливо).",
          "<strong>Прикметники:</strong> 1–2 склади: <em>tall → taller → the tallest</em>; довгі: <em>interesting → more interesting → the most interesting</em>.",
          "<strong>Винятки:</strong> <em>good → better → the best</em>; <em>bad → worse → the worst</em>; <em>far → farther/further → the farthest/furthest</em>."
        ]
      },
      {
        title: "Блок 6: Топ конструкцій для Use of English на НМТ",
        points: [
          "<strong>used to + V:</strong> звичка в минулому, якої вже немає (<em>I used to play football</em>) vs <strong>be/get used to + V-ing</strong> (звикнути до чогось).",
          "<strong>Neither ... nor / Either ... or:</strong> <em>neither ... nor</em> (ні ... ні), <em>either ... or</em> (або ... або).",
          "<strong>Countable vs Uncountable:</strong> <em>many / few / a few</em> (злічувані) vs <em>much / little / a little</em> (незлічувані: <em>money, advice, news, information, luggage</em> — завжди в однині!).",
          "<strong>Relative Pronouns:</strong> <em>who</em> (люди), <em>which</em> (речі/тварини), <em>whose</em> (чий), <em>where</em> (місце)."
        ]
      }
    ],
    quiz: [
      {
        question: "If she _____ harder last year, she would have passed the exam with a higher score.",
        options: [
          "had studied",
          "studied",
          "would study",
          "has studied"
        ],
        correct: 0
      },
      {
        question: "I look forward to _____ from you as soon as possible.",
        options: [
          "hearing",
          "hear",
          "to hear",
          "heard"
        ],
        correct: 0
      },
      {
        question: "The new bridge _____ by the end of next month.",
        options: [
          "will be built",
          "will build",
          "is building",
          "was built"
        ],
        correct: 0
      },
      {
        question: "By the time we arrived at the station, the train _____.",
        options: [
          "had already left",
          "already left",
          "has already left",
          "was already leaving"
        ],
        correct: 0
      },
      {
        question: "You _____ wear a uniform at this school — casual clothes are completely allowed.",
        options: [
          "don't have to",
          "mustn't",
          "can't",
          "shouldn't"
        ],
        correct: 0
      },
      {
        question: "If I _____ you, I wouldn't waste time on social media before NMT.",
        options: [
          "were",
          "am",
          "will be",
          "had been"
        ],
        correct: 0
      },
      {
        question: "My teacher gave me _____ really useful advice about essay writing.",
        options: [
          "some",
          "an",
          "many",
          "a few"
        ],
        correct: 0
      },
      {
        question: "We _____ in Kyiv since 2018, and we really love this city.",
        options: [
          "have lived",
          "lived",
          "are living",
          "had lived"
        ],
        correct: 0
      },
      {
        question: "He stopped _____ a bottle of water because he was very thirsty after running.",
        options: [
          "to buy",
          "buying",
          "buy",
          "bought"
        ],
        correct: 0
      },
      {
        question: "This is the village _____ my grandparents were born.",
        options: [
          "where",
          "which",
          "who",
          "whose"
        ],
        correct: 0
      }
    ]
  }
};

// Стан застосунку
let currentSubject = "history";
let currentTab = "notes";
let activeQuiz = []; // Перемішаний масив питань для поточної спроби
let mistakes = [];   // Масив помилок за поточний тест
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

const workspace = document.getElementById("workspace");
const completedCountEl = document.getElementById("completed-count");

// Функція випадкового перемішування масиву (алгоритм Фішера — Єйтса)
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Підготовка нового тесту з перемішаними питаннями та варіантами відповідей
function prepareShuffledQuiz() {
  const rawQuestions = subjectsData[currentSubject].quiz;
  activeQuiz = shuffleArray(rawQuestions).map(q => {
    const correctText = q.options[q.correct];
    const shuffledOptions = shuffleArray(q.options);
    return {
      question: q.question,
      options: shuffledOptions,
      correct: shuffledOptions.indexOf(correctText)
    };
  });
}

// Завантаження прогресу з localStorage
function loadProgress() {
  const savedCount = localStorage.getItem("nmt_completed_tests") || 0;
  completedCountEl.innerText = savedCount;
}

// Перемикання предметів
document.querySelectorAll(".subject-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".subject-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentSubject = btn.dataset.subject;
    currentTab = "notes";
    renderWorkspace();
  });
});

// Малювання робочої зони
function renderWorkspace() {
  const data = subjectsData[currentSubject];

  let html = `
    <h2 style="margin-bottom: 16px;">${data.title}</h2>
    <div class="tabs">
      <button class="${currentTab === 'notes' ? 'active' : ''}" onclick="switchTab('notes')">📖 Конспект (${data.slides.length} блоків)</button>
      <button class="${currentTab === 'quiz' ? 'active' : ''}" onclick="switchTab('quiz')">🎯 Тренажер тестів НМТ (${data.quiz.length})</button>
    </div>
  `;

  if (currentTab === "notes") {
    html += `<div class="slides-grid">`;
    data.slides.forEach(slide => {
      html += `
        <div class="slide-card">
          <h4>${slide.title}</h4>
          <ul>
            ${slide.points.map(p => `<li>${p}</li>`).join("")}
          </ul>
        </div>
      `;
    });
    html += `</div>`;
  } else {
    html += renderQuiz();
  }

  workspace.innerHTML = html;
}

function switchTab(tab) {
  currentTab = tab;
  currentQuestionIndex = 0;
  score = 0;
  mistakes = [];
  answered = false;
  if (tab === "quiz") {
    prepareShuffledQuiz();
  }
  renderWorkspace();
}

// Логіка тестування
function renderQuiz() {
  if (activeQuiz.length === 0) {
    return `<div class="quiz-box"><p>Тести для цього предмета ще готуються. Поки що спробуй розділ «Історія України»!</p></div>`;
  }

  // Екран завершення + робота над помилками
  if (currentQuestionIndex >= activeQuiz.length) {
    let mistakesHtml = "";
    if (mistakes.length > 0) {
      mistakesHtml = `
        <div style="text-align: left; margin-top: 24px; border-top: 1px solid var(--border); padding-top: 20px;">
          <h4 style="color: #fca5a5; margin-bottom: 14px;">📌 Робота над помилками (${mistakes.length}):</h4>
          ${mistakes.map((m, i) => `
            <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid var(--border); border-radius: 10px; padding: 14px; margin-bottom: 12px;">
              <div style="font-weight: 600; margin-bottom: 8px;">${i + 1}. ${m.question}</div>
              <div style="color: #fca5a5; font-size: 14px;">✖ Твоя відповідь: ${m.userAnswer}</div>
              <div style="color: #86efac; font-size: 14px; margin-top: 4px;">✔ Правильно: ${m.correctAnswer}</div>
            </div>
          `).join("")}
        </div>
      `;
    } else {
      mistakesHtml = `<p style="color: #86efac; margin-bottom: 16px;">Ідеально! Жодної помилки! 🔥</p>`;
    }

    return `
      <div class="quiz-box" style="text-align: center;">
        <h3>Тест завершено! 🎉</h3>
        <p style="font-size: 20px; margin: 12px 0;">Твій результат: <strong>${score} з ${activeQuiz.length}</strong></p>
        ${mistakesHtml}
        <button class="active" style="margin-top: 10px;" onclick="switchTab('quiz')">Пройти ще раз (нові позиції відповідей)</button>
      </div>
    `;
  }

  const q = activeQuiz[currentQuestionIndex];
  return `
    <div class="quiz-box">
      <div style="color: var(--muted); font-size: 14px; margin-bottom: 8px;">
        Питання ${currentQuestionIndex + 1} з ${activeQuiz.length}
      </div>
      <div class="quiz-question">${q.question}</div>
      <div class="options-list">
        ${q.options.map((opt, idx) => `
          <button class="option-btn" onclick="checkAnswer(${idx}, this)">${opt}</button>
        `).join("")}
      </div>
      <div class="quiz-footer">
        <span>Поточні бали: <strong>${score}</strong></span>
        <button id="next-btn" style="display: none;" class="active" onclick="nextQuestion()">Наступне питання →</button>
      </div>
    </div>
  `;
}

function checkAnswer(selectedIndex, btnElement) {
  if (answered) return;
  answered = true;

  const q = activeQuiz[currentQuestionIndex];
  const allButtons = document.querySelectorAll(".option-btn");

  if (selectedIndex === q.correct) {
    btnElement.classList.add("correct");
    score++;
  } else {
    btnElement.classList.add("wrong");
    allButtons[q.correct].classList.add("correct");
    // Записуємо помилку для фінального розбору
    mistakes.push({
      question: q.question,
      userAnswer: q.options[selectedIndex],
      correctAnswer: q.options[q.correct]
    });
  }

  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestionIndex++;
  answered = false;

  if (currentQuestionIndex >= activeQuiz.length) {
    const prev = parseInt(localStorage.getItem("nmt_completed_tests") || 0);
    localStorage.setItem("nmt_completed_tests", prev + 1);
    loadProgress();
  }

  renderWorkspace();
}

// Старт сторінки
loadProgress();
renderWorkspace();