import type { Slide } from '../slidesData.js';

export const manualSlides: Slide[] = [
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
	}
];
