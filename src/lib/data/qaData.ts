import type { QACard } from '#lib/types';

export const qaCards: QACard[] = [
	// ==========================================
	// MANUAL QA (M)
	// ==========================================
	{
		id: 'what-is-testing',
		category: 'manual',
		section: 'Основи тестування',
		title: 'Що таке тестування?',
		subtitle: 'Тестування програмного забезпечення (ПЗ)',
		summary:
			'Тестування — це процес перевірки програмного забезпечення з метою валідації відповідності вимогам (реальна та очікувана поведінка програми) та виявлення дефектів.',
		tags: ['Базове', 'ISTQB', 'Manual QA'],
		points: [
			'Техніка контролю якості (Quality Control).',
			'Включає активності: планування робіт (Test Management), проектування тестів (Test Design), виконання тестів (Test Execution) та аналіз отриманих результатів (Test Analysis).',
			'Основна мета: не лише знайти баги, а надати зацікавленим сторонам достовірну інформацію про поточний стан та якість продукту.'
		],
		interviewTip:
			'На питанні «Чи можна протестувати програму на 100%?» завжди відповідайте: «Ні, через принцип вичерпного тестування (Exhaustive Testing) тестувати абсолютно все неможливо й економічно невигідно».'
	},
	{
		id: 'software-quality',
		category: 'manual',
		section: 'Основи тестування',
		title: 'Software Quality | Якість ПЗ',
		subtitle: 'Quality Management & Quality Assurance',
		summary:
			'Якість програмного забезпечення — це сукупність характеристик ПЗ, що визначають його здатність задовольняти встановлені або передбачувані потреби користувача та бізнесу.',
		tags: ['QA vs QC', 'Теорія', 'Якість'],
		points: [
			'QA (Quality Assurance) — превентивний процес, орієнтований на процес розробки та запобігання появі помилок.',
			'QC (Quality Control) — орієнтований на продукт процес перевірки та виявлення дефектів у готовому коді.',
			'Testing — безпосередній інструмент та діяльність у рамках QC.'
		],
		interviewTip:
			'Часте питання: «Різниця між QA, QC та Testing». Пам’ятайте: QA створює правильний процес, QC перевіряє продукт, Testing — виконує перевірки.'
	},
	{
		id: 'testing-goals',
		category: 'manual',
		section: 'Основи тестування',
		title: 'Testing goals | Цілі тестування',
		subtitle: 'Навіщо ми тестуємо продукт?',
		summary:
			'Головна мета тестування — мінімізувати ризики випуску неякісного ПЗ, підвищити впевненість у відповідності вимогам та надати актуальні дані про якість продукту.',
		tags: ['Цілі', 'Основи', 'Ризики'],
		points: [
			'Підвищити ймовірність того, що програма буде коректно працювати за будь-яких обставин (позитивні й негативні сценарії).',
			'Підтвердити відповідність реалізації всім задокументованим бізнес- та функціональним вимогам.',
			'Надати актуальну та об’єктивну інформацію про стан продукту на даний момент розробки.',
			'Знизити фінансові та репутаційні ризики компанії завдяки ранньому знаходженню багів.'
		],
		interviewTip:
			'Підкресліть, що дешевше знайти дефект на етапі вимог або розробки, ніж після релізу на продакшені.'
	},
	{
		id: 'testing-stages',
		category: 'manual',
		section: 'Основи тестування',
		title: 'Testing stages | Етапи тестування',
		subtitle: '8 послідовних кроків процесу тестування',
		summary:
			'Тестування — це системний процес, який починається з аналізу вимог задовго до появи першого робочого білда.',
		tags: ['Етапи', 'SDLC', 'Процеси'],
		concepts: [
			{ title: '1. Product analysis', desc: 'Глибокий аналіз предметної області та продукту.' },
			{ title: '2. Working with Requirements', desc: 'Аналіз вимог на повноту, несуперечливість, однозначність та тестованість.' },
			{ title: '3. Strategy & Planning', desc: 'Розробка тестової стратегії та планування процедур контролю якості.' },
			{ title: '4. Test Documentation', desc: 'Створення чек-листів, тест-кейсів, матриць трасування (RTM).' },
			{ title: '5. Prototype testing', desc: 'Тестування прототипів, ранніх концепцій та UI/UX макетів.' },
			{ title: '6. Basic testing', desc: 'Основний раунд виконання тест-кейсів (димове, функціональне, інтеграційне).' },
			{ title: '7. Stabilization', desc: 'Регресійне тестування, ре-тести, підтвердження виправлених багів перед релізом.' },
			{ title: '8. Exploitation', desc: 'Підтримка у продакшені, пост-релізні перевірки, аналіз відгуків користувачів.' }
		]
	},
	{
		id: 'stlc',
		category: 'manual',
		section: 'Основи тестування',
		title: 'Життєвий цикл тестування (STLC)',
		subtitle: 'Software Testing Life Cycle',
		summary:
			'Послідовність чітко визначених етапів, спрямованих на забезпечення якості ПЗ. STLC починається з планування тестування та завершується аналізом і закриттям тестування.',
		tags: ['STLC', 'Scrum', 'Менеджмент'],
		points: [
			'Може бути адаптований до моделей водоспаду (Waterfall) або гнучких моделей (Scrum, Kanban).',
			'В Agile-підходах STLC є ітеративним та інкрементальним: тестування йде паралельно з розробкою в кожному спринті.'
		],
		concepts: [
			{ title: 'Планування тестування', desc: 'Визначення цілей, обсягу робіт, критеріїв початку/завершення, оцінка ризиків та ресурсів.' },
			{ title: 'Аналіз вимог', desc: 'Оцінка специфікації вимог, виявлення прогалин, створення переліку об’єктів тестування.' },
			{ title: 'Дизайн тестів (Test Design)', desc: 'Розробка сценаріїв перевірки, тестових наборів, підготовка тестових даних.' },
			{ title: 'Виконання тестів (Execution)', desc: 'Запуск тестів, документування результатів, заведення баг-репортів.' },
			{ title: 'Аналіз результатів', desc: 'Аналіз знайдених дефектів, класифікація за критичністю, відстеження статусів.' },
			{ title: 'Закриття тестування (Test Closure)', desc: 'Підготовка фінального звіту (Test Summary Report), аналіз метрик і уроків спринта.' }
		],
		interviewTip:
			'Вас запитають: «Чим STLC відрізняється від SDLC?». STLC — це підмножина SDLC, що фокусується суто на активностях тестування якості.'
	},
	{
		id: 'test-plan',
		category: 'manual',
		section: 'Основи тестування',
		title: 'Test Plan | Тест-план',
		subtitle: 'Ключовий документ планування тестування',
		summary:
			'Документ, що описує весь обсяг робіт з тестування: об’єкти тестування, стратегію, ресурси, розклад, критерії початку/закінчення та оцінку ризиків з планом їх мінімізації.',
		tags: ['Документація', 'Test Plan', 'IEEE 829'],
		points: [
			'Дає відповіді на 6 ключових питань: Що потрібно тестувати? Що (по факту) будемо тестувати? Як будемо тестувати? Коли будемо тестувати? Критерії початку? Критерії закінчення?'
		],
		concepts: [
			{ title: 'Критерії початку (Entry Criteria)', desc: 'Умови, за яких починається тестування (наприклад, білд розгорнуто, димовий тест пройдено, документація готова).' },
			{ title: 'Критерії закінчення (Exit Criteria)', desc: 'Умови завершення тестування (наприклад, 100% тестів виконано, 0 блокуючих або критичних багів, тест-покриття досягнуто).' }
		]
	},
	{
		id: 'test-plan-ieee829',
		category: 'manual',
		section: 'Основи тестування',
		title: 'Основні пункти тест-плану (IEEE 829)',
		subtitle: '16 обов’язкових пунктів стандарту IEEE 829',
		summary:
			'Міжнародний стандарт IEEE 829 визначає структуру професійного тест-плану для забезпечення прозорості та якості проєкту.',
		tags: ['Стандарти', 'IEEE 829', 'Тест-план'],
		concepts: [
			{ title: 'A. Test plan identifier', desc: 'Унікальний ідентифікатор документу та версія.' },
			{ title: 'B. Introduction', desc: 'Вступ, цілі та огляд проекту.' },
			{ title: 'C. Test items', desc: 'Тестові об’єкти (модулі, компоненти, релізи).' },
			{ title: 'D. Features to be tested', desc: 'Функціонал та характеристики, що підлягають перевірці (In Scope).' },
			{ title: 'E. Features not to be tested', desc: 'Функції, які НЕ підлягають тестуванню (Out of Scope).' },
			{ title: 'F. Approach', desc: 'Загальний підхід, методологія та рівні тестування.' },
			{ title: 'G. Item pass/fail criteria', desc: 'Критерії проходження/непроходження для кожного пункту.' },
			{ title: 'H. Suspension & resumption', desc: 'Критерії призупинення робіт та вимоги до відновлення.' },
			{ title: 'I. Test deliverables', desc: 'Артефакти тестування (тест-кейси, баг-репорти, звіт про тестування).' },
			{ title: 'J. Testing tasks', desc: 'Завдання та задачі для команди.' },
			{ title: 'K. Environmental needs', desc: 'Вимоги до оточення (сервери, залізо, ОС, браузери, ліцензії).' },
			{ title: 'L. Responsibilities', desc: 'Матриця відповідальності ролей у команді.' },
			{ title: 'M. Staffing & training', desc: 'Потреби в кадрах та навчанні персоналу.' },
			{ title: 'N. Schedule', desc: 'Календарний графік та дедлайни етапів.' },
			{ title: 'O. Risks & contingencies', desc: 'Ризики та плани непередбачених обставин.' },
			{ title: 'P. Approvals', desc: 'Схвалення та підписи відповідальних осіб.' }
		]
	},
	{
		id: 'test-design',
		category: 'manual',
		section: 'Основи тестування',
		title: 'Тест-дизайн',
		subtitle: 'Проектування та створення перевірок',
		summary:
			'Етап процесу тестування, на якому проектуються та створюються тестові сценарії (тест-кейси) відповідно до встановлених критеріїв якості та цілей тестування.',
		tags: ['Тест-дизайн', 'Ролі', 'Проектування'],
		concepts: [
			{
				title: 'Тест-аналітик (Test Analyst)',
				desc: 'Визначає «ЩО тестувати?» — аналізує вимоги, формує тестові умови та покриття.'
			},
			{
				title: 'Тест-дизайнер (Test Designer)',
				desc: 'Визначає «ЯК тестувати?» — формує конкретні кроки, вхідні дані та очікувані результати.'
			}
		]
	},
	{
		id: 'test-types',
		category: 'manual',
		section: 'Види та техніки',
		title: 'Test Types | Типи (види) тестування',
		subtitle: 'Функціональне, нефункціональне та пов’язане зі змінами',
		summary:
			'Класифікація тестування за цілями: функціональні перевірки, нефункціональні характеристики системи та валідація змін у коді.',
		tags: ['Види тестування', 'Класифікація', 'ISTQB'],
		concepts: [
			{
				title: 'Функціональне тестування (Functional Testing)',
				desc: 'Перевірка відповідності функцій системи вимогам і специфікаціям (Black-box підхід).'
			},
			{
				title: 'GUI Testing (Інтерфейс користувача)',
				desc: 'Перевірка коректності та зручності елементів інтерфейсу: вікон, кнопок, форм, полів вводу, іконок.'
			},
			{
				title: 'Security & Access Control',
				desc: 'Перевірка захисту даних від несанкціонованого доступу, валідація ролей і дозволів.'
			},
			{
				title: 'Interoperability Testing (Сумісність взаємодії)',
				desc: 'Здатність взаємодіяти з іншими системами через протоколи та API.'
			},
			{
				title: 'Нефункціональне тестування (Non-functional)',
				desc: 'Performance (швидкість), Load (навантаження), Stress (межі відмови), Volume (великі обсяги даних), Reliability (MTBF, MTTR), Usability (зручність), Compatibility (кросбраузерність/ОС).'
			},
			{
				title: 'Тестування змін (Change-related)',
				desc: 'Smoke (критичний функціонал), Regression (чи не зламалися старі функції), Re-testing (перевірка фіксу бага), Sanity (швидка перевірка після змін у конкретному модулі).'
			}
		],
		interviewTip:
			'Smoke vs Sanity: Smoke перевіряє базову працездатність ВСЬОГО білда (готовність до тестування), а Sanity — конкретну функцію чи виправлення після нових змін.'
	},
	{
		id: 'verification-validation',
		category: 'manual',
		section: 'Види та техніки',
		title: 'Верифікація / Валідація (V&V)',
		subtitle: 'Verification vs Validation',
		summary:
			'Дві фундаментальні концепції забезпечення якості з різним вектором перевірки.',
		tags: ['V&V', 'IEEE', 'Концепції'],
		concepts: [
			{
				title: 'Verification (Верифікація)',
				desc: '«Are we building the product right?» Оцінка продукту на відповідність явним специфікаціям та стандартам розробки. Виконується на всіх фазах без обов’язкового запуску коду (рев’ю коду, статичний аналіз вимог).'
			},
			{
				title: 'Validation (Валідація)',
				desc: '«Are we building the right product?» Оцінка відповідності ПЗ реальним очікуванням, бізнес-потребам та сценаріям кінцевих користувачів. Виконується на працюючому продукті.'
			}
		],
		interviewTip:
			'Пам’ятайте формулу: Верифікація = перевірка на відповідність ТЗ/вимогам; Валідація = перевірка на задоволення потреб клієнта.'
	},
	{
		id: 'test-design-techniques',
		category: 'manual',
		section: 'Види та техніки',
		title: 'Техніки тест-дизайну | Design Test Techniques',
		subtitle: 'Математичні та евристичні методи оптимізації перевірок',
		summary:
			'Методи вибору мінімальної кількості тест-кейсів, які забезпечують максимальне покриття та високу ймовірність виявлення дефектів.',
		tags: ['EP', 'BVA', 'Тест-дизайн', 'Практика'],
		concepts: [
			{
				title: 'Equivalence Partitioning (EP) — Еквівалентне розділення',
				desc: 'Розбиття діапазону вхідних даних на класи, де система поводиться однаково. Вибирається одне значення з кожного класу (валідного та невалідного). Приклад: поле віку 1-10 -> беремо 5 (валідний) та 0/15 (невалідні).'
			},
			{
				title: 'Boundary Value Analysis (BVA) — Аналіз граничних значень',
				desc: 'Перевірка меж класів еквівалентності (саме там виникає більшість помилок): мінімум, максимум, значення на 1 менше і на 1 більше. Для діапазону [1, 10]: тестуємо 0, 1, 2, 9, 10, 11.'
			},
			{
				title: 'Cause / Effect (CE) — Причина / Наслідок',
				desc: 'Аналіз логічних зв’язків між вхідними умовами (причинами) та вихідними діями системи (наслідками).'
			},
			{
				title: 'Error Guessing (EG) — Передбачення помилок',
				desc: 'Евристичний підхід, заснований на досвіді та інтуїції тестувальника щодо типових вразливих місць (порожні поля, спецсимволи, SQL-ін’єкції).'
			},
			{
				title: 'Pairwise Testing — Попарне тестування',
				desc: 'Комбінаторна техніка, де кожне значення кожного параметру тестується в парі з кожним значенням інших параметрів щонайменше один раз. Дозволяє протестувати складні системи без створення мільйонів комбінацій.'
			},
			{
				title: 'Exhaustive Testing (ET) — Вичерпне тестування',
				desc: 'Перевірка абсолютно всіх можливих комбінацій. На практиці неможливе через нескінченність станів.'
			}
		]
	},
	{
		id: 'severity-vs-priority',
		category: 'manual',
		section: 'Види та техніки',
		title: 'Severity vs Priority',
		subtitle: 'Серйозність та пріоритетність дефектів',
		summary:
			'Severity показує технічний вплив дефекту на роботу системи (виставляє QA). Priority визначає черговість його виправлення для бізнесу (визначає PM/PO/Lead).',
		tags: ['Баги', 'Метрики', 'Пріоритети'],
		concepts: [
			{
				title: 'Severity Градація (S1 - S5)',
				desc: 'S1 Blocker (повне падіння, подальша робота неможлива), S2 Critical (ключова бізнес-логіка зламана, обхідного шляху немає), S3 Major (важлива функція не працює, але є обхідний шлях), S4 Minor (незначні дефекти UI або другорядні поля), S5 Trivial (орфографічні помилки, косметичні дрібниці).'
			},
			{
				title: 'Priority Градація (P1 - P3)',
				desc: 'P1 High (виправити негайно, блокує бізнес чи реліз), P2 Medium (виправити у поточному спринті/релізі), P3 Low (виправити за наявності часу).'
			},
			{
				title: 'Класичні приклади на співбесіді',
				desc: 'High Severity / Low Priority: краш програми при рідкісному поєднанні старих версій ОС. Low Severity / High Priority: орфографічна помилка у назві компанії або логотипі на головній сторінці.'
			}
		]
	},
	{
		id: 'test-case-and-checklist',
		category: 'manual',
		section: 'Документація та дефекти',
		title: 'Test Case | Чек-лист',
		subtitle: 'Артефакти документування перевірок',
		summary:
			'Тест-кейс — формалізована послідовність кроків з чітко визначеним очікуваним результатом. Чек-лист — легкий перелік дій або функцій для перевірки без надлишкової деталізації.',
		tags: ['Тест-кейс', 'Чек-лист', 'Документація'],
		points: [
			'Тест-кейс обов’язково містить 3 ключові частини: PreConditions (передумови), Steps/Description (кроки перевірки) та PostConditions (повернення системи в початковий стан).',
			'Чек-лист ідеальний для Agile/Scrum через швидкість створення та гнучкість, тоді як тест-кейси необхідні для критичних систем (банківські системи, медицина) або для нових спеціалістів.'
		],
		codeSnippet: {
			language: 'markdown',
			code: `ID: TC-AUTH-01
Назва: Успішна авторизація з валідними даними
PreConditions: Користувач зареєстрований, сторінка /login відкрита
Кроки:
 1. Ввести email 'tester@example.com' у поле Email
 2. Ввести пароль 'SecurePass123!' у поле Password
 3. Натиснути кнопку 'Sign In'
Expected Result: Користувач успішно перенаправлений до Dashboard, відображається аватар
PostConditions: Вийти з акаунту (Logout)
Статус: Passed / Failed / Blocked`
		}
	},
	{
		id: 'bug-error-failure',
		category: 'manual',
		section: 'Документація та дефекти',
		title: 'Bug / Error / Failure',
		subtitle: 'Чітка різниця між термінами ISTQB',
		summary:
			'Помилка людини (Error) призводить до дефекту в коді (Bug), а той під час виконання спричиняє відмову системи (Failure).',
		tags: ['ISTQB', 'Дефекти', 'Терміни'],
		concepts: [
			{
				title: 'Error (Помилка / Human Error)',
				desc: 'Невірна дія людини (програміста, бізнес-аналітика, дизайнера чи користувача), що спричиняє неправильне рішення або некоректний ввід.'
			},
			{
				title: 'Bug / Defect (Дефект)',
				desc: 'Недолік або вада в коді, документації чи конфігурації, через який система не відповідає вимогам.'
			},
			{
				title: 'Failure (Збій / Відмова)',
				desc: 'Подія, коли система або компонент відхиляється від очікуваної роботи під час виконання (краш, зависання, білий екран).'
			}
		],
		interviewTip:
			'Ланцюжок виникнення: Developer makes an ERROR -> introducing a BUG/DEFECT into code -> causing a FAILURE during execution.'
	},
	{
		id: 'bug-report',
		category: 'manual',
		section: 'Документація та дефекти',
		title: 'Баг-репорт (Bug Report)',
		subtitle: 'Структура професійного звіту про дефект',
		summary:
			'Документ, що описує ситуацію та послідовність дій, які призвели до некоректної поведінки системи, з точним описом фактичного та очікуваного результатів.',
		tags: ['Jira', 'Баг-репорт', 'Шаблон'],
		concepts: [
			{ title: 'Summary (Заголовок)', desc: 'Формула: Що? Де? Коли? (Коротко, інформативно, однозначно).' },
			{ title: 'Project / Component', desc: 'Назва проєкту та конкретного модулю/сервісу.' },
			{ title: 'Version / Environment', desc: 'Версія білда, ОС, браузер + версія, дозвіл екрану, девайс.' },
			{ title: 'Severity & Priority', desc: 'Технічна критичність (S1-S5) та черговість виправлення (P1-P3).' },
			{ title: 'Steps to Reproduce', desc: 'Нумеровані мінімально достатні кроки для повторення помилки.' },
			{ title: 'Actual Result', desc: 'Що насправді сталося (фактична поведінка програми).' },
			{ title: 'Expected Result', desc: 'Як система повинна поводитися згідно з вимогами.' },
			{ title: 'Attachments', desc: 'Скріншоти з виділеними помилками, відеозапис, логи консолі, мережеві дампи (HAR).' }
		]
	},
	{
		id: 'levels-of-testing',
		category: 'manual',
		section: 'Рівні тестування',
		title: 'Рівні тестування (Levels of Testing)',
		subtitle: 'Піраміда тестування від ізольованого коду до користувача',
		summary:
			'Рівні визначають глибину та масштаб перевірки: від окремої функції до комплексної інтеграції всієї платформи.',
		tags: ['Unit', 'Integration', 'System', 'UAT'],
		concepts: [
			{
				title: '1. Модульне (Unit / Component)',
				desc: 'Перевірка окремих методів, функцій чи класів в ізоляції. Зазвичай пишуть розробники за допомогою NUnit, xUnit, Jest.'
			},
			{
				title: '2. Інтеграційне (Integration)',
				desc: 'Перевірка взаємодії між різними модулями, сервісами або базою даних/API (підходи: Top-down, Bottom-up, Big Bang).'
			},
			{
				title: '3. Системне (System Testing)',
				desc: 'Тестування повністю зібраної системи на відповідність усім функціональним та нефункціональним вимогам.'
			},
			{
				title: '4. Приймальне (Acceptance / UAT)',
				desc: 'Оцінка готовності системи клієнтом або стейкхолдерами. Включає Альфа-тестування (внутрішнє) та Бета-тестування (реальними користувачами).'
			}
		],
		interviewTip:
			'Згадайте піраміду тестування (Test Pyramid): більшість тестів має бути Unit, менше Integration і найменше UI/E2E, бо вони дорожчі та повільніші.'
	},

	// ==========================================
	// AUTOMATION QA (A)
	// ==========================================
	{
		id: 'design-principles',
		category: 'automation',
		section: 'Архітектура та принципи',
		title: 'Design Principles & Approaches',
		subtitle: 'Принципи проєктування автоматизованих тестів',
		summary:
			'Фундаментальні концепції, що керують створенням надійних та масштабованих фреймворків автоматизації тестування.',
		tags: ['C#', '.NET', 'Clean Code', 'Архітектура'],
		points: [
			'Модульність (Modularity) — розбиття тестів на незалежні компоненти для повторного використання.',
			'Повторюваність (Repeatability) — тести дають стабільний однаковий результат у будь-якому середовищі.',
			'Підтримуваність (Maintainability) — мінімальні зусилля при зміні коду інтерфейсу.',
			'DRY (Don’t Repeat Yourself), KISS (Keep It Simple, Stupid), YAGNI (You Aren’t Gonna Need It).'
		],
		concepts: [
			{ title: 'Data-Driven Testing (DDT)', desc: 'Відокремлення тестових даних (CSV, JSON, DB) від коду тесту для багаторазового прогону з різними наборами.' },
			{ title: 'Keyword-Driven Testing (KDT)', desc: 'Опис дій за допомогою ключових слів (Click, Type, Verify), зрозумілих нетехнічним спеціалістам.' },
			{ title: 'Behavior-Driven Development (BDD)', desc: 'Опис поведінки системи мовою Gherkin (Given-When-Then), наприклад SpecFlow / Reqnroll.' }
		]
	},
	{
		id: 'solid-principles',
		category: 'automation',
		section: 'Архітектура та принципи',
		title: 'SOLID Принципи для Automation Engineer',
		subtitle: '5 стовпів об’єктно-орієнтованого дизайну (.NET / C#)',
		summary:
			'Застосування принципів SOLID у тестових фреймворках запобігає крихкості тестів і забезпечує легке масштабування.',
		tags: ['SOLID', 'C#', '.NET', 'OOP', 'Middle QA'],
		concepts: [
			{
				title: 'S — Single Responsibility (SRP)',
				desc: 'Клас повинен мати лише одну причину для зміни. Приклад: окремо PageObject (структура сторінки), окремо TestDataLoader (завантаження даних), окремо ReportGenerator (звітність).'
			},
			{
				title: 'O — Open/Closed (OCP)',
				desc: 'Сутності відкриті для розширення, але закриті для модифікацій. Використання інтерфейсів (наприклад, IWebDriverFactory для створення Chrome, Firefox, Edge драйверів без зміни базового коду).'
			},
			{
				title: 'L — Liskov Substitution (LSP)',
				desc: 'Об’єкти підтипів повинні бути замінними на об’єкти базового типу без порушення коректності програми. Класичний приклад порушення — прямокутник і квадрат.'
			},
			{
				title: 'I — Interface Segregation (ISP)',
				desc: 'Клієнти не повинні залежати від інтерфейсів, які вони не використовують. Краще створити кілька вузьких інтерфейсів (наприклад, ICanClick, ICanType, ICanScroll), ніж один величезний «жирний» інтерфейс.'
			},
			{
				title: 'D — Dependency Inversion (DIP)',
				desc: 'Модулі вищого рівня не повинні залежати від модулів нижчого рівня; обидва залежать від абстракцій. Використання Dependency Injection (DI) контейнерів у тестовому фреймворку.'
			}
		],
		codeSnippet: {
			language: 'csharp',
			code: `// Приклад DIP в C# / .NET автоматизації:
public interface IDriverService {
    IWebDriver CreateDriver();
}

public class ChromeDriverService : IDriverService {
    public IWebDriver CreateDriver() => new ChromeDriver();
}

// Тест залежить від абстракції IDriverService, а не від конкретного ChromeDriver
public class BaseTest {
    protected readonly IDriverService _driverService;
    public BaseTest(IDriverService driverService) {
        _driverService = driverService;
    }
}`
		}
	},
	{
		id: 'refactoring',
		category: 'automation',
		section: 'Архітектура та принципи',
		title: 'Refactoring (Рефакторинг)',
		subtitle: 'Поліпшення внутрішньої структури коду тестів',
		summary:
			'Зміна внутрішньої структури програми без зміни її зовнішньої поведінки для покращення читабельності, зменшення технічного боргу та усунення дублювання.',
		tags: ['Code Quality', 'Refactoring', 'Clean Code'],
		points: [
			'Усунення code smells у тестах (жорстко закодовані очікування Thread.Sleep, дублювання селекторів, величезні тестові методи).',
			'Виділення загальних дій у хелпери та фікстури.',
			'Підвищення надійності тестів і зменшення кількості flaky (нестабільних) тестів.'
		],
		interviewTip:
			'Підкресліть: перед рефакторингом треба переконатися, що існуючі тести проходять успішно (green state), щоб не зламати логіку.'
	},
	{
		id: 'automation-framework',
		category: 'automation',
		section: 'Фреймворки та патерни',
		title: 'Test Automation Framework',
		subtitle: 'Архітектура тестового фреймворку',
		summary:
			'Набір стандартів, інструментів, бібліотек і практик, які надають єдину структуру для створення, запуску та аналізу автоматизованих тестів.',
		tags: ['Framework', 'Architecture', 'NUnit', 'Playwright'],
		concepts: [
			{ title: 'Тестові скрипти (Test Scripts)', desc: 'Набір тестів з асертами (NUnit, xUnit, MSTest).' },
			{ title: 'Тестові дані (Test Data)', desc: 'Керування параметрами (JSON, Faker, DB fixtures).' },
			{ title: 'Page Objects / UI Locators', desc: 'Ізоляція веб-елементів та методів взаємодії з ними.' },
			{ title: 'Звітність (Reporting & Logging)', desc: 'Інтеграція з Allure Reports, ExtentReports або консольними логами.' },
			{ title: 'CI/CD runner', desc: 'Можливість запуску в headless режимі у контейнерах Docker.' }
		],
		points: [
			'Популярні бібліотеки для .NET: Selenium WebDriver, Playwright for .NET, SpecFlow / Reqnroll, RestSharp, Bogus, FluentAssertions.'
		]
	},
	{
		id: 'platform-automation',
		category: 'automation',
		section: 'Фреймворки та патерни',
		title: 'Platform Specific Automation (.NET)',
		subtitle: 'Специфіка різних платформ: Web, API, Mobile, Desktop',
		summary:
			'Врахування нюансів .NET Framework та .NET Core/8/9 при тестуванні різних типів додатків.',
		tags: ['.NET', 'Web', 'API', 'Mobile', 'Desktop'],
		concepts: [
			{ title: 'Web Applications', desc: 'Selenium WebDriver, Playwright for .NET, Cypress.' },
			{ title: 'API Services', desc: 'RestSharp, HttpClient, Postman, Flurl.Http.' },
			{ title: 'Desktop Applications', desc: 'WinAppDriver, Microsoft UI Automation (UIA3), FlaUI.' },
			{ title: 'Mobile Testing', desc: 'Appium (кросплатформно для iOS та Android).' },
			{ title: 'Database Validation', desc: 'Entity Framework Core, Dapper для прямої валідації даних.' }
		],
		interviewTip:
			'Типові питання: «Чому Playwright стає популярнішим за Selenium?» (Вбудовані авто-очікування, швидкість через CDP протокол, перехоплення мережевих запитів).'
	},
	{
		id: 'automation-patterns',
		category: 'automation',
		section: 'Фреймворки та патерни',
		title: 'Test Automation Patterns',
		subtitle: 'Патерни проектування для автоматизації',
		summary:
			'Шаблони проектування, які вирішують типові проблеми дублювання, підтримки локаторів та синхронізації.',
		tags: ['Design Patterns', 'POM', 'Screenplay', 'Best Practices'],
		concepts: [
			{
				title: 'Page Object Model (POM)',
				desc: 'Розділення сторінки на класи. Клас містить локатори та бізнес-методи сторінки; тести викликають методи і не знають про селектори.'
			},
			{
				title: 'Page Factory / Component Object',
				desc: 'Композиція великих сторінок з менших повторюваних компонентів (Header, Footer, NavigationBar, Modal).'
			},
			{
				title: 'Screenplay Pattern',
				desc: 'Акторно-орієнтований патерн (Actors, Tasks, Actions, Questions) — чудова заміна POM для масштабних проектів.'
			},
			{
				title: 'Fluent Interface / Method Chaining',
				desc: 'Методи повертають посилання на поточний або наступний об’єкт: page.EnterLogin().EnterPass().ClickSubmit().'
			}
		],
		codeSnippet: {
			language: 'csharp',
			code: `// Патерн Page Object Model на C#
public class LoginPage {
    private readonly IWebDriver _driver;
    private readonly By _emailInput = By.Id("email");
    private readonly By _passwordInput = By.Id("password");
    private readonly By _submitBtn = By.CssSelector("button[type='submit']");

    public LoginPage(IWebDriver driver) => _driver = driver;

    public DashboardPage LoginAs(string email, string password) {
        _driver.FindElement(_emailInput).SendKeys(email);
        _driver.FindElement(_passwordInput).SendKeys(password);
        _driver.FindElement(_submitBtn).Click();
        return new DashboardPage(_driver);
    }
}`
		}
	},
	{
		id: 'test-infrastructure',
		category: 'automation',
		section: 'Інфраструктура та CI/CD',
		title: 'Test Automation Infrastructure',
		subtitle: 'Інфраструктура, середовища та хмари',
		summary:
			'Сукупність програмних та апаратних засобів, що забезпечують стабільне, ізольоване та паралельне виконання автоматизованих тестів.',
		tags: ['Docker', 'Grid', 'DevOps', 'Infrastructure'],
		concepts: [
			{ title: 'Тестові середовища (Test Envs)', desc: 'Ізоляція (Dev, QA, Staging), відтворюваність та налаштування конфігурацій.' },
			{ title: 'Контейнеризація', desc: 'Docker та Kubernetes — запуск браузерів у легких контейнерах без візуального інтерфейсу.' },
			{ title: 'Розподілені гріди (Selenium Grid / Selenoid / Moon)', desc: 'Паралельний запуск сотень тестів на кластері машин.' },
			{ title: 'Device Farms', desc: 'Хмарні ферми реальних пристроїв для мобільного тестування (BrowserStack, SauceLabs).' }
		]
	},
	{
		id: 'cicd-practices',
		category: 'automation',
		section: 'Інфраструктура та CI/CD',
		title: 'CI/CD Практики (.NET)',
		subtitle: 'Continuous Integration & Continuous Delivery / Deployment',
		summary:
			'Автоматизація збирання, тестування та доставки ПЗ. Тести — головні ворота якості (Quality Gates) у пайплайні.',
		tags: ['CI/CD', 'GitHub Actions', 'Azure DevOps', 'Pipelines'],
		concepts: [
			{
				title: 'Continuous Integration (CI)',
				desc: 'Часте злиття коду в головну гілку (декілька разів на день) з автоматичним запуском юніт- та смоук-тестів для швидкого виявлення конфліктів.'
			},
			{
				title: 'Continuous Delivery (CD)',
				desc: 'Автоматичне розгортання протестованого білда на тестові або staging-середовища з ручним підтвердженням релізу в прод.'
			},
			{
				title: 'Continuous Deployment (CD)',
				desc: 'Повна автоматизація доставки кожної перевіреної зміни напряму у продакшен без ручного втручання.'
			},
			{
				title: 'Ключові інструменти',
				desc: 'Azure DevOps Pipelines, GitHub Actions, GitLab CI/CD, Jenkins, Docker, SonarQube.'
			}
		],
		interviewTip:
			'Наголосіть, що падіння тестів у CI повинно негайно зупиняти пайплайн і блокувати розгортання неякісного коду.'
	},
	{
		id: 'git-vcs',
		category: 'automation',
		section: 'Інфраструктура та CI/CD',
		title: 'Version Control Systems | Git',
		subtitle: 'Швидкий та гнучкий розподілений контроль версій',
		summary:
			'Розподілена система контролю версій для відстеження змін у коді, співпраці та управління гілками в тестовому проєкті.',
		tags: ['Git', 'VCS', 'Команди', 'Workflow'],
		concepts: [
			{ title: 'git init / clone', desc: 'Ініціалізація нового або клонування віддаленого репозиторію.' },
			{ title: 'git add & commit -m', desc: 'Індексація файлів та фіксація змін у локальному репозиторії.' },
			{ title: 'git status & diff', desc: 'Перегляд змінених файлів та конкретних рядків коду.' },
			{ title: 'git branch & checkout -b', desc: 'Створення нової гілки (наприклад, feature/cart-tests).' },
			{ title: 'git push & pull', desc: 'Відправка локальних комітів на сервер та отримання оновлень з віддаленого репозиторію.' },
			{ title: 'git merge & rebase', desc: 'Злиття змін між гілками або перебазування комітів поверх поточної гілки.' },
			{ title: 'git stash & pop', desc: 'Тимчасове збереження незавершених змін без коміту.' },
			{ title: 'git reset --hard', desc: 'Відкат змін до зазначеного коміту (обережно: видаляє зміни).' }
		],
		codeSnippet: {
			language: 'bash',
			code: `# Типовий Git Workflow автоматизатора:
git checkout main
git pull origin main
git checkout -b feature/login-page-tests
# ... внесення змін у тести ...
git add .
git commit -m "feat(tests): add e2e scenarios for login page"
git push -u origin feature/login-page-tests
# Створення Pull Request у GitHub/GitLab`
		}
	},
	{
		id: 'data-storages',
		category: 'automation',
		section: 'Дані та SQL',
		title: 'Data Storages & Test Data Management',
		subtitle: 'Робота з базами даних та тестовими даними',
		summary:
			'Принципи зберігання даних програми, різновиди сховищ та стратегії створення якісних тестових даних для автоматизації.',
		tags: ['SQL', 'NoSQL', 'TDM', 'Databases'],
		concepts: [
			{ title: 'Реляційні бази даних (RDBMS)', desc: 'Таблиці, ключі (Primary/Foreign), зв’язки (One-to-Many, Many-to-Many): PostgreSQL, MS SQL Server, MySQL.' },
			{ title: 'NoSQL сховища', desc: 'Документні (MongoDB), Key-Value (Redis), Графові (Neo4j) бази для високонавантажених даних.' },
			{ title: 'Сховища даних (Data Warehouses)', desc: 'OLAP, ETL-процеси, агреговані великі дані (Snowflake, BigQuery).' },
			{ title: 'Test Data Management (TDM)', desc: 'Генерація фейкових даних (бібліотеки Bogus / Faker), очищення даних після тестів (TearDown / DB cleanup), маскування конфіденційної інформації.' }
		]
	},
	{
		id: 'sql-commands',
		category: 'automation',
		section: 'Дані та SQL',
		title: 'SQL для тестувальника',
		subtitle: 'DDL, DML, фільтрація, агрегація та JOIN операції',
		summary:
			'Найчастіше використовувані команди та запити SQL, які перевіряють на технічних співбесідах QA.',
		tags: ['SQL', 'SELECT', 'JOIN', 'GROUP BY'],
		concepts: [
			{
				title: 'DDL (Data Definition Language)',
				desc: 'CREATE TABLE, ALTER TABLE, DROP TABLE, TRUNCATE — створення та зміна структури таблиць.'
			},
			{
				title: 'DML (Data Manipulation Language)',
				desc: 'SELECT (вибірка), INSERT INTO (додавання), UPDATE (оновлення), DELETE FROM (видалення даних).'
			},
			{
				title: 'Фільтрація та сортування',
				desc: 'WHERE (фільтр рядків), ORDER BY ASC/DESC (сортування), DISTINCT (унікальні значення), BETWEEN, IN, LIKE.'
			},
			{
				title: 'Агрегація: GROUP BY та HAVING',
				desc: 'COUNT(), SUM(), AVG(), MIN(), MAX(). Важливо: HAVING фільтрує після агрегації GROUP BY, а WHERE — до.'
			},
			{
				title: 'Табличні об’єднання (JOINs)',
				desc: 'INNER JOIN (перетин), LEFT JOIN (все з лівої таблиці + співпадіння з правої), RIGHT JOIN, FULL OUTER JOIN.'
			}
		],
		codeSnippet: {
			language: 'sql',
			code: `-- Приклад популярного тестового запиту на співбесіді:
-- Знайти клієнтів із сумою замовлень понад 5000 за 2024 рік
SELECT 
    c.id, 
    c.name, 
    COUNT(o.order_id) AS total_orders, 
    SUM(o.amount) AS total_spent
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id
WHERE o.order_date BETWEEN '2024-01-01' AND '2024-12-31'
GROUP BY c.id, c.name
HAVING SUM(o.amount) > 5000
ORDER BY total_spent DESC;`
		}
	}
];
