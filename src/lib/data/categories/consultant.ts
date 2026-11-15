import type { Slide } from '../slidesData.js';

export const consultantSlides: Slide[] = [
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
	}
];
