export interface SlideCard {
	title?: string;
	contentHtml?: string;
	colSpan?: number; // 1, 2, or 3
}

export interface Slide {
	id: string;
	category: 'M' | 'A' | 'C' | 'F';
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
		menuSub: 'Що таке тестування, STLC, Тест-план, Тест-дизайн',
		layout: 'custom-m1',
		cards: [
			{
				title: 'Що таке тестування?',
				contentHtml: `
					<p class="mb-2">Тестування - це процес перевірки програмного забезпечення з метою валідації відповідності вимогам (фактична та очікувана поведінка програми) та виявлення дефектів.</p>
					<h4 class="font-bold text-cyan-300 mt-2 mb-1">Тестування програмного забезпечення</h4>
					<p>дисципліна та процес контролю якості (Quality Control), що включає активності з планування робіт (Test Management), проектування тестів (Test Design), виконання тестування (Test Execution) і аналізу отриманих результатів (Test Analysis).</p>
				`
			},
			{
				title: 'Software Quality | Якість програмного забезпечення',
				contentHtml: `
					<p>— ступінь відповідності сукупності властивих характеристик ПЗ встановленим та передбачуваним потребам користувачів і бізнесу (стандарт ISO 25010). <span class="text-cyan-400 font-mono">[Quality management & Quality assurance]</span></p>
				`
			},
			{
				title: 'Testing goals | Цілі тестування',
				contentHtml: `
					<ul class="list-disc list-inside space-y-1 text-slate-200">
						<li>Підвищити ймовірність того, що програма буде коректно та стабільно працювати за визначених умов експлуатації.</li>
						<li>Підтвердити відповідність реалізації всім задокументованим бізнес- та функціональним вимогам.</li>
						<li>Надання актуальної та об'єктивної інформації про стан і якість продукту стейкхолдерам для прийняття рішень про реліз.</li>
						<li>Запобігання виникненню дефектів на ранніх етапах та зниження ризиків відмов.</li>
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
				title: 'Тест-дизайн',
				contentHtml: `
					<p class="mb-1">— це етап процесу тестування ПЗ, на якому проектуються та створюються тестові сценарії (тест-кейси) відповідно до визначених критеріїв якості та цілей тестування.</p>
					<p class="font-semibold text-cyan-300">Ролі, відповідальні за тест-дизайн:</p>
					<ul class="list-disc list-inside space-y-0.5 text-slate-200">
						<li><strong>Тест-аналітик</strong> — визначає «ЩО тестувати?»</li>
						<li><strong>Тест-дизайнер</strong> — визначає «ЯК тестувати?»</li>
					</ul>
				`
			},
			{
				title: 'Основні пункти тест плану',
				contentHtml: `
					<p class="mb-1 text-[11px] text-cyan-400">У стандарті IEEE 829 перераховані пункти, з яких повинен (або може) складатися тест-план:</p>
					<ol class="space-y-0.5 text-[11px] font-mono leading-tight">
						<li><strong class="text-cyan-300">A. Test plan identifier</strong> | ідентифікатор плану тестування;</li>
						<li><strong class="text-cyan-300">B. Introduction</strong> | вступ</li>
						<li><strong class="text-cyan-300">C. Test items</strong> | Об'єкти тестування (модулі, системи);</li>
						<li><strong class="text-cyan-300">D. Features to be tested</strong> | характеристики, що підлягають перевірці</li>
						<li><strong class="text-cyan-300">E. Features not to be tested</strong> | Функції, які не підлягають тестуванню</li>
						<li><strong class="text-cyan-300">F. Approach</strong> | підхід</li>
						<li><strong class="text-cyan-300">G. Item pass|fail criteria</strong> | Критерії проходження|непроходження пункту;</li>
						<li><strong class="text-cyan-300">H. Suspension criteria and resumption requirements</strong> | критерії призупинення та вимоги до відновлення;</li>
						<li><strong class="text-cyan-300">I. Test deliverables</strong> | Результати тестування</li>
						<li><strong class="text-cyan-300">J. Testing tasks</strong> | Тестові завдання</li>
						<li><strong class="text-cyan-300">K. Environmental needs</strong> | Потреби в тестовому середовищі (стенди, ОС, БД)</li>
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
					<p class="mb-2 text-xs">це документ, який описує весь обсяг робіт з тестування, починаючи з опису об'єкта, стратегії, графіків і розкладу, критеріїв початку та завершення тестування, до необхідного обладнання, спеціальних знань, а також оцінки ризиків зі шляхами їх мінімізації та усунення.</p>
					<h4 class="font-bold text-cyan-300 mb-1 text-xs">Відповідає на питання:</h4>
					<ul class="list-disc list-inside space-y-0.5 text-xs text-slate-200">
						<li>Що потрібно тестувати?</li>
						<li>Що (по факту) будемо тестувати?</li>
						<li>Як будемо тестувати?</li>
						<li>Коли будемо тестувати?</li>
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
							<strong class="text-cyan-400">Build Verification Test (BVT) | Тестування збірки:</strong>
							перевірка базових можливостей білда та належної інтеграції компонентів перед початком детального тестування.
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
							<p><strong>a. Load testing | Навантаження:</strong> поведінка під очікуваним робочим навантаженням, виявлення вузьких місць.</p>
							<p><strong>b. Stress testing | Стрес-тестування:</strong> межі стійкості системи при екстремальному навантаженні.</p>
							<p><strong>c. Volume testing | Тестування великих обсягів:</strong> робота системи з великими базами даних та файлами.</p>
							<p><strong>d. Soak / Endurance testing | Витривалість:</strong> тривала робота під навантаженням для виявлення витоків пам'яті (memory leaks).</p>
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
		menuSub: 'Техніки тест-дизайну, Severity vs Priority',
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
					<p class="font-mono text-cyan-300 text-xs mb-1">Validation — 'Are we building the right product?'</p>
					<p class="text-xs text-slate-300 mb-1">Валідація — «Чи правильний продукт ми розробляємо?»</p>
					<p class="text-xs text-slate-200 mb-1">це оцінка відповідності розроблюваного ПЗ очікуванням, потребам користувача та бізнес-вимогам [BS7925-1 / ISTQB].</p>
					<p class="text-[11px] text-cyan-400 bg-cyan-950/40 p-2 rounded border border-cyan-800/40">Верифікація — «Чи правильно ми створюємо продукт?» (відповідність ТЗ/специфікаціям). Валідація — «Чи правильний продукт ми створили?» (відповідність потребам користувачів).</p>
				`
			},
			{
				title: 'Техніки тест-дизайну | Design test techniques',
				contentHtml: `
					<ul class="space-y-1.5 text-xs text-slate-200">
						<li>
							<strong class="text-cyan-300">Еквівалентний поділ (Equivalence Partitioning — EP):</strong>
							<p class="text-slate-300 text-[11px] pl-2">розподіл вхідних даних на класи: валідні (всередині діапазону) та невалідні (поза діапазоном). Наприклад, для 1..10: обрати 5 (валідний), 0 та 11 (невалідні).</p>
						</li>
						<li>
							<strong class="text-cyan-300">Аналіз граничних значень (Boundary Value Analysis — BVA):</strong>
							<p class="text-slate-300 text-[11px] pl-2">перевірка меж та значень біля них (для 1..10: граничні точки 0, 1, 10, 11).</p>
						</li>
						<li>
							<strong class="text-cyan-300">Таблиці рішень (Decision Table Testing):</strong>
							<p class="text-slate-300 text-[11px] pl-2">структурування складних бізнес-правил та комбінацій вхідних умов для вибору дій системи.</p>
						</li>
						<li>
							<strong class="text-cyan-300">Діаграма переходів станів (State Transition Testing):</strong>
							<p class="text-slate-300 text-[11px] pl-2">перевірка переходів між різними життєвими циклами об'єкта (наприклад: New → In Progress → Closed).</p>
						</li>
						<li>
							<strong class="text-cyan-300">Попарне тестування (Pairwise Testing):</strong>
							<p class="text-slate-300 text-[11px] pl-2">оптимальний набір комбінацій, де кожна пара значень параметрів тестується щонайменше один раз.</p>
						</li>
						<li>
							<strong class="text-cyan-300">Передбачення помилки (Error Guessing — EG):</strong>
							<p class="text-slate-300 text-[11px] pl-2">досвід та інтуїція тестувальника: «Що буде при некоректному форматі даних чи порожніх полях?»</p>
						</li>
						<li>
							<strong class="text-cyan-300">Вичерпне тестування (Exhaustive Testing — ET):</strong>
							<p class="text-slate-300 text-[11px] pl-2">перевірка всіх можливих комбінацій. Практично неможливе (принцип ISTQB №2).</p>
						</li>
					</ul>
				`
			},
			{
				title: 'Severity vs Priority',
				contentHtml: `
					<p class="text-xs text-slate-200 mb-2">
						<strong>Серйозність (Severity)</strong> — атрибут, що характеризує технічний вплив дефекту на працездатність програми (виставляється тестувальником).<br>
						<strong>Пріоритет (Priority)</strong> — атрибут, що вказує на черговість виконання завдання або усунення дефекту для бізнесу (виставляється менеджером, Product Owner, лідом або замовником).
					</p>
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Градація Серйозності дефекту (Severity):</h4>
					<ul class="text-[11px] space-y-1 mb-2 text-slate-300">
						<li><strong class="text-cyan-400">S1 Блокуюча (Blocker):</strong> повна зупинка системи або критичної функції, робота з програмою неможлива, тестування заблоковано.</li>
						<li><strong class="text-cyan-400">S2 Критична (Critical):</strong> не працює ключова бізнес-логіка, діра в безпеці, падіння сервера без можливості обходу (no workaround).</li>
						<li><strong class="text-cyan-400">S3 Значна (Major):</strong> частина логіки працює некоректно, але є обхідний шлях (workaround).</li>
						<li><strong class="text-cyan-400">S4 Незначна (Minor):</strong> не порушує бізнес-логіку, очевидна невідповідність інтерфейсу (UI).</li>
						<li><strong class="text-cyan-400">S5 Тривіальна (Trivial):</strong> малопомітна проблема UI, одруківка в тексті, не впливає на загальну якість.</li>
					</ul>
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Градація Пріоритету дефекту (Priority):</h4>
					<ul class="text-[11px] space-y-0.5 text-slate-300">
						<li><strong class="text-cyan-400">P1 Високий (High):</strong> виправити якнайшвидше, критично для релізу/проекту.</li>
						<li><strong class="text-cyan-400">P2 Середній (Medium):</strong> не блокує реліз, але обов'язкове до виправлення.</li>
						<li><strong class="text-cyan-400">P3 Низький (Low):</strong> не вимагає термінового виправлення, за наявності часу.</li>
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
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Ключові обов'язкові складові тест-кейсу:</h4>
					<ul class="text-[11px] space-y-1 text-slate-300">
						<li><strong>PreConditions:</strong> умови чи стан системи, необхідні для проведення перевірки.</li>
						<li><strong>Steps:</strong> чітка послідовність дій для перевірки функціоналу.</li>
						<li><strong>Expected Result:</strong> обов'язковий очікуваний результат згідно зі специфікацією.</li>
						<li><strong>PostConditions:</strong> повернення системи у початковий вихідний стан (teardown/cleanup).</li>
					</ul>
				`
			},
			{
				title: 'Чек-лист (Checklist) | список перевірок',
				contentHtml: `
					<p class="text-xs text-slate-200 mb-1">це документ, який описує, що повинно бути протестовано. Може бути абсолютно різного рівня деталізації залежно від вимог та складності продукту.</p>
					<p class="text-xs text-slate-300 mb-1">Як правило, чек-лист містить тільки дії (кроки) без надлишкового очікуваного результату.</p>
					<p class="text-[11px] text-cyan-300 font-semibold">Чек-лист менш формалізований, ніж тестовий сценарій. Його доречно використовувати в Agile, коли тест-кейси є надлишковими.</p>
				`
			},
			{
				title: 'Дефект / Error / Bug / Failure',
				contentHtml: `
					<div class="space-y-2 text-xs">
						<div>
							<strong class="text-amber-300 block">Error / Mistake (Помилка людини):</strong>
							<span class="text-slate-300 text-[11px]">дія людини (розробника, архітектора, тестувальника), що призводить до дефекту в коді чи документації. Також помилкова дія користувача (некоректне введення даних).</span>
						</div>
						<div>
							<strong class="text-rose-400 block">Bug / Defect (Дефект / Баг):</strong>
							<span class="text-slate-300 text-[11px]">недолік або невідповідність у коді чи специфікації, створений внаслідок помилки людини, що спричиняє неправильну роботу системи.</span>
						</div>
						<div>
							<strong class="text-purple-400 block">Failure (Збій / Відмова):</strong>
							<span class="text-slate-300 text-[11px]">подія під час виконання, коли система відхиляється від очікуваної роботи (краш, збій програми під час виконання).</span>
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
						<p><strong class="text-cyan-400">Заголовок / Шапка:</strong></p>
						<ul class="list-disc list-inside pl-2 space-y-0.5 text-slate-300">
							<li><strong>Короткий опис (Summary):</strong> Що? Де? Коли? (однозначно та стисло)</li>
							<li><strong>Проект (Project) & Компонент (Component)</strong></li>
							<li><strong>Номер версії (Version) & Автор (Author) & Призначено на (Assigned To)</strong></li>
							<li><strong>Серйозність (Severity):</strong> S1 Blocker, S2 Critical, S3 Major, S4 Minor, S5 Trivial</li>
							<li><strong>Пріоритет (Priority):</strong> P1 High, P2 Medium, P3 Low</li>
							<li><strong>Статус (Status):</strong> Життєвий цикл дефекту (New, Open, In Progress, Resolved, Closed)</li>
						</ul>
						<p><strong class="text-cyan-400 mt-1 block">Оточення (Environment):</strong> ОС, Браузер + версія, Service Pack / версія ОС, роздільна здатність, пристрій.</p>
						<p><strong class="text-cyan-400 mt-1 block">Опис (Description):</strong></p>
						<ul class="list-disc list-inside pl-2 space-y-0.5 text-slate-300">
							<li>Кроки відтворення (Steps to Reproduce)</li>
							<li>Фактичний результат (Actual Result)</li>
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
						<li><strong>Впровадження залежностей (Dependency Injection — DI):</strong> зменшує зв'язність (coupling), полегшує створення ізольованих тестових сервісів та передачу інстансів WebDriver/конфігурацій.</li>
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
					<p class="text-sm text-slate-100 mb-2 leading-relaxed">
						<strong>Рефакторинг</strong> – це процес зміни внутрішньої структури програмного коду без зміни його зовнішньої поведінки. Це робиться для покращення читабельності, зрозумілості та підтримуваності коду.
					</p>
					<div class="space-y-2 text-xs text-slate-200">
						<div class="p-2.5 rounded-lg bg-[#08121f] border border-cyan-900/50">
							<h4 class="font-bold text-cyan-300 mb-0.5">Усунення «Test Smells» в автотестах:</h4>
							<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-300">
								<li><strong>Hardcoded Sleeps:</strong> заміна статичних Thread.Sleep на явні динамічні очікування (WebDriverWait / Playwright auto-waiting).</li>
								<li><strong>Дублювання локаторів:</strong> винесення селекторів у класи сторінок (Page Objects / Components).</li>
								<li><strong>Assert Roulette:</strong> розбиття перевантажених тестів на сфокусовані атомарні перевірки з інформативними повідомленнями.</li>
								<li><strong>Flaky Tests:</strong> усунення недетермінованих падінь через race conditions та асинхронні запити.</li>
							</ul>
						</div>
						<div class="p-2.5 rounded-lg bg-[#08121f] border border-cyan-900/50">
							<h4 class="font-bold text-cyan-300 mb-0.5">Запобігання технічному боргу:</h4>
							<p class="text-[11px] text-slate-300">Регулярний рефакторинг тестового фреймворку підтримує високу швидкість виконання, спрощує онбординг нових інженерів і запобігає «старінню» кодової бази.</p>
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
						<li><strong>Тестові скрипти:</strong> набір перевірок на C# для взаємодії з системою, вводу даних та асертів.</li>
						<li><strong>Тестові дані:</strong> параметризація (вхідні параметри, очікувані значення, фейкери).</li>
						<li><strong>Тестове середовище:</strong> інфраструктура запуску (Docker, локальні браузери, Grid).</li>
						<li><strong>Тестовий раннер:</strong> структура, що організовує паралельний запуск та життєвий цикл тестів.</li>
						<li><strong>Рівень звітності (Reporting):</strong> інформативні звіти з логами та скріншотами (Allure, ExtentReports).</li>
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

					<h4 class="font-bold text-cyan-300 text-xs mb-1">Популярні фреймворки та інструменти для .NET:</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200 mb-2">
						<li><strong>Playwright for .NET / Selenium WebDriver:</strong> для веб-тестування.</li>
						<li><strong>Appium:</strong> для мобільного тестування (iOS, Android).</li>
						<li><strong>NUnit / xUnit.net:</strong> потужні та сучасні тестові раннери.</li>
						<li><strong>RestSharp / HttpClient:</strong> для перевірки API сервісів.</li>
						<li><strong>Allure Report:</strong> наочна візуалізація результатів прогонів.</li>
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
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200 mb-2">
						<li>Використовує природну мову для опису функціональності з точки зору користувача.</li>
						<li>Формат "Given-When-Then" (наприклад, Reqnroll / SpecFlow у .NET, Cucumber).</li>
						<li>Покращує комунікацію між розробниками, QA та бізнес-аналітиками.</li>
					</ul>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">5. Fluent Interface (Method Chaining):</h4>
					<p class="text-[11px] text-slate-200 mb-2">Методи дій сторінки повертають екземпляр сторінки для створення зв'язних ланцюжків: <code>loginPage.EnterEmail().EnterPass().ClickSubmit();</code></p>

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
	},

	// ==========================================
	// SENIOR AUTOMATION QA CONSULTANT (C) SLIDES
	// (Native Windows, Electron, C#/.NET, Playwright, OCR, CI, Upgrades)
	// ==========================================
	{
		id: 'c-strategy',
		category: 'C',
		menuTitle: 'Consulting Strategy & PoC',
		menuSub: 'План 4-тижневого консалтингу: від аудиту до фундаменту',
		layout: 'grid-2',
		cards: [
			{
				title: 'План та таймлайн консалтингу (4 тижні)',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">Головна мета консалтингу — не «стратегічний PDF-документ», а практичний, підтримуваний фундамент автоматизації для нативного Windows додатку з працюючим CI/CD.</p>
					
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Покроковий 4-тижневий план впровадження:</h4>
					<div class="space-y-1.5 text-[11px] text-slate-200">
						<div class="p-2 rounded bg-[#08121f] border border-cyan-900/50">
							<strong class="text-cyan-400">Тиждень 1: Технічний аудит та виявлення прогалин (Gaps)</strong>
							<p class="text-slate-300">Аналіз наявних .NET, OCR, Electron та інсталяційних перевірок. Складання карти прогалин у регресійному тестуванні мерчантів, перевірці оновлень (app upgrades) та релізній валідації.</p>
						</div>
						<div class="p-2 rounded bg-[#08121f] border border-cyan-900/50">
							<strong class="text-cyan-400">Тиждень 2: Архітектурне розмежування та мінімальний стек</strong>
							<p class="text-slate-300">Розділення шарів тестування: Electron UI (Playwright/TS), фонові служби та оновлення (.NET/C#), візуальна інтеграція (Screenshots/OCR). Формування та узгодження ADR.</p>
						</div>
						<div class="p-2 rounded bg-[#08121f] border border-cyan-900/50">
							<strong class="text-cyan-400">Тиждень 3: Працюючі Proof of Concept (PoC) на критичних флоу</strong>
							<p class="text-slate-300">Реалізація 3-х ключових PoC: 1) Target Merchant App Flow; 2) Screenshot-based інтеграція з OCR; 3) Автоматизована перевірка Application Upgrade.</p>
						</div>
						<div class="p-2 rounded bg-[#08121f] border border-cyan-900/50">
							<strong class="text-cyan-400">Тиждень 4: Windows CI-пайплайн, тестова матриця та Handover</strong>
							<p class="text-slate-300">Розгортання Windows CI runner шаблонів, матриця дисплеїв (DPI, multi-monitor), walk-through для ліда команди та передача інструкцій штатному інженеру.</p>
						</div>
					</div>
				`
			},
			{
				title: 'Критерії успішного Handover (Що отримує бізнес)',
				contentHtml: `
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Артефакти здачі проекту клієнту (Deliverables):</h4>
					<ul class="list-disc list-inside space-y-1 text-[11px] text-slate-200 mb-2">
						<li><strong>Runnable PoC Repository:</strong> репозиторій з чистою модульною архітектурою, готовими фікстурами та конфігураціями середовища.</li>
						<li><strong>Green Windows CI Pipeline:</strong> стабільні шаблони пайплайнів (GitHub Actions / Azure DevOps / GitLab) без флакі-тестів та проблем із Session 0.</li>
						<li><strong>Test Matrix & Priorities:</strong> чітка матриця покриття: що ганяється на PR (5 хв), а що йде в нічний повний регрес.</li>
						<li><strong>Architecture Decision Records (ADR):</strong> обґрунтування вибору інструментів та відмови від застарілих рішень (наприклад, WinAppDriver).</li>
						<li><strong>Runbooks & Troubleshooting:</strong> покрокова інструкція для Project Lead з локального запуску, аналізу звітів і підтримки фреймворку штатною командою.</li>
					</ul>

					<div class="p-2 rounded bg-cyan-950/40 border border-cyan-800/40 text-[11px] text-cyan-200">
						<strong class="text-cyan-300">Формула успіху консультанта:</strong> «Не залишати абстрактних документів на 50 сторінок. Залишити працюючий інструмент, зелені білди і чіткий шлях, який штатний інженер може масштабувати з першого дня».
					</div>
				`
			}
		]
	},

	// ==========================================
	// SLIDE C2: ELECTRON VS NATIVE WINDOWS
	// ==========================================
	{
		id: 'c-electron-vs-native',
		category: 'C',
		menuTitle: 'Electron vs Native Windows',
		menuSub: 'Демаркація меж Playwright vs нативні Windows інструменти',
		layout: 'grid-2',
		cards: [
			{
				title: 'Можливості та межі Playwright в Electron',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">Playwright підтримує Electron з коробки через експериментальний модуль <code>_electron.launch({ args: ['main.js'] })</code>, керуючи Chromium рендерером через Chrome DevTools Protocol (CDP).</p>
					
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Що Playwright робить ІДЕАЛЬНО (Швидко & Стабільно):</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200 mb-2">
						<li><strong>Веб-інтерфейс у вікні Electron:</strong> повний доступ до DOM-дерева, компонентів React/Vue, форм введення даних мерчанта.</li>
						<li><strong>Швидкі локатори та auto-waiting:</strong> усуває необхідність у ручних очікуваннях.</li>
						<li><strong>Мокування бекенду:</strong> підміна мережевих запитів через <code>page.route()</code> для ізольованого тестування UI.</li>
						<li><strong>Емуляція IPC повідомлень:</strong> перехоплення та виклик методів <code>ipcRenderer</code> / <code>ipcMain</code> безпосередньо в рантаймі.</li>
						<li><strong>Вбудовані артефакти:</strong> автоматичний запис Playwright Trace Viewer, скріншотів та відео.</li>
					</ul>
					<p class="text-[11px] text-cyan-400">Playwright покриває до 85-90% бізнес-сценаріїв мерчант-додатку з максимальною швидкістю виконання.</p>
				`
			},
			{
				title: 'Коли потрібні нативні Windows інструменти (.NET / FlaUI)',
				contentHtml: `
					<h4 class="font-bold text-rose-400 text-xs mb-1">Що Playwright ПРИНЦИПОВО НЕ МОЖЕ протестувати:</h4>
					<div class="space-y-1 text-[11px] text-slate-200 mb-2">
						<p><strong class="text-cyan-400">1. Системний трей (System Tray / Notification Area):</strong> меню правої кнопки миші біля годинника Windows, запуск додатку згорнутим у трей.</p>
						<p><strong class="text-cyan-400">2. Нативні діалоги Win32 / Common Dialogs:</strong> системні вікна Open File / Save File, вікна вибору сертифікатів, запити UAC (User Account Control).</p>
						<p><strong class="text-cyan-400">3. Windows Services & Background Updaters:</strong> фонові процеси оновлення, демони, зв'язок через Named Pipes та локальні сокети.</p>
						<p><strong class="text-cyan-400">4. Інсталяція, оновлення та реєстр:</strong> запуск MSI/InnoSetup інсталяторів, перевірка автозапуску в реєстрі (HKLM/HKCU).</p>
						<p><strong class="text-cyan-400">5. Взаємодія зі стороннім софтом:</strong> POS-термінали, касові драйвери або legacy Win32/WPF вікна без доступу до Chromium.</p>
					</div>
					<div class="p-2 rounded bg-[#091524] border border-cyan-800/50 text-[11px] text-slate-300">
						<strong class="text-cyan-300">Правило демаркації:</strong> Все, що знаходиться всередині Chromium вікна Electron — тестується Playwright (TS). Все, що стосується ОС Windows, трею, інсталяторів та процесів — тестується через C# / .NET (FlaUI, System.Management, Registry).
					</div>
				`
			}
		]
	},

	// ==========================================
	// SLIDE C3: MINIMAL SUITABLE TOOLSET
	// ==========================================
	{
		id: 'c-toolset',
		category: 'C',
		menuTitle: 'Minimal Toolset Architecture',
		menuSub: 'Мінімальний набір інструментів: Playwright TS + C#/.NET FlaUI',
		layout: 'grid-2',
		cards: [
			{
				title: 'Принцип «Smallest Suitable Toolset»',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">Консультант повинен запобігти переускладненню (Over-engineering). Замість «зоопарку» з 4-5 різних бібліотек вибудовується двокомпонентне ядро:</p>
					
					<div class="space-y-2 text-[11px] text-slate-200 mb-2">
						<div class="p-2.5 rounded bg-[#08121f] border border-cyan-800/60">
							<strong class="text-cyan-300 text-xs block mb-1">Компонент 1: Playwright + TypeScript (Electron UI)</strong>
							<ul class="list-disc list-inside space-y-0.5 text-slate-300">
								<li>Покриває 85-90% регресійних тестів інтерфейсу мерчанта.</li>
								<li>Найшвидший запуск, підтримка параллелізму, headless/headed режим.</li>
								<li>Єдина екосистема з фронтенд-розробниками (TypeScript, NPM).</li>
							</ul>
						</div>

						<div class="p-2.5 rounded bg-[#08121f] border border-cyan-800/60">
							<strong class="text-cyan-300 text-xs block mb-1">Компонент 2: C# / .NET + FlaUI (Native Windows)</strong>
							<ul class="list-disc list-inside space-y-0.5 text-slate-300">
								<li>Покриває 10-15% системних перевірок (інсталятори, трей, оновлення, служби).</li>
								<li>Прямий доступ до Windows UI Automation (UIA3) та Win32 API.</li>
								<li>Нативна інтеграція з .NET стеком бекенду додатку.</li>
							</ul>
						</div>
					</div>
					<p class="text-[11px] text-cyan-400">Цей набір забезпечує 100% покриття без зайвих залежностей та конфліктів.</p>
				`
			},
			{
				title: 'Чому FlaUI замість WinAppDriver або Appium?',
				contentHtml: `
					<table class="w-full text-left border-collapse text-[11px] mb-2">
						<thead>
							<tr class="border-b border-cyan-800 text-cyan-300">
								<th class="py-1">Критерій</th>
								<th class="py-1">WinAppDriver</th>
								<th class="py-1 text-emerald-400">FlaUI (.NET)</th>
							</tr>
						</thead>
						<tbody class="text-slate-300 divide-y divide-slate-800">
							<tr>
								<td class="py-1 font-semibold">Стан проекту</td>
								<td class="text-rose-400">Практично закинутий MS</td>
								<td class="text-emerald-400">Активний Open-Source</td>
							</tr>
							<tr>
								<td class="py-1 font-semibold">Windows 11 & DPI</td>
								<td class="text-amber-400">Часті збої координат</td>
								<td class="text-emerald-400">Повна нативна сумісність</td>
							</tr>
							<tr>
								<td class="py-1 font-semibold">Архітектура</td>
								<td>Вимагає фоновий exe-сервер</td>
								<td class="text-emerald-400">Пряма C# DLL бібліотека</td>
							</tr>
							<tr>
								<td class="py-1 font-semibold">Швидкодія</td>
								<td>HTTP WebDriver overhead</td>
								<td class="text-emerald-400">Миттєві прямі COM-виклики</td>
							</tr>
							<tr>
								<td class="py-1 font-semibold">Події Windows</td>
								<td>Обмежені</td>
								<td class="text-emerald-400">UIA3 Automation Events</td>
							</tr>
						</tbody>
					</table>

					<div class="p-2 rounded bg-[#091524] border border-cyan-800/50 text-[11px] text-slate-300">
						<strong class="text-cyan-300">Експертний висновок для ліда:</strong> WinAppDriver додає нестабільність і зайвий шар абстракції. FlaUI дозволяє писати надійні C# тести для Windows без сторонніх серверів.
					</div>
				`
			}
		]
	},

	// ==========================================
	// SLIDE C4: SCREENSHOTS & OCR
	// ==========================================
	{
		id: 'c-visual-ocr',
		category: 'C',
		menuTitle: 'Visual Regression & OCR',
		menuSub: "Тестування скріншотами, OCR та комп'ютерний зір",
		layout: 'grid-2',
		cards: [
			{
				title: 'Скріншотні перевірки та OCR у закритих середовищах',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">У додатках для мерчантів часто виникають сценарії, де Accessibility дерево недоступне: фіскальні чеки, графічні канваси, POS-екрани або сторонні плагіни.</p>
					
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Методи тестування:</h4>
					<div class="space-y-1.5 text-[11px] text-slate-200">
						<div class="p-2 rounded bg-[#08121f] border border-cyan-900/50">
							<strong class="text-cyan-400">1. Screenshot Comparison (Playwright):</strong>
							<p class="text-slate-300"><code>expect(page).toHaveScreenshot('receipt.png', { maxDiffPixelRatio: 0.02 })</code>. Порівняння рендерингу з еталоном піксель-у-піксель.</p>
						</div>
						<div class="p-2 rounded bg-[#08121f] border border-cyan-900/50">
							<strong class="text-cyan-400">2. Optical Character Recognition (OCR — Tesseract):</strong>
							<p class="text-slate-300">Вичитування динамічного тексту (сум платежів, номерів замовлень, статусів) з графічних областей через <code>Tesseract.js</code> або <code>Tesseract .NET</code>.</p>
						</div>
						<div class="p-2 rounded bg-[#08121f] border border-cyan-900/50">
							<strong class="text-cyan-400">3. Template Matching (OpenCV / Emgu CV):</strong>
							<p class="text-slate-300">Знаходження іконок статусу, логотипів банків чи кнопок на екрані за зразком зображення, коли немає локаторів.</p>
						</div>
					</div>
				`
			},
			{
				title: 'Підводні камені візуальних тестів та методи боротьби',
				contentHtml: `
					<h4 class="font-bold text-rose-400 text-xs mb-1">Головні причини хибних спрацьовувань (Flakiness):</h4>
					<ul class="list-disc list-inside space-y-1 text-[11px] text-slate-200 mb-2">
						<li><strong>Динамічні дані:</strong> дати, час, секунди, номери сесій, миготливий текстовий курсор.</li>
						<li><strong>Антиаліасинг та субпіксельний рендеринг:</strong> різниця рендерингу шрифтів на різних відеокартах або версіях Windows (ClearType).</li>
						<li><strong>DPI масштабування:</strong> запуск на 100% vs 125% дає повністю різні скріншоти.</li>
					</ul>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">Інженерні рішення консультанта:</h4>
					<div class="space-y-1 text-[11px] text-slate-300">
						<p>• <strong>Masking:</strong> маскування динамічних зон: <code>toHaveScreenshot({ mask: [page.locator('.timestamp')] })</code>.</p>
						<p>• <strong>Freeze Timers:</strong> фіксація системного часу через <code>page.clock.setFixedTime()</code>.</p>
						<p>• <strong>Disable CSS Animations:</strong> автоматичне відключення CSS перевантажень та переходів перед знімком.</p>
						<p>• <strong>CI Strict Resolution:</strong> фіксований віртуальний екран 1920x1080x32 у Windows CI.</p>
					</div>
				`
			}
		]
	},

	// ==========================================
	// SLIDE C5: UPGRADES, INSTALLERS & SERVICES
	// ==========================================
	{
		id: 'c-upgrades-installers',
		category: 'C',
		menuTitle: 'Upgrades, Installers & Services',
		menuSub: 'Тестування інсталяторів (MSI/NSIS/Squirrel), апдейтів та фонових служб',
		layout: 'grid-2',
		cards: [
			{
				title: 'Тестування інсталяторів та розгортання',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">Інсталятор — це перша точка контакту мерчанта з додатком. Помилка інсталяції блокує 100% користувачів.</p>
					
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Специфіка автоматизації інсталяторів:</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200 mb-2">
						<li><strong>Silent / Unattended Install:</strong> тестування ключів тихого встановлення (<code>/S</code>, <code>/qn</code>, <code>/VERYSILENT</code>) з перевіркою Exit Code <code>0</code>.</li>
						<li><strong>Перевірка структури файлової системи:</strong> цілісність бінарників у <code>%LocalAppData%\\Programs</code> або <code>%ProgramFiles%</code>.</li>
						<li><strong>Валідація цифрового підпису:</strong> перевірка сертифіката через <code>signtool.exe verify /pa</code> для запобігання попередженням Windows Defender / SmartScreen.</li>
						<li><strong>Перевірка системного реєстру:</strong> коректність ключів деінсталяції у <code>HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall</code>.</li>
						<li><strong>Асоціації протоколів (Deep Links):</strong> реєстрація кастомних протоколів (наприклад, <code>merchantapp://pay</code>).</li>
					</ul>
				`
			},
			{
				title: 'Життєвий цикл оновлень (App Upgrades) та фонові служби',
				contentHtml: `
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Тестування оновлення версії (N → N+1):</h4>
					<div class="space-y-1 text-[11px] text-slate-200 mb-2">
						<p><strong class="text-cyan-400">1. Збереження сесії та даних (State Persistence):</strong> встановлення версії N → авторизація мерчанта, збереження локальної бази (SQLite / IndexedDB) → запуск автооновлення на N+1 → перевірка збереження сесії без повторного логіну.</p>
						<p><strong class="text-cyan-400">2. Блокування файлів (File Locks):</strong> оновлення додатку у фоні, поки мерчант працює; валідація механізму Windows Restart Manager.</p>
						<p><strong class="text-cyan-400">3. Rollback (Відкат):</strong> аварійне завершення оновлення не повинно призводити до неробочого стану програми.</p>
					</div>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">Тестування Windows Services:</h4>
					<p class="text-[11px] text-slate-300">Перевірка статусу через PowerShell (<code>Get-Service</code>) або C# <code>ServiceController</code>: запуск служби, авторестарт при збоях, робота під LocalSystem обліковим записом без витоків пам'яті.</p>
				`
			}
		]
	},

	// ==========================================
	// SLIDE C6: MULTI-MONITOR & DPI
	// ==========================================
	{
		id: 'c-matrix-monitors',
		category: 'C',
		menuTitle: 'Multi-Monitor & DPI Matrix',
		menuSub: 'Тестова матриця: Windows 10/11, Per-Monitor DPI та дисплеї',
		layout: 'grid-2',
		cards: [
			{
				title: 'Виклики Per-Monitor DPI та Multi-Display у Windows',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">Мерчанти часто використовують 2 монітори: основний екран каси (1080p @ 100%) та клієнтський дисплей (Touchscreen / 4K @ 150%). Це найчастіше джерело UI-багів.</p>
					
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Критичні сценарії для автоматизації:</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200 mb-2">
						<li><strong>Переміщення вікна між моніторами з різним DPI:</strong> перевірка, чи не розмивається інтерфейс Electron (DPI Awareness: Per-Monitor V2) та чи не спотворюються модальні вікна.</li>
						<li><strong>Віртуальні координати екрана:</strong> лівий або верхній додатковий монітор має від'ємні координати <code>X/Y</code> у Windows API (Virtual Screen Bounds).</li>
						<li><strong>Мінімальні роздільні здатності (1366x768, 1280x800):</strong> валідація появи коректних скролів та відсутності обрізання кнопок оплати.</li>
						<li><strong>Зміна орієнтації (Portrait vs Landscape):</strong> актуально для планшетних POS на Windows 11.</li>
					</ul>
				`
			},
			{
				title: 'CI Virtual Machines vs Dedicated Test Machines',
				contentHtml: `
					<div class="space-y-2 text-[11px] text-slate-200">
						<div class="p-2.5 rounded bg-[#08121f] border border-cyan-900/50">
							<strong class="text-cyan-300 text-xs block mb-0.5">CI Virtual Machines (Хмарні/Ефемерні ранери):</strong>
							<p class="text-slate-300 mb-1">• Призначення: 90% щоденних тестів (PR checks, Electron UI, API інтеграція, базові інсталятори).</p>
							<p class="text-slate-300">• Конфігурація: фіксований віртуальний дисплей 1920x1080 @ 100% DPI. Забезпечує детермінованість і швидкість.</p>
						</div>

						<div class="p-2.5 rounded bg-[#08121f] border border-cyan-900/50">
							<strong class="text-cyan-300 text-xs block mb-0.5">Dedicated Test Machines (Виділені фізичні стенди):</strong>
							<p class="text-slate-300 mb-1">• Призначення: перевірка складних нативних сценаріїв, які неможливо заемулювати у віртуалці.</p>
							<p class="text-slate-300">• Multi-Monitor стенди з різним фізичним DPI (100% + 150%).</p>
							<p class="text-slate-300">• Фізичне торгове залізо: POS-термінали, сканери, чекові принтери через COM/USB.</p>
							<p class="text-slate-300">• Валідація апаратного графічного прискорення (GPU Acceleration).</p>
						</div>
					</div>
				`
			}
		]
	},

	// ==========================================
	// SLIDE C7: WINDOWS CI RUNNERS
	// ==========================================
	{
		id: 'c-windows-ci',
		category: 'C',
		menuTitle: 'CI/CD on Windows Runners',
		menuSub: 'Вирішення проблеми Session 0, запуск тестів, фікстури та логи',
		layout: 'grid-2',
		cards: [
			{
				title: 'Головна пастка Windows CI: Session 0 Isolation',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">Найпоширеніша проблема, з якою стикаються команди на Windows CI — чорні скріншоти або раптове падіння GUI-тестів.</p>
					
					<h4 class="font-bold text-rose-400 text-xs mb-1">Причина — Ізоляція Сесії 0:</h4>
					<p class="text-[11px] text-slate-300 mb-2">Якщо агент CI (GitHub Runner / GitLab Runner / Jenkins Agent) встановлено як системну службу (Windows Service), він запускається в <strong>Session 0</strong>, де за замовчуванням <em>заблоковано графічний дисплей</em> (No Interactive Desktop).</p>

					<h4 class="font-bold text-cyan-300 text-xs mb-1">Інженерне рішення консультанта:</h4>
					<ul class="list-disc list-inside space-y-1 text-[11px] text-slate-200">
						<li><strong>Interactive User Session:</strong> налаштування агента для запуску під реальним користувачем з автоматичним входом у систему (Windows AutoLogon).</li>
						<li><strong>Віртуальний дисплей (Virtual Display Driver):</strong> встановлення віртуального графічного драйвера для headless Windows VM.</li>
						<li><strong>PowerShell initialization:</strong> автоматичне виставлення роздільної здатності дисплея перед запуском тестів (<code>Set-DisplayResolution -Width 1920 -Height 1080</code>).</li>
					</ul>
				`
			},
			{
				title: 'Фікстури, очищення та діагностичні артефакти',
				contentHtml: `
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Обов'язкові механізми у фреймворку:</h4>
					<div class="space-y-1 text-[11px] text-slate-200 mb-2">
						<p><strong class="text-cyan-400">1. Надійний Teardown (Вбивство зомбі-процесів):</strong> десктопні тести часто залишають фонові процеси. У фікстурах після кожного тесту додається гарантована зачистка: <code>taskkill /F /T /IM electron.exe</code> та очищення тимчасових lock-файлів.</p>
						<p><strong class="text-cyan-400">2. Ізоляція тестових профілів:</strong> кожен прогін використовує чисту тимчасову директорію даних: <code>--user-data-dir=%TEMP%\\test-profile-xxx</code>.</p>
						<p><strong class="text-cyan-400">3. Збір діагностики при збоях (Crash Diagnostics):</strong></p>
						<ul class="list-disc list-inside pl-2 space-y-0.5 text-slate-300">
							<li>Playwright Traces (.zip) з таймлайном дій.</li>
							<li>Відеозапис вікна програми.</li>
							<li>Дамп Windows Event Viewer (Event ID 1000/1026: Application Error / .NET Runtime Error) для виявлення крашів.</li>
						</ul>
					</div>
				`
			}
		]
	},

	// ==========================================
	// SLIDE C8: ARCHITECTURE & HANDOVER
	// ==========================================
	{
		id: 'c-handover-adr',
		category: 'C',
		menuTitle: 'Architecture & Handover',
		menuSub: 'Структура репозиторію, ADR (Architecture Decision Records) та передача',
		layout: 'grid-2',
		cards: [
			{
				title: 'Структура репозиторію тестового фундаменту',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-1">Консультант створює єдину зрозумілу структуру, яку штатний інженер може миттєво підхопити:</p>
					
					<pre class="bg-black/70 p-2 rounded text-[10px] font-mono text-cyan-300 mb-2 overflow-x-auto">
/tests-automation
├── /src-electron-playwright     # Playwright + TS (UI тести)
│   ├── /fixtures               # Electron launch, Auth, IPC mock
│   ├── /pages                  # Page Object Model класи
│   └── /specs                  # Merchant regression, checkout
├── /src-native-windows-csharp   # C# .NET + FlaUI (Системні тести)
│   ├── /Installers             # Silent install, registry, signtool
│   ├── /Upgrades               # Version migration & state tests
│   └── /SystemTray             # Tray context menu & services
├── /shared-fixtures             # Тестові дані, сертифікати, еталонні фото
├── /ci-templates                # GitHub Actions / Azure Pipelines YAML
└── /docs-adr                    # Architecture Decision Records
					</pre>
					<p class="text-[11px] text-cyan-400">Така структура розділяє швидкі UI-перевірки та глибокі системні тести Windows.</p>
				`
			},
			{
				title: 'Architecture Decision Records (ADR) для Project Lead',
				contentHtml: `
					<h4 class="font-bold text-cyan-300 text-xs mb-1">Ключові ADR, які формує консультант:</h4>
					<div class="space-y-1.5 text-[11px] text-slate-200 mb-2">
						<div class="p-1.5 rounded bg-[#08121f] border border-cyan-900/50">
							<strong class="text-cyan-400">ADR-001: Playwright для Electron UI</strong>
							<p class="text-slate-300">Обґрунтування відмови від застарілих Spectron/Puppeteer на користь Playwright (вбудована підтримка CDP, трасування, швидкість).</p>
						</div>
						<div class="p-1.5 rounded bg-[#08121f] border border-cyan-900/50">
							<strong class="text-cyan-400">ADR-002: FlaUI для нативного тестування Windows</strong>
							<p class="text-slate-300">Обґрунтування вибору FlaUI над WinAppDriver (прямі UIA3 COM-виклики без необхідності окремого стороннього сервера).</p>
						</div>
						<div class="p-1.5 rounded bg-[#08121f] border border-cyan-900/50">
							<strong class="text-cyan-400">ADR-003: Стратегія мокування бекенду в CI</strong>
							<p class="text-slate-300">Відокремлення UI регресу від нестабільних тестових середовищ мерчант-API через мок-сервер.</p>
						</div>
					</div>
					<p class="text-[11px] text-slate-300 font-semibold">Результат Handover: Lead отримує впевненість у контролі якості релізів, а команда — чіткий шаблон для розширення.</p>
				`
			}
		]
	},

	// ==========================================
	// SLIDE C9: INTERVIEW Q&A
	// ==========================================
	{
		id: 'c-interview-qa',
		category: 'C',
		menuTitle: 'Senior Consultant Interview Q&A',
		menuSub: 'Топ-питань на співбесіді для Senior Desktop AQA Consultant',
		layout: 'grid-2',
		cards: [
			{
				title: 'Технічні запитання (Electron, Windows & Інструменти)',
				contentHtml: `
					<div class="space-y-2 text-[11px] text-slate-200">
						<div>
							<strong class="text-cyan-300 block">Q1: Як Playwright запускає та контролює Electron?</strong>
							<span class="text-slate-300">Playwright використовує модуль <code>_electron.launch()</code>, підключаючись до додатка через Chrome DevTools Protocol (CDP). Він отримує об'єкт головного процесу та чекає на перше вікно через <code>firstWindow()</code>, відкриваючи повний доступ до DOM і контексту рендерера.</span>
						</div>
						<div>
							<strong class="text-cyan-300 block">Q2: Як протестувати взаємодію з системним треєм?</strong>
							<span class="text-slate-300">Трей є нативним елементом оболонки Windows (Shell_TrayWnd). Для його перевірки використовуємо FlaUI (C#), знаходимо область сповіщень через UIA3 та викликаємо контекстні меню правою кнопкою миші.</span>
						</div>
						<div>
							<strong class="text-cyan-300 block">Q3: Як автоматизувати перевірку Application Upgrade?</strong>
							<span class="text-slate-300">Через пайплайн у 3 кроки: 1) Тиха інсталяція старої версії N + створення мерчант-сесії; 2) Запуск інсталятора версії N+1; 3) Запуск оновленого додатку та перевірка, що сесія збережена, а міграція БД успішна.</span>
						</div>
					</div>
				`
			},
			{
				title: 'Консалтингові та інфраструктурні запитання',
				contentHtml: `
					<div class="space-y-2 text-[11px] text-slate-200">
						<div>
							<strong class="text-cyan-300 block">Q4: Чому WinAppDriver більше не рекомендується?</strong>
							<span class="text-slate-300">Проект фактично заморожений Microsoft, погано працює на Windows 11 та multi-DPI, вимагає запуску окремого сервера. FlaUI є сучасною бібліотекою на C#, що працює безпосередньо з UIA3 без зайвих прошарків.</span>
						</div>
						<div>
							<strong class="text-cyan-300 block">Q5: Як вирішити проблему чорних екранів на Windows CI?</strong>
							<span class="text-slate-300">Не запускати CI-агент як Windows Service (Session 0). Запустити агента в інтерактивній сесії користувача з автологіном (AutoLogon) та віртуальним дисплеєм 1920x1080.</span>
						</div>
						<div>
							<strong class="text-cyan-300 block">Q6: Яка стратегія за 3-4 тижні консалтингу?</strong>
							<span class="text-slate-300">Аудит прогалин (тиждень 1) → Архітектура та вибір стеку (тиждень 2) → 3 робочі PoC (тиждень 3) → Windows CI пайплайн, ADR та передача команді (тиждень 4). Залишити працюючий інструмент, а не просто теорію.</span>
						</div>
					</div>
				`
			}
		]
	},

	// ==========================================
	// MIDDLE MANUAL QA ENGINEER (FLUTTER / NAYAX) (F) SLIDES
	// (Vending CRM, Flutter, Android/iOS Tools, API, Xray, Performance)
	// ==========================================
	{
		id: 'f-vending-crm',
		category: 'F',
		menuTitle: 'Nayax Domain & Vending CRM',
		menuSub: 'Бізнес-домен Nayax, телеметрія вендингу та CRM флоу',
		layout: 'grid-2',
		cards: [
			{
				title: 'Бізнес-модель Nayax & Unattended Retail',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2"><strong>Nayax</strong> — світовий фінтех-лідер у сфері unattended retail (безлюдної роздрібної торгівлі) та безготівкових платежів: вендингові автомати, кавомашини, автомийки самообслуговування, зарядні станції EV, пральні та розважальні автомати.</p>
					
					<h4 class="font-bold text-sky-300 text-xs mb-1">Ключові компоненти екосистеми Nayax:</h4>
					<div class="space-y-1.5 text-[11px] text-slate-200">
						<div class="p-2 rounded bg-[#08121f] border border-sky-900/50">
							<strong class="text-sky-400">1. POS-термінали & Модулі зв'язку (VPOS Touch, Onyx):</strong>
							<p class="text-slate-300">Пристрої, що підключаються до апарата через протоколи <em>MDB / DEX</em>, приймають безготівкові платежі (NFC, Apple/Google Pay, картки) та збирають телеметрію.</p>
						</div>
						<div class="p-2 rounded bg-[#08121f] border border-sky-900/50">
							<strong class="text-sky-400">2. Мобільний CRM-додаток (Flutter):</strong>
							<p class="text-slate-300">Робочий інструмент операторів маршрутів, польових техніків та мерчандайзерів для моніторингу статусу мережі автоматів, проведення аудитів та інкасацій у реальному часі.</p>
						</div>
						<div class="p-2 rounded bg-[#08121f] border border-sky-900/50">
							<strong class="text-sky-400">3. Хмарний бекенд & Аналітика:</strong>
							<p class="text-slate-300">Агрегація фінансової звітності, баланс готівкових та карткових транзакцій, розрахунок потреби у поповненні товарів (Pre-kitting / Picklists).</p>
						</div>
					</div>
				`
			},
			{
				title: 'Ключові флоу CRM та моніторингу автоматів',
				contentHtml: `
					<h4 class="font-bold text-sky-300 text-xs mb-1">Що тестує QA у вендинговому CRM-додатку:</h4>
					<ul class="list-disc list-inside space-y-1 text-[11px] text-slate-200 mb-2">
						<li><strong>Machine Stock & Inventory:</strong> відображення залишків по кожній спіралі/лотку (Planogram), поповнення товару, списання браку, сканування штрих-кодів упаковок через камеру.</li>
						<li><strong>Alerts & System Errors:</strong> фіксація помилок автоматів у реальному часі (MDB Coin Jam, Bill Reject, застрягання товару, вихід температури холодильника за норму, зникнення живлення 220V).</li>
						<li><strong>Cash Collection & Audits:</strong> зняття готівкових мішків, фіксація лічильників монет, звірка фактичної суми з даними лічильників з MDB/DEX шини.</li>
						<li><strong>Technician & Route Management:</strong> призначення маршрутних листів польовим технікам, відмітка чек-іну за GPS геолокацією, звіт про виконане сервісне обслуговування.</li>
						<li><strong>Offline-First архітектура:</strong> гарантія збереження даних перевірки залишків при роботі у цокольних поверхах чи підвалах без зв'язку, з подальшим авто-синк при виході в мережу.</li>
					</ul>
					<div class="p-2 rounded bg-sky-950/40 border border-sky-800/40 text-[11px] text-sky-200">
						<strong>Фокус для інтерв'юера:</strong> «У вендингу кожен дефект у підрахунку залишків чи збої інкасації призводить до прямих фінансових втрат клієнта. Тому пріоритет тестування — цілісність даних та offline-синхронізація».
					</div>
				`
			}
		]
	},
	{
		id: 'f-flutter-arch',
		category: 'F',
		menuTitle: 'Flutter Architecture & QA Specifics',
		menuSub: 'Особливості тестування Flutter: Dart VM, Impeller, Platform Channels',
		layout: 'grid-2',
		cards: [
			{
				title: "Архітектура Flutter: що обов'язково знати QA",
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">Flutter не компілюється у нативні UI-компоненти платформи (як React Native), а <strong>малює весь інтерфейс самостійно піксель-у-піксель</strong> на полотні (Canvas) через власний графічний двигун (Impeller на iOS/сучасних Android або Skia).</p>
					
					<h4 class="font-bold text-sky-300 text-xs mb-1">Три дерева Flutter (Three Trees):</h4>
					<div class="space-y-1 text-[11px] text-slate-200 mb-2">
						<div class="p-1.5 rounded bg-[#08121f] border border-sky-900/50">
							<strong class="text-sky-300">Widget Tree:</strong> Незмінні конфігурації екрану (Blueprint). Легко створюються та перестворюються.
						</div>
						<div class="p-1.5 rounded bg-[#08121f] border border-sky-900/50">
							<strong class="text-sky-300">Element Tree:</strong> Скелет життєвого циклу. Пов'язує віджети з реальними об'єктами рендерингу, зберігає стан (State).
						</div>
						<div class="p-1.5 rounded bg-[#08121f] border border-sky-900/50">
							<strong class="text-sky-300">RenderObject Tree:</strong> Низькорівневе дерево розмірів, позиціонування (Layout) та малювання (Paint).
						</div>
					</div>

					<p class="text-[11px] text-slate-300">
						<strong>Наслідки для тестування:</strong> Для пошуку елементів у тестах та доступності (Accessibility) критично важливі <code>Key</code> (ValueKey, Key) та віджети <code>Semantics</code>.
					</p>
				`
			},
			{
				title: 'Специфічні Flutter-баги та зони ризику',
				contentHtml: `
					<h4 class="font-bold text-sky-300 text-xs mb-1">Типові вразливі місця Flutter додатків:</h4>
					<ul class="list-disc list-inside space-y-1.5 text-[11px] text-slate-200 mb-2">
						<li><strong>Platform Channels (MethodChannel / EventChannel):</strong> Міст між Dart-кодом та нативною ОС (Kotlin/Java на Android, Swift/Obj-C на iOS). Саме тут виникають краші при роботі з Bluetooth (BLE сканування автоматів), камерою (сканер штрих-кодів), пушами або геолокацією.</li>
						<li><strong>Keyboard Overlap & Focus Issues:</strong> Поведінка віртуальної клавіатури. Частий баг Flutter — клавіатура перекриває поле вводу (потрібен правильний <code>resizeToAvoidBottomInset</code> та віджети з скролом).</li>
						<li><strong>State Loss при Background Termination:</strong> Коли ОС вбиває фоновий додаток для вивільнення пам'яті (Activity recreation). Необхідно тестувати State Restoration (чи не скидаються напівзаповнені інвентаризаційні форми).</li>
						<li><strong>JIT (Debug) vs AOT (Release) збірка:</strong> У Debug-режимі Flutter працює через JIT з підтримкою Hot Reload. Release-білд скомпільований у AOT машинний код. <em>Тестувати перформанс та фінальну валідацію можна ТІЛЬКИ на Release або Profile білдах!</em></li>
					</ul>
					<div class="p-2 rounded bg-sky-950/40 border border-sky-800/40 text-[11px] text-sky-200">
						<strong>Золоте правило Flutter QA:</strong> Якщо фіча використовує нативне залізо (Bluetooth/Камера/GPS) — тести обов'язкові окремо на реальному Android та окремо на реальному iOS!
					</div>
				`
			}
		]
	},
	{
		id: 'f-android-tools',
		category: 'F',
		menuTitle: 'Android Testing & Studio Toolset',
		menuSub: 'Android Studio, Logcat, ADB команди та емулятори',
		layout: 'grid-2',
		cards: [
			{
				title: 'Android Studio: Logcat, креші та діагностика',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2"><strong>Android Studio</strong> — основний інструмент ручного тестувальника для локалізації дефектів на Android-платформі.</p>
					
					<h4 class="font-bold text-sky-300 text-xs mb-1">Майстерність роботи з Logcat:</h4>
					<ul class="list-disc list-inside space-y-1 text-[11px] text-slate-200 mb-2">
						<li><strong>Фільтри пошуку:</strong> фільтрація за назвою пакету (<code>package:com.nayax.retail</code>), тегом (<code>tag:flutter</code>, <code>tag:HttpLogging</code>) та рівнем логування.</li>
						<li><strong>Рівні логів:</strong> <code>Verbose</code> (V) → <code>Debug</code> (D) → <code>Info</code> (I) → <code>Warn</code> (W) → <code>Error</code> (E) → <code>Assert</code> (A).</li>
						<li><strong>Пошук крешів:</strong> ключові запити <code>fatal exception</code>, <code>AndroidRuntime</code>, <code>OutOfMemoryError</code>. Лог містить точний Stack Trace з рядком помилки у Flutter Dart файлі.</li>
						<li><strong>ANR (Application Not Responding):</strong> виникає, коли UI-потік заблокований довше 5 секунд. Зняття трасування з <code>/data/anr/traces.txt</code>.</li>
					</ul>

					<div class="p-2 rounded bg-[#08121f] border border-sky-900/50 text-[11px] text-slate-300">
						<strong class="text-sky-300">Device File Explorer:</strong> дозволяє переглядати локальну файлову систему додатку (SQLite бази, Hive сховища, SharedPreferences, кешовані фотографії поломок апаратів).
					</div>
				`
			},
			{
				title: 'Практичні команди ADB (Android Debug Bridge)',
				contentHtml: `
					<h4 class="font-bold text-sky-300 text-xs mb-1">Топ-команд ADB для щоденної роботи QA:</h4>
					<div class="space-y-1 text-[11px] font-mono text-slate-200">
						<div class="p-1 rounded bg-[#060910] border border-slate-800">
							<span class="text-sky-400">adb devices</span> <span class="text-slate-400">// список підключених девайсів/емуляторів</span>
						</div>
						<div class="p-1 rounded bg-[#060910] border border-slate-800">
							<span class="text-sky-400">adb install -r app-release.apk</span> <span class="text-slate-400">// перевстановлення зі збереженням даних</span>
						</div>
						<div class="p-1 rounded bg-[#060910] border border-slate-800">
							<span class="text-sky-400">adb install -d app-v1.apk</span> <span class="text-slate-400">// встановлення з пониженням версії (downgrade)</span>
						</div>
						<div class="p-1 rounded bg-[#060910] border border-slate-800">
							<span class="text-sky-400">adb logcat -c && adb logcat > crash.log</span> <span class="text-slate-400">// очистити буфер і зберегти лог</span>
						</div>
						<div class="p-1 rounded bg-[#060910] border border-slate-800">
							<span class="text-sky-400">adb shell pm clear com.nayax.retail</span> <span class="text-slate-400">// очистити кеш та дані додатку</span>
						</div>
						<div class="p-1 rounded bg-[#060910] border border-slate-800">
							<span class="text-sky-400">adb shell am kill com.nayax.retail</span> <span class="text-slate-400">// симуляція примусового вбивства процесу ОС</span>
						</div>
						<div class="p-1 rounded bg-[#060910] border border-slate-800">
							<span class="text-sky-400">adb shell monkey -p com.nayax.retail -v 500</span> <span class="text-slate-400">// стрес-тест хаотичними тапами</span>
						</div>
					</div>

					<div class="mt-2 p-2 rounded bg-sky-950/40 border border-sky-800/40 text-[11px] text-sky-200">
						<strong>Емулятори vs Реальні девайси:</strong> Емулятор (AVD) зручний для перевірки версток на різних розмірах екранів. Реальний девайс обов'язковий для тестування BLE зв'язку з вендингом, камери сканера та біометрії.
					</div>
				`
			}
		]
	},
	{
		id: 'f-ios-tools',
		category: 'F',
		menuTitle: 'iOS Testing & Xcode Toolset',
		menuSub: 'Xcode Console, Devices & Simulators, TestFlight, Crash Logs',
		layout: 'grid-2',
		cards: [
			{
				title: 'Xcode: Console, Devices & Символікація Crash Logs',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">На відміну від Android, iOS має закриту екосистему та жорсткі пісочниці безпеки (Sandboxing). Для тестування iOS додатків використовується стек <strong>Xcode та TestFlight</strong>.</p>
					
					<h4 class="font-bold text-sky-300 text-xs mb-1">Робота з Xcode Devices & Simulators:</h4>
					<ul class="list-disc list-inside space-y-1 text-[11px] text-slate-200 mb-2">
						<li><strong>Devices and Simulators (Window -> Devices):</strong> відображає підключені iPhone, дозволяє встановлювати <code>.ipa</code> перетягуванням та відкривати живий системний журнал (<strong>Open Console</strong>).</li>
						<li><strong>Зняття Crash Report (.ips / .crash):</strong> На iPhone: <em>Settings → Privacy & Security → Analytics & Improvements → Analytics Data</em>. Знаходимо файл за назвою додатку та часом падіння.</li>
						<li><strong>Символікація (Symbolication):</strong> Перетворення адрес пам'яті (наприклад, <code>0x00000001004a...</code>) у зрозумілі назви Dart/Flutter методів та номери рядків. Виконується в Xcode за допомогою <code>dSYM</code> файлів відповідного білда.</li>
					</ul>
				`
			},
			{
				title: 'Apple екосистема: TestFlight, сертифікати та профілі',
				contentHtml: `
					<h4 class="font-bold text-sky-300 text-xs mb-1">Дистрибуція білдів та види тестування:</h4>
					<div class="space-y-1.5 text-[11px] text-slate-200 mb-2">
						<div class="p-2 rounded bg-[#08121f] border border-sky-900/50">
							<strong class="text-sky-300">TestFlight Internal vs External:</strong>
							<p class="text-slate-300"><em>Internal:</em> доступний команді Nayax одразу після обробки білда (до 100 тестувальників). <em>External:</em> вимагає проходження базового Beta App Review від Apple (до 10,000 зовнішніх тестувальників). Термін життя білда — 90 днів.</p>
						</div>
						<div class="p-2 rounded bg-[#08121f] border border-sky-900/50">
							<strong class="text-sky-300">Provisioning Profiles & Certificates:</strong>
							<p class="text-slate-300"><em>Development</em> (для дебагу), <em>Ad-Hoc</em> (прив'язка до UDID девайсів), <em>Distribution</em> (TestFlight / App Store). Частий баг: білд не запускається або видає "Untrusted Enterprise Developer".</p>
						</div>
					</div>

					<div class="p-2 rounded bg-sky-950/40 border border-sky-800/40 text-[11px] text-sky-200">
						<strong>Обмеження iOS Simulator:</strong> Симулятор працює на архітектурі Mac (x86_64/ARM64) і не емулює реальний Bluetooth апаратний стек, FaceID/TouchID (тільки фейкове підтвердження) та камеру. Для польового вендинг-додатку Nayax тести на реальному iPhone критичні!
					</div>
				`
			}
		]
	},
	{
		id: 'f-api-network',
		category: 'F',
		menuTitle: 'Client-Server, Postman & Sniffing',
		menuSub: 'REST API, Swagger, Postman, Charles Proxy, SSL Pinning',
		layout: 'grid-2',
		cards: [
			{
				title: 'REST API, Swagger & Postman для мобільного QA',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">Мобільний CRM-додаток є лише тонким клієнтом. Уся бізнес-логіка, залишки товарів, тарифи та аутентифікація проходять через <strong>REST API бекенд</strong>.</p>
					
					<h4 class="font-bold text-sky-300 text-xs mb-1">Стек роботи з API:</h4>
					<ul class="list-disc list-inside space-y-1 text-[11px] text-slate-200 mb-2">
						<li><strong>Swagger / OpenAPI:</strong> Вивчення контракту ендпоінтів ще до готовності UI. Перевірка типів полів (string, number, boolean), обов'язковості параметрів, форматів помилок 400 Bad Request.</li>
						<li><strong>Postman Environments & Variables:</strong> Створення змінних середовища (<code>base_url</code>, <code>jwt_token</code>, <code>machine_id</code>) для швидкого перемикання між Dev, Staging та Prod.</li>
						<li><strong>Pre-request & Tests скрипти:</strong> Автоматичне збереження токена після логіну: <code>pm.environment.set("jwt_token", pm.response.json().token);</code>.</li>
						<li><strong>Валідація кодів відповідей:</strong> <code>200 OK</code>, <code>201 Created</code>, <code>401 Unauthorized</code> (expired token), <code>403 Forbidden</code> (доступ заборонено), <code>404 Not Found</code>, <code>422 Unprocessable Entity</code>, <code>500 Internal Error</code>.</li>
					</ul>
				`
			},
			{
				title: 'Перехоплення трафіку (Charles Proxy / Proxyman) & SSL Pinning',
				contentHtml: `
					<h4 class="font-bold text-sky-300 text-xs mb-1">Чому перехоплювач трафіку незамінний для Mobile QA:</h4>
					<ul class="list-disc list-inside space-y-1 text-[11px] text-slate-200 mb-2">
						<li><strong>Перевірка запитів додатку:</strong> переконатися, що додаток відправляє коректні JSON-пейлоади та не дублює важкі запити.</li>
						<li><strong>Мокування відповідей (Map Remote / Breakpoints):</strong> підміна відповіді сервера (наприклад, повернути 500 помилку, пустий масив товарів <code>[]</code> або некоректні дані) для перевірки обробки помилок в інтерфейсі (Error handling).</li>
						<li><strong>Throttling (Емуляція поганого зв'язку):</strong> симуляція 2G, 3G, високого пінгу (2000 мс) та втрати пакетів (Packet Loss).</li>
					</ul>

					<div class="p-2 rounded bg-amber-950/40 border border-amber-800/40 text-[11px] text-amber-200">
						<strong class="text-amber-300">Особливість Flutter & SSL Pinning:</strong>
						<p>Flutter не використовує системне сховище сертифікатів Android/iOS, а працює через власний Dart HttpClient. Тому за замовчуванням Charles не може розшифрувати HTTPS. Для тестування девелопери збирають QA-білд з відключеним SSL Pinning або дозволом довіряти proxy-сертифікатам.</p>
					</div>
				`
			}
		]
	},
	{
		id: 'f-mobile-matrix',
		category: 'F',
		menuTitle: 'Mobile Test Design & Matrix',
		menuSub: 'Тестова матриця девайсів, специфічні мобільні чек-листи',
		layout: 'grid-2',
		cards: [
			{
				title: 'Формування тестової матриці (Android & iOS)',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">Неможливо протестувати додаток на всіх тисячах моделей смартфонів. Формується <strong>цільова тестова матриця</strong> на основі аналітики користувачів Nayax.</p>
					
					<h4 class="font-bold text-sky-300 text-xs mb-1">Критерії відбору девайсів:</h4>
					<div class="space-y-1.5 text-[11px] text-slate-200 mb-2">
						<div class="p-1.5 rounded bg-[#08121f] border border-sky-900/50">
							<strong class="text-sky-300">1. Версії ОС:</strong> Android (мін. версія 9/10, поточні 13, 14, 15); iOS (мін. версія 15/16, поточні 17, 18).
						</div>
						<div class="p-1.5 rounded bg-[#08121f] border border-sky-900/50">
							<strong class="text-sky-300">2. Форм-фактори та екрани:</strong> Екрани з Dynamic Island, "чубчиком" (Notch), краплеподібним вирізом, планшети (iPad/Galaxy Tab). Перевірка віджетів <code>SafeArea</code> у Flutter.
						</div>
						<div class="p-1.5 rounded bg-[#08121f] border border-sky-900/50">
							<strong class="text-sky-300">3. Кастомні оболонки вендорів:</strong> Samsung (One UI), Xiaomi (MIUI / HyperOS). Часто агресивно "вбивають" фонові процеси синхронізації та блокують пуш-сповіщення через Battery Saver.
						</div>
					</div>
				`
			},
			{
				title: 'Специфічні мобільні чек-листи для тестування',
				contentHtml: `
					<h4 class="font-bold text-sky-300 text-xs mb-1">Обов'язкові нефункціональні перевірки:</h4>
					<ul class="list-disc list-inside space-y-1.5 text-[11px] text-slate-200 mb-2">
						<li><strong>Interruptions (Переривання):</strong> Вхідний дзвінок під час введення кількості товару; SMS, пуш-сповіщення; спрацювання системного будильника; низький заряд батареї (спливаюче вікно 20%).</li>
						<li><strong>Orientation & Layout:</strong> Поворот екрану (Portrait ↔ Landscape). Чи не зникають дані форми? Чи немає переповнення віджетів (жовто-чорна смужка <em>A RenderFlex overflowed</em> у Flutter)?</li>
						<li><strong>Network Transitions:</strong> Перехід з Wi-Fi на LTE/5G; зникнення мережі (режим "У літаку" / тунель / ліфт) та повернення. Коректність роботи черги офлайн-запитів.</li>
						<li><strong>App Lifecycle:</strong> Згортання додатка у фон на 5 хвилин; вивантаження з RAM операційною системою; відновлення та збереження поточної сесії техніка.</li>
						<li><strong>App Update (Migration):</strong> Оновлення зі старої версії на нову без втрати локальної бази даних та авторизації.</li>
					</ul>
				`
			}
		]
	},
	{
		id: 'f-qa-process-xray',
		category: 'F',
		menuTitle: 'QA Process: Jira, Xray & Git',
		menuSub: 'Управління тестуванням в Xray, JQL фільтри та Git для QA',
		layout: 'grid-2',
		cards: [
			{
				title: 'Xray Test Management & Робота з Jira (JQL)',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2"><strong>Xray</strong> — провідна Test Management System (TMS), що вбудована безпосередньо в Jira як набір спеціальних типів задач.</p>
					
					<h4 class="font-bold text-sky-300 text-xs mb-1">Ієрархія сутностей Xray:</h4>
					<div class="space-y-1 text-[11px] text-slate-200 mb-2">
						<div class="p-1 rounded bg-[#08121f] border border-sky-900/50">
							<strong class="text-sky-300">Test:</strong> окремий тест-кейс (Manual: Preconditions, Steps, Expected Result).
						</div>
						<div class="p-1 rounded bg-[#08121f] border border-sky-900/50">
							<strong class="text-sky-300">Test Set:</strong> логічна група тестів (наприклад, регрес залишків, аудит готівки).
						</div>
						<div class="p-1 rounded bg-[#08121f] border border-sky-900/50">
							<strong class="text-sky-300">Test Execution:</strong> конкретний прогін тестів на білді/платформі (Status: PASS, FAIL, BLOCKED, EXECUTING).
						</div>
						<div class="p-1 rounded bg-[#08121f] border border-sky-900/50">
							<strong class="text-sky-300">Test Plan:</strong> консолідований план релізу, що відстежує загальне покриття вимог (Traceability).
						</div>
					</div>

					<h4 class="font-bold text-sky-300 text-xs mb-1">Приклади практичного JQL:</h4>
					<div class="p-1.5 rounded bg-[#060910] border border-slate-800 font-mono text-[10px] text-sky-300">
						project = NAYAX AND issuetype = Bug AND status in ("Open", "In Progress") AND priority in (High, Blocker) AND affectedVersion = "2.4.0" ORDER BY created DESC
					</div>
				`
			},
			{
				title: 'Стандарт мобільного баг-репорту & Базовий Git',
				contentHtml: `
					<h4 class="font-bold text-sky-300 text-xs mb-1">Золотий стандарт Mobile Bug Report:</h4>
					<ul class="list-disc list-inside space-y-1 text-[11px] text-slate-200 mb-2">
						<li><strong>Title:</strong> [Android 14][BLE] Не підключається до VPOS терміналу після виходу з фону.</li>
						<li><strong>Environment:</strong> Модель (Samsung S23), Версія ОС (Android 14), Білд (v2.4.1-b42), Network (LTE).</li>
						<li><strong>Preconditions, Steps to reproduce, Expected vs Actual Result.</strong></li>
						<li><strong>Обов'язкові attachments:</strong> Відеозапис екрану (з увімкненим відображенням тачів у Developer Options), витяг з <code>adb logcat</code> або iOS crash log.</li>
					</ul>

					<h4 class="font-bold text-sky-300 text-xs mb-1">Базові команди Git у роботі QA:</h4>
					<div class="space-y-1 font-mono text-[10px] text-slate-300 bg-[#060910] p-2 rounded border border-slate-800">
						<div><span class="text-sky-400">git fetch && git checkout feature/nayax-vending-scan</span></div>
						<div><span class="text-sky-400">git pull origin main</span> <span class="text-slate-500">// оновити гілку свіжим кодом</span></div>
						<div><span class="text-sky-400">git status</span> <span class="text-slate-500">// перевірити змінені файли</span></div>
						<div><span class="text-sky-400">git diff</span> <span class="text-slate-500">// подивитися зміни коду розробника для оцінки зони впливу</span></div>
						<div><span class="text-sky-400">git stash / git stash pop</span> <span class="text-slate-500">// відкласти локальні правки</span></div>
					</div>
				`
			}
		]
	},
	{
		id: 'f-performance',
		category: 'F',
		menuTitle: 'Performance Testing & Profiling',
		menuSub: 'Клієнтський перформанс Flutter додатку та API бенчмарки',
		layout: 'grid-2',
		cards: [
			{
				title: 'Клієнтська продуктивність мобільного додатку (Mobile Client Performance)',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">Вимоглива польова робота техніків вимагає швидкого додатку без фризів і зависань на слабких пристроях.</p>
					
					<h4 class="font-bold text-sky-300 text-xs mb-1">Ключові метрики клієнтського перформансу:</h4>
					<ul class="list-disc list-inside space-y-1 text-[11px] text-slate-200 mb-2">
						<li><strong>Швидкість запуску (Startup Time):</strong>
							<br>• <em>Cold Start</em> (< 2.0-2.5с) — додаток не завантажений у RAM, повна ініціалізація рушія Flutter.
							<br>• <em>Warm Start</em> (< 1.5с) — додаток був витіснений, але кеш процесу активний.
							<br>• <em>Hot Start</em> (< 0.5с) — миттєвий підйом із фонового стану.
						</li>
						<li><strong>FPS та UI Jank:</strong> Ціль — 60 кадрів/сек (16.6 мс на кадр) або 120 FPS. Плавність скролу списку апаратів. Пошук пропущених кадрів (Jank) через <em>Flutter DevTools Performance Overlay</em>.</li>
						<li><strong>Memory Leaks (Витоки пам'яті):</strong> Дослідження через Android Studio Profiler та Xcode Memory Graph. Типовий баг у Flutter — не закритий <code>StreamSubscription</code> або витік контролерів списків.</li>
						<li><strong>Споживання батареї та CPU:</strong> Перевірка, чи не гріється смартфон і чи не «жре» фоновий GPS-трекінг техніка заряд акумулятора.</li>
					</ul>
				`
			},
			{
				title: 'Основи тестування продуктивності API (Backend Performance)',
				contentHtml: `
					<h4 class="font-bold text-sky-300 text-xs mb-1">Навантажувальне тестування бекенду (JMeter / k6 / Postman):</h4>
					<p class="text-[11px] text-slate-300 mb-2">У сфері вендингу сотні тисяч автоматів одночасно шлють пакети транзакцій та телеметрії, а техніки зранку одночасно завантажують маршрути.</p>
					
					<h4 class="font-bold text-sky-300 text-xs mb-1">Основні показники (KPI):</h4>
					<div class="space-y-1 text-[11px] text-slate-200 mb-2">
						<div class="p-1 rounded bg-[#08121f] border border-sky-900/50">
							<strong class="text-sky-300">Throughput (RPS):</strong> Кількість оброблених запитів на секунду (Requests Per Second).
						</div>
						<div class="p-1 rounded bg-[#08121f] border border-sky-900/50">
							<strong class="text-sky-300">Response Time / Latency:</strong> Час відповіді сервера (Average, 90th percentile, 95th percentile, 99th percentile).
						</div>
						<div class="p-1 rounded bg-[#08121f] border border-sky-900/50">
							<strong class="text-sky-300">Error Rate (%):</strong> Допустимий відсоток помилок 5xx (зазвичай < 0.1% при піковому навантаженні).
						</div>
					</div>

					<div class="p-2 rounded bg-sky-950/40 border border-sky-800/40 text-[11px] text-sky-200">
						<strong>Плюс для вакансії:</strong> Розуміння різниці між Stress Testing (визначення межі падіння системи), Load Testing (робота під запланованим навантаженням) та Spike Testing (різкі короткочасні сплески трафіку).
					</div>
				`
			}
		]
	},
	{
		id: 'f-interview-qa',
		category: 'F',
		menuTitle: 'Nayax Middle QA Interview Q&A',
		menuSub: 'Топ технічних та поведінкових запитань з відповідями',
		layout: 'grid-2',
		cards: [
			{
				title: 'Технічні запитання (Mobile, Flutter & Network)',
				contentHtml: `
					<div class="space-y-2 text-[11px] text-slate-200">
						<div>
							<strong class="text-sky-300 block">Q1: Як зняти креш-лог падіння мобільного додатку на Android та iOS?</strong>
							<span class="text-slate-300"><strong>Android:</strong> через Android Studio Logcat (фільтр <code>fatal</code> або <code>AndroidRuntime</code>) або через термінал <code>adb logcat -d > crash.log</code>. <strong>iOS:</strong> на пристрої у <em>Settings → Privacy → Analytics → Analytics Data</em> (файл <code>.ips</code>) або підключивши девайс до Xcode у вікні <em>Devices & Simulators</em> з подальшою символікацією через dSYM.</span>
						</div>
						<div>
							<strong class="text-sky-300 block">Q2: Чим тестування Flutter додатку відрізняється від нативного?</strong>
							<span class="text-slate-300">Flutter самостійно малює віджети через Skia/Impeller. Візуальний рендеринг однаковий на всіх ОС, але вразливими зонами є <em>Platform Channels</em> (взаємодія з Bluetooth апаратів, камерою сканера), поведінка клавіатури, нативні дозволи (Permissions) та відсутність нативних ID елементів (використовуються ValueKey).</span>
						</div>
						<div>
							<strong class="text-sky-300 block">Q3: Як перевірити роботу CRM додатку в умовах офлайну?</strong>
							<span class="text-slate-300">Вмикаємо Airplane Mode або налаштовуємо дроп пакетів у Charles Proxy. Перевіряємо: 1) Доступність перегляду кешованих даних; 2) Збереження внесених залишків у локальну БД (SQLite/Hive); 3) Зрозумілу індикацію для техніка "Офлайн-режим"; 4) Автоматичну чергу синку при відновленні з'єднання без втрати чи дублювання запитів.</span>
						</div>
					</div>
				`
			},
			{
				title: 'Процеси, інструменти (Xray, JQL, Git) та софт-скіли',
				contentHtml: `
					<div class="space-y-2 text-[11px] text-slate-200">
						<div>
							<strong class="text-sky-300 block">Q4: Як організувати тест-документацію релізу в Xray?</strong>
							<span class="text-slate-300">Створюємо Test Issues, об'єднуємо за функціональними модулями в Test Sets (наприклад, Restocking, Audits, Telemetry). Для нового релізу створюємо Test Execution і прив'язуємо до Test Plan версії. Усі тести лінкуємо з User Story для забезпечення вимог матриці простежуваності (Traceability Matrix).</span>
						</div>
						<div>
							<strong class="text-sky-300 block">Q5: Що робити, якщо розробник каже «У мене на симуляторі все працює»?</strong>
							<span class="text-slate-300">1) Надати точні кроки та відеозапис відтворення на реальному девайсі; 2) Додати точну модель пристрою, версію ОС та номер білда; 3) Додати лог Logcat/Console із помилкою; 4) Пояснити, що симулятор не емулює апаратні особливості (BLE, завантаженість RAM, нативні процеси вендора). Запропонувати запустити білд на реальному девайсі разом.</span>
						</div>
						<div>
							<strong class="text-sky-300 block">Q6: Як ви пріоритезуєте баги перед релізом?</strong>
							<span class="text-slate-300">Оцінюю Severity (технічний вплив) та Priority (бізнес-вплив). Блокерами є: падіння додатку (Crash), неможливість завершити інкасацію, втрата фінансових даних про залишки, розсинхрон із бекендом. Незначні косметичні відступи у верстці переносяться в наступний спринт.</span>
						</div>
					</div>
				`
			}
		]
	}
];
