import type { Slide } from '../slidesData.js';

export const automationSlides: Slide[] = [
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
	}
];
