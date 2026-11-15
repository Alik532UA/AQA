import type { Slide } from '../slidesData.js';

export const flutterSlides: Slide[] = [
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
