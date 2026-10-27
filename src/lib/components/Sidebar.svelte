<script lang="ts">
	import { ChevronLeft } from '@lucide/svelte';

	interface Props {
		activeCategory: 'M' | 'A';
		onCategoryChange: (cat: 'M' | 'A') => void;
		activeSlideId: string;
		onSelectSlide: (slideId: string) => void;
		isMobileOpen: boolean;
		onCloseMobile: () => void;
		isCollapsed: boolean;
		onToggleCollapse: () => void;
	}

	let {
		activeCategory,
		onCategoryChange,
		activeSlideId,
		onSelectSlide,
		isMobileOpen,
		onCloseMobile,
		isCollapsed,
		onToggleCollapse
	}: Props = $props();

	function handleSlideClick(id: string) {
		onSelectSlide(id);
		onCloseMobile();
	}
</script>

<!-- Mobile Overlay Backdrop -->
{#if isMobileOpen}
	<div
		class="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
		onclick={onCloseMobile}
		role="button"
		tabindex="0"
		onkeydown={(e) => e.key === 'Escape' && onCloseMobile()}
	></div>
{/if}

<!-- Sidebar Container -->
<aside
	class="fixed top-0 bottom-0 left-0 z-50 w-72 md:w-80 bg-black border-r border-cyan-950 flex flex-col justify-between transition-transform duration-300 ease-in-out {isCollapsed
		? 'lg:-translate-x-full'
		: 'lg:translate-x-0'} {isMobileOpen
		? 'translate-x-0'
		: '-translate-x-full'}"
