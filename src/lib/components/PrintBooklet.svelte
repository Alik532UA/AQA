<script lang="ts">
	import type { Slide } from '#lib/data/slidesData';

	interface Props {
		slides: Slide[];
	}

	let { slides }: Props = $props();
</script>

<div class="print-booklet-container hidden print:block bg-white text-black p-4">
	<!-- Cover Page -->
	<section
		class="print-page flex flex-col justify-center items-center text-center min-h-[90dvh] p-8 border-4 border-slate-900 rounded-2xl mb-8"
	>
		<div
			class="mb-4 inline-block px-4 py-1 rounded-full border border-slate-700 text-xs font-mono font-bold tracking-widest uppercase"
		>
			Comprehensive Interview Guide • .NET & ISTQB
		</div>
		<h1 class="text-4xl font-extrabold text-slate-950 mb-3 tracking-tight">
			QA Interview Cheat Sheet
		</h1>
		<h2 class="text-xl font-medium text-slate-700 mb-8">
			Шпаргалка та конспект для підготовки до технічних співбесід (Manual & Automation QA)
		</h2>

		<div class="w-24 h-1 bg-cyan-600 mx-auto mb-10 rounded"></div>

		<!-- Table of Contents -->
		<div class="w-full max-w-4xl text-left bg-slate-50 border border-slate-300 rounded-xl p-6">
			<h3
				class="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4 pb-2 border-b border-slate-200"
			>
				Зміст друкованого буклету
			</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 text-[11px]">
				<div>
					<p class="font-bold text-slate-900 mb-1 border-b border-slate-300 pb-0.5">
						Manual QA (M):
					</p>
					<ol class="list-decimal list-inside space-y-0.5 text-slate-700">
						<li>Основи тестування & STLC</li>
						<li>Види (типи) тестування</li>
						<li>V&V, Техніки, Severity/Priority</li>
						<li>Test Case, Bug Report, Дефекти</li>
						<li>Рівні тестування</li>
					</ol>
				</div>
				<div>
					<p class="font-bold text-slate-900 mb-1 border-b border-slate-300 pb-0.5">
						Automation QA (A):
					</p>
					<ol class="list-decimal list-inside space-y-0.5 text-slate-700" start="6">
						<li>CI/CD Practices</li>
						<li>Design Principles & Approaches</li>
						<li>Platform Specific (.NET)</li>
						<li>Refactoring</li>
						<li>Test Automation Framework</li>
						<li>Infrastructure</li>
						<li>Test Automation Patterns</li>
						<li>Version Control Systems (Git)</li>
						<li>Data Storages & TDM</li>
						<li>SQL Commands</li>
						<li>SOLID Principles</li>
					</ol>
				</div>
				<div>
					<p class="font-bold text-emerald-800 mb-1 border-b border-emerald-300 pb-0.5">
						Senior Consultant (C):
					</p>
					<ol class="list-decimal list-inside space-y-0.5 text-slate-700" start="17">
						<li>Consulting Strategy & PoC</li>
						<li>Electron vs Native Windows</li>
						<li>Minimal Toolset Architecture</li>
						<li>Visual Regression & OCR</li>
						<li>Upgrades, Installers & Services</li>
						<li>Multi-Monitor & DPI Matrix</li>
						<li>CI/CD on Windows Runners</li>
						<li>Architecture & Handover</li>
						<li>Senior Consultant Interview Q&A</li>
					</ol>
				</div>
				<div>
					<p class="font-bold text-sky-800 mb-1 border-b border-sky-300 pb-0.5">
						Middle Flutter QA (F):
					</p>
					<ol class="list-decimal list-inside space-y-0.5 text-slate-700" start="26">
						<li>Nayax Domain & Vending CRM</li>
						<li>Flutter Architecture & QA Specifics</li>
						<li>Android Testing & Studio Toolset</li>
						<li>iOS Testing & Xcode Toolset</li>
						<li>Client-Server, Postman & Sniffing</li>
						<li>Mobile Test Design & Matrix</li>
						<li>QA Process: Jira, Xray & Git</li>
						<li>Performance Testing & Profiling</li>
						<li>Nayax Middle QA Interview Q&A</li>
					</ol>
				</div>
				<div>
					<p class="font-bold text-purple-800 mb-1 border-b border-purple-300 pb-0.5">
						C# Core & Advanced (.NET) (S):
					</p>
					<ol class="list-decimal list-inside space-y-0.5 text-slate-700" start="35">
						<li>Типи даних & Базовий синтаксис</li>
						<li>Керування потоком, цикли & Масиви</li>
						<li>Методи, параметри & Рекурсія</li>
						<li>Value vs Reference & Null</li>
						<li>ООП: Класи, Конструктори & Властивості</li>
						<li>static, const vs readonly & Extension</li>
						<li>Наслідування, Поліморфізм & Інтерфейси</li>
						<li>Generics, Делегати, Події & Лямбди</li>
						<li>Колекції, Обробка винятків & LINQ</li>
						<li>Асинхронність & Reflection для AQA</li>
					</ol>
				</div>
			</div>
		</div>

		<div class="mt-8 text-[11px] text-slate-500 font-mono">
			Згенеровано автоматично • Комплексна підготовка до Senior AQA Consultant співбесіди
		</div>
	</section>

	<!-- All Slides Pages -->
	{#each slides as slide, idx}
		<section
			class="print-page min-h-[92dvh] flex flex-col justify-between p-6 border-2 border-slate-800 rounded-xl mb-8 bg-white"
		>
			<!-- Slide Header -->
			<header class="pb-3 mb-4 border-b-2 border-slate-900 flex items-center justify-between">
				<div>
					<span
						class="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase border border-slate-700 {slide.category ===
						'M'
							? 'bg-slate-100 text-slate-800'
							: slide.category === 'A'
								? 'bg-slate-800 text-white'
								: slide.category === 'C'
									? 'bg-emerald-800 text-white'
									: slide.category === 'F'
										? 'bg-sky-800 text-white'
										: 'bg-purple-800 text-white'}"
					>
						{slide.category === 'M'
							? 'Manual QA'
							: slide.category === 'A'
								? 'Automation QA'
								: slide.category === 'C'
									? 'Senior AQA Consultant'
									: slide.category === 'F'
										? 'Middle Flutter QA (Nayax)'
										: 'C# Core & .NET'}
					</span>
					<h2 class="text-xl font-bold text-slate-950 mt-1">
						{slide.menuTitle}
					</h2>
					{#if slide.menuSub}
						<p class="text-xs text-slate-600">{slide.menuSub}</p>
					{/if}
				</div>
				<div class="text-right">
					<span class="text-xs font-mono font-bold text-slate-500">
						Слайд {idx + 1} з {slides.length}
					</span>
				</div>
			</header>

			<!-- Slide Cards Grid -->
			<div
				class="flex-1 grid {slide.layout === 'custom-m1' ||
				slide.layout === 'custom-m3' ||
				slide.layout === 'custom-m4'
					? 'grid-cols-3'
					: slide.layout === 'grid-1'
						? 'grid-cols-1'
						: 'grid-cols-2'} gap-3 text-[11px] leading-relaxed"
			>
				{#each slide.cards as card}
					<div class="border border-slate-400 rounded-lg p-3 bg-slate-50/50 flex flex-col">
						{#if card.title}
							<h3 class="font-bold text-xs text-slate-900 mb-1.5 pb-1 border-b border-slate-200">
								{card.title}
							</h3>
						{/if}
						<div class="print-card-content flex-1 text-slate-800 space-y-1">
							{@html card.contentHtml || ''}
						</div>
					</div>
				{/each}
			</div>

			<!-- Slide Footer -->
			<footer
				class="pt-3 mt-4 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500 font-mono"
			>
				<span>QA Interview Cheat Sheet</span>
				<span>{slide.menuTitle}</span>
				<span>Стор. {idx + 2}</span>
			</footer>
		</section>
	{/each}
</div>

<style>
	@media print {
		:global(body) {
			background: white !important;
			color: black !important;
		}
		.print-page {
			page-break-after: always;
			break-after: page;
			min-height: 95dvh;
		}
		.print-card-content :global(h4) {
			font-weight: 700;
			color: #0f172a;
			margin-top: 4px;
			margin-bottom: 2px;
		}
		.print-card-content :global(strong) {
			color: #0284c7;
		}
		.print-card-content :global(ul),
		.print-card-content :global(ol) {
			padding-left: 14px;
		}
		.print-card-content :global(pre),
		.print-card-content :global(code) {
			font-family: monospace;
			background: #f1f5f9;
			padding: 1px 3px;
			border-radius: 3px;
			border: 1px solid #cbd5e1;
		}
	}
</style>
