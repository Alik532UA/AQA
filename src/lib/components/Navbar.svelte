<script lang="ts">
	import type { QACategory } from '#lib/types';
	import { Search, X, Menu, Bookmark, Sparkles, Filter } from '@lucide/svelte';

	interface Props {
		searchQuery: string;
		onSearchChange: (q: string) => void;
		activeCategory: QACategory;
		onCategoryChange: (cat: QACategory) => void;
		selectedTag: string | null;
		onClearTag: () => void;
		onlyFavorites: boolean;
		onToggleOnlyFavorites: () => void;
		totalCount: number;
		visibleCount: number;
		favoritesCount: number;
		onToggleMobileSidebar: () => void;
	}

	let {
		searchQuery,
		onSearchChange,
		activeCategory,
		onCategoryChange,
		selectedTag,
		onClearTag,
		onlyFavorites,
		onToggleOnlyFavorites,
		totalCount,
		visibleCount,
		favoritesCount,
		onToggleMobileSidebar
	}: Props = $props();
</script>

<header
	class="sticky top-0 z-30 bg-[#05080f]/90 backdrop-blur-md border-b border-cyan-500/25 px-4 lg:px-8 py-3.5"
>
	<div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
		<!-- Left: Mobile Toggle & Brand / Title -->
		<div class="flex items-center gap-3">
			<button
				type="button"
				onclick={onToggleMobileSidebar}
				class="lg:hidden p-2 rounded-lg bg-[#0e1726] border border-cyan-500/40 text-cyan-300 hover:text-white transition-colors"
				aria-label="Відкрити меню"
			>
				<Menu class="w-5 h-5" />
			</button>

			<div>
				<div class="flex items-center gap-2">
					<h1
						class="text-lg md:text-xl font-extrabold text-white tracking-tight flex items-center gap-2"
					>
						<span class="text-cyan-400 font-mono">QA</span>
						<span>Interview Cheat Sheet</span>
					</h1>
					<span
						class="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/40"
					>
						<Sparkles class="w-3 h-3 text-cyan-400" />
						.NET & ISTQB
					</span>
				</div>
				<p class="text-xs text-slate-400 hidden sm:block">
					Шпаргалка та конспект для підготовки до технічних співбесід
				</p>
			</div>
		</div>

		<!-- Center: Search Input Bar -->
		<div class="flex-1 max-w-xl relative">
			<div class="relative flex items-center">
				<Search class="w-4 h-4 absolute left-3.5 text-cyan-400/80 pointer-events-none" />
				<input
					type="text"
					value={searchQuery}
					oninput={(e) => onSearchChange(e.currentTarget.value)}
					placeholder="Швидкий пошук за темою, терміном чи кодом (наприклад: BVA, STLC, SOLID, Git)..."
					class="w-full pl-10 pr-9 py-2 rounded-xl bg-[#0a101d] border border-cyan-500/40 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition-all font-sans"
				/>
				{#if searchQuery}
					<button
						type="button"
						onclick={() => onSearchChange('')}
						class="absolute right-3 p-0.5 text-slate-400 hover:text-cyan-300 transition-colors"
						title="Очистити пошук"
					>
						<X class="w-4 h-4" />
					</button>
				{/if}
			</div>
		</div>

		<!-- Right: Quick Action Controls & Counters -->
		<div class="flex items-center gap-2 self-end md:self-auto">
			<!-- Only Favorites Filter -->
			<button
				type="button"
				onclick={onToggleOnlyFavorites}
				class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all {onlyFavorites
					? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.25)]'
					: 'bg-[#0a1220] text-slate-400 border-cyan-950 hover:border-cyan-500/40 hover:text-slate-200'}"
				title="Показати лише обрані картки"
			>
				<Bookmark class="w-3.5 h-3.5 {onlyFavorites ? 'fill-cyan-400 text-cyan-400' : ''}" />
				<span class="hidden sm:inline">Обрані</span>
				<span class="px-1.5 py-0.2 rounded-full bg-cyan-950 text-cyan-400 text-[10px] font-bold">
					{favoritesCount}
				</span>
			</button>

			<!-- Counter Badge -->
			<div
				class="px-3 py-1.5 rounded-lg bg-[#0a1220] border border-cyan-950 text-xs font-mono text-slate-300"
			>
				<span class="text-cyan-400 font-bold">{visibleCount}</span>
				<span class="text-slate-400">/{totalCount}</span>
			</div>
		</div>
	</div>

	<!-- Bottom Row: Filter Chips & Active Tag Indicator -->
	<div
		class="mt-3 pt-2.5 border-t border-cyan-950/60 flex flex-wrap items-center justify-between gap-2"
	>
		<div class="flex flex-wrap items-center gap-1.5 text-xs">
			<span class="text-slate-400 text-[11px] font-mono mr-1 hidden sm:inline">Фільтр:</span>

			<button
				type="button"
				onclick={() => onCategoryChange('all')}
				class="px-2.5 py-1 rounded-md font-mono text-xs transition-colors {activeCategory === 'all'
					? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 font-semibold'
					: 'bg-[#090f1a] text-slate-400 hover:text-slate-200 border border-transparent'}"
			>
				Всі розділи
			</button>

			<button
				type="button"
				onclick={() => onCategoryChange('manual')}
				class="px-2.5 py-1 rounded-md font-mono text-xs transition-colors flex items-center gap-1 {activeCategory ===
				'manual'
					? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 font-semibold'
					: 'bg-[#090f1a] text-slate-400 hover:text-slate-200 border border-transparent'}"
			>
				<span class="w-2 h-2 rounded-full bg-cyan-400"></span>
				Manual QA (M)
			</button>

			<button
				type="button"
				onclick={() => onCategoryChange('automation')}
				class="px-2.5 py-1 rounded-md font-mono text-xs transition-colors flex items-center gap-1 {activeCategory ===
				'automation'
					? 'bg-purple-500/20 text-purple-300 border border-purple-400 font-semibold'
					: 'bg-[#090f1a] text-slate-400 hover:text-slate-200 border border-transparent'}"
			>
				<span class="w-2 h-2 rounded-full bg-purple-400"></span>
				Automation QA (A)
			</button>
		</div>

		{#if selectedTag}
			<div
				class="flex items-center gap-2 px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono text-cyan-300"
			>
				<Filter class="w-3 h-3 text-cyan-400" />
				<span>Тег: <strong>#{selectedTag}</strong></span>
				<button
					type="button"
					onclick={onClearTag}
					class="p-0.5 hover:text-white transition-colors"
					title="Скинути тег"
				>
					<X class="w-3.5 h-3.5" />
				</button>
			</div>
		{/if}
	</div>
</header>
