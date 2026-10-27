<script lang="ts">
	import type { QACard, QACategory } from '#lib/types';
	import { CheckCircle2, Layers } from '@lucide/svelte';

	interface Props {
		cards: QACard[];
		activeCategory: QACategory;
		onCategoryChange: (cat: QACategory) => void;
		onSelectCard: (id: string) => void;
		activeCardId?: string;
		isMobileOpen: boolean;
		onCloseMobile: () => void;
	}

	let {
		cards,
		activeCategory,
		onCategoryChange,
		onSelectCard,
		activeCardId,
		isMobileOpen,
		onCloseMobile
	}: Props = $props();

	// Group cards by section for current category view
	let groupedSections = $derived.by(() => {
		const groups: { [key: string]: QACard[] } = {};
		for (const card of cards) {
			if (!groups[card.section]) {
				groups[card.section] = [];
			}
			groups[card.section].push(card);
		}
		return Object.entries(groups).map(([section, items]) => ({
			section,
			items
		}));
	});

	function handleItemClick(id: string) {
		onSelectCard(id);
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
	class="fixed top-0 bottom-0 left-0 z-50 w-72 md:w-80 bg-[#070b13] border-r border-cyan-500/30 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 {isMobileOpen
		? 'translate-x-0'
		: '-translate-x-full'}"
>
	<!-- Top M / A Mode Switcher Bar -->
	<div class="p-4 border-b border-cyan-950 flex flex-col gap-3 bg-[#080e18]/90">
		<div class="flex items-center justify-center gap-4">
			<!-- Manual QA Button 'M' -->
			<button
				type="button"
				onclick={() => onCategoryChange('manual')}
				title="Переключити на Manual QA"
				class="relative group flex flex-col items-center gap-1 cursor-pointer"
			>
				<div
					class="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold font-mono transition-all duration-300 {activeCategory ===
					'manual'
						? 'bg-cyan-500 text-black shadow-[0_0_20px_#00f0ff] ring-2 ring-cyan-300'
						: 'bg-[#0e1726] text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(0,240,255,0.4)]'}"
				>
					M
				</div>
				<span
					class="text-[11px] font-mono tracking-wider transition-colors {activeCategory ===
					'manual'
						? 'text-cyan-300 font-semibold'
						: 'text-slate-400'}"
				>
					Manual QA
				</span>
			</button>

			<!-- All Mode Pill -->
			<button
				type="button"
				onclick={() => onCategoryChange('all')}
				title="Показати всі розділи"
				class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 {activeCategory ===
				'all'
					? 'bg-cyan-400/20 text-cyan-200 border border-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.3)]'
					: 'text-slate-400 hover:text-cyan-300'}"
			>
				<Layers class="w-4 h-4" />
			</button>

			<!-- Automation QA Button 'A' -->
			<button
				type="button"
				onclick={() => onCategoryChange('automation')}
				title="Переключити на Automation QA (.NET)"
				class="relative group flex flex-col items-center gap-1 cursor-pointer"
			>
				<div
					class="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold font-mono transition-all duration-300 {activeCategory ===
					'automation'
						? 'bg-purple-500 text-white shadow-[0_0_20px_#a855f7] ring-2 ring-purple-300'
						: 'bg-[#0e1726] text-purple-400 border border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_12px_rgba(168,85,247,0.4)]'}"
				>
					A
				</div>
				<span
					class="text-[11px] font-mono tracking-wider transition-colors {activeCategory ===
					'automation'
						? 'text-purple-300 font-semibold'
						: 'text-slate-400'}"
				>
					Automation
				</span>
			</button>
		</div>
	</div>

	<!-- Navigation Items by Section -->
	<nav class="flex-1 overflow-y-auto px-3 py-4 space-y-6">
		{#each groupedSections as { section, items }}
			<div>
				<div class="px-3 mb-2 flex items-center gap-2">
					<span class="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_#00f0ff]"></span>
					<h4 class="text-xs font-mono uppercase tracking-wider text-cyan-400/90 font-bold">
						{section}
					</h4>
				</div>

				<div class="space-y-1">
					{#each items as item}
						<button
							type="button"
							onclick={() => handleItemClick(item.id)}
							class="w-full text-left px-3 py-2 rounded-lg text-xs md:text-sm transition-all duration-200 flex items-center justify-between group {activeCardId ===
							item.id
								? 'bg-cyan-950/70 text-cyan-200 border border-cyan-500/60 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
								: 'text-slate-300 hover:text-cyan-200 hover:bg-[#0c1626]'}"
						>
							<span class="truncate font-medium">{item.title}</span>
							<span
								class="text-[10px] font-mono ml-2 px-1.5 py-0.5 rounded opacity-60 group-hover:opacity-100 {item.category ===
								'manual'
									? 'bg-cyan-950 text-cyan-400'
									: 'bg-purple-950 text-purple-400'}"
							>
								{item.category === 'manual' ? 'M' : 'A'}
							</span>
						</button>
					{/each}
				</div>
			</div>
		{/each}
	</nav>

	<!-- Sidebar Footer -->
	<div class="p-3 border-t border-cyan-950 bg-[#060910] text-[11px] font-mono text-cyan-500/70 text-center flex items-center justify-center gap-2">
		<span>QA Interview Prep v1.0</span>
		<span>•</span>
		<span>SvelteKit 5</span>
	</div>
</aside>
