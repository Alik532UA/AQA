export interface SlideCard {
	title?: string;
	contentHtml?: string;
	colSpan?: number; // 1, 2, or 3
}

export interface Slide {
	id: string;
	category: 'M' | 'A';
	menuGroup?: string;
	menuTitle: string;
	menuSub?: string;
	pillExtra?: {
		id: string;
		label: string;
	};
	layout: 'grid-3' | 'grid-2' | 'grid-1' | 'custom-m1' | 'custom-m3' | 'custom-m4' | 'custom-solid';
	cards: SlideCard[];
}

export const slidesData: Slide[] = [
	// ==========================================
	// MANUAL QA (M) SLIDES
	// ==========================================
	{
		id: 'm-basics',
		category: 'M',
		menuTitle: 'Основи тестування',
		menuSub: 'Що таке тестування, STLC, Тест план, Тест дизайн',
		layout: 'custom-m1',
		cards: [
			{
				title: 'Що таке тестування?',
				contentHtml: `
					<p class="mb-2">Тестування - це процес перевірки програмного забезпечення з метою валідації відповідності вимогам (реальне і очікувана поведінка програми) та виявлення помилок.</p>
					<h4 class="font-bold text-cyan-300 mt-2 mb-1">Тестування програмного забезпечення</h4>
					<p>техніка контролю якості, що включає активності з планування робіт (Test Management), проектування тестів (Test Design), виконання тестування (Test Execution) і аналізу отриманих результатів (Test Analysis).</p>
				`
			},
			{
				title: 'Software Quality | Якість програмного забезпечення',
				contentHtml: `
					<p>це сукупність показників, здатності задовольняти потреби. <span class="text-cyan-400 font-mono">[Quality management and quality assurance]</span></p>
				`
			},
			{
				title: 'Testing goals | Цілі тестування',
				contentHtml: `
					<ul class="list-disc list-inside space-y-1 text-slate-200">
						<li>Підвищити ймовірність того, що програма, призначена для тестування, буде працювати правильно за будь-яких обставин.</li>
						<li>Підвищити ймовірність того, що програма, призначена для тестування, буде відповідати всім описаним вимогам.</li>
						<li>Надання актуальної інформації про стан продукту на даний момент.</li>
					</ul>
				`
			},
			{
				title: 'Testing stages | Етапи тестування',
				contentHtml: `
					<ol class="list-decimal list-inside space-y-0.5 font-mono text-[11px] leading-tight text-slate-200">
						<li><strong class="text-cyan-300 font-sans">Product analysis</strong> | Аналіз продукту</li>
						<li><strong class="text-cyan-300 font-sans">Working with Requirements</strong> | Робота з вимогами</li>
						<li><strong class="text-cyan-300 font-sans">Development of testing strategy and planning of quality control procedures</strong> | Розробка стратегії тестування та планування процедур контролю якості</li>
						<li><strong class="text-cyan-300 font-sans">Creation of test documentation (test Case)</strong> | Створення тестової документації</li>
						<li><strong class="text-cyan-300 font-sans">Prototype testing</strong> | Тестування прототипу</li>
						<li><strong class="text-cyan-300 font-sans">Basic testing</strong> | Основне тестування</li>
						<li><strong class="text-cyan-300 font-sans">Stabilization</strong> | Стабілізація</li>
						<li><strong class="text-cyan-300 font-sans">Exploitation</strong> | Експлуатація</li>
					</ol>
				`
			},
			{
				title: 'Життєвий цикл тестування (STLC)',
				contentHtml: `
					<p class="mb-2">це послідовність етапів, які необхідні для забезпечення якості програмного забезпечення. STLC починається з планування тестування та закінчується закриттям тестування.</p>
					<h4 class="font-bold text-cyan-300 mb-1">Основні етапи STLC:</h4>
					<ul class="list-disc list-inside space-y-1 mb-2 text-[11px]">
						<li><strong>Планування тестування:</strong> визначаються цілі тестування, обсяг тестування, ресурси, методи тестування.</li>
						<li><strong>Аналіз вимог:</strong> оцінюються вимоги до ПЗ, щоб визначити, які з них повинні бути протестовані.</li>
						<li><strong>Дизайн тестів:</strong> розробляються тести, які будуть використовуватися для перевірки вимог до ПЗ.</li>
						<li><strong>Виконання тестів:</strong> тести запускаються на ПЗ, щоб виявити помилки.</li>
						<li><strong>Аналіз результатів:</strong> аналізуються результати тестування, щоб визначити, чи є помилки критичними.</li>
						<li><strong>Закриття тестування:</strong> документуються результати та завершується процес тестування.</li>
					</ul>
					<p class="text-[11px] text-slate-300 mb-2">STLC може бути адаптований до різних моделей (наприклад, для Scrum STLC є ітеративним та інкрементальним протягом усього циклу розробки).</p>
					<h4 class="font-bold text-cyan-300 mb-0.5">Основні цілі життєвого циклу тестування:</h4>
					<ul class="list-disc list-inside space-y-0.5 mb-2 text-[11px]">
						<li><strong>Виявлення помилок:</strong> основна мета — знайти дефекти.</li>
						<li><strong>Покращення якості:</strong> усунення виявлених помилок.</li>
						<li><strong>Підвищена впевненість:</strong> впевненість у працездатності ПЗ.</li>
					</ul>
					<h4 class="font-bold text-cyan-300 mb-0.5">Переваги життєвого циклу тестування:</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px]">
						<li><strong>Покращена якість ПЗ:</strong> допомагає виявити та усунути помилки.</li>
						<li><strong>Зменшення витрат:</strong> виявлення на ранніх етапах зменшує витрати.</li>
						<li><strong>Зменшення ризику:</strong> запобігання випуску з дефектами.</li>
					</ul>
				`
			},
			{
				title: 'Тест дизайн',
				contentHtml: `
					<p class="mb-1">— это этап процесса тестирования ПО, на котором проектируются и создаются тестовые сценарии (тест кейсы), в соответствии с определёнными ранее критериями качества и целями тестирования.</p>
					<p class="font-semibold text-cyan-300">Роли, ответственные за тест дизайн:</p>
					<ul class="list-disc list-inside space-y-0.5 text-slate-200">
						<li><strong>Тест аналитик</strong> — определяет «ЧТО тестировать?»</li>
						<li><strong>Тест дизайнер</strong> — определяет «КАК тестировать?»</li>
					</ul>
				`
			},
			{
				title: 'Основні пункти тест плану',
				contentHtml: `
					<p class="mb-1 text-[11px] text-cyan-400">У стандарті IEEE 829 перераховані пункти, з яких повинен (нехай може) складатися тест-план:</p>
					<ol class="space-y-0.5 text-[11px] font-mono leading-tight">
						<li><strong class="text-cyan-300">A. Test plan identifier</strong> | ідентифікатор плану тестування;</li>
						<li><strong class="text-cyan-300">B. Introduction</strong> | вступ</li>
						<li><strong class="text-cyan-300">C. Test items</strong> | тестові завдання</li>
						<li><strong class="text-cyan-300">D. Features to be tested</strong> | характеристики, що підлягають перевірці</li>
						<li><strong class="text-cyan-300">E. Features not to be tested</strong> | Функції, які не підлягають тестуванню</li>
						<li><strong class="text-cyan-300">F. Approach</strong> | підхід</li>
						<li><strong class="text-cyan-300">G. Item pass|fail criteria</strong> | Критерії проходження|непроходження пункту;</li>
						<li><strong class="text-cyan-300">H. Suspension criteria and resumption requirements</strong> | критерії призупинення та вимоги до відновлення;</li>
						<li><strong class="text-cyan-300">I. Test deliverables</strong> | Результати тестування</li>
						<li><strong class="text-cyan-300">J. Testing tasks</strong> | Тестові завдання</li>
						<li><strong class="text-cyan-300">K. Environmental needs</strong> | Екологічні потреби</li>
						<li><strong class="text-cyan-300">L. Responsibilities</strong> | Обов'язки</li>
						<li><strong class="text-cyan-300">M. Staffing and training needs</strong> | потреби в кадрах і навчанні;</li>
						<li><strong class="text-cyan-300">N. Schedule</strong> | Розклад</li>
						<li><strong class="text-cyan-300">O. Risks and contingencies</strong> | Ризики та непередбачені обставини;</li>
						<li><strong class="text-cyan-300">P. Approvals</strong> | Схвалення</li>
					</ol>
				`
			},
			{
				title: 'Test Plan | Тест план',
				contentHtml: `
					<p class="mb-2 text-xs">це документ, який описує весь обсяг робіт з тестування, починаючи з опису об'єкта, стратегій, розписів, критеріїв початку та закінчення тестування, до необхідного в процесі роботи обладнання, спеціальних знань, а також оцінки ризиків з варіантами їх дозволів.</p>
					<h4 class="font-bold text-cyan-300 mb-1 text-xs">Відповідає на питання:</h4>
					<ul class="list-disc list-inside space-y-0.5 text-xs text-slate-200">
						<li>Що потрібно тестувати?</li>
						<li>Що (по факту) будемо тестувати?</li>
						<li>Як будемо тестувати?</li>
						<li>Коли будете тестувати?</li>
						<li>Критерії початку тестування.</li>
						<li>Критерії закінчення тестування.</li>
					</ul>
				`
			}
		]
	},

	// ==========================================
	// SLIDE M2: TEST TYPES
	// ==========================================
	{
		id: 'm-types',
		category: 'M',
		menuTitle: 'Test Types',
		menuSub: 'Типи (види) тестування',
		layout: 'grid-2',
		cards: [
			{
				title: 'Functional Testing | Функціональні види тестування',
				contentHtml: `
					<ul class="space-y-2 text-xs">
						<li>
							<strong class="text-cyan-300 text-sm">Functional testing | Функціональне тестування</strong>
							<p class="text-slate-300 pl-3">• чи відповідає програма або система вимогам, специфікаціям та очікуванням користувачів.</p>
							<p class="text-slate-300 pl-3">• тип тестування чорної скриньки (Ми не знаємо, як влаштована система, що тестується).</p>
						</li>
						<li>
							<strong class="text-cyan-300 text-sm">GUI Testing | Тестування інтерфейсу користувача</strong>
							<p class="text-slate-300 pl-3">• на перевірку коректності та функціональності графічного інтерфейсу програми (вікна, кнопки, меню, форми, поля введення, списки, іконки).</p>
						</li>
						<li>
							<strong class="text-cyan-300 text-sm">Security and Access Control Testing | Тестування безпеки</strong>
							<p class="text-slate-300 pl-3">• перевірка системи на наявність вразливостей та недоліків у забезпеченні безпеки та контролі доступу до даних та ресурсів.</p>
						</li>
						<li>
							<strong class="text-cyan-300 text-sm">Interoperability Testing | Тестування взаємодії</strong>
							<p class="text-slate-300 pl-3">• перевірка здатності взаємодіяти з іншими системами, пристроями або компонентами безпосередньо чи через стандарти і протоколи.</p>
						</li>
					</ul>
					<hr class="border-cyan-900/60 my-3" />
					<h4 class="font-bold text-cyan-300 mb-2 text-sm">Пов'язані зі змінами види тестування</h4>
					<ul class="space-y-1.5 text-xs text-slate-200">
						<li>
							<strong class="text-cyan-400">Smoke Testing | Димове тестування:</strong>
							швидка перевірка основних функцій системи після невеликих змін або збірки. Перевіряє критичні компоненти (check list).
						</li>
						<li>
							<strong class="text-cyan-400">Regression Testing | Регресійне тестування:</strong>
							переконатися, що нові зміни не впливають на раніше працюючий функціонал і не викликають дефектів.
						</li>
						<li>
							<strong class="text-cyan-400">Re-testing | Повторне тестування:</strong>
							перевірка, чи були виправлені дефекти, виявлені під час попереднього тестування.
						</li>
						<li>
							<strong class="text-cyan-400">Build Verification Test | Тестування складання:</strong>
							перевірка базових можливостей білда та належної інтеграції компонентів.
						</li>
						<li>
							<strong class="text-cyan-400">Sanity Testing | Санітарне тестування:</strong>
							перевірка узгодженості/справності конкретних нових функцій чи змін (check list).
						</li>
					</ul>
				`
			},
			{
				title: 'Non Functional Testing | Нефункціональне тестування',
				contentHtml: `
					<p class="text-xs mb-2 text-slate-300">…це процес перевірки ПЗ на відповідність якісним характеристикам, таким як продуктивність, надійність, зручність використання, безпека тощо. Відіграють важливу роль у користувацькому досвіді.</p>
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Основні види нефункціонального тестування:</h4>
					<div class="space-y-1 text-[11px] text-slate-200 leading-tight">
						<p><strong class="text-cyan-400">Performance testing | Тестування продуктивності:</strong> Оцінює швидкість, час відгуку, пропускну здатність.</p>
						<div class="pl-3 space-y-0.5 text-slate-300">
							<p><strong>a. Load testing | Навантаження:</strong> поведінка під великим навантаженням, виявлення вузьких місць.</p>
							<p><strong>b. Stress testing | Стрес-тестування:</strong> межі стійкості системи, перевантаження ресурсів.</p>
							<p><strong>c. Volume testing | Витривалість:</strong> тривала робота без збоїв і втрати даних.</p>
						</div>
						<p><strong class="text-cyan-400">Reliability testing | Тестування надійності:</strong> стійкість до збоїв. MTBF (Mean time between failures), MTTR (Mean time to repair).</p>
						<p><strong class="text-cyan-400">Usability testing | Зручність використання:</strong> наскільки легко та інтуїтивно користувачеві взаємодіяти з системою.</p>
						<p><strong class="text-cyan-400">Security testing | Тестування безпеки:</strong> вразливості, захищеність даних. Penetration testing (Пентест), Vulnerability scanning.</p>
						<p><strong class="text-cyan-400">Compatibility testing | Сумісність:</strong> робота в різних ОС, браузерах, апаратних платформах.</p>
						<p><strong class="text-cyan-400">Scalability | Масштабованість, Maintainability | Підтримуваність, Recoverability | Відновлюваність</strong></p>
						<p><strong class="text-cyan-400">Portability | Переносимість, Configuration | Конфігурація, Localisation | Локалізація</strong></p>
					</div>
					<div class="mt-2.5 pt-2 border-t border-cyan-900/50 text-[11px] text-slate-300">
						<p class="font-semibold text-cyan-300 mb-0.5">Чому важливе нефункціональне тестування:</p>
						<ul class="list-disc list-inside space-y-0.5">
							<li>Забезпечує високу якість і надійність системи.</li>
							<li>Виявляє потенційні проблеми на ранніх етапах.</li>
							<li>Підвищує задоволеність користувачів і сприяє довготривалому успіху продукту.</li>
						</ul>
						<p class="mt-1 font-semibold text-cyan-300">Вибір залежить від: типу системи, вимог, цільової аудиторії.</p>
					</div>
				`
			}
		]
	},

	// ==========================================
	// SLIDE M3: V&V, TEST DESIGN TECHNIQUES, SEVERITY VS PRIORITY
	// ==========================================
	{
		id: 'm-techniques',
		category: 'M',
		menuTitle: 'Верифікація / Валідація',
		menuSub: 'Техніки тест дизайна, Severity vs Priority',
		layout: 'custom-m3',
		cards: [
			{
				title: 'Verification | Верифікація',
				contentHtml: `
					<p class="font-mono text-cyan-300 text-xs mb-1">Verification — 'is the system correct to specification?'</p>
					<p class="text-xs text-slate-300 mb-1">Верифікація — чи відповідає система специфікаціям?</p>
					<p class="text-xs text-slate-200">це процес оцінки системи або її компонентів з метою визначення, чи задовольняють результати поточного етапу умовам, сформованим на початку цього етапу [IEEE]. Тобто чи виконуються цілі, терміни та завдання поточної фази.</p>
				`
			},
			{
				title: 'Validation | Валідація',
				contentHtml: `
					<p class="font-mono text-cyan-300 text-xs mb-1">Validation — 'is this the right specification?'</p>
					<p class="text-xs text-slate-300 mb-1">Перевірка — «це правильна специфікація?»</p>
					<p class="text-xs text-slate-200 mb-1">це визначення (оцінка) відповідності ПЗ що розробляється очікуванням і потребам користувача, вимогам до системи [BS7925-1].</p>
					<p class="text-[11px] text-cyan-400 bg-cyan-950/40 p-2 rounded border border-cyan-800/40">Оцінка відповідності явним вимогам (специфікаціям) — верифікація; оцінка відповідності очікуванням користувачів — валідація.</p>
				`
			},
			{
				title: 'Техники тест дизайна | Design test techniques',
				contentHtml: `
					<ul class="space-y-2 text-xs text-slate-200">
						<li>
							<strong class="text-cyan-300">Эквивалентное Разделение (Equivalence Partitioning — EP):</strong>
							<p class="text-slate-300 text-[11px] pl-2">диапазон допустимых значений от 1 до 10: выбрать одно верное значение внутри интервала (например, 5) и одно неверное вне интервала (например, 0).</p>
						</li>
						<li>
							<strong class="text-cyan-300">Анализ Граничных Значений (Boundary Value Analysis — BVA):</strong>
							<p class="text-slate-300 text-[11px] pl-2">выберем минимальную и максимальную границы (1 и 10), и значения больше и меньше границ (0 и 11).</p>
						</li>
						<li>
							<strong class="text-cyan-300">Причина | Следствие (Cause | Effect — CE):</strong>
							<p class="text-slate-300 text-[11px] pl-2">ввести поля «Имя», «Телефон», нажать «Добавить» (Причина) -> система добавляет клиента и показывает номер (Следствие).</p>
						</li>
						<li>
							<strong class="text-cyan-300">Предугадывание ошибки (Error Guessing — EG):</strong>
							<p class="text-slate-300 text-[11px] pl-2">тестировщик использует свой опыт и знания: «Что, если не ввести код?», «Что, если ввести неверный формат?»</p>
						</li>
						<li>
							<strong class="text-cyan-300">Исчерпывающее тестирование (Exhaustive Testing — ET):</strong>
							<p class="text-slate-300 text-[11px] pl-2">крайний случай, проверка всех возможных комбинаций. На практике невозможно из-за огромного количества состояний.</p>
						</li>
						<li>
							<strong class="text-cyan-300">Попарное тестирование (Pairwise Testing):</strong>
							<p class="text-slate-300 text-[11px] pl-2">каждое тестируемое значение каждого параметра хотя бы единожды сочетается со значениями всех остальных параметров.</p>
						</li>
					</ul>
				`
			},
			{
				title: 'Severity vs Priority',
				contentHtml: `
					<p class="text-xs text-slate-200 mb-2">
						<strong>Серьезность (Severity)</strong> — атрибут, характеризующий влияние дефекта на работоспособность приложения (выставляется тестировщиком).<br>
						<strong>Приоритет (Priority)</strong> — атрибут, указывающий на очередность выполнения задачи или устранения дефекта (менеджером, тимлидом, заказчиком).
					</p>
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Градация Серьезности дефекта (Severity):</h4>
					<ul class="text-[11px] space-y-1 mb-2 text-slate-300">
						<li><strong class="text-cyan-400">S1 Блокирующая (Blocker):</strong> приводит приложение в нерабочее состояние, ключевые функции не работают.</li>
						<li><strong class="text-cyan-400">S2 Критическая (Critical):</strong> неправильная ключевая бизнес-логика, дыра безопасности, падение сервера без обходного пути.</li>
						<li><strong class="text-cyan-400">S3 Значительная (Major):</strong> часть логики работает некорректно, но есть возможность обойти проблему.</li>
						<li><strong class="text-cyan-400">S4 Незначительная (Minor):</strong> не нарушает бизнес-логику, очевидная проблема UI.</li>
						<li><strong class="text-cyan-400">S5 Тривиальная (Trivial):</strong> малозаметная проблема UI, опечатка, не влияет на общее качество.</li>
					</ul>
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Градация Приоритета дефекта (Priority):</h4>
					<ul class="text-[11px] space-y-0.5 text-slate-300">
						<li><strong class="text-cyan-400">P1 Высокий (High):</strong> исправить как можно быстрее, критично для проекта.</li>
						<li><strong class="text-cyan-400">P2 Средний (Medium):</strong> не критично, но требует обязательного решения.</li>
						<li><strong class="text-cyan-400">P3 Низкий (Low):</strong> не требует срочного решения.</li>
					</ul>
				`
			}
		]
	},

	// ==========================================
	// SLIDE M4: TEST CASE, CHECK LIST, DEFECT/BUG/FAILURE, BUG REPORT
	// ==========================================
	{
		id: 'm-defects',
		category: 'M',
		menuTitle: 'Test Case | Документація',
		menuSub: 'Check list, Bug / Error / Failure, Bug Report',
		layout: 'custom-m4',
		cards: [
			{
				title: 'Test Case | Тестовий сценарій',
				contentHtml: `
					<p class="text-xs mb-2">документ, що описує послідовність кроків для перевірки певної функціональності.</p>
					<div class="p-2 rounded bg-[#091322] border border-cyan-800/40 text-[11px] font-mono mb-2">
						Action | Description | Expected Result | Test Result<br>
						Дія | Опис | Очікуваний результат | Результати тесту<br>
						<span class="text-cyan-400">Статуси: (passed | failed | blocked)</span><br>
						click on field e-mail | Login page is opened | Passed
					</div>
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Кожен тест-кейс повинен мати 3 частини:</h4>
					<ul class="text-[11px] space-y-1 text-slate-300">
						<li><strong>PreConditions:</strong> список умов чи дій, які приводять систему до стану, придатного для проведення перевірки.</li>
						<li><strong>Description / Steps:</strong> послідовність дій для перевірки реалізації.</li>
						<li><strong>PostConditions:</strong> переведення системи у вихідний первинний стан (initial state).</li>
					</ul>
				`
			},
			{
				title: 'Чек-лист (check list) | список перевірок',
				contentHtml: `
					<p class="text-xs text-slate-200 mb-1">це документ, який описує, що повинно бути протестовано. Може бути абсолютно різного рівня деталізації залежно від вимог та складності продукту.</p>
					<p class="text-xs text-slate-300 mb-1">Як правило, чек-лист містить тільки дії (шаги) без надлишкового очікуваного результату.</p>
					<p class="text-[11px] text-cyan-300 font-semibold">Чек-лист менш формалізований, ніж тестовий сценарій. Його доречно використовувати в Agile, коли тест-кейси є надлишковими.</p>
				`
			},
			{
				title: 'Дефект / Error / Bug / Failure',
				contentHtml: `
					<div class="space-y-2 text-xs">
						<div>
							<strong class="text-cyan-300 block">Дефект (він же баг):</strong>
							<span class="text-slate-300 text-[11px]">невідповідність фактичного результату очікуваному результату специфікації вимог.</span>
						</div>
						<div>
							<strong class="text-amber-300 block">Error (Помилка):</strong>
							<span class="text-slate-300 text-[11px]">помилка користувача або розробника (намагається використовувати програму іншим способом, невірний ввід).</span>
						</div>
						<div>
							<strong class="text-rose-400 block">Bug (Defect):</strong>
							<span class="text-slate-300 text-[11px]">помилка програміста (дизайнера) у коді, через що програма виходить з-під контролю або падає.</span>
						</div>
						<div>
							<strong class="text-purple-400 block">Failure (Збій / Відмова):</strong>
							<span class="text-slate-300 text-[11px]">збій у роботі компонента чи системи (краш, апаратний або програмний збій під час виконання).</span>
						</div>
					</div>
				`
			},
			{
				title: 'Баг Репорт (Bug Report)',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">це документ, що описує ситуацію або послідовність дій, яка призвела до некоректної роботи системи, із зазначенням причин і очікуваного результату.</p>
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Структура баг-репорту:</h4>
					<div class="space-y-1 text-[11px] text-slate-200">
						<p><strong class="text-cyan-400">Шапка:</strong></p>
						<ul class="list-disc list-inside pl-2 space-y-0.5 text-slate-300">
							<li><strong>Короткий опис (Summary):</strong> Що? Де? Коли? (однозначно та стисло)</li>
							<li><strong>Проект (Project) & Компонент (Component)</strong></li>
							<li><strong>Номер версії (Version) & Автор (Author) & Назначен на (Assigned To)</strong></li>
							<li><strong>Серьезность (Severity):</strong> S1 Blocker, S2 Critical, S3 Major, S4 Minor, S5 Trivial</li>
							<li><strong>Приоритет (Priority):</strong> P1 High, P2 Medium, P3 Low</li>
							<li><strong>Статус (Status):</strong> Життєвий цикл дефекту (New, Open, In Progress, Resolved, Closed)</li>
						</ul>
						<p><strong class="text-cyan-400 mt-1 block">Оточення (Environment):</strong> ОС, Браузер + версія, Сервіс Пак, роздільна здатність, мобільний девайс.</p>
						<p><strong class="text-cyan-400 mt-1 block">Опис (Description):</strong></p>
						<ul class="list-disc list-inside pl-2 space-y-0.5 text-slate-300">
							<li>Шаги відтворення (Steps to Reproduce)</li>
							<li>Фактичний результат (Result)</li>
							<li>Очікуваний результат (Expected Result)</li>
							<li>Прикріплені файли (Attachments: скріншоти, логи, відео)</li>
						</ul>
					</div>
				`
			}
		]
	},

	// ==========================================
	// SLIDE M5: LEVELS OF TESTING
	// ==========================================
	{
		id: 'm-levels',
		category: 'M',
		menuTitle: 'Рівні тестування',
		menuSub: 'Levels of testing',
		layout: 'grid-1',
		cards: [
			{
				title: 'Рівні тестування програмного забезпечення: детальний огляд',
				contentHtml: `
					<p class="text-xs text-slate-200 mb-3">Рівні тестування визначають, на якому рівні системи проводиться перевірка: окремий модуль, група модулів чи система в цілому. Кожен рівень має свою мету та використовує різні підходи.</p>
					
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-3">
						<div class="p-3 rounded-lg bg-[#08111d] border border-cyan-900/60">
							<h4 class="font-bold text-cyan-300 mb-1 text-sm">1. Модульне (компонентне) тестування</h4>
							<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-300">
								<li><strong>Мета:</strong> Перевірка коректної роботи окремих модулів (функцій, класів) коду.</li>
								<li><strong>Об'єкт:</strong> Ізольовані модулі.</li>
								<li><strong>Методи:</strong> Проходження шляхів виконання, граничні значення, юніт-тести.</li>
							</ul>
						</div>

						<div class="p-3 rounded-lg bg-[#08111d] border border-cyan-900/60">
							<h4 class="font-bold text-cyan-300 mb-1 text-sm">2. Інтеграційне тестування</h4>
							<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-300">
								<li><strong>Мета:</strong> Перевірка взаємодії між різними модулями системи.</li>
								<li><strong>Об'єкт:</strong> Групи модулів, підсистеми, API, взаємодія з БД.</li>
								<li><strong>Методи:</strong> Поступове об'єднання модулів (знизу вгору, зверху вниз), перевірка інтерфейсів.</li>
							</ul>
						</div>

						<div class="p-3 rounded-lg bg-[#08111d] border border-cyan-900/60">
							<h4 class="font-bold text-cyan-300 mb-1 text-sm">3. Системне тестування</h4>
							<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-300">
								<li><strong>Мета:</strong> Перевірка системи в цілому на відповідність всім вимогам.</li>
								<li><strong>Об'єкт:</strong> Вся повністю зібрана система.</li>
								<li><strong>Методи:</strong> Функціональне та нефункціональне тестування (навантаження, безпека тощо).</li>
							</ul>
						</div>

						<div class="p-3 rounded-lg bg-[#08111d] border border-cyan-900/60">
							<h4 class="font-bold text-cyan-300 mb-1 text-sm">4. Приймальне тестування (Acceptance / UAT)</h4>
							<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-300">
								<li><strong>Мета:</strong> Оцінка готовності системи для використання кінцевим користувачем або замовником.</li>
								<li><strong>Об'єкт:</strong> Вся система.</li>
								<li><strong>Альфа-тестування:</strong> проводиться розробником або внутрішньою командою.</li>
								<li><strong>Бета-тестування:</strong> проводиться кінцевими користувачами або незалежними тестувальниками.</li>
							</ul>
						</div>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px] pt-2 border-t border-cyan-900/50">
						<div>
							<h4 class="font-bold text-cyan-300 mb-1">Чому важливе тестування на всіх рівнях?</h4>
							<ul class="list-disc list-inside space-y-0.5 text-slate-300">
								<li><strong>Виявлення дефектів на ранніх етапах:</strong> Чим раніше виявлено дефект, тим менше коштів і часу витрачено на виправлення.</li>
								<li><strong>Забезпечення якості:</strong> Гарантія відповідності очікуванням.</li>
								<li><strong>Зменшення ризиків:</strong> Зниження ризиків критичних збоїв після релізу.</li>
							</ul>
						</div>
						<div>
							<h4 class="font-bold text-cyan-300 mb-1">Додаткові типи та критерії вибору:</h4>
							<ul class="list-disc list-inside space-y-0.5 text-slate-300">
								<li>Регресійне, димове, тестування продуктивності, безпеки, зручності використання.</li>
								<li><strong>Вибір залежить від:</strong> комплексності системи, вимог до якості, бюджету та часових обмежень.</li>
							</ul>
						</div>
					</div>
				`
			}
		]
	},

	// ==========================================
	// AUTOMATION QA (A) SLIDES
	// ==========================================
	{
		id: 'a-cicd',
		category: 'A',
		menuTitle: 'CI/CD Practices',
		menuSub: 'Неперервна інтеграція та доставка (.NET)',
		layout: 'grid-2',
		cards: [
			{
				title: 'CI/CD Практики: Поглиблений огляд для Middle Automation Test Engineer (.NET)',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">CI/CD (Неперервна інтеграція та Неперервна доставка/розгортання) – це сукупність практик у розробці ПЗ, які дозволяють автоматизувати процес створення, тестування та розгортання додатків. Невід'ємна частина сучасного DevOps.</p>
					
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Неперервна Інтеграція (CI)</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200 mb-2">
						<li><strong>Часте об’єднання змін:</strong> Розробники інтегрують зміни до основної гілки декілька разів на день.</li>
						<li><strong>Автоматизоване тестування:</strong> Кожна інтеграція запускає набір тестів (юніт, інтеграційні) для швидкого виявлення проблем.</li>
						<li><strong>Швидкий зворотний зв’язок:</strong> Негайний відгук про якість змін для оперативного виправлення.</li>
					</ul>
					<p class="text-[11px] text-cyan-400 mb-2">Переваги CI: Раннє виявлення помилок, покращення якості коду, збільшення пропускної здатності команди.</p>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">Неперервна Доставка (CD)</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200 mb-2">
						<li><strong>Автоматизоване розгортання:</strong> Після успішних тестів зміни автоматично розгортаються на середовище, готове до виробництва.</li>
						<li><strong>Ручне затвердження:</strong> Перед релізом на прод може знадобитися ручне затвердження.</li>
					</ul>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">Неперервне Розгортання (CD)</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200">
						<li><strong>Автоматичний реліз на продакшен:</strong> Зміни розгортаються на бойове середовище без ручного втручання.</li>
						<li>Вимагає дуже високого рівня автоматизації тестів та моніторингу.</li>
					</ul>
				`
			},
			{
				title: 'Інструменти та важливі аспекти CI/CD (.NET)',
				contentHtml: `
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Переваги CD:</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-300 mb-2">
						<li>Швидкий вихід на ринок, зменшення ризику розгортання, покращення користувацького досвіду.</li>
					</ul>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">Ключові Інструменти CI/CD:</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200 mb-2">
						<li><strong>Системи контролю версій:</strong> Git, SVN</li>
						<li><strong>Сервери CI:</strong> Jenkins, GitLab CI/CD, CircleCI, Azure DevOps</li>
						<li><strong>Контейнеризація та оркестрація:</strong> Docker, Kubernetes</li>
						<li><strong>Інструменти тестування:</strong> NUnit, xUnit, Selenium, Playwright, Jest</li>
						<li><strong>Інфраструктура як код:</strong> Terraform, Ansible</li>
					</ul>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">Як CI/CD пов’язаний з .NET:</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-300 mb-2">
						<li>.NET Core/8+: легко розгортається у Docker-контейнерах на Linux та Windows.</li>
						<li>NuGet для управління залежностями, MSBuild для збірки проектів, Azure DevOps як повноцінна платформа.</li>
					</ul>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">Важливі Аспекти для Middle Automation Engineer:</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200">
						<li>Розуміння конвеєра CI/CD, інтеграція запусків автотестів у пайплайн, аналіз артефактів звітів та блокування релізу при падіннях.</li>
					</ul>
				`
			}
		]
	},

	// ==========================================
	// SLIDE A2: DESIGN PRINCIPLES AND APPROACHES
	// ==========================================
	{
		id: 'a-design-principles',
		category: 'A',
		menuTitle: 'Design Principles & Approaches',
		menuSub: 'Принципи та підходи до проектування',
		layout: 'grid-2',
		cards: [
			{
				title: 'Принципи та підходи до дизайну: основа ефективної автоматизації',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">Принципи дизайну — це набір рекомендацій і правил, які забезпечують ефективність, зрозумілість та масштабованість тестових систем.</p>
					
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Чому принципи дизайну важливі для Automation Test Engineer?</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200 mb-2">
						<li><strong>Структуровані тестові сценарії:</strong> легко зрозуміти, підтримувати та масштабувати.</li>
						<li><strong>Зменшення помилок:</strong> уникаємо поширених архітектурних помилок автоматизації.</li>
						<li><strong>Поліпшення якості коду:</strong> чистий та підтримуваний код тестів.</li>
						<li><strong>Швидша розробка:</strong> використання перевірених практик.</li>
					</ul>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">Ключові принципи дизайну для Automation Test Engineer (.NET):</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200">
						<li><strong>Модульність:</strong> розбиття сценаріїв на невеликі незалежні модулі.</li>
						<li><strong>Повторне використання:</strong> загальні методи та хелпери для зменшення дублювання.</li>
						<li><strong>Читабельність коду:</strong> зрозумілі імена змінних і методів, що полегшує підтримку іншими інженерами.</li>
					</ul>
				`
			},
			{
				title: 'Підходи до проектування та патерни коду',
				contentHtml: `
					<ul class="list-disc list-inside space-y-1 text-[11px] text-slate-200 mb-3">
						<li><strong>Інтерфейси:</strong> відокремлення абстракції від конкретної реалізації для гнучкої заміни компонентів.</li>
						<li><strong>Депенденцій інжекшн (DI):</strong> зменшує зв'язність між компонентами та полегшує тестування.</li>
						<li><strong>DRY (Don't Repeat Yourself):</strong> не дублюйте однаковий код у кількох місцях.</li>
						<li><strong>KISS (Keep It Simple, Stupid):</strong> простота рішень без надлишкового ускладнення.</li>
						<li><strong>YAGNI (You Aren't Gonna Need It):</strong> не пишіть функціонал наперед, якщо він не потрібен прямо зараз.</li>
					</ul>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">Підходи до дизайну тестових систем:</h4>
					<ul class="list-disc list-inside space-y-1 text-[11px] text-slate-200 mb-2">
						<li><strong>Data-Driven Testing:</strong> тестові дані зберігаються окремо від тестового коду (CSV, JSON, DB).</li>
						<li><strong>Keyword-Driven Testing:</strong> сценарії описуються ключовими словами для нетехнічних фахівців.</li>
						<li><strong>Page Object Model:</strong> відокремлення коду тесту від селекторів та структури веб-сторінки.</li>
					</ul>
					<p class="text-[11px] text-cyan-400">Дотримання цих підходів забезпечує стабільний фреймворк та скорочує час виведення продукту на ринок.</p>
				`
			}
		]
	},

	// ==========================================
	// SLIDE A3: PLATFORM SPECIFIC TEST AUTOMATION
	// ==========================================
	{
		id: 'a-platform-specific',
		category: 'A',
		menuTitle: 'Platform Specific Test Automation',
		menuSub: 'Автоматизація для конкретної платформи (.NET)',
		layout: 'grid-2',
		cards: [
			{
				title: 'Платформно-специфічна автоматизація тестування (.NET)',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">Підхід, коли тести створюються з урахуванням особливостей конкретної платформи: .NET Framework / .NET Core, ОС (Windows, Linux, macOS) та типу додатків (веб, десктоп, мобільні, API).</p>
					
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Чому це важливо?</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200 mb-2">
						<li><strong>Глибоке покриття:</strong> детальне тестування API, бібліотек та системних викликів платформи.</li>
						<li><strong>Точність та ефективність:</strong> тести точніше виявляють дефекти і швидше виконуються.</li>
						<li><strong>Надійність:</strong> стабільна робота компонентів у цільовому середовищі.</li>
					</ul>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">Ключові аспекти:</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200">
						<li><strong>Вибір інструментів:</strong> NUnit, xUnit, MSTest, Selenium, Appium залежно від завдань.</li>
						<li><strong>Розуміння платформи:</strong> знання внутрішніх механізмів .NET, асинхронності, пам'яті.</li>
						<li><strong>Написання тестів:</strong> чітка модульна структура і повторюваність.</li>
						<li><strong>Інтеграція з CI/CD:</strong> безперервний прогін та зворотний зв'язок.</li>
					</ul>
				`
			},
			{
				title: 'Приклади тестів для .NET та питання на співбесіді',
				contentHtml: `
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Приклади платформно-специфічних тестів для .NET:</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200 mb-2">
						<li><strong>Тестування веб-додатків:</strong> Selenium WebDriver, Playwright for .NET для автоматизації браузера.</li>
						<li><strong>Тестування десктопних додатків:</strong> UI Automation, FlaUI, WinAppDriver для десктопного інтерфейсу.</li>
						<li><strong>Тестування API:</strong> RestSharp, HttpClient, Postman для тестування REST API.</li>
						<li><strong>Тестування баз даних:</strong> Entity Framework Core, Dapper для прямої перевірки даних.</li>
					</ul>

					<div class="p-2.5 rounded bg-[#091524] border border-cyan-800/50 mt-2">
						<h4 class="font-bold text-cyan-300 text-xs mb-1">Типові питання для співбесіди (Middle .NET QA):</h4>
						<ul class="list-disc list-inside space-y-0.5 text-[11px] text-cyan-200/90">
							<li>Які інструменти автоматизації тестування для .NET ви використовували?</li>
							<li>Розкажіть про свій досвід написання тестів для різних типів додатків (веб, десктоп, мобільні)?</li>
							<li>Як ви забезпечуєте підтримку і масштабування набору автоматизованих тестів?</li>
							<li>Які метрики ви використовуєте для оцінки ефективності автоматизованого тестування?</li>
						</ul>
					</div>
				`
			}
		]
	},

	// ==========================================
	// SLIDE A4: REFACTORING
	// ==========================================
	{
		id: 'a-refactoring',
		category: 'A',
		menuTitle: 'Refactoring',
		menuSub: 'Рефакторинг тестового коду',
		layout: 'grid-1',
		cards: [
			{
				title: 'Рефакторинг (Refactoring)',
				contentHtml: `
					<p class="text-sm text-slate-100 mb-3 leading-relaxed">
						<strong>Рефакторинг</strong> – це процес зміни внутрішньої структури програмного коду без зміни його зовнішньої поведінки. Це робиться для покращення читабельності, зрозумілості та підтримуваності коду.
					</p>
					<div class="space-y-3 text-xs text-slate-200">
						<div class="p-3 rounded-lg bg-[#08121f] border border-cyan-900/50">
							<h4 class="font-bold text-cyan-300 mb-1">Виявлення прихованих проблем:</h4>
							<p>Під час рефакторингу можуть бути виявлені та усунені приховані помилки або вразливості в системі завдяки спрощенню логіки та усуненню зайвої складності.</p>
						</div>
						<div class="p-3 rounded-lg bg-[#08121f] border border-cyan-900/50">
							<h4 class="font-bold text-cyan-300 mb-1">Запобігання технічному боргу:</h4>
							<p>Рефакторинг є важливою частиною процесу розробки програмного забезпечення, оскільки він допомагає підтримувати код в хорошому стані та запобігає накопиченню технічного боргу в автоматизації тестування.</p>
						</div>
					</div>
				`
			}
		]
	},

	// ==========================================
	// SLIDE A5: TEST AUTOMATION FRAMEWORK
	// ==========================================
	{
		id: 'a-framework',
		category: 'A',
		menuTitle: 'Test Automation Framework',
		menuSub: 'Фреймворк для автоматизації тестування',
		layout: 'grid-2',
		cards: [
			{
				title: 'Що таке Test Automation Framework?',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">Test Automation Framework - це сукупність інструментів та процесів, які працюють разом для підтримки автоматизованого тестування будь-якої програми. Він інтегрує різні функції, такі як бібліотеки, тестові дані та різні повторно використовувані модулі.</p>
					
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Основні компоненти Test Automation Framework:</h4>
					<ol class="list-decimal list-inside space-y-0.5 text-[11px] text-slate-200 mb-2">
						<li><strong>Тестові скрипти:</strong> набір інструкцій на мові програмування для взаємодії з системою, вводу даних та перевірки результатів.</li>
						<li><strong>Тестові дані:</strong> дані для тестування (вхідні параметри, очікувані значення).</li>
						<li><strong>Тестове середовище:</strong> апаратне та програмне оточення, де виконуються тести.</li>
						<li><strong>Тестовий фреймворк:</strong> структура, яка організовує процес (планування, виконання, звітування).</li>
					</ol>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">Переваги використання:</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200">
						<li>Швидкість (швидше за ручне тестування).</li>
						<li>Точність (зменшує людські помилки).</li>
						<li>Повторюваність без додаткових зусиль.</li>
						<li>Звільняє час тестувальників для складних задач.</li>
						<li>Раннє виявлення регресійних помилок.</li>
					</ul>
				`
			},
			{
				title: 'Вибір та ключові моменти використання фреймворку',
				contentHtml: `
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Вибір правильного фреймворку залежить від:</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-300 mb-2">
						<li>Тип проекту, технології, досвід команди, бюджет.</li>
					</ul>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">Популярні фреймворки для .NET:</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200 mb-2">
						<li><strong>Selenium WebDriver:</strong> для веб-тестування.</li>
						<li><strong>Appium:</strong> для мобільного тестування.</li>
						<li><strong>MSTest:</strong> вбудований фреймворк у Visual Studio.</li>
						<li><strong>NUnit:</strong> популярний сторонній фреймворк.</li>
						<li><strong>xUnit.net:</strong> сучасний фреймворк з потужними функціями.</li>
					</ul>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">Ключові моменти для успішного використання:</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200">
						<li>Чітке розуміння вимог, вибір відповідних інструментів.</li>
						<li>Добре структурований, чистий та підтримуваний код.</li>
						<li>Регулярне оновлення фреймворку та тестів відповідно до змін у ПЗ.</li>
						<li>Ефективне управління тестовими даними.</li>
					</ul>
				`
			}
		]
	},

	// ==========================================
	// SLIDE A6: TEST AUTOMATION INFRASTRUCTURE
	// ==========================================
	{
		id: 'a-infrastructure',
		category: 'A',
		menuTitle: 'Test Automation Infrastructure',
		menuSub: 'Інфраструктура для автоматизації тестування',
		layout: 'grid-2',
		cards: [
			{
				title: 'Інфраструктура автоматизації тестування та її компоненти',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">Інфраструктура – це сукупність програмних та апаратних засобів, які забезпечують виконання автоматизованих тестів. Вона є основою для масштабованого тестування ПЗ.</p>
					
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Тестові середовища:</h4>
					<p class="text-[11px] text-slate-200 mb-1">Імітація реальних умов роботи програми (локальні або хмарні).</p>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-300 mb-2">
						<li><strong>Конфігурованість:</strong> налаштування версій ОС, БД, серверів.</li>
						<li><strong>Ізоляція:</strong> кожен тест виконується в ізольованому оточенні.</li>
						<li><strong>Відтворюваність:</strong> можливість відтворити те саме середовище.</li>
					</ul>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">Контейнеризовані браузерні рішення:</h4>
					<p class="text-[11px] text-slate-200 mb-1">Технологія запуску браузерів в ізольованих контейнерах.</p>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-300">
						<li>Швидкість запуску (швидше ніж віртуальні машини).</li>
						<li>Портативність та ізоляція від конфліктів.</li>
						<li>Популярні рішення: <strong>Docker, Kubernetes</strong>.</li>
					</ul>
				`
			},
			{
				title: 'Device Farms, Тестові гриди та значення для .NET',
				contentHtml: `
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Device Farms:</h4>
					<p class="text-[11px] text-slate-200 mb-1">Набори реальних фізичних пристроїв (смартфони, планшети) для мобільного тестування.</p>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-300 mb-2">
						<li>Реалістичність перевірок на реальному залізі, широкий спектр пристроїв та ОС.</li>
					</ul>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">Тестові гриди:</h4>
					<p class="text-[11px] text-slate-200 mb-1">Розподілені системи для паралельного виконання тестів на множині машин (Selenium Grid, Selenoid).</p>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-300 mb-2">
						<li>Паралельний запуск значно скорочує час виконання тест-сьютів; легка масштабованість.</li>
					</ul>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">Чому це важливо для .NET розробників?</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200">
						<li>Повна автоматизація процесу від білда до звіту.</li>
						<li>Швидкий зворотний зв'язок для виправлення дефектів.</li>
						<li>Зменшення ручної рутинної роботи команди.</li>
					</ul>
				`
			}
		]
	},

	// ==========================================
	// SLIDE A7: TEST AUTOMATION PATTERNS
	// ==========================================
	{
		id: 'a-patterns',
		category: 'A',
		menuTitle: 'Test Automation Patterns',
		menuSub: 'Шаблони для автоматизації тестування',
		layout: 'grid-2',
		cards: [
			{
				title: 'Шаблони проектування автотестів: POM, DDT, KDT',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">Шаблони тестування - це узагальнені рішення та найкращі практики, які вирішують типові проблеми дублювання, синхронізації та підтримки тестів.</p>
					
					<h4 class="font-bold text-cyan-300 text-xs mb-1">1. Шаблон Page Object Model (POM):</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200 mb-2">
						<li>Розділяє тестовий код на дві частини: сторінки та самі тести.</li>
						<li>Кожна веб-сторінка представляється класом, що містить локатори елементів та методи взаємодії.</li>
						<li>Тестові кейси взаємодіють через бізнес-методи сторінки, що підвищує модульність та надійність.</li>
					</ul>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">2. Шаблон Data-Driven Testing (DDT):</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200 mb-2">
						<li>Використовує зовнішні джерела даних (CSV, JSON, Excel, DB) для параметризації тестів.</li>
						<li>Дозволяє багаторазово виконувати один тестовий сценарій з різними вхідними даними.</li>
					</ul>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">3. Шаблон Keyword-Driven Testing (KDT):</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200">
						<li>Тести складаються з послідовності ключових слів (наприклад, Open, Login, Verify), що представляють конкретні дії.</li>
					</ul>
				`
			},
			{
				title: 'BDD та критерії вибору шаблону',
				contentHtml: `
					<h4 class="font-bold text-cyan-300 text-xs mb-1">4. Шаблон Behavior-Driven Development (BDD):</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200 mb-3">
						<li>Використовує природну мову для опису функціональності з точки зору користувача.</li>
						<li>Формат "Given-When-Then" (наприклад, SpecFlow / Reqnroll, Cucumber).</li>
						<li>Покращує комунікацію між розробниками, QA та бізнес-аналітиками.</li>
					</ul>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">Вибір шаблону тестування залежить від:</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-300 mb-2">
						<li><strong>Складність проекту:</strong> для простих завдань базовий POM, для складних — BDD або Screenplay.</li>
						<li><strong>Досвід команди:</strong> вибір відповідних архітектурних шаблонів.</li>
						<li><strong>Вимоги до підтримки:</strong> модульність для довгострокових проектів.</li>
						<li><strong>Частота змін:</strong> легка адаптація до змін інтерфейсу.</li>
					</ul>
					<p class="text-[11px] text-cyan-400">Правильний вибір шаблонів підвищує підтримуваність та масштабованість фреймворку.</p>
				`
			}
		]
	},

	// ==========================================
	// SLIDE A8: VERSION CONTROL SYSTEMS (GIT)
	// ==========================================
	{
		id: 'a-vcs',
		category: 'A',
		menuTitle: 'Version Control Systems',
		menuSub: 'Системи контролю версій (Git)',
		layout: 'grid-2',
		cards: [
			{
				title: 'Git: Швидкий та гнучкий розподілений контроль версій',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">Git - це легка та швидка розподілена система контролю версій, що керує змінами за допомогою команд і підтримує нелінійні розподілені процеси.</p>
					
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Основні переваги Git:</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200 mb-2">
						<li><strong>Розподілений характер:</strong> кожен розробник має повну локальну копію репозиторію.</li>
						<li><strong>Ефективність:</strong> висока швидкість роботи навіть у великих репозиторіях.</li>
						<li><strong>Гнучкість:</strong> легке створення гілок, злиття та експерименти.</li>
						<li><strong>Надійне відстеження:</strong> фіксація кожного коміту та автора змін.</li>
					</ul>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">Ключові команди Git:</h4>
					<div class="space-y-0.5 text-[11px] font-mono text-cyan-300">
						<p><strong>git init:</strong> ініціалізує новий локальний репозиторій.</p>
						<p><strong>git clone &lt;url&gt;:</strong> клонує віддалений репозиторій.</p>
						<p><strong>git add:</strong> додає змінені файли до індексу (staging).</p>
						<p><strong>git commit -m "...":</strong> фіксує збережені зміни в історію.</p>
						<p><strong>git push / git pull:</strong> відправка та отримання змін із сервера.</p>
						<p><strong>git branch / checkout:</strong> перегляд, створення та перемикання гілок.</p>
						<p><strong>git merge:</strong> злиття змін гілок.</p>
					</div>
				`
			},
			{
				title: 'Корисні команди та приклад робочого процесу',
				contentHtml: `
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Інші корисні команди Git:</h4>
					<div class="space-y-0.5 text-[11px] font-mono text-slate-200 mb-2">
						<p><strong class="text-cyan-400">git status:</strong> стан робочого каталогу та індексу.</p>
						<p><strong class="text-cyan-400">git diff:</strong> різниця між поточною версією та індексом.</p>
						<p><strong class="text-cyan-400">git log:</strong> історія комітів.</p>
						<p><strong class="text-cyan-400">git reset --hard:</strong> відкат змін до вказаного коміту.</p>
						<p><strong class="text-cyan-400">git tag:</strong> позначення релізу або конкретного коміту тегом.</p>
						<p><strong class="text-cyan-400">git stash:</strong> тимчасове відкладення незавершених змін.</p>
					</div>

					<div class="p-2.5 rounded bg-[#081220] border border-cyan-800/60 mt-2">
						<h4 class="font-bold text-cyan-300 text-xs mb-1">Приклад простого робочого процесу (Workflow):</h4>
						<ol class="list-decimal list-inside space-y-0.5 text-[11px] font-mono text-cyan-200/90">
							<li>git clone https://github.com/org/repo.git</li>
							<li>git branch feature-login && git checkout feature-login</li>
							<li>git add .</li>
							<li>git commit -m "Додав нові автотести"</li>
							<li>git push origin feature-login</li>
							<li>Створення Pull Request для рев'ю</li>
						</ol>
					</div>
				`
			}
		]
	},

	// ==========================================
	// SLIDE A9: DATA STORAGES
	// ==========================================
	{
		id: 'a-data-storages',
		category: 'A',
		menuTitle: 'Data Storages',
		menuSub: 'Сховища даних та TDM',
		pillExtra: {
			id: 'a-sql',
			label: 'SQL'
		},
		layout: 'grid-2',
		cards: [
			{
				title: 'Робота зі сховищами даних для Automation QA (.NET)',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">Розуміння роботи з даними є ключовим для успішного автоматизованого тестування, особливо в .NET розробці.</p>
					
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Data Storages (Сховища даних):</h4>
					<p class="text-[11px] text-slate-200 mb-1">Місця, де зберігаються дані: бази даних, файли, хмарні сховища.</p>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-300 mb-2">
						<li><strong>Реляційні бази (SQL):</strong> таблиці, зв'язки, зовнішні/первинні ключі, транзакції.</li>
						<li><strong>Нереляційні бази (NoSQL):</strong> JSON, графові, документні (MongoDB, Redis).</li>
						<li><strong>Хмарні сховища:</strong> AWS S3, Azure Blob Storage, Google Cloud Storage.</li>
						<li><strong>Файлові системи:</strong> локальні та мережеві директорії.</li>
					</ul>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">SQL та NoSQL:</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200">
						<li><strong>SQL:</strong> SELECT, INSERT, UPDATE, DELETE, JOIN, агрегатні функції.</li>
						<li><strong>NoSQL:</strong> ключ-значення, документні та графові моделі даних, швидкість читання.</li>
					</ul>
				`
			},
			{
				title: 'Data Warehouses, Test Data Management та підготовка',
				contentHtml: `
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Familiarity with Data Warehouses (Сховища даних):</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-300 mb-2">
						<li><strong>OLAP:</strong> багатовимірні моделі даних, агрегація великих обсягів інформації.</li>
						<li><strong>ETL:</strong> процес завантаження даних (Extract, Transform, Load).</li>
						<li>Star Schema, Snowflake Schema.</li>
					</ul>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">Test Data Management (Управління тестовими даними):</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200 mb-2">
						<li>Генерація випадкових даних, клонування реальних знеособлених даних.</li>
						<li>Очищення даних після виконання тестів (DB cleanup).</li>
						<li>Маскування чутливих персональних даних (GDPR, PCI-DSS).</li>
						<li>Інструменти: Bogus, Faker, SQL Server Data Generator.</li>
					</ul>

					<div class="p-2.5 rounded bg-[#081220] border border-cyan-800/60 mt-1">
						<h4 class="font-bold text-cyan-300 text-xs mb-1">Як підготуватися до співбесіди:</h4>
						<ul class="list-disc list-inside space-y-0.5 text-[11px] text-cyan-200/90">
							<li>Повторіть теорію SQL, напишіть типові запити з JOIN та GROUP BY.</li>
							<li>Підготуйте приклади з реального досвіду роботи з БД у тестах.</li>
						</ul>
					</div>
				`
			}
		]
	},

	// ==========================================
	// SLIDE A10: SQL
	// ==========================================
	{
		id: 'a-sql',
		category: 'A',
		menuTitle: 'SQL',
		menuSub: 'Найчастіше використовувані команди SQL',
		layout: 'grid-1',
		cards: [
			{
				title: 'Найчастіше використовувані команди SQL для тестувальника',
				contentHtml: `
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-3">
						<div class="p-3 rounded-lg bg-[#08121f] border border-cyan-900/60">
							<h4 class="font-bold text-cyan-300 mb-1 text-sm">DDL команди (Data Definition Language)</h4>
							<div class="space-y-1 text-[11px] font-mono text-slate-200">
								<p><strong class="text-cyan-400">CREATE TABLE:</strong> Створити нову таблицю</p>
								<pre class="bg-black/50 p-1.5 rounded text-cyan-300">CREATE TABLE customers (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100)
);</pre>
								<p><strong class="text-cyan-400">ALTER TABLE:</strong> Змінити структуру таблиці</p>
								<pre class="bg-black/50 p-1.5 rounded text-cyan-300">ALTER TABLE customers ADD COLUMN phone VARCHAR(20);</pre>
								<p><strong class="text-cyan-400">DROP TABLE:</strong> Видалити таблицю</p>
								<pre class="bg-black/50 p-1.5 rounded text-cyan-300">DROP TABLE customers;</pre>
							</div>
						</div>

						<div class="p-3 rounded-lg bg-[#08121f] border border-cyan-900/60">
							<h4 class="font-bold text-cyan-300 mb-1 text-sm">DML команди (Data Manipulation Language)</h4>
							<div class="space-y-1 text-[11px] font-mono text-slate-200">
								<p><strong class="text-cyan-400">SELECT:</strong> Вибрати дані з таблиці</p>
								<pre class="bg-black/50 p-1.5 rounded text-cyan-300">SELECT * FROM customers;</pre>
								<p><strong class="text-cyan-400">INSERT INTO:</strong> Вставити новий запис</p>
								<pre class="bg-black/50 p-1.5 rounded text-cyan-300">INSERT INTO customers (name, email) 
VALUES ('John Doe', 'john@example.com');</pre>
								<p><strong class="text-cyan-400">UPDATE:</strong> Оновити існуючі записи</p>
								<pre class="bg-black/50 p-1.5 rounded text-cyan-300">UPDATE customers SET email = 'new@mail.com' WHERE id = 1;</pre>
								<p><strong class="text-cyan-400">DELETE FROM:</strong> Видалити записи</p>
								<pre class="bg-black/50 p-1.5 rounded text-cyan-300">DELETE FROM customers WHERE id = 1;</pre>
							</div>
						</div>
					</div>

					<div class="p-3 rounded-lg bg-[#08121f] border border-cyan-900/60 text-xs">
						<h4 class="font-bold text-cyan-300 mb-1 text-sm">Фільтрація, агрегація та JOIN запити:</h4>
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono mb-2">
							<p><strong>WHERE:</strong> фільтрація даних (WHERE name = 'John Doe')</p>
							<p><strong>ORDER BY:</strong> сортування результатів (ORDER BY name ASC)</p>
							<p><strong>GROUP BY:</strong> групування за стовпцями</p>
							<p><strong>HAVING:</strong> фільтрація результатів ПІСЛЯ групування</p>
							<p class="sm:col-span-2"><strong>JOIN:</strong> об'єднання даних з кількох таблиць (INNER JOIN, LEFT JOIN)</p>
						</div>

						<h5 class="font-bold text-cyan-400 text-xs mb-1">Приклад більш складного запиту на співбесіді:</h5>
						<pre class="bg-black/60 p-2 rounded text-cyan-300 text-[11px] font-mono overflow-x-auto">SELECT customers.name, orders.order_date
FROM customers
INNER JOIN orders ON customers.id = orders.customer_id
WHERE orders.order_date BETWEEN '2023-01-01' AND '2023-12-31'
ORDER BY customers.name;</pre>
					</div>
				`
			}
		]
	},

	// ==========================================
	// SLIDE A11: SOLID PRINCIPLES
	// ==========================================
	{
		id: 'a-solid',
		category: 'A',
		menuTitle: 'SOLID',
		menuSub: '5 принципів ООП у C# / .NET',
		layout: 'custom-solid',
		cards: [
			{
				title: "Single Responsibility Principle (Принцип Єдиного Обов'язку)",
				contentHtml: `
					<ul class="text-[11px] space-y-1 text-slate-200">
						<li><strong>Визначення:</strong> Клас повинен мати лише одну причину для зміни (одну чітко визначену відповідальність).</li>
						<li><strong>Мета:</strong> Зменшення зв'язності (Coupling), підвищення згуртованості (Cohesion), покращення читабельності та підтримки.</li>
						<li><strong>Приклад у C#:</strong> Замість класу Employee, який рахує зарплату, зберігає в БД та генерує звіт -> три класи: <em>SalaryCalculator, EmployeeRepository, ReportGenerator</em>.</li>
						<li><strong>Порушення:</strong> «God Class», що робить усе (бізнес-логіка, UI, БД, відправка email).</li>
					</ul>
				`
			},
			{
				title: 'Open/Closed Principle (Принцип Відкритості/Закритості)',
				contentHtml: `
					<ul class="text-[11px] space-y-1 text-slate-200">
						<li><strong>Визначення:</strong> Сутності відкриті для розширення, але закриті для модифікації.</li>
						<li><strong>Мета:</strong> Додавати нові функції без зміни існуючого перевіреного коду.</li>
						<li><strong>Приклад у C#:</strong> ReportGenerator використовує інтерфейс <em>IReportFormatter</em>. Додавання XmlFormatter не потребує змін у ReportGenerator.</li>
						<li><strong>Порушення:</strong> Багато switch/if-else для перевірки типів об'єктів при додаванні нового формату.</li>
					</ul>
				`
			},
			{
				title: 'Liskov Substitution Principle (Принцип Підстановки Барбари Лісков)',
				contentHtml: `
					<ul class="text-[11px] space-y-1 text-slate-200">
						<li><strong>Визначення:</strong> Об'єкти підтипів повинні бути замінними на екземпляри батьківського типу без порушення коректності програми.</li>
						<li><strong>Приклад у C#:</strong> Класичний приклад — квадрат і прямокутник. Якщо Square успадковує Rectangle і змінює ширину разом з висотою, він ламає очікування користувача Rectangle.</li>
						<li><strong>Порушення:</strong> Похідний клас кидає NotImplementedException або має інші постумови, ніж базовий клас.</li>
					</ul>
				`
			},
			{
				title: 'Interface Segregation Principle (Принцип Розділення Інтерфейсу)',
				contentHtml: `
					<ul class="text-[11px] space-y-1 text-slate-200">
						<li><strong>Визначення:</strong> Клієнти не повинні залежати від методів інтерфейсу, які вони не використовують. Краще багато вузьких інтерфейсів, ніж один жирний.</li>
						<li><strong>Приклад у C#:</strong> Замість <em>IWorker { Work(); Eat(); Sleep(); }</em>, створюємо <em>IWorkable, IEatable, ISleepable</em>. Тоді RobotWorker реалізує тільки IWorkable без порожніх методів Eat/Sleep.</li>
						<li><strong>Порушення:</strong> «Товсті» інтерфейси (Fat interfaces), що змушують класи реалізовувати непотрібні методи.</li>
					</ul>
				`
			},
			{
				title: 'Dependency Inversion Principle (Принцип Інверсії Залежностей)',
				contentHtml: `
					<ul class="text-[11px] space-y-1 text-slate-200">
						<li><strong>Визначення:</strong> Модулі вищого рівня не повинні залежати від модулів нижчого рівня; обидва залежать від абстракцій (інтерфейсів).</li>
						<li><strong>Приклад у C#:</strong> NotificationService залежить від абстракції <em>IMessageSender</em>, яка передається через конструктор (DI), а не створює напряму new EmailSender().</li>
						<li><strong>Порушення:</strong> Жорстке створення new EmailSender() у високорівневих сервісах.</li>
					</ul>
				`
			}
		]
	}
];
