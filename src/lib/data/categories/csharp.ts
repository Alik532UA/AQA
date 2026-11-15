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
							<strong class="text-purple-400">Числа з рухомою комою та точністю:</strong>
							<ul class="list-disc list-inside mt-0.5 space-y-0.5 text-slate-300">
								<li><code>float</code> (32-bit Single, суфікс <code>f</code>, ~7 знаків точності) — графіка, низька точність.</li>
								<li><code>double</code> (64-bit Double, за замовчуванням, ~15-16 знаків точності) — загальні математичні розрахунки.</li>
								<li><code>decimal</code> (128-bit, суфікс <code>m</code>, 28-29 знаків точності) — фінансові та грошові операції (виключає помилки округлення двійкового представлення).</li>
							</ul>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Логічний, символьний та рядковий:</strong>
							<p class="text-slate-300"><code>bool</code> (1 байт, <code>true</code> / <code>false</code>), <code>char</code> (2 байти, одиночний символ UTF-16, в одинарних лапках <code>'A'</code>), <code>string</code> (Reference type, незмінний масив символів UTF-16, у подвійних лапках <code>"Hello"</code>).</p>
						</div>
					</div>

					<div class="p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>Перерахування (enum):</strong> іменований набір цілочисельних констант (за замовчуванням <code>int</code>, від 0). Атрибут <code>[Flags]</code> дозволяє комбінувати значення бітовими масками (1, 2, 4, 8...).
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
						<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono"><code>int a = 5;
int b = a++; // b = 5, a = 6 (повертає старе значення, ПОТІМ додає 1)
int c = ++a; // c = 7, a = 7 (спочатку додає 1, ПОТІМ повертає)</code></pre>
						<p class="text-slate-400">Аналогічно працює декремент: <code>--i</code> та <code>i--</code>.</p>
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
					<p class="text-[11px] text-slate-300 mb-1">Тернарний оператор замінює прості <code>if-else</code> блоки в одну строчку:</p>
					<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono mb-2"><code>bool isPassed = actualStatus == HttpStatusCode.OK ? true : false;
