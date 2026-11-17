import type { Slide } from '../slidesData.js';

export const csharpSlides: Slide[] = [
	// ==========================================
	// C# CORE & ADVANCED (.NET / OOP / LINQ / ASYNC) (S) SLIDES
	// ==========================================
	{
		id: 's-types-syntax',
		category: 'S',
		menuTitle: 'Типи даних & Базовий синтаксис',
		menuSub: 'CTS типи, розрядність, арифметичні оператори, ++i vs i++, логічні оператори & vs &&',
		layout: 'grid-2',
		cards: [
			{
				title: 'Вбудовані типи даних C# (CTS / CLR)',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">Усі типи в C# базуються на єдиній системі <strong>Common Type System (CTS)</strong> платформи .NET і поділяються на типи значень (Value Types) та посилальні типи (Reference Types).</p>
					
					<h4 class="font-bold text-purple-300 text-xs mb-1">Основні примітивні типи та їх розрядність:</h4>
					<div class="space-y-1.5 text-[11px] text-slate-200 mb-2">
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Цілочисельні:</strong>
							<span class="text-slate-300"><code>byte</code> (8-bit, 0..255), <code>sbyte</code> (8-bit зі знаком), <code>short</code> / <code>ushort</code> (16-bit), <code>int</code> / <code>uint</code> (32-bit, ~±2.14 млрд), <code>long</code> / <code>ulong</code> (64-bit).</span>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Числа з рухомою комою та точністю (IEEE 754):</strong>
							<ul class="list-disc list-inside mt-0.5 space-y-0.5 text-slate-300">
								<li><code>float</code> (32-bit Single, суфікс <code>f</code>, ~7 знаків точності) — графіка, низька точність.</li>
								<li><code>double</code> (64-bit Double, за замовчуванням, ~15-16 знаків точності) — загальні математичні розрахунки.</li>
								<li><code>decimal</code> (128-bit, суфікс <code>m</code>, 28-29 знаків точності) — фінансові та грошові операції (виключає похибки двійкового округлення).</li>
							</ul>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Логічний, символьний та рядковий:</strong>
							<ul class="list-disc list-inside mt-0.5 space-y-0.5 text-slate-300">
								<li><code>bool</code> (1 байт у пам'яті CPU/масивах, логічно 1 біт, при вирівнюванні структури може займати 4 байти; значення <code>true</code> / <code>false</code>).</li>
								<li><code>char</code> (2 байти, одиночний символ UTF-16, в одинарних лапках <code>'A'</code>).</li>
								<li><code>string</code> (Reference type, <strong>immutable</strong> — незмінний масив UTF-16). Будь-яка модифікація виділяє новий об'єкт у Heap (у циклах застосовуйте <code>StringBuilder</code>). Рядкові літерали зберігаються у <strong>String Intern Pool</strong> (повторні однакові рядки посилаються на одну область пам'яті).</li>
							</ul>
						</div>
					</div>

					<div class="p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>Спеціальні значення double/float:</strong> Ділення на <code>0.0</code> не кидає виняток, а повертає <code>PositiveInfinity</code>, <code>NegativeInfinity</code> або <code>NaN</code> (0.0 / 0.0).<br />
						<strong>Пастка NaN:</strong> <code>double.NaN == double.NaN</code> завжди повертає <code>false</code>! Для перевірки використовуйте виключно <code>double.IsNaN(val)</code>.
					</div>
				`
			},
			{
				title: 'Оператори, інкремент/декремент та логіка',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">Арифметичні оператори та інкремент:</h4>
					<p class="text-[11px] text-slate-300 mb-1.5">Базові: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code> (цілочисельне ділення при цілих операндах!), <code>%</code> (залишок від ділення).</p>

					<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50 text-[11px] mb-2 space-y-1">
						<strong class="text-purple-400">Префіксний vs Постфіксний інкремент:</strong>
						<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono"><code class="language-csharp">int a = 5;
int b = a++; // b = 5, a = 6 (повертає старе значення, ПОТІМ додає 1)
int c = ++a; // c = 7, a = 7 (спочатку додає 1, ПОТІМ повертає)</code></pre>
						<p class="text-slate-300"><strong>Пастка співбесіди:</strong> Вираз <code>i = i++;</code> залишає значення <code>i</code> незмінним (постфіксний оператор кешує старе значення, інкрементує <code>i</code>, а оператор <code>=</code> повертає в <code>i</code> старе закешоване значення).</p>
					</div>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Порівняння та логічні оператори:</h4>
					<ul class="list-disc list-inside space-y-1 text-[11px] text-slate-200 mb-2">
						<li><strong>Оператори порівняння:</strong> <code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code> (повертають <code>bool</code>).</li>
						<li><strong>Логічне "І":</strong> <code>&amp;&amp;</code> (Short-circuit / коротке замикання) vs <code>&amp;</code> (повне/бітове обчислення). Якщо у <code>expr1 &amp;&amp; expr2</code> перший вираз <code>false</code>, другий навіть НЕ обчислюється!</li>
						<li><strong>Логічне "АБО":</strong> <code>||</code> (коротке замикання) vs <code>|</code> (повне/бітове обчислення). Якщо у <code>expr1 || expr2</code> перший вираз <code>true</code>, другий не викликається.</li>
					</ul>

					<div class="p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>Фокус для інтерв'ю:</strong> «Коротке замикання <code>&amp;&amp;</code> критично важливе для уникнення падінь: <code>if (element != null &amp;&amp; element.Displayed)</code> ніколи не кине <code>NullReferenceException</code>, тоді як <code>&amp;</code> обов'язково кине виняток».
					</div>
				`
			}
		]
	},
	{
		id: 's-control-flow-arrays',
		category: 'S',
		menuTitle: 'Керування потоком, цикли & Масиви',
		menuSub:
			'if-else, тернарний оператор, switch expressions, цикли, масиви, індекси ^ та діапазони ..',
		layout: 'grid-2',
		cards: [
			{
				title: 'Умовні конструкції: if-else, тернарний & Switch',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">if-else та тернарний оператор:</h4>
					<p class="text-[11px] text-slate-300 mb-1">Тернарний оператор <code>умова ? вираз_true : вираз_false</code> замінює прості <code>if-else</code> блоки для присвоєння значень:</p>
					<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono mb-2"><code class="language-csharp">int timeout = isSlowEnv ? 60 : 10;
string badge = score &gt;= 90 ? "Senior" : score &gt;= 60 ? "Middle" : "Junior";
// Антипатерн: bool isOk = (code == 200) ? true : false; -&gt; Пишіть просто: bool isOk = code == 200;</code></pre>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Switch Statement vs Switch Expression (C# 8+):</h4>
					<div class="space-y-1.5 text-[11px] text-slate-200">
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Класичний switch-case:</strong>
							<p class="text-slate-300">Вимагає обов'язкових <code>break</code>, <code>default</code>, або <code>goto case</code> при переході.</p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Сучасний Switch Expression та Pattern Matching:</strong>
							<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono mt-1"><code class="language-csharp">var result = statusCode switch {
    200 =&gt; "Success",
    400 or 404 =&gt; "Client Error",
    &gt;= 500 and &lt;= 599 =&gt; "Server Crash",
    _ =&gt; "Unknown Status" // _ це дефолтний випадок
};</code></pre>
						</div>
					</div>

					<div class="mt-2 p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>Pattern Matching:</strong> перевірка об'єкта на тип та властивості прямо у switch: <code>case HttpResponseMessage { IsSuccessStatusCode: true } res: ...</code>
					</div>
				`
			},
			{
				title: 'Цикли, види масивів & Індекси та діапазони',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">Види циклів у C#:</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-200 mb-2">
						<li><code>for (int i = 0; i &lt; n; i++)</code> — ітерація з лічильником за індексами.</li>
						<li><code>foreach (var item in list)</code> — читання елементів через <code>IEnumerable</code>. <em>Модифікувати колекцію під час foreach заборонено</em> (кидає <code>InvalidOperationException</code>).</li>
						<li><strong>Безпечне видалення під час ітерації:</strong> використовуйте зворотний цикл <code>for (int i = list.Count - 1; i &gt;= 0; i--)</code>, метод <code>list.RemoveAll(...)</code> або копію <code>list.ToList()</code>.</li>
						<li><code>while (cond)</code> та <code>do { ... } while (cond)</code> (гарантує <strong>мінімум 1 виконання</strong>).</li>
						<li><code>break</code> — миттєвий вихід; <code>continue</code> — перехід до наступної ітерації.</li>
					</ul>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Масиви: Одновимірні, Багатовимірні та Зубчасті:</h4>
					<div class="space-y-1 text-[11px] text-slate-300 mb-2">
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<strong>Одновимірний:</strong> <code>int[] arr = new int[5];</code> або <code>int[] nums = [1, 2, 3];</code> (C# 12).
						</div>
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<strong>Пастка .Length у 2D масивах:</strong> Для <code>int[,] matrix = new int[2, 3];</code> властивість <code>matrix.Length</code> повертає загальну кількість елементів (<code>6</code>), а розміри вимірів беруться через <code>matrix.GetLength(0)</code> (2) та <code>matrix.GetLength(1)</code> (3).
						</div>
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<strong>Ступінчастий (Jagged):</strong> <code>int[][] jagged = new int[2][];</code> — масив масивів. Тут <code>jagged.Length</code> повертає кількість підмасивів (<code>2</code>).
						</div>
					</div>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Індекси (^) та Діапазони (..) у C# 8+:</h4>
					<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono"><code class="language-csharp">var words = new[] { "AQA", "C#", "Selenium", "Playwright", "NUnit" };
var last = words[^1];      // "NUnit" (^1 = останній елемент з кінця)
var slice = words[1..4];   // ["C#", "Selenium", "Playwright"] (з 1 включно по 4 виключно)
var allExceptFirst = words[1..]; // від індексу 1 до кінця</code></pre>
				`
			}
		]
	},
	{
		id: 's-methods-params',
		category: 'S',
		menuTitle: 'Методи, параметри & Рекурсія',
		menuSub: 'Сигнатура, overloading, ref, out, in, params, optional/named args, рекурсія',
		layout: 'grid-2',
		cards: [
			{
				title: 'Модифікатори параметрів: ref, out, in, params',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">За замовчуванням аргументи у C# передаються <strong>за значенням (by value)</strong>. Модифікатори дозволяють керувати способом передачі та пам'яттю:</p>
					
					<div class="space-y-1.5 text-[11px] text-slate-200 mb-2">
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">1. ref (Reference — двосторонній зв'язок):</strong>
							<p class="text-slate-300">Змінна передається за посиланням. Змінна <strong>зобов'язана бути ініціалізована</strong> перед передачею. Метод може читати та змінювати її значення.</p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">2. out (Output — вихідний параметр):</strong>
							<p class="text-slate-300">Змінна НЕ зобов'язана мати значення перед викликом, але викликаний метод <strong>ЗОБОВ'ЯЗАНИЙ присвоїти їй значення</strong> до свого завершення. Приклад: <code>int.TryParse(str, out int val)</code>.</p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">3. in (Read-only reference):</strong>
							<p class="text-slate-300">Передає великі структури (Value Types) за посиланням для оптимізації швидкодії, але <strong>забороняє методу модифікувати</strong> значення параметра.</p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">4. params (Змінна кількість аргументів):</strong>
							<p class="text-slate-300">Дозволяє передавати аргументи через кому або готовий масив: <code>void AssertAll(params Action[] assertions)</code>. У C# 12 <code>params</code> підтримує не лише масиви, а й колекції (<code>ReadOnlySpan&lt;T&gt;</code>, <code>List&lt;T&gt;</code>).</p>
						</div>
					</div>

					<div class="p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>Необов'язкові та іменовані параметри:</strong><br />
						<code>void Wait(int sec = 30, bool poll = true)</code> — дефолтні значення йдуть останніми.<br />
						Виклик: <code>Wait(poll: false)</code> — дозволяє пропускати перші аргументи за їх іменами.
					</div>
				`
			},
			{
				title: 'Перевантаження методів & Рекурсія',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">Перевантаження методів (Method Overloading):</h4>
					<p class="text-[11px] text-slate-300 mb-1">Оголошення методів з однаковим ім'ям, але <strong>різною сигнатурою</strong> (кількістю, типами або порядком параметрів).</p>
					
					<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50 text-[11px] text-slate-200 mb-2">
						<strong class="text-purple-400">Пастки перевантаження на співбесідах:</strong>
						<ul class="list-disc list-inside mt-0.5 space-y-0.5 text-slate-300">
							<li>Зміна <em>тільки типу повернення</em> (наприклад, <code>int Foo()</code> та <code>void Foo()</code>) <strong>НЕ є</strong> перевантаженням (помилка компіляції).</li>
							<li>Можна перевантажити <code>void Calc(int a)</code> та <code>void Calc(ref int a)</code>.</li>
							<li>Проте <strong>не можна</strong> одночасно мати <code>void Calc(ref int a)</code> та <code>void Calc(out int a)</code> (або <code>in int a</code>) — для CLR вони мають однакову сигнатуру передачі адреси покажчика!</li>
						</ul>
					</div>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Області видимості змінних (Variable Scope):</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-300 mb-2">
						<li><strong>Block Scope (<code>{}</code>):</strong> змінна доступна лише всередині блоку (циклу чи if).</li>
						<li><strong>Method Scope:</strong> параметри та локальні змінні існують лише у поточному стековому фреймі.</li>
						<li><strong>Class Scope:</strong> поля класу доступні всім його методам за модифікаторами доступу.</li>
					</ul>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Рекурсія та StackOverflowException:</h4>
					<p class="text-[11px] text-slate-300 mb-1">Рекурсія — виклик методом самого себе. Вимагає обов'язкової <strong>базової умови виходу (base case)</strong>:</p>
					<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono mb-2"><code class="language-csharp">int Factorial(int n) {
    if (n &lt;= 1) return 1; // Базовий випадок (умова виходу)
    return n * Factorial(n - 1); // Рекурсивний крок
}</code></pre>

					<div class="p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>Небезпека:</strong> Кожен рекурсивний виклик займає пам'ять у стеку (Call Stack). При безкінечній рекурсії виникає <code>StackOverflowException</code>, який аварійно зупиняє процес без можливості перехоплення у <code>catch</code>.
					</div>
				`
			}
		]
	},
	{
		id: 's-types-memory-null',
		category: 'S',
		menuTitle: 'Система типів: Value vs Reference & Null',
		menuSub: 'Stack vs Heap, Nullable, ??, ??=, ?., implicit/explicit casting, checked/unchecked',
		layout: 'grid-2',
		cards: [
			{
				title: 'Value Types vs Reference Types (Stack vs Heap)',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">Порівняння двох категорій типів:</h4>
					<table class="w-full text-left text-[11px] mb-2 border border-purple-900/60 rounded">
						<thead>
							<tr class="bg-purple-950/60 text-purple-300">
								<th class="p-1.5">Параметр</th>
								<th class="p-1.5">Value Types (Значення)</th>
								<th class="p-1.5">Reference Types (Посилання)</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-purple-950/40 text-slate-300">
							<tr>
								<td class="p-1.5 font-bold text-slate-200">Базовий клас</td>
								<td class="p-1.5"><code>System.ValueType</code> (наслідує <code>Object</code>)</td>
								<td class="p-1.5"><code>System.Object</code></td>
							</tr>
							<tr>
								<td class="p-1.5 font-bold text-slate-200">Приклади</td>
								<td class="p-1.5"><code>int</code>, <code>double</code>, <code>struct</code>, <code>enum</code>, <code>bool</code></td>
								<td class="p-1.5"><code>class</code>, <code>string</code>, <code>interface</code>, <code>delegate</code>, масиви</td>
							</tr>
							<tr>
								<td class="p-1.5 font-bold text-slate-200">Розміщення</td>
								<td class="p-1.5">На Стеку (Stack) або всередині об'єкта у Heap</td>
								<td class="p-1.5">Самі дані у Купі (Heap), на Стеку лише адреса (4/8 байт)</td>
							</tr>
							<tr>
								<td class="p-1.5 font-bold text-slate-200">Копіювання</td>
								<td class="p-1.5">Копіюється саме <strong>значення</strong> (незалежна копія)</td>
								<td class="p-1.5">Копіюється лише <strong>посилання</strong> (адреса)</td>
							</tr>
							<tr>
								<td class="p-1.5 font-bold text-slate-200">Очищення</td>
								<td class="p-1.5">Миттєво при виході зі скоупу стекового фрейму</td>
								<td class="p-1.5">Збирач сміття (Garbage Collector — GC)</td>
							</tr>
						</tbody>
					</table>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Boxing, Unboxing та нюанси передачі:</h4>
					<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50 text-[11px] text-slate-300 space-y-1">
						<p><strong>Boxing (Пакування):</strong> перетворення Value Type в <code>object</code> (виділення пам'яті в хіпі, копіювання значення, навантаження на GC):<br />
						<code>int num = 42; object boxed = num; // Boxing</code></p>
						<p><strong>Unboxing (Розпакування):</strong> явне вилучення значення назад у Value Type:<br />
						<code>int unboxed = (int)boxed; // Unboxing</code></p>
						<p><strong>Особливість Boxing для Nullable&lt;T&gt;:</strong> при упаковці <code>int? x = 5</code> у купу пакується чистий <code>int</code>, а якщо <code>x = null</code>, упаковка дає <code>null</code> без виділення об'єкта.</p>
						<p><strong>Передача Reference Type у метод:</strong> за замовчуванням посилання передається <em>за значенням</em> (копіюється адреса). Зміна поля (<code>user.Name = "New"</code>) змінить оригінал, але присвоєння <code>user = new User()</code> НЕ змінить зовнішню змінну (для цього потрібен <code>ref User user</code>).</p>
					</div>
				`
			},
			{
				title: 'Null-безпека, Nullable, Casting & Checked',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">Nullable типи та Null-оператори:</h4>
					<ul class="list-disc list-inside space-y-1 text-[11px] text-slate-300 mb-2">
						<li><code>Nullable&lt;T&gt;</code> або <code>int?</code> — дозволяє типам значень зберігати <code>null</code>. Властивості: <code>.HasValue</code> та <code>.Value</code>.</li>
						<li><code>?.</code> (Null-conditional): <code>driver?.FindElement(by)?.Text</code> — повертає <code>null</code> без падіння з <code>NullReferenceException</code>.</li>
						<li><code>??</code> (Null-coalescing): <code>string title = rawTitle ?? "Default"</code> — дефолтне значення при <code>null</code>.</li>
						<li><code>??=</code> (Null-coalescing assignment): <code>_client ??= new HttpClient();</code> — ініціалізація тільки якщо значення дорівнює <code>null</code>.</li>
						<li><code>!</code> (Null-forgiving): <code>user!.Name</code> — запевнення компілятора, що об'єкт не null.</li>
					</ul>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Приведення типів (Casting):</h4>
					<div class="space-y-1 text-[11px] text-slate-300 mb-2">
						<p><strong>Implicit (неявне):</strong> безпечне розширення без втрати точності (<code>int</code> у <code>long</code>).</p>
						<p><strong>Explicit (явне):</strong> звуження з можливістю втрати точності: <code>(int)3.14</code>.</p>
						<p><strong>Оператор is:</strong> перевірка типу та Pattern Matching:<br />
						<code>if (element is IJavaScriptExecutor js) { js.ExecuteScript("..."); }</code></p>
						<p><strong>Оператор as:</strong> безпечне приведення посилальних типів (повертає <code>null</code> замість викиду винятку):<br />
						<code>var btn = element as Button; // якщо тип не збігся, btn буде null</code></p>
					</div>

					<div class="p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>checked vs unchecked:</strong> За замовчуванням C# виконує цілочисельну арифметику в <code>unchecked</code> (при <code>int.MaxValue + 1</code> отримуємо <code>int.MinValue</code> без помилки). Блок <code>checked { ... }</code> вмикає перевірку CLR та кидає <code>OverflowException</code>.
					</div>
				`
			}
		]
	},
	{
		id: 's-oop-pillars',
		category: 'S',
		menuTitle: '4 Принципи ООП (Фундамент)',
		menuSub: 'Інкапсуляція, Абстракція, Наслідування, Поліморфізм (Static vs Dynamic) та POM',
		layout: 'grid-2',
		cards: [
			{
				title: '4 Стовпи ООП & Види поліморфізму',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">Об'єктно-орієнтоване програмування базується на <strong>4 базових парадигмах</strong>. <em>Не плутайте їх із SOLID</em> (SOLID — це правила архітектури класів, а ООП — фундамент моделювання сутностей):</p>
					
					<div class="space-y-1.5 text-[11px] text-slate-200 mb-2">
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">1. Інкапсуляція (Encapsulation):</strong>
							<p class="text-slate-300">Об'єднання даних (полів) і методів роботи з ними в єдину сутність та захист цілісності стану об'єкта. <em>Різниця з Data Hiding:</em> приховування даних — це техніка (<code>private</code> поля), а інкапсуляція — концепція самодостатнього об'єкта, що контролює свої інваріанти через методи та властивості.</p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">2. Абстракція (Abstraction):</strong>
							<p class="text-slate-300">Виділення головних характеристик сутності та відсікання зайвих деталей реалізації (контракти <code>interface</code> та <code>abstract class</code>). <em>Різниця:</em> інкапсуляція відповідає на питання <em>«Як захистити реалізацію?»</em>, а абстракція — <em>«Що саме показувати назовні?»</em>.</p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">3. Наслідування (Inheritance):</strong>
							<p class="text-slate-300">Створення нових класів на основі існуючих ("IS-A"). Забезпечує повторне використання коду. <em>Composition over Inheritance:</em> якщо зв'язок радше "HAS-A", надавайте перевагу композиції для зменшення жорсткої зв'язності.</p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">4. Поліморфізм (Polymorphism):</strong>
							<p class="text-slate-300">Здатність об'єктів з однаковим інтерфейсом мати різну поведінку. Поділяється на 2 фундаментальні види:</p>
							<ul class="list-disc list-inside mt-0.5 space-y-0.5 text-slate-300">
								<li><strong>Статичний (Compile-time / Ad-hoc / Parametric):</strong> перевантаження методів (Overloading) та Generics. Вибір методу відбувається на етапі компіляції.</li>
								<li><strong>Динамічний (Runtime / Subtyping):</strong> перевизначення методів (<code>virtual</code> / <code>override</code>) через таблицю vtable та інтерфейси. Вибір методу відбувається під час виконання.</li>
							</ul>
						</div>
					</div>
				`
			},
			{
				title: '4 Принципи ООП у практиці AQA (Page Object Model)',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">Як 4 кити ООП реалізуються у фреймворку тестів:</h4>
					<div class="space-y-1.5 text-[11px] text-slate-200 mb-2">
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Інкапсуляція у POM:</strong>
							<p class="text-slate-300">Усі локатори (<code>By.Id</code>, <code>ILocator</code>) та внутрішні затримки є <code>private</code>. Назовні сторінка надає лише публічні бізнес-методи (<code>public DashboardPage Login(User user)</code>). Тести не знають, які селектори на сторінці.</p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Абстракція у тестах:</strong>
							<p class="text-slate-300">Тестовий сценарій викликає <code>checkoutPage.PayWithCard(card)</code>. Тест абстрагований від HTML-структури DOM, AJAX-запитів, очікування спінерів та анімацій.</p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Наслідування сторінок:</strong>
							<p class="text-slate-300">Базовий клас <code>BasePage</code> містить спільні елементи (Header, Navigation, інстанс Driver, методи <code>WaitForElement</code>). Сторінки <code>LoginPage : BasePage</code> та <code>CartPage : BasePage</code> повторно використовують цю основу.</p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Поліморфізм у тестах:</strong>
							<p class="text-slate-300">1) Робота через інтерфейс <code>IWebDriver driver</code> — код тесту однаковий для Chrome, Firefox або Playwright.<br />
							2) Віртуальні методи життєвого циклу сторінки: <code>public virtual void WaitForLoaded()</code> у <code>BasePage</code> перевизначається (<code>override</code>) у складних сторінках з графіками.</p>
						</div>
					</div>

					<div class="p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>Фокус для інтерв'ю:</strong> «Page Object Model — це ідеальна демонстрація всіх 4 принципів ООП у дії. Вона перетворює сирий код взаємодії з браузером на надійну, типізовану та підтримувану бізнес-модель».
					</div>
				`
			}
		]
	},
	{
		id: 's-oop-classes',
		category: 'S',
		menuTitle: 'ООП: Класи, Конструктори & Властивості',
		menuSub:
			'Модифікатори доступу, інкапсуляція, конструктори, this, auto-properties, init, record',
		layout: 'grid-2',
		cards: [
			{
				title: 'Класи, Модифікатори доступу & Інкапсуляція',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2"><strong>Клас (Class)</strong> — це посилальний тип даних (креслення об'єкта), що об'єднує поля (стан) та методи/властивості (поведінку). <strong>Інкапсуляція</strong> приховує внутрішню реалізацію та захищає її від прямого втручання.</p>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Модифікатори доступу (Access Modifiers) у C#:</h4>
					<div class="space-y-1 text-[11px] text-slate-200 mb-2">
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">public:</strong> доступний без обмежень усім збіркам та класам.
						</div>
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">private:</strong> доступний виключно всередині того ж класу чи структури.
						</div>
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">protected:</strong> доступний у межах свого класу та у всіх похідних класах (нащадках).
						</div>
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">internal:</strong> доступний будь-якому коду всередині поточної збірки (Assembly / .dll).
						</div>
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">protected internal:</strong> доступний у поточній збірці АБО в класах-нащадках інших збірок.
						</div>
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">private protected:</strong> доступний нащадкам ТІЛЬКИ в межах поточної збірки.
						</div>
					</div>

					<div class="p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>Принцип інкапсуляції у тестах:</strong> Локатори та внутрішні методи сторінки робляться <code>private</code>, а назовні Page Object надає лише публічні бізнес-методи (наприклад, <code>public DashboardPage LoginAs(User user)</code>).
					</div>
				`
			},
			{
				title: 'Конструктори, Властивості, init, required & Record',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">Конструктори та ключове слово this:</h4>
					<p class="text-[11px] text-slate-300 mb-1">Конструктор ініціалізує екземпляр при створенні через <code>new</code>. Перевантаження дозволяє викликати інший конструктор через <code>: this(...)</code>:</p>
					<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono mb-2"><code class="language-csharp">public class BasePage {
    protected IWebDriver Driver;
    public BasePage(IWebDriver driver) { this.Driver = driver; }
    // Делегування іншому конструктору:
    public BasePage() : this(WebDriverFactory.GetDriver()) { }
}</code></pre>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Властивості, init, required & Record:</h4>
					<ul class="list-disc list-inside space-y-1 text-[11px] text-slate-300 mb-2">
						<li><strong>Auto-properties:</strong> <code>public string Env { get; set; } = "Prod";</code></li>
						<li><strong>Encapsulated:</strong> <code>public int Timeout { get; private set; }</code> (зміна лише всередині класу).</li>
						<li><strong>init (C# 9+):</strong> <code>public string ApiKey { get; init; }</code> — значення присвоюється лише при ініціалізації об'єкта, далі стає immutable.</li>
						<li><strong>required (C# 11+):</strong> <code>public required string BaseUrl { get; init; }</code> — зобов'язує ініціалізувати властивість при створенні об'єкта через <code>{ ... }</code> під час компіляції.</li>
						<li><strong>Object Initializers:</strong> <code>var user = new User { Name = "Alex" };</code> (спочатку відпрацьовує конструктор, потім властивості).</li>
					</ul>

					<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50 text-[11px] text-slate-200">
						<strong class="text-purple-400">record (C# 9+):</strong>
						<p class="text-slate-300">Тип для незмінних DTO та тестових даних. За замовчуванням має порівняння за значенням (Value Equality), авто-генеровані <code>ToString()</code>, <code>GetHashCode()</code> та підтримку неруйнівного копіювання з модифікацією <code>with</code>:<br />
						<code>var updatedUser = user with { Role = "QA Lead" };</code></p>
					</div>
				`
			}
		]
	},
	{
		id: 's-static-const-advanced',
		category: 'S',
		menuTitle: 'static, const vs readonly, Extension & Partial',
		menuSub: 'Статичні члени та класи, const vs readonly, методи розширення, partial класи',
		layout: 'grid-2',
		cards: [
			{
				title: 'Модифікатор static та Статичний конструктор',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2">Ключове слово <strong>static</strong> означає, що член або клас належить безпосередньо <strong>самому типу</strong>, а не конкретному екземпляру в пам'яті. Статичні члени існують в одному екземплярі на весь домен додатку.</p>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Особливості статичних конструкцій:</h4>
					<div class="space-y-1.5 text-[11px] text-slate-200 mb-2">
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">static поля та методи:</strong>
							<p class="text-slate-300">Викликаються через ім'я класу: <code>ConfigurationReader.GetBaseUrl()</code>. Не мають доступу до ключового слова <code>this</code>, оскільки існують поза контекстом екземпляра.</p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">static class:</strong>
							<p class="text-slate-300">Містить <em>лише</em> статичні члени, не може створюватися через <code>new</code>, є неявно <code>sealed</code> і не може наслідуватися. Застосовується для утиліт та Extension методів.</p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Статичний конструктор (static Constructor):</strong>
							<p class="text-slate-300"><code>static DriverFactory() { ... }</code>. Не приймає аргументів, не має модифікаторів доступу. Викликається автоматично середовищем CLR <strong>рівно один раз</strong> перед першим зверненням до класу. Потокобезпечний за специфікацією CLR.</p>
						</div>
					</div>

					<div class="p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>Пастка для AQA:</strong> У паралельних тестах статичні змінні (наприклад, <code>public static IWebDriver Driver</code>) призводять до перезапису драйвера між потоками (Race Condition). Застосовуйте <code>ThreadLocal&lt;IWebDriver&gt;</code> або DI-контейнер!
					</div>
				`
			},
			{
				title: 'const vs readonly, Extension Methods & partial',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">Топ-питання співбесіди: const vs readonly:</h4>
					<table class="w-full text-left text-[11px] mb-2 border border-purple-900/60 rounded">
						<thead>
							<tr class="bg-purple-950/60 text-purple-300">
								<th class="p-1.5">Критерій</th>
								<th class="p-1.5">const (Compile-time)</th>
								<th class="p-1.5">readonly (Runtime)</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-purple-950/40 text-slate-300">
							<tr>
								<td class="p-1.5 font-bold text-slate-200">Момент ініціалізації</td>
								<td class="p-1.5">Під час компіляції (значення жорстко вшивається в IL-код)</td>
								<td class="p-1.5">Під час виконання програми (в оголошенні або в конструкторі)</td>
							</tr>
							<tr>
								<td class="p-1.5 font-bold text-slate-200">Дозволені типи</td>
								<td class="p-1.5">Примітиви, <code>string</code>, <code>enum</code> або <code>null</code> для Reference-типів</td>
								<td class="p-1.5">Будь-які типи даних (включно з об'єктами <code>new ...</code>)</td>
							</tr>
							<tr>
								<td class="p-1.5 font-bold text-slate-200">Контекст та пам'ять</td>
								<td class="p-1.5">Неявно статична (<code>static</code> заборонено), можна оголосити локально в методі</td>
								<td class="p-1.5">Тільки поле класу (інстансне або <code>static readonly</code>)</td>
							</tr>
						</tbody>
					</table>

					<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50 text-[11px] text-slate-200 mb-2">
						<strong class="text-purple-400">Пастка інтерв'ю з readonly для Reference Types:</strong>
						<p class="text-slate-300">Якщо поле оголошено як <code>private readonly List&lt;string&gt; _logs = new();</code>, ми <strong>не можемо</strong> присвоїти йому новий список поза конструктором (<code>_logs = new()</code>), але ми <strong>можемо</strong> вільно модифікувати вміст об'єкта (<code>_logs.Add("Error")</code>, <code>_logs.Clear()</code>)!</p>
					</div>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Extension Methods (Методи розширення):</h4>
					<p class="text-[11px] text-slate-300 mb-1">Дозволяють додавати методи до існуючих типів без модифікації їхнього коду (ключове слово <code>this</code> у першому параметрі):</p>
					<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono mb-2"><code class="language-csharp">public static class WebElementExtensions {
    public static void ClickWithWait(this IWebElement element, int timeout = 10) {
        // Очікування клікабельності та клік
    }
}
// Використання: submitButton.ClickWithWait();</code></pre>

					<p class="text-[11px] text-slate-300"><strong>partial класи:</strong> дозволяють розділити визначення класу на кілька файлів <code>.cs</code> (збираються компілятором в один тип). Застосовуються в Source Generators та автозгенерованому коді.</p>
				`
			}
		]
	},
	{
		id: 's-oop-inheritance-polymorphism',
		category: 'S',
		menuTitle: 'Наслідування, Поліморфізм, Abstract & Interfaces',
		menuSub:
			': base, virtual, override, new, abstract class vs interface, явна та дефолтна реалізація',
		layout: 'grid-2',
		cards: [
			{
				title: 'Наслідування, : base & Поліморфізм (virtual/override)',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">Наслідування (Inheritance):</h4>
					<p class="text-[11px] text-slate-300 mb-1">Створення нових класів на основі існуючих. У C# підтримується <strong>виключно одинарне наслідування класів</strong> (але множинна реалізація інтерфейсів).</p>
					<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono mb-2"><code class="language-csharp">public class LoginPage : BasePage {
    // Виклик конструктора базового класу через : base(...)
    public LoginPage(IWebDriver driver) : base(driver) { }
    
    public override void Open() {
        base.Open(); // Виклик базової реалізації
        NavigateTo("/login");
    }
}</code></pre>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Поліморфізм: virtual, override та new:</h4>
					<div class="space-y-1.5 text-[11px] text-slate-200 mb-2">
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">virtual / override (Динамічний поліморфізм):</strong>
							<p class="text-slate-300"><code>virtual</code> дозволяє перевизначити метод. <code>override</code> замінює реалізацію у vtable. Виклик через базове посилання <code>BasePage page = new LoginPage(); page.Open();</code> виконає версію <code>LoginPage</code>.</p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">new (Method Hiding — приховування):</strong>
							<p class="text-slate-300">Розриває віртуальність. Виклик через посилання базового типу виконає <em>базовий</em> метод; виклик через тип спадкоємця — новий прихований метод.</p>
						</div>
					</div>

					<div class="p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>Порядок ініціалізації:</strong> Спочатку ініціалізуються поля похідного класу -&gt; викликається конструктор базового класу (<code>Base</code>) -&gt; виконується тіло конструктора похідного класу (<code>Derived</code>).
					</div>
				`
			},
			{
				title: 'Abstract Class vs Interface',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">Порівняння Abstract Class та Interface:</h4>
					<table class="w-full text-left text-[11px] mb-2 border border-purple-900/60 rounded">
						<thead>
							<tr class="bg-purple-950/60 text-purple-300">
								<th class="p-1.5">Властивість</th>
								<th class="p-1.5">Abstract Class</th>
								<th class="p-1.5">Interface</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-purple-950/40 text-slate-300">
							<tr>
								<td class="p-1.5 font-bold text-slate-200">Сутність</td>
								<td class="p-1.5">Відношення <strong>"IS-A"</strong> (спільна базова сутність)</td>
								<td class="p-1.5">Відношення <strong>"CAN-DO"</strong> (контракт поведінки)</td>
							</tr>
							<tr>
								<td class="p-1.5 font-bold text-slate-200">Множинність</td>
								<td class="p-1.5">Клас може наслідувати лише <strong>1</strong> клас</td>
								<td class="p-1.5">Клас або структура може реалізувати <strong>безліч</strong> інтерфейсів</td>
							</tr>
							<tr>
								<td class="p-1.5 font-bold text-slate-200">Стан (Поля)</td>
								<td class="p-1.5">Може мати поля екземпляра (<code>private</code>, <code>protected</code>)</td>
								<td class="p-1.5">Не може мати полів екземпляра (лише властивості/події)</td>
							</tr>
							<tr>
								<td class="p-1.5 font-bold text-slate-200">Конструктори</td>
								<td class="p-1.5">Має конструктори (викликаються через <code>: base()</code>)</td>
								<td class="p-1.5">Не має конструкторів екземпляра</td>
							</tr>
						</tbody>
					</table>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Явна та дефолтна реалізація інтерфейсів:</h4>
					<div class="space-y-1.5 text-[11px] text-slate-200 mb-2">
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Явна реалізація (Explicit Implementation):</strong>
							<p class="text-slate-300">Вирішує колізію двох інтерфейсів з однаковим методом: <code>void IApiTest.Run() { ... }</code>. Метод доступний <strong>тільки при приведенні об'єкта до інтерфейсу</strong>: <code>((IApiTest)test).Run();</code>.</p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Default Interface Methods (C# 8+):</strong>
							<p class="text-slate-300">Інтерфейс може містити дефолтне тіло методу. Це дозволяє розширювати контракт без ламання існуючих реалізацій.</p>
						</div>
					</div>

					<div class="p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>Структури (struct) та Інтерфейси:</strong> Структури можуть реалізовувати інтерфейси, але приведення екземпляра структури до інтерфейсу (<code>IDisposable d = myStruct;</code>) викликає <strong>Boxing</strong> у Heap!
					</div>
				`
			}
		]
	},
	{
		id: 's-memory-gc-equality',
		category: 'S',
		menuTitle: "Пам'ять CLR, Garbage Collector & Рівність",
		menuSub:
			'Покоління GC (0, 1, 2, LOH), Mark-Sweep-Compact, IDisposable vs Finalizer, == vs Equals & GetHashCode',
		layout: 'grid-2',
		cards: [
			{
				title: "Пам'ять CLR, Робота GC & IDisposable",
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">Як працює Garbage Collector (GC):</h4>
					<p class="text-[11px] text-slate-300 mb-1">GC в .NET автоматично керує керованою купою (Managed Heap). Фази збирання:</p>
					<ol class="list-decimal list-inside space-y-0.5 text-[11px] text-slate-200 mb-2">
						<li><strong>Mark:</strong> починаючи від GC Roots (статичні поля, локальні змінні стеку), обходить граф і маркує живі об'єкти.</li>
						<li><strong>Sweep:</strong> визначає блоки пам'яті з мертвими (недосяжними) об'єктами.</li>
						<li><strong>Compact:</strong> переміщує живі об'єкти впритул один до одного для усунення фрагментації.</li>
					</ol>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Покоління пам'яті (Generations):</h4>
					<div class="space-y-1 text-[11px] text-slate-200 mb-2">
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Gen 0:</strong> короткоживучі об'єкти (локальні змінні, DTO). Очищується найчастіше і найшвидше.
						</div>
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Gen 1:</strong> буфер між Gen 0 та Gen 2 для об'єктів середньої тривалості життя.
						</div>
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Gen 2:</strong> довгоживучі об'єкти (Singleton, кеші). Збирання Gen 2 (Full GC) — найважче і викликає паузу (Stop-The-World).
						</div>
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">LOH (Large Object Heap):</strong> об'єкти <strong>&gt; 85,000 байт</strong> (великі масиви/буфери). За замовчуванням LOH не ущільнюється (ризик фрагментації пам'яті!).
						</div>
					</div>

					<div class="p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>IDisposable vs Фіналізатор (~Destructor):</strong><br />
						<code>Dispose()</code> викликається розробником (детерміновано). Фіналізатор <code>~MyClass()</code> викликається GC у черзі <em>Finalizer Queue</em>, якщо об'єкт забули задіспозити (недетерміновано, об'єкт живе довше).<br />
						<code>GC.SuppressFinalize(this)</code> скасовує фіналізатор після успішного Dispose.
					</div>
				`
			},
			{
				title: 'Рівність у C# (Equality) & Пастка GetHashCode',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">Способи перевірки рівності в C#:</h4>
					<div class="space-y-1.5 text-[11px] text-slate-200 mb-2">
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">ReferenceEquals(a, b):</strong>
							<p class="text-slate-300">Суворо перевіряє, чи вказують дві змінні на <strong>одну й ту саму адресу в пам'яті</strong> (Identity). Для Value Types завжди повертає <code>false</code> через boxing.</p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Оператор == vs Equals():</strong>
							<p class="text-slate-300"><code>==</code> — статичний оператор (для класів за замовчуванням порівнює посилання, але у <code>string</code> перевантажений для порівняння вмісту). <code>Equals()</code> — віртуальний метод <code>Object</code>, який можна перевизначити для порівняння за значенням полів.</p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">IEquatable&lt;T&gt;:</strong>
							<p class="text-slate-300">Реалізація <code>bool Equals(T other)</code> забезпечує швидке порівняння без упаковки в <code>object</code> (відсутність Boxing для структур).</p>
						</div>
					</div>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Золоте правило співбесід: пастка GetHashCode():</h4>
					<div class="p-2 rounded bg-amber-950/40 border border-amber-800/40 text-[11px] text-amber-200 mb-2">
						<strong>Контракт CLR:</strong> Якщо два об'єкти рівні за <code>Equals()</code>, їхній <code>GetHashCode()</code> <strong>ЗОБОВ'ЯЗАНИЙ повертати однакове число!</strong>
					</div>

					<div class="p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>Що буде, якщо перевизначити Equals, але не GetHashCode?</strong><br />
						Об'єкт буде неможливо знайти в <code>Dictionary&lt;TKey, TValue&gt;</code> або <code>HashSet&lt;T&gt;</code>! Хеш-таблиця розрахує випадковий дефолтний хеш від адреси пам'яті, покладе об'єкт в один кошик (bucket), а при спробі знайти еквівалентний об'єкт шукатиме в іншому кошику і поверне <code>false</code> / <code>KeyNotFoundException</code>.
					</div>
				`
			}
		]
	},
	{
		id: 's-generics-delegates-events',
		category: 'S',
		menuTitle: 'Generics, Делегати, Події & Лямбди',
		menuSub: 'Generic constraints (where), delegate, Action, Func, Predicate, event, лямбди =>',
		layout: 'grid-2',
		cards: [
			{
				title: 'Generics (Узагальнення) & Обмеження (Constraints)',
				contentHtml: `
					<p class="text-xs text-slate-300 mb-2"><strong>Generics</strong> дозволяють створювати класи, методи та інтерфейси, параметризовані типами даних. Вони забезпечують безпеку типів (Type-Safety) під час компіляції та виключають витрати на boxing/unboxing.</p>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Обмеження типів (Generic Constraints) через where:</h4>
					<div class="space-y-1 text-[11px] text-slate-200 mb-2">
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<code>where T : class</code> — тип <code>T</code> зобов'язаний бути посилальним типом (Reference Type).
						</div>
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<code>where T : struct</code> — тип <code>T</code> зобов'язаний бути типом значення (Value Type).
						</div>
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<code>where T : new()</code> — вимагає наявності публічного конструктора без параметрів (дозволяє робити <code>new T()</code>).
						</div>
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<code>where T : BasePage</code> — тип повинен наслідувати вказаний базовий клас.
						</div>
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<code>where T : IDisposable</code> — тип повинен реалізувати конкретний інтерфейс.
						</div>
					</div>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Практичний AQA патерн фабрики сторінок:</h4>
					<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono mb-2"><code class="language-csharp">public T InitPage&lt;T&gt;() where T : BasePage, new() {
    var page = new T();
    page.SetDriver(this.Driver);
    return page;
}</code></pre>
				`
			},
			{
				title: 'Делегати, Func, Action, Події (Events) & Замикання',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">Делегати, Action та Func:</h4>
					<div class="space-y-1.5 text-[11px] text-slate-200 mb-2">
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Action&lt;T1, T2...&gt;:</strong>
							<p class="text-slate-300">Приймає аргументи і <strong>НЕ повертає значення (void)</strong>.<br />
							<code>Action&lt;string&gt; log = msg =&gt; Console.WriteLine(msg);</code></p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Func&lt;T1, T2..., TResult&gt;:</strong>
							<p class="text-slate-300">Приймає аргументи та <strong>ОБОВ'ЯЗКОВО повертає результат</strong> (останній тип у списку generics).<br />
							<code>Func&lt;int, int, bool&gt; isGreater = (a, b) =&gt; a &gt; b;</code><br />
							<em>Multicast з Func:</em> при ланцюжку (<code>+=</code>) повертається результат <strong>лише останнього</strong> методу.</p>
						</div>
					</div>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Події (Events) та їх безпечний виклик:</h4>
					<p class="text-[11px] text-slate-300 mb-1">Подія (<code>event</code>) — обгортка над делегатом (патерн Publisher-Subscriber). Зовнішній код може лише підписуватися (<code>+=</code>) або відписуватися (<code>-=</code>). Викликається безпечно через Elvis operator: <code>OnTestFinished?.Invoke(result);</code>.</p>

					<div class="p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>Замикання (Closures) у лямбдах:</strong><br />
						Лямбда захоплює зовнішню змінну <strong>за посиланням</strong>, а не її значення на момент створення:<br />
						<pre class="bg-black/80 p-1 rounded text-[10px] text-slate-200 font-mono mt-1"><code class="language-csharp">var actions = new List&lt;Action&gt;();
for (int i = 0; i &lt; 3; i++) {
    actions.Add(() =&gt; Console.Write(i)); // Захоплюється сама змінна i!
}
actions.ForEach(a =&gt; a()); // Виведе "333", бо після циклу i == 3!</code></pre>
						<em>Примітка:</em> у циклі <code>foreach</code> (починаючи з C# 5) кожна ітерація створює нову змінну, тому там буде "012".
					</div>
				`
			}
		]
	},
	{
		id: 's-collections-linq',
		category: 'S',
		menuTitle: 'Колекції, Обробка винятків & LINQ',
		menuSub:
			'List, Dictionary, HashSet, yield return, try-catch-finally when, First vs Single, Left Join',
		layout: 'grid-2',
		cards: [
			{
				title: 'Колекції .NET, yield return & Обробка винятків',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">Основні колекції (System.Collections.Generic):</h4>
					<ul class="list-disc list-inside space-y-1 text-[11px] text-slate-300 mb-2">
						<li><code>List&lt;T&gt;</code>: динамічний масив. Швидкий доступ за індексом O(1). Додавання в кінець O(1) амортизовано. Пошук неіндексованого елемента O(N).</li>
						<li><code>Dictionary&lt;TKey, TValue&gt;</code>: хеш-таблиця. Визначає кошик (bucket) через <code>GetHashCode()</code>, а при колізіях перевіряє точний збіг через <code>Equals()</code>. Пошук O(1). Для безпечного читання використовуйте <code>dict.TryGetValue(key, out var val)</code>.</li>
						<li><code>HashSet&lt;T&gt;</code>: невпорядкована множина унікальних елементів. Пошук <code>Contains</code> за O(1), операції перетину та об'єднання множин.</li>
						<li><code>Queue&lt;T&gt;</code> (FIFO) та <code>Stack&lt;T&gt;</code> (LIFO).</li>
					</ul>

					<h4 class="font-bold text-purple-300 text-xs mb-1">yield return та ліниве виконання (Lazy Evaluation):</h4>
					<p class="text-[11px] text-slate-300 mb-1">Оператор <code>yield return</code> генерує послідовність по одному елементу за запитом (State Machine), не виділяючи пам'ять під усю колекцію одразу:</p>
					<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono mb-2"><code class="language-csharp">public IEnumerable&lt;TestCaseData&gt; GetTestData() {
    yield return new TestCaseData("admin", 200);
    yield return new TestCaseData("guest", 403);
}</code></pre>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Обробка винятків (try-catch-finally when):</h4>
					<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono mb-2"><code class="language-csharp">try {
    SendHttpRequest();
} catch (HttpRequestException ex) when (ex.StatusCode == HttpStatusCode.NotFound) {
    // Exception Filter (when) фільтрує помилку без розгортання стеку!
    Logger.Warn("Resource not found");
} catch (Exception ex) {
    Logger.Error(ex, "Unexpected crash");
    throw; // ПРАВИЛЬНО: зберігає оригінальний Stack Trace!
    // throw ex; // ПОМИЛКА: затирає стек викликів, втрачаючи місце збою!
} finally {
    CleanupConnections(); // Виконується ЗАВЖДИ
}</code></pre>
				`
			},
			{
				title: 'LINQ & Різниця First/Single & Left Join',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">First, FirstOrDefault, Single та SingleOrDefault:</h4>
					<table class="w-full text-left text-[11px] mb-2 border border-purple-900/60 rounded">
						<thead>
							<tr class="bg-purple-950/60 text-purple-300">
								<th class="p-1.5">Метод</th>
								<th class="p-1.5">0 елементів</th>
								<th class="p-1.5">1 елемент</th>
								<th class="p-1.5">&gt; 1 елемента</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-purple-950/40 text-slate-300">
							<tr>
								<td class="p-1.5 font-bold text-slate-200">First()</td>
								<td class="p-1.5">InvalidOperationException</td>
								<td class="p-1.5">Повертає елемент</td>
								<td class="p-1.5">Повертає перший</td>
							</tr>
							<tr>
								<td class="p-1.5 font-bold text-slate-200">FirstOrDefault()</td>
								<td class="p-1.5">default(T) / null</td>
								<td class="p-1.5">Повертає елемент</td>
								<td class="p-1.5">Повертає перший</td>
							</tr>
							<tr>
								<td class="p-1.5 font-bold text-slate-200">Single()</td>
								<td class="p-1.5">InvalidOperationException</td>
								<td class="p-1.5">Повертає елемент</td>
								<td class="p-1.5">InvalidOperationException</td>
							</tr>
							<tr>
								<td class="p-1.5 font-bold text-slate-200">SingleOrDefault()</td>
								<td class="p-1.5">default(T) / null</td>
								<td class="p-1.5">Повертає елемент</td>
								<td class="p-1.5">InvalidOperationException</td>
							</tr>
						</tbody>
					</table>

					<h4 class="font-bold text-purple-300 text-xs mb-1">LINQ Left Outer Join (Топ-завдання співбесіди):</h4>
					<p class="text-[11px] text-slate-300 mb-1">У LINQ немає окремого оператора <code>left join</code>. Він реалізується через комбінацію <code>GroupJoin</code> + <code>SelectMany</code> + <code>DefaultIfEmpty()</code>:</p>
					<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono mb-2"><code class="language-csharp">// Query Syntax:
var leftJoin = from u in users
               join o in orders on u.Id equals o.UserId into userOrders
               from order in userOrders.DefaultIfEmpty()
               select new { UserName = u.Name, OrderId = order?.Id };

// Method Syntax:
var methodLeftJoin = users
    .GroupJoin(orders, u =&gt; u.Id, o =&gt; o.UserId, (u, ords) =&gt; new { u, ords })
    .SelectMany(x =&gt; x.ords.DefaultIfEmpty(), (x, o) =&gt; new { x.u.Name, OrderId = o?.Id });</code></pre>
				`
			}
		]
	},
	{
		id: 's-async-reflection-qa',
		category: 'S',
		menuTitle: 'Асинхронність, Ресурси & Reflection для AQA',
		menuSub:
			'async/await, Task, IDisposable, using, HttpClient, JSON, Reflection та атрибути NUnit/xUnit, DI Lifetimes',
		layout: 'grid-2',
		cards: [
			{
				title: 'Async/Await, IDisposable & Керування ресурсами',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">Асинхронність: async, await та Task:</h4>
					<ul class="list-disc list-inside space-y-1 text-[11px] text-slate-300 mb-2">
						<li><code>Task</code> — об'єкт стану асинхронної операції (аналог <code>void</code> для синхронних методів). <code>Task&lt;T&gt;</code> повертає результат.</li>
						<li><code>async void</code> — <strong>антипатерн!</strong> Дозволений виключно для UI event handlers. Будь-який виняток у <code>async void</code> не можна перехопити через <code>catch</code>, що веде до падіння процесу.</li>
						<li><strong>Небезпека .Result та .Wait():</strong> блокування асинхронного виклику (Sync-over-Async) призводить до Thread Pool Starvation або <strong>Deadlock</strong> (при наявності <code>SynchronizationContext</code>) і загортає помилки в <code>AggregateException</code>.</li>
						<li><code>CancellationToken</code>: стандартний механізм кооперативного скасування тривалих операцій за таймаутом: <code>await client.GetAsync(url, ct);</code>.</li>
					</ul>

					<h4 class="font-bold text-purple-300 text-xs mb-1">IDisposable та інструкція using:</h4>
					<p class="text-[11px] text-slate-300 mb-1">Слугує для детермінованого звільнення <strong>некерованих ресурсів</strong> (дескрипторів файлів, з'єднань БД, процесів браузера WebDriver):</p>
					<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono mb-2"><code class="language-csharp">// C# 8 using declaration: звільняється при виході зі скоупу
using var response = await httpClient.GetAsync("/api/users");
var content = await response.Content.ReadAsStringAsync();
// Під капотом розгортається у try { ... } finally { obj.Dispose(); }</code></pre>

					<div class="p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>HttpClient та JSON:</strong> Створення <code>new HttpClient()</code> на кожен запит викликає <em>Socket Exhaustion</em> (виснаження портів). Слід використовувати <code>static HttpClient</code> або <code>IHttpClientFactory</code>. Для серіалізації використовуйте <code>System.Text.Json.JsonSerializer</code>.
					</div>
				`
			},
			{
				title: 'Рефлексія, Атрибути NUnit/xUnit & DI Життєві цикли',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">Що таке Рефлексія (System.Reflection):</h4>
					<p class="text-[11px] text-slate-300 mb-1">Механізм дослідження метаданих збірок, типів, методів та властивостей під час виконання програми:</p>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-300 mb-2">
						<li>Отримання типу: <code>typeof(LoginPage)</code> (під час компіляції) або <code>instance.GetType()</code> (під час виконання).</li>
						<li>Динамічне створення: <code>Activator.CreateInstance(type)</code>.</li>
						<li>Читання приватних полів/методів через <code>BindingFlags.NonPublic | BindingFlags.Instance</code>.</li>
					</ul>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Як NUnit / xUnit використовують рефлексію:</h4>
					<p class="text-[11px] text-slate-300 mb-1">Тестові раннери сканують збірки, знаходять класи з атрибутами <code>[TestFixture]</code> та викликають методи з атрибутами <code>[Test]</code> / <code>[Fact]</code>. Рефлексія також передає дані параметризації (<code>[TestCase]</code>, <code>[Theory]</code>).</p>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Dependency Injection (DI) Service Lifetimes:</h4>
					<div class="space-y-1 text-[11px] text-slate-300 mb-2">
						<p><strong>Transient:</strong> новий екземпляр створюється щоразу при запиті (ідеально для легковажних утиліт без стану).</p>
						<p><strong>Scoped:</strong> один екземпляр на весь Scope (у тестах — один екземпляр <code>IWebDriver</code> на окремий тест/потік).</p>
						<p><strong>Singleton:</strong> єдиний екземпляр на весь життєвий цикл додатку/прогону (конфігурація, підключення до TestRail).</p>
					</div>

					<div class="p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>Кастомний атрибут для автотестів:</strong><br />
						<code>[AttributeUsage(AttributeTargets.Method)] public class SeverityAttribute(string level) : Attribute { public string Level =&gt; level; }</code>
					</div>
				`
			}
		]
	}
];