>
	<!-- Top M / A Mode Switcher Bar -->
	<div class="p-4 border-b border-cyan-950/60 bg-black relative">
		<!-- Collapse Button for Desktop -->
		<button
			type="button"
			onclick={onToggleCollapse}
			class="hidden lg:flex absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg border border-cyan-950/80 bg-[#060c18] text-slate-400 hover:text-cyan-300 hover:border-cyan-500/80 cursor-pointer transition-colors"
			title="Згорнути меню (Ctrl+B або [)"
		>
			<ChevronLeft class="w-4 h-4" />
		</button>

		<div class="flex items-center justify-center gap-6">
			<!-- Manual QA Button 'M' -->
			<button
				type="button"
				onclick={() => onCategoryChange('M')}
				title="Manual QA"
				class="relative group cursor-pointer"
			>
				<div
					class="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold font-mono transition-all duration-300 {activeCategory ===
					'M'
						? 'border-2 border-cyan-400 text-white shadow-[0_0_20px_#00f0ff]'
						: 'border border-cyan-900/60 text-slate-400 hover:border-cyan-500 hover:text-cyan-300'}"
				>
					M
				</div>
			</button>

			<!-- Automation QA Button 'A' -->
			<button
				type="button"
				onclick={() => onCategoryChange('A')}
				title="Automation QA"
				class="relative group cursor-pointer"
			>
				<div
					class="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold font-mono transition-all duration-300 {activeCategory ===
					'A'
						? 'border-2 border-cyan-400 text-white shadow-[0_0_20px_#00f0ff]'
						: 'border border-cyan-900/60 text-slate-400 hover:border-cyan-500 hover:text-cyan-300'}"
				>
					A
				</div>
			</button>
		</div>
	</div>

	<!-- Navigation Items by Category -->
	<nav class="flex-1 overflow-y-auto px-3 py-3 space-y-2.5 text-xs text-white">
		{#if activeCategory === 'M'}
			<!-- ================= MANUAL QA NAVIGATION ================= -->

			<!-- Group 1: Basics -->
			<button
				type="button"
				onclick={() => handleSlideClick('m-basics')}
				class="w-full text-left p-3 rounded-2xl border transition-all duration-200 block group cursor-pointer {activeSlideId ===
				'm-basics'
					? 'border-2 border-cyan-400 bg-cyan-950/20 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
					: 'border-slate-800 bg-[#060910] hover:border-cyan-700 hover:bg-[#09111c]'}"
			>
				<div class="space-y-1.5 text-[11px] leading-tight">
					<p class="font-bold text-white group-hover:text-cyan-300">Що таке тестування?</p>
					<p class="text-slate-400">Тестування програмного забезпечення ПЗ</p>
					<p class="text-slate-400">Software Quality | Якість програмного забезпечення</p>
					<p class="text-slate-400">Testing goals | Цілі тестування</p>
					<p class="text-slate-400">Testing stages | Етапи тестування</p>
					<p class="text-slate-400">Життєвий цикл тестування (STLC)</p>
					<p class="text-slate-400">Test Plan | Тест план</p>
					<p class="text-slate-400">Основні пункти тест плану</p>
					<p class="text-slate-400">Тест-дизайн</p>
				</div>
			</button>

			<!-- Group 2: Test Types -->
			<button
				type="button"
				onclick={() => handleSlideClick('m-types')}
				class="w-full text-left p-3 rounded-2xl border transition-all duration-200 block cursor-pointer {activeSlideId ===
				'm-types'
					? 'border-2 border-cyan-400 bg-cyan-950/20 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
					: 'border-slate-800 bg-[#060910] hover:border-cyan-700 hover:bg-[#09111c]'}"
			>
				<p class="font-bold text-white text-xs">Test Types</p>
				<p class="text-slate-400 text-[11px]">Типи (види) тестування</p>
			</button>

			<!-- Group 3: V&V and Techniques -->
			<button
				type="button"
				onclick={() => handleSlideClick('m-techniques')}
				class="w-full text-left p-3 rounded-2xl border transition-all duration-200 block cursor-pointer {activeSlideId ===
				'm-techniques'
					? 'border-2 border-cyan-400 bg-cyan-950/20 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
					: 'border-slate-800 bg-[#060910] hover:border-cyan-700 hover:bg-[#09111c]'}"
			>
				<div class="space-y-1 text-[11px] leading-tight">
					<p class="font-bold text-white">Верифікація / Валідація</p>
					<p class="text-slate-400">Verification / Validation</p>
					<p class="font-bold text-white pt-1">Техніки тест-дизайну</p>
					<p class="text-slate-400">Design test techniques</p>
					<p class="font-bold text-white pt-1">Severity vs Priority</p>
				</div>
			</button>

			<!-- Group 4: Test Case, Check list, Defects, Bug Report -->
			<button
				type="button"
				onclick={() => handleSlideClick('m-defects')}
				class="w-full text-left p-3 rounded-2xl border transition-all duration-200 block cursor-pointer {activeSlideId ===
				'm-defects'
					? 'border-2 border-cyan-400 bg-cyan-950/20 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
					: 'border-slate-800 bg-[#060910] hover:border-cyan-700 hover:bg-[#09111c]'}"
			>
				<div class="space-y-1 text-[11px] leading-tight">
					<p class="font-bold text-white">Test Case | Тестовий сценарій</p>
					<p class="font-bold text-white">Check list | список перевірок</p>
					<p class="font-bold text-white">Bug / Error / Failure</p>
					<p class="font-bold text-white">Bug Report</p>
				</div>
			</button>

			<!-- Group 5: Levels of testing -->
			<button
				type="button"
				onclick={() => handleSlideClick('m-levels')}
				class="w-full text-left p-3 rounded-2xl border transition-all duration-200 block cursor-pointer {activeSlideId ===
				'm-levels'
					? 'border-2 border-cyan-400 bg-cyan-950/20 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
					: 'border-slate-800 bg-[#060910] hover:border-cyan-700 hover:bg-[#09111c]'}"
			>
				<p class="font-bold text-white text-xs">Рівні тестування</p>
				<p class="text-slate-400 text-[11px]">Levels of testing</p>
			</button>

		{:else}
			<!-- ================= AUTOMATION QA NAVIGATION ================= -->

			<!-- 1. CI/CD Practices -->
			<button
				type="button"
				onclick={() => handleSlideClick('a-cicd')}
				class="w-full text-left p-2.5 rounded-2xl border transition-all duration-200 block cursor-pointer {activeSlideId ===
				'a-cicd'
					? 'border-2 border-cyan-400 bg-cyan-950/20 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
					: 'border-slate-800 bg-[#060910] hover:border-cyan-700 hover:bg-[#09111c]'}"
			>
				<p class="font-bold text-white text-xs">CI/CD Practices</p>
			</button>

			<!-- 2. Design Principles and Approaches -->
			<button
				type="button"
				onclick={() => handleSlideClick('a-design-principles')}
				class="w-full text-left p-2.5 rounded-2xl border transition-all duration-200 block cursor-pointer {activeSlideId ===
				'a-design-principles'
					? 'border-2 border-cyan-400 bg-cyan-950/20 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
					: 'border-slate-800 bg-[#060910] hover:border-cyan-700 hover:bg-[#09111c]'}"
			>
				<p class="font-bold text-white text-xs">Design Principles and Approaches</p>
				<p class="text-slate-400 text-[10px]">Принципи та підходи до проектування</p>
			</button>

			<!-- 3. Platform Specific Test Automation -->
			<button
				type="button"
				onclick={() => handleSlideClick('a-platform-specific')}
				class="w-full text-left p-2.5 rounded-2xl border transition-all duration-200 block cursor-pointer {activeSlideId ===
				'a-platform-specific'
					? 'border-2 border-cyan-400 bg-cyan-950/20 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
					: 'border-slate-800 bg-[#060910] hover:border-cyan-700 hover:bg-[#09111c]'}"
			>
				<p class="font-bold text-white text-xs">Platform Specific Test Automation</p>
				<p class="text-slate-400 text-[10px]">Автоматизація тестування для конкретної платформи</p>
			</button>

			<!-- 4. Refactoring -->
			<button
				type="button"
				onclick={() => handleSlideClick('a-refactoring')}
				class="w-full text-left p-2.5 rounded-2xl border transition-all duration-200 block cursor-pointer {activeSlideId ===
				'a-refactoring'
					? 'border-2 border-cyan-400 bg-cyan-950/20 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
					: 'border-slate-800 bg-[#060910] hover:border-cyan-700 hover:bg-[#09111c]'}"
			>
				<p class="font-bold text-white text-xs">Refactoring</p>
				<p class="text-slate-400 text-[10px]">Рефакторинг</p>
			</button>

			<!-- 5. Test Automation Framework -->
			<button
				type="button"
				onclick={() => handleSlideClick('a-framework')}
				class="w-full text-left p-2.5 rounded-2xl border transition-all duration-200 block cursor-pointer {activeSlideId ===
				'a-framework'
					? 'border-2 border-cyan-400 bg-cyan-950/20 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
					: 'border-slate-800 bg-[#060910] hover:border-cyan-700 hover:bg-[#09111c]'}"
			>
				<p class="font-bold text-white text-xs">Test Automation Framework</p>
				<p class="text-slate-400 text-[10px]">Фреймворк для автоматизації тестування</p>
			</button>

			<!-- 6. Test Automation Infrastructure -->
			<button
				type="button"
				onclick={() => handleSlideClick('a-infrastructure')}
				class="w-full text-left p-2.5 rounded-2xl border transition-all duration-200 block cursor-pointer {activeSlideId ===
				'a-infrastructure'
					? 'border-2 border-cyan-400 bg-cyan-950/20 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
					: 'border-slate-800 bg-[#060910] hover:border-cyan-700 hover:bg-[#09111c]'}"
			>
				<p class="font-bold text-white text-xs">Test Automation Infrastructure</p>
				<p class="text-slate-400 text-[10px]">Інфраструктура для автоматизації тестування</p>
			</button>

			<!-- 7. Test Automation Patterns -->
			<button
				type="button"
				onclick={() => handleSlideClick('a-patterns')}
				class="w-full text-left p-2.5 rounded-2xl border transition-all duration-200 block cursor-pointer {activeSlideId ===
				'a-patterns'
					? 'border-2 border-cyan-400 bg-cyan-950/20 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
					: 'border-slate-800 bg-[#060910] hover:border-cyan-700 hover:bg-[#09111c]'}"
			>
				<p class="font-bold text-white text-xs">Test Automation Patterns</p>
				<p class="text-slate-400 text-[10px]">Шаблони для автоматизації тестування</p>
			</button>

			<!-- 8. Version Control Systems -->
			<button
				type="button"
				onclick={() => handleSlideClick('a-vcs')}
				class="w-full text-left p-2.5 rounded-2xl border transition-all duration-200 block cursor-pointer {activeSlideId ===
				'a-vcs'
					? 'border-2 border-cyan-400 bg-cyan-950/20 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
					: 'border-slate-800 bg-[#060910] hover:border-cyan-700 hover:bg-[#09111c]'}"
			>
				<p class="font-bold text-white text-xs">Version Control Systems</p>
				<p class="text-slate-400 text-[10px]">Системи контролю версій</p>
			</button>

			<!-- 9. Data Storages + SQL pill row -->
			<div class="flex items-center gap-1.5">
				<button
					type="button"
					onclick={() => handleSlideClick('a-data-storages')}
					class="flex-1 text-left p-2.5 rounded-2xl border transition-all duration-200 cursor-pointer {activeSlideId ===
					'a-data-storages'
						? 'border-2 border-cyan-400 bg-cyan-950/20 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
						: 'border-slate-800 bg-[#060910] hover:border-cyan-700 hover:bg-[#09111c]'}"
				>
					<p class="font-bold text-white text-xs">Data Storages</p>
					<p class="text-slate-400 text-[10px]">Сховища даних</p>
				</button>

				<button
					type="button"
					onclick={() => handleSlideClick('a-sql')}
					class="px-3.5 py-3 rounded-2xl border font-bold text-xs font-mono transition-all duration-200 cursor-pointer {activeSlideId ===
					'a-sql'
						? 'border-2 border-cyan-400 bg-cyan-950 text-cyan-200 shadow-[0_0_15px_rgba(0,240,255,0.35)]'
						: 'border-slate-800 bg-[#060910] text-cyan-400 hover:border-cyan-700 hover:bg-[#09111c]'}"
					title="SQL Команди"
				>
					SQL
				</button>
			</div>

			<!-- 10. SOLID -->
			<button
				type="button"
				onclick={() => handleSlideClick('a-solid')}
				class="w-full text-left p-2.5 rounded-2xl border transition-all duration-200 block cursor-pointer {activeSlideId ===
				'a-solid'
					? 'border-2 border-cyan-400 bg-cyan-950/20 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
					: 'border-slate-800 bg-[#060910] hover:border-cyan-700 hover:bg-[#09111c]'}"
			>
				<p class="font-bold text-white text-xs">SOLID</p>
			</button>
		{/if}
	</nav>

	<!-- Sidebar Footer -->
	<div class="p-2 border-t border-cyan-950/60 bg-black text-[10px] font-mono text-cyan-600 text-center">
		<span>QA Presentation Dashboard</span>
	</div>
</aside>