string badge = score &gt;= 90 ? "Senior" : score &gt;= 60 ? "Middle" : "Junior";</code></pre>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Switch Statement vs Switch Expression (C# 8+):</h4>
					<div class="space-y-1.5 text-[11px] text-slate-200">
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Класичний switch-case:</strong>
							<p class="text-slate-300">Вимагає обов'язкових <code>break</code>, <code>default</code>, або <code>goto case</code> при переході.</p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Сучасний Switch Expression та Pattern Matching:</strong>
							<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono mt-1"><code>var result = statusCode switch {
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
						<li><code>foreach (var item in list)</code> — читання елементів через <code>IEnumerable</code>. <em>Змінювати (видаляти/додавати) елементи колекції під час foreach суворо заборонено</em> (викликає <code>InvalidOperationException</code>).</li>
						<li><code>while (cond)</code> — цикл з передумовою.</li>
						<li><code>do { ... } while (cond)</code> — цикл з післяумовою (гарантує <strong>мінімум 1 виконання</strong>).</li>
						<li><code>break</code> — миттєвий вихід з циклу; <code>continue</code> — перехід до наступної ітерації.</li>
					</ul>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Масиви: Одновимірні, Багатовимірні та Зубчасті:</h4>
					<div class="space-y-1 text-[11px] text-slate-300 mb-2">
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<strong>Одновимірний:</strong> <code>int[] arr = new int[5];</code> або <code>int[] nums = [1, 2, 3];</code> (C# 12).
						</div>
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<strong>Багатовимірний (2D Rectangular):</strong> <code>int[,] matrix = new int[3, 3];</code> — суцільна прямокутна сітка в пам'яті.
						</div>
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<strong>Ступінчастий (Зубчастий / Jagged):</strong> <code>int[][] jagged = new int[3][];</code> — масив масивів, де кожен рядок може мати різну довжину.
						</div>
					</div>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Індекси (^) та Діапазони (..) у C# 8+:</h4>
					<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono"><code>var words = new[] { "AQA", "C#", "Selenium", "Playwright", "NUnit" };
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
							<p class="text-slate-300">Змінна НЕ зобов'язана мати значення перед викликом, але викликаний метод <strong>ЗОБОВ'ЯЗАНИЙ присвоїти їй значення</strong> до свого завершення. Класичний приклад: <code>int.TryParse(str, out int val)</code>.</p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">3. in (Read-only reference, C# 7.2+):</strong>
							<p class="text-slate-300">Передає великі структури (Value Types) за посиланням для оптимізації швидкодії, але <strong>забороняє методу модифікувати</strong> значення параметра.</p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">4. params (Змінна кількість аргументів):</strong>
							<p class="text-slate-300">Дозволяє передавати аргументи через кому або готовий масив: <code>void AssertAll(params Action[] assertions)</code>. Має бути останнім у списку параметрів.</p>
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
					
					<div class="p-2 rounded bg-amber-950/40 border border-amber-800/40 text-[11px] text-amber-200 mb-2">
						<strong>Важлива пастка інтерв'ю:</strong> Зміна <em>тільки типу повернення</em> (наприклад, <code>int Foo()</code> та <code>void Foo()</code>) <strong>НЕ є</strong> перевантаженням і спричинить помилку компіляції. Сигнатура методу складається з імені та типів параметрів (з урахуванням <code>ref/out</code>).
					</div>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Області видимості змінних (Variable Scope):</h4>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-300 mb-2">
						<li><strong>Block Scope (фігурні дужки <code>{}</code>):</strong> змінна доступна лише всередині блоку (циклу чи if).</li>
						<li><strong>Method Scope:</strong> параметри та локальні змінні існують лише під час виконання стекового фрейму методу.</li>
						<li><strong>Class / Field Scope:</strong> поля класу доступні всім його методам відповідно до модифікаторів доступу.</li>
					</ul>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Рекурсія та StackOverflowException:</h4>
					<p class="text-[11px] text-slate-300 mb-1">Рекурсія — виклик методом самого себе. Вимагає обов'язкової <strong>базової умови виходу (base case)</strong>:</p>
					<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono mb-2"><code>int Factorial(int n) {
    if (n &lt;= 1) return 1; // Базовий випадок (умова виходу)
    return n * Factorial(n - 1); // Рекурсивний крок
}</code></pre>

					<div class="p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>Небезпека:</strong> Кожен рекурсивний виклик займає пам'ять у стеку (Call Stack). При безкінечній рекурсії або завеликій глибині виникає <code>StackOverflowException</code>, який аварійно зупиняє процес без можливості перехоплення у <code>catch</code>.
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
								<td class="p-1.5"><code>System.ValueType</code></td>
								<td class="p-1.5"><code>System.Object</code></td>
							</tr>
							<tr>
								<td class="p-1.5 font-bold text-slate-200">Приклади</td>
								<td class="p-1.5"><code>int</code>, <code>struct</code>, <code>enum</code>, <code>bool</code></td>
								<td class="p-1.5"><code>class</code>, <code>string</code>, <code>interface</code>, масиви</td>
							</tr>
							<tr>
								<td class="p-1.5 font-bold text-slate-200">Розміщення</td>
								<td class="p-1.5">Швидкий Стек (Stack) або inline у складі об'єкта</td>
								<td class="p-1.5">Керована купа (Managed Heap), на стеку лише адреса (4/8B)</td>
							</tr>
							<tr>
								<td class="p-1.5 font-bold text-slate-200">Копіювання</td>
								<td class="p-1.5">Копіюється саме <strong>значення</strong></td>
								<td class="p-1.5">Копіюється лише <strong>посилання</strong> (адреса)</td>
							</tr>
							<tr>
								<td class="p-1.5 font-bold text-slate-200">Очищення</td>
								<td class="p-1.5">Миттєво при виході зі скоупу</td>
								<td class="p-1.5">Збирач сміття (Garbage Collector)</td>
							</tr>
						</tbody>
					</table>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Boxing та Unboxing:</h4>
					<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50 text-[11px] text-slate-300 space-y-1">
						<p><strong>Boxing (Пакування):</strong> перетворення Value Type в <code>object</code>. Створюється екземпляр у хіпі, туди копіюється значення (навантажує GC):<br />
						<code>int num = 42; object boxed = num; // Boxing</code></p>
						<p><strong>Unboxing (Розпакування):</strong> явне вилучення значення назад у Value Type:<br />
						<code>int unboxed = (int)boxed; // Unboxing</code> (кидає <code>InvalidCastException</code> при помилці типу).</p>
					</div>
				`
			},
			{
				title: 'Null-безпека, Nullable, Casting & Checked',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">Nullable типи та Null-оператори:</h4>
					<ul class="list-disc list-inside space-y-1 text-[11px] text-slate-300 mb-2">
						<li><code>Nullable&lt;T&gt;</code> або <code>int?</code> — дозволяє типам значень зберігати <code>null</code>. Властивості: <code>.HasValue</code> та <code>.Value</code>.</li>
						<li><code>?.</code> (Null-conditional): <code>driver?.FindElement(by)?.Text</code> — зупиняє обчислення та повертає <code>null</code> без падіння з помилкою.</li>
						<li><code>??</code> (Null-coalescing): <code>string title = rawTitle ?? "Default"</code> — значення за замовчуванням.</li>
						<li><code>??=</code> (Null-coalescing assignment): <code>_client ??= new HttpClient();</code> — ініціалізує змінну тільки якщо вона дорівнює <code>null</code>.</li>
						<li><code>!</code> (Null-forgiving): <code>user!.Name</code> — запевняє компілятор, що значення не є null.</li>
					</ul>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Приведення типів (Casting):</h4>
					<div class="space-y-1 text-[11px] text-slate-300 mb-2">
						<p><strong>Implicit (неявне):</strong> безпечне розширення без втрати точності (<code>int</code> у <code>long</code>).</p>
						<p><strong>Explicit (явне):</strong> звуження з можливістю переповнення: <code>(int)3.14</code>.</p>
						<p><strong>Оператор is:</strong> перевірка типу та безпечне присвоєння (Pattern Matching):<br />
						<code>if (element is IJavaScriptExecutor js) { js.ExecuteScript("..."); }</code></p>
						<p><strong>Оператор as:</strong> безпечне приведення посилальних типів (повертає <code>null</code> замість винятку):<br />
						<code>var btn = element as Button; // якщо не Button, btn буде null</code></p>
					</div>

					<div class="p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>checked vs unchecked:</strong> За замовчуванням C# працює в <code>unchecked</code> (при переповненні <code>int.MaxValue + 1</code> дає <code>int.MinValue</code>). Блок <code>checked { ... }</code> вмикає перевірку та кидає <code>OverflowException</code>.
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
					<p class="text-xs text-slate-300 mb-2"><strong>Клас (Class)</strong> — це посилальний користувацький тип даних (креслення об'єкта), що об'єднує поля (дані/стан) та методи/властивості (поведінку). <strong>Інкапсуляція</strong> приховує внутрішній стан та захищає його від несанкціонованої прямої модифікації.</p>

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
				title: 'Конструктори, Властивості, init & Record',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">Конструктори та ключове слово this:</h4>
					<p class="text-[11px] text-slate-300 mb-1">Конструктор ініціалізує екземпляр при створенні через <code>new</code>. Перевантаження дозволяє мати кілька конструкторів, викликаючи один з одного через <code>: this(...)</code>:</p>
					<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono mb-2"><code>public class BasePage {
    protected IWebDriver Driver;
    public BasePage(IWebDriver driver) { this.Driver = driver; }
    // Виклик іншого конструктора:
    public BasePage() : this(WebDriverFactory.GetDriver()) { }
}</code></pre>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Властивості (Properties) та модифікатор init:</h4>
					<ul class="list-disc list-inside space-y-1 text-[11px] text-slate-300 mb-2">
						<li><strong>Auto-properties:</strong> <code>public string Env &#123; get; set; &#125; = "Prod";</code></li>
						<li><strong>Encapsulated:</strong> <code>public int Timeout &#123; get; private set; &#125;</code> (зміна тільки всередині класу).</li>
						<li><strong>init (C# 9+):</strong> <code>public string ApiKey &#123; get; init; &#125;</code> — значення можна присвоїти лише під час ініціалізації об'єкта, далі воно стає незмінним (immutable).</li>
						<li><strong>Object Initializers:</strong> <code>var user = new User &#123; Name = "Alex", Role = "Admin" &#125;;</code></li>
					</ul>

					<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50 text-[11px] text-slate-200">
						<strong class="text-purple-400">record (C# 9+):</strong>
						<p class="text-slate-300">Спеціальний тип для DTO та тестових даних. За замовчуванням має порівняння за значенням (Value Equality), авто-генеровані <code>ToString()</code>, <code>GetHashCode()</code> та підтримку незмінного копіювання з модифікацією <code>with</code>:<br />
						<code>var updatedUser = user with &#123; Role = "QA Lead" &#125;;</code></p>
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
					<p class="text-xs text-slate-300 mb-2">Ключове слово <strong>static</strong> означає, що член або клас належить безпосередньо <strong>самому типу</strong>, а не конкретному екземпляру в пам'яті. Статичні члени створюються в одному екземплярі на весь домен додатку.</p>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Особливості статичних конструкцій:</h4>
					<div class="space-y-1.5 text-[11px] text-slate-200 mb-2">
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">static поля та методи:</strong>
							<p class="text-slate-300">Викликаються через ім'я класу: <code>ConfigurationReader.GetBaseUrl()</code>. Не мають доступу до ключового слова <code>this</code>, оскільки викликаються поза контекстом екземпляра.</p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">static class:</strong>
							<p class="text-slate-300">Може містити <em>лише</em> статичні члени, не може створюватися через <code>new</code>, є неявно <code>sealed</code> і не може наслідуватися. Використовується для утиліт (Math) та Extension методів.</p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Статичний конструктор (static Constructor):</strong>
							<p class="text-slate-300"><code>static DriverFactory() { ... }</code>. Не приймає параметрів, не має модифікаторів доступу. Викликається автоматично середовищем CLR <strong>рівно один раз</strong> перед першим зверненням до класу. Потокобезпечний за специфікацією CLR.</p>
						</div>
					</div>

					<div class="p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>Пастка для AQA:</strong> У паралельних тестах статичні змінні (наприклад, <code>public static IWebDriver Driver</code>) призводять до перезапису драйвера між потоками (Race Condition). Використовуйте <code>ThreadLocal&lt;IWebDriver&gt;</code> або DI-контейнер!
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
								<td class="p-1.5">При компіляції (значення жорстко вшивається в IL)</td>
								<td class="p-1.5">Під час виконання програми (в оголошенні або конструкторі)</td>
							</tr>
							<tr>
								<td class="p-1.5 font-bold text-slate-200">Дозволені типи</td>
								<td class="p-1.5">Тільки примітиви та <code>string</code></td>
								<td class="p-1.5">Будь-які типи (включно з об'єктами класів)</td>
							</tr>
							<tr>
								<td class="p-1.5 font-bold text-slate-200">Контекст</td>
								<td class="p-1.5">Неявно статична (<code>static</code> заборонено)</td>
								<td class="p-1.5">Може бути інстансною або <code>static readonly</code></td>
							</tr>
						</tbody>
					</table>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Extension Methods (Методи розширення):</h4>
					<p class="text-[11px] text-slate-300 mb-1">Дозволяють додавати методи до існуючих типів без їх модифікації. Оголошуються як статичний метод у статичному класі з ключовим словом <code>this</code> перед першим параметром:</p>
					<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono mb-2"><code>public static class WebElementExtensions {
    public static void ClickWithWait(this IWebElement element, int timeout = 10) {
        // Логіка очікування клікабельності та клік
    }
}
// Використання в коді: submitButton.ClickWithWait();</code></pre>

					<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50 text-[11px] text-slate-200">
						<strong class="text-purple-400">partial класи та методи:</strong> дозволяють розділити опис одного класу на декілька файлів <code>.cs</code> (збираються компілятором в один тип). Застосовуються в автогенерації коду (Source Generators, Entity Framework).
					</div>
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
					<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono mb-2"><code>public class LoginPage : BasePage {
    // Виклик конструктора базового класу через : base(...)
    public LoginPage(IWebDriver driver) : base(driver) { }
    
    public override void Open() {
        base.Open(); // Виклик логіки базового методу
        NavigateTo("/login");
    }
}</code></pre>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Поліморфізм: virtual, override та new:</h4>
					<div class="space-y-1.5 text-[11px] text-slate-200">
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">virtual / override (Динамічний поліморфізм):</strong>
							<p class="text-slate-300"><code>virtual</code> у базовому класі дозволяє перевизначити метод. <code>override</code> у похідному класі змінює реалізацію. Виклик через базове посилання <code>BasePage page = new LoginPage(); page.Open();</code> викличе реалізацію <code>LoginPage</code> (через таблицю віртуальних методів vtable).</p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">new (Method Hiding — приховування):</strong>
							<p class="text-slate-300">Розриває віртуальність. Якщо викликати метод через тип базового класу, виконається <em>базовий</em> метод; якщо через тип спадкоємця — новий прихований метод.</p>
						</div>
					</div>

					<div class="mt-2 p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>sealed:</strong> забороняє наслідування класу (<code>sealed class FinalPage</code>) або подальше перевизначення методу.
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
								<td class="p-1.5">Відношення "IS-A" (є чимось)</td>
								<td class="p-1.5">Відношення "CAN-DO" (контракт поведінки)</td>
							</tr>
							<tr>
								<td class="p-1.5 font-bold text-slate-200">Множинність</td>
								<td class="p-1.5">Лише одне наслідування</td>
								<td class="p-1.5">Клас може реалізувати безліч інтерфейсів</td>
							</tr>
							<tr>
								<td class="p-1.5 font-bold text-slate-200">Поля та конструктори</td>
								<td class="p-1.5">Може мати поля екземпляра, стан та конструктори</td>
								<td class="p-1.5">Не може мати стану (полів) та конструкторів</td>
							</tr>
						</tbody>
					</table>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Явна та дефолтна реалізація інтерфейсів:</h4>
					<div class="space-y-1.5 text-[11px] text-slate-200 mb-2">
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Явна реалізація (Explicit Implementation):</strong>
							<p class="text-slate-300">Вирішує колізію, коли два інтерфейси мають метод з однаковим ім'ям: <code>void IApiTest.Run() { ... }</code>. Метод доступний <strong>тільки при приведенні об'єкта до відповідного інтерфейсу</strong>: <code>((IApiTest)test).Run();</code>.</p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Default Interface Methods (C# 8+):</strong>
							<p class="text-slate-300">Інтерфейс може містити дефолтне тіло методу. Це дозволяє додавати методи в інтерфейс без ламання існуючих класів, що його реалізують.</p>
						</div>
					</div>

					<div class="p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>Порада для відповіді:</strong> «Використовуйте абстрактний клас, коли потрібна спільна базова логіка та стан (наприклад, <code>BasePage</code> з полем WebDriver), та інтерфейси для забезпечення гнучкості та контрактів (<code>ILogger</code>, <code>IReportGenerator</code>)».
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
					<p class="text-xs text-slate-300 mb-2"><strong>Generics</strong> дозволяють створювати класи, методи та інтерфейси, параметризовані типами даних. Вони забезпечують безпеку типів (Type-Safety) під час компіляції та виключають накладні витрати на boxing/unboxing.</p>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Обмеження типів (Generic Constraints) через where:</h4>
					<div class="space-y-1 text-[11px] text-slate-200 mb-2">
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<code>where T : class</code> — тип <code>T</code> зобов'язаний бути посилальним типом (Reference Type).
						</div>
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<code>where T : struct</code> — тип <code>T</code> зобов'язаний бути типом значення (Value Type).
						</div>
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<code>where T : new()</code> — вимагає наявності публічного конструктора без параметрів (дозволяє писати <code>new T()</code>).
						</div>
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<code>where T : BasePage</code> — тип повинен наслідувати вказаний клас.
						</div>
						<div class="p-1.5 rounded bg-[#0d091a] border border-purple-900/50">
							<code>where T : IDisposable</code> — тип повинен реалізувати конкретний інтерфейс.
						</div>
					</div>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Практичний AQA патерн фабрики сторінок:</h4>
					<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono mb-2"><code>public T InitPage&lt;T&gt;() where T : BasePage, new() {
    var page = new T();
    page.SetDriver(this.Driver);
    return page;
}</code></pre>
				`
			},
			{
				title: 'Делегати, Func, Action, Події (Events) & Лямбди',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">Делегати (Delegates):</h4>
					<p class="text-[11px] text-slate-300 mb-1">Делегат — це тип безпечного покажчика на метод (сигнатура методу). Дозволяє передавати методи як аргументи в інші методи.</p>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Стандартні делегати .NET (Action vs Func):</h4>
					<div class="space-y-1.5 text-[11px] text-slate-200 mb-2">
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Action&lt;T1, T2...&gt;:</strong>
							<p class="text-slate-300">Приймає від 0 до 16 аргументів і <strong>НЕ повертає значення (void)</strong>.<br />
							<code>Action&lt;string&gt; log = msg =&gt; Console.WriteLine(msg);</code></p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Func&lt;T1, T2..., TResult&gt;:</strong>
							<p class="text-slate-300">Приймає аргументи та <strong>ОБОВ'ЯЗКОВО повертає результат</strong>. Останній тип у списку є типом повернення!<br />
							<code>Func&lt;int, int, bool&gt; isGreater = (a, b) =&gt; a &gt; b;</code></p>
						</div>
						<div class="p-2 rounded bg-[#0d091a] border border-purple-900/50">
							<strong class="text-purple-400">Predicate&lt;T&gt;:</strong>
							<p class="text-slate-300">Аналог <code>Func&lt;T, bool&gt;</code> для перевірки умов у пошуку та фільтрації.</p>
						</div>
					</div>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Події (Events) та їх захист:</h4>
					<p class="text-[11px] text-slate-300 mb-1">Подія (<code>event</code>) — це обгортка над делегатом (патерн Publisher-Subscriber):</p>
					<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono mb-2"><code>public event Action&lt;TestResult&gt; OnTestFinished;</code></pre>

					<div class="p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>Різниця між публічним делегатом та подією:</strong> Подію зовнішній код може лише підписувати (<code>+=</code>) або відписувати (<code>-=</code>). Викликати подію або занулити (<code>= null</code>) можна <strong>виключно всередині класу-власника</strong>.
					</div>
				`
			}
		]
	},
	{
		id: 's-collections-linq',
		category: 'S',
		menuTitle: 'Колекції, Обробка винятків & LINQ',
		menuSub: 'List, Dictionary, HashSet, try-catch-finally-when, LINQ оператори, Left Join',
		layout: 'grid-2',
		cards: [
			{
				title: 'Колекції .NET & Обробка винятків',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">Основні колекції (System.Collections.Generic):</h4>
					<ul class="list-disc list-inside space-y-1 text-[11px] text-slate-300 mb-2">
						<li><code>List&lt;T&gt;</code>: динамічний масив. Швидкий доступ за індексом O(1). Додавання в кінець O(1) амортизовано. Пошук неіндексованого елемента O(N).</li>
						<li><code>Dictionary&lt;TKey, TValue&gt;</code>: асоціативний масив на базі хеш-таблиці. Пошук, додавання та видалення за ключем O(1). Ключі мають бути унікальними.</li>
						<li><code>HashSet&lt;T&gt;</code>: невпорядкована множина унікальних елементів. Миттєвий пошук <code>Contains</code> за O(1), операції перетину та об'єднання множин.</li>
						<li><code>Queue&lt;T&gt;</code> (FIFO — перший прийшов, перший пішов) та <code>Stack&lt;T&gt;</code> (LIFO — останній прийшов, перший пішов).</li>
					</ul>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Обробка винятків (try-catch-finally when):</h4>
					<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono mb-2"><code>try {
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
				title: 'LINQ & Завдання на співбесіді: Left Join',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">Основи LINQ та Deferred Execution:</h4>
					<p class="text-[11px] text-slate-300 mb-1">LINQ (Language Integrated Query) надає SQL-подібні запити до колекцій. <strong>Deferred Execution (Відкладене виконання):</strong> фільтрація (<code>Where</code>, <code>Select</code>) не виконується в момент створення запиту, а лише при реальній ітерації (<code>foreach</code>, <code>.ToList()</code>).</p>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Популярні методи розширення LINQ:</h4>
					<p class="text-[11px] text-slate-300 mb-2">
						<code>Where</code> (фільтрація), <code>Select</code> (маппінг/трансформація), <code>Any</code> / <code>All</code> (перевірка умов), <code>OrderBy</code>, <code>GroupBy</code>, <code>First</code> vs <code>FirstOrDefault</code> (повертає null/default, якщо список порожній).
					</p>

					<h4 class="font-bold text-purple-300 text-xs mb-1">LINQ Left Outer Join (Топ-завдання співбесіди):</h4>
					<p class="text-[11px] text-slate-300 mb-1">У LINQ немає окремого ключового слова <code>left join</code>. Left Join реалізується через <code>GroupJoin</code> + <code>SelectMany</code> + <code>DefaultIfEmpty()</code>:</p>
					<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono mb-2"><code>// Query Syntax:
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
			'async/await, Task, IDisposable, using, HttpClient, JSON, Reflection та атрибути NUnit/xUnit',
		layout: 'grid-2',
		cards: [
			{
				title: 'Async/Await, IDisposable & Керування ресурсами',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">Асинхронність: async, await та Task:</h4>
					<ul class="list-disc list-inside space-y-1 text-[11px] text-slate-300 mb-2">
						<li><code>Task</code> (повертає <code>void</code>) та <code>Task&lt;T&gt;</code> (повертає результат): представляють асинхронну операцію, що виконується без блокування потоку.</li>
						<li><code>async void</code> — <strong>антипатерн!</strong> Дозволений виключно для обробників подій UI. Будь-який виняток у <code>async void</code> не може бути перехоплений через <code>catch</code> і миттєво аварійно завершує процес.</li>
						<li>Паралельний запуск: <code>await Task.WhenAll(task1, task2);</code></li>
					</ul>

					<h4 class="font-bold text-purple-300 text-xs mb-1">IDisposable та інструкція using:</h4>
					<p class="text-[11px] text-slate-300 mb-1">Патерн <code>IDisposable</code> слугує для детермінованого звільнення <strong>некерованих ресурсів</strong> (дескрипторів файлів, потоків сокетів, сесій браузера Playwright/Selenium):</p>
					<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono mb-2"><code>// C# 8 using declaration: звільняється при виході зі скоупу методу
using var response = await httpClient.GetAsync("/api/users");
var content = await response.Content.ReadAsStringAsync();
// Під капотом розгортається у try { ... } finally { obj.Dispose(); }</code></pre>

					<div class="p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>HttpClient та JSON:</strong> Створення <code>new HttpClient()</code> на кожен запит веде до <em>Socket Exhaustion</em> (виснаження портів ОС). Потрібно використовувати <code>static HttpClient</code> або <code>IHttpClientFactory</code>. Для серіалізації використовують вбудований високошвидкісний <code>System.Text.Json.JsonSerializer</code>.
					</div>
				`
			},
			{
				title: 'Рефлексія (Reflection) & Атрибути для AQA',
				contentHtml: `
					<h4 class="font-bold text-purple-300 text-xs mb-1">Що таке Рефлексія (System.Reflection):</h4>
					<p class="text-[11px] text-slate-300 mb-1">Механізм дослідження метаданих збірок, типів, методів та властивостей під час виконання програми:</p>
					<ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-300 mb-2">
						<li>Отримання типу: <code>typeof(LoginPage)</code> (під час компіляції) або <code>instance.GetType()</code> (під час виконання).</li>
						<li>Динамічне створення: <code>Activator.CreateInstance(type)</code>.</li>
						<li>Читання приватних полів/методів через <code>BindingFlags.NonPublic | BindingFlags.Instance</code>.</li>
					</ul>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Як NUnit / xUnit використовують рефлексію:</h4>
					<p class="text-[11px] text-slate-300 mb-1">Тестові раннери сканують збірки, шукають класи з атрибутами <code>[TestFixture]</code> та викликають методи з атрибутами <code>[Test]</code> / <code>[Fact]</code>. Також рефлексія зчитує тестові дані для параметризації (<code>[TestCase]</code>, <code>[Theory]</code>, <code>[TestCaseSource]</code>).</p>

					<h4 class="font-bold text-purple-300 text-xs mb-1">Створення кастомного атрибута для автотестів:</h4>
					<pre class="bg-black/80 p-1.5 rounded text-[10px] text-slate-200 font-mono mb-2"><code>[AttributeUsage(AttributeTargets.Method)]
public class SeverityAttribute(string level) : Attribute {
    public string Level { get; } = level;
}

// Використання:
[Test, Severity("Blocker")]
public void PaymentCheckoutSmokeTest() { ... }</code></pre>

					<div class="p-2 rounded bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
						<strong>Висновок для інтерв'ю:</strong> «Рефлексія та атрибути — фундамент будь-якого сучасного фреймворку автоматизації тестування (.NET). Вони забезпечують динамічне виявлення тестів, генерацію звітів (Allure/Extent) та керування життєвим циклом фікстур».
					</div>
				`
			}
		]
	}
];
