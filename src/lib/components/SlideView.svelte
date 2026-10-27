<script lang="ts">
	import type { Slide } from '#lib/data/slidesData';

	interface Props {
		slide: Slide;
		searchQuery: string;
	}

	let { slide, searchQuery }: Props = $props();

	function highlightText(html: string, query: string) {
		if (!query || !query.trim()) return html;
		const cleanQuery = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		const regex = new RegExp(`(?![^<]*>)(${cleanQuery})`, 'gi');
		return html.replace(
			regex,
			'<mark class="bg-cyan-500/40 text-cyan-200 px-0.5 rounded font-bold shadow-[0_0_8px_#00f0ff]">$1</mark>'
		);
	}
</script>

<div class="h-full flex flex-col justify-between p-2 lg:p-3 overflow-y-auto xl:overflow-hidden select-text">
	{#if slide.layout === 'custom-m1'}
		<!-- 3-column layout matching Screenshot 102050 -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 h-full items-stretch">
			<!-- Column 1 -->
			<div class="flex flex-col gap-2 justify-between">
				<!-- Card 0: Що таке тестування -->
				<div class="border border-cyan-400 bg-black/80 rounded-lg p-2.5 text-xs text-white">
					{#if slide.cards[0]?.title}
						<h3 class="font-bold text-sm text-cyan-300 mb-1 leading-tight">
							{@html highlightText(slide.cards[0].title, searchQuery)}
						</h3>
					{/if}
					{@html highlightText(slide.cards[0]?.contentHtml || '', searchQuery)}
				</div>

				<!-- Card 1: Software Quality -->
				<div class="border border-cyan-400 bg-black/80 rounded-lg p-2.5 text-xs text-white">
					{#if slide.cards[1]?.title}
						<h3 class="font-bold text-sm text-cyan-300 mb-1 leading-tight">
							{@html highlightText(slide.cards[1].title, searchQuery)}
						</h3>
					{/if}
					{@html highlightText(slide.cards[1]?.contentHtml || '', searchQuery)}
				</div>

				<!-- Card 2: Testing goals -->
				<div class="border border-cyan-400 bg-black/80 rounded-lg p-2.5 text-xs text-white">
					{#if slide.cards[2]?.title}
						<h3 class="font-bold text-sm text-cyan-300 mb-1 leading-tight">
							{@html highlightText(slide.cards[2].title, searchQuery)}
						</h3>
					{/if}
					{@html highlightText(slide.cards[2]?.contentHtml || '', searchQuery)}
				</div>

				<!-- Card 3: Testing stages -->
				<div class="border border-cyan-400 bg-black/80 rounded-lg p-2.5 text-xs text-white">
					{#if slide.cards[3]?.title}
						<h3 class="font-bold text-sm text-cyan-300 mb-1 leading-tight">
							{@html highlightText(slide.cards[3].title, searchQuery)}
						</h3>
					{/if}
					{@html highlightText(slide.cards[3]?.contentHtml || '', searchQuery)}
				</div>
			</div>

			<!-- Column 2 -->
			<div class="flex flex-col gap-2 justify-between">
				<!-- Card 4: STLC -->
				<div class="border border-cyan-400 bg-black/80 rounded-lg p-2.5 text-xs text-white flex-1">
					{#if slide.cards[4]?.title}
						<h3 class="font-bold text-sm text-cyan-300 mb-1 leading-tight">
							{@html highlightText(slide.cards[4].title, searchQuery)}
						</h3>
					{/if}
					{@html highlightText(slide.cards[4]?.contentHtml || '', searchQuery)}
				</div>

				<!-- Card 5: Тест дизайн -->
				<div class="border border-cyan-400 bg-black/80 rounded-lg p-2.5 text-xs text-white">
					{#if slide.cards[5]?.title}
						<h3 class="font-bold text-sm text-cyan-300 mb-1 leading-tight">
							{@html highlightText(slide.cards[5].title, searchQuery)}
						</h3>
					{/if}
					{@html highlightText(slide.cards[5]?.contentHtml || '', searchQuery)}
				</div>
			</div>

			<!-- Column 3 -->
			<div class="flex flex-col gap-2 justify-between">
				<!-- Card 6: Основні пункти тест плану -->
				<div class="border border-cyan-400 bg-black/80 rounded-lg p-2.5 text-xs text-white flex-1">
					{#if slide.cards[6]?.title}
						<h3 class="font-bold text-sm text-cyan-300 mb-1 leading-tight">
							{@html highlightText(slide.cards[6].title, searchQuery)}
						</h3>
					{/if}
					{@html highlightText(slide.cards[6]?.contentHtml || '', searchQuery)}
				</div>

				<!-- Card 7: Test Plan -->
				<div class="border border-cyan-400 bg-black/80 rounded-lg p-2.5 text-xs text-white">
					{#if slide.cards[7]?.title}
						<h3 class="font-bold text-sm text-cyan-300 mb-1 leading-tight">
							{@html highlightText(slide.cards[7].title, searchQuery)}
						</h3>
					{/if}
					{@html highlightText(slide.cards[7]?.contentHtml || '', searchQuery)}
				</div>
			</div>
		</div>

	{:else if slide.layout === 'custom-m3'}
		<!-- 3-column layout matching Screenshot 102104 -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 h-full items-stretch">
			<!-- Col 1: V & V -->
			<div class="flex flex-col gap-2.5 justify-between">
				<div class="border border-cyan-400 bg-black/80 rounded-lg p-3 text-xs text-white flex-1">
					<h3 class="font-bold text-sm text-cyan-300 mb-1.5">{slide.cards[0]?.title}</h3>
					{@html highlightText(slide.cards[0]?.contentHtml || '', searchQuery)}
				</div>
				<div class="border border-cyan-400 bg-black/80 rounded-lg p-3 text-xs text-white flex-1">
					<h3 class="font-bold text-sm text-cyan-300 mb-1.5">{slide.cards[1]?.title}</h3>
					{@html highlightText(slide.cards[1]?.contentHtml || '', searchQuery)}
				</div>
			</div>

			<!-- Col 2: Test Design Techniques -->
			<div class="border border-cyan-400 bg-black/80 rounded-lg p-3 text-xs text-white flex flex-col justify-between">
				<h3 class="font-bold text-sm text-cyan-300 mb-1.5">{slide.cards[2]?.title}</h3>
				{@html highlightText(slide.cards[2]?.contentHtml || '', searchQuery)}
			</div>

			<!-- Col 3: Severity vs Priority -->
			<div class="border border-cyan-400 bg-black/80 rounded-lg p-3 text-xs text-white flex flex-col justify-between">
				<h3 class="font-bold text-sm text-cyan-300 mb-1.5">{slide.cards[3]?.title}</h3>
				{@html highlightText(slide.cards[3]?.contentHtml || '', searchQuery)}
			</div>
		</div>

	{:else if slide.layout === 'custom-m4'}
		<!-- 3-column layout matching Screenshot 102107 -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 h-full items-stretch">
			<!-- Col 1: Test Case & Check list -->
			<div class="flex flex-col gap-2.5 justify-between">
				<div class="border border-cyan-400 bg-black/80 rounded-lg p-3 text-xs text-white flex-1">
					<h3 class="font-bold text-sm text-cyan-300 mb-1.5">{slide.cards[0]?.title}</h3>
					{@html highlightText(slide.cards[0]?.contentHtml || '', searchQuery)}
				</div>
				<div class="border border-cyan-400 bg-black/80 rounded-lg p-3 text-xs text-white">
					<h3 class="font-bold text-sm text-cyan-300 mb-1.5">{slide.cards[1]?.title}</h3>
					{@html highlightText(slide.cards[1]?.contentHtml || '', searchQuery)}
				</div>
			</div>

			<!-- Col 2: Defect / Error / Bug / Failure -->
			<div class="border border-cyan-400 bg-black/80 rounded-lg p-3 text-xs text-white flex flex-col justify-between">
				<h3 class="font-bold text-sm text-cyan-300 mb-1.5">{slide.cards[2]?.title}</h3>
				{@html highlightText(slide.cards[2]?.contentHtml || '', searchQuery)}
			</div>

			<!-- Col 3: Bug Report -->
			<div class="border border-cyan-400 bg-black/80 rounded-lg p-3 text-xs text-white flex flex-col justify-between">
				<h3 class="font-bold text-sm text-cyan-300 mb-1.5">{slide.cards[3]?.title}</h3>
				{@html highlightText(slide.cards[3]?.contentHtml || '', searchQuery)}
			</div>
		</div>

	{:else if slide.layout === 'custom-solid'}
		<!-- 2-column layout matching Screenshot 102131 (SOLID) -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 h-full items-stretch">
			<!-- Col 1: SRP + OCP -->
			<div class="flex flex-col gap-2.5 justify-between">
				<div class="border border-cyan-400 bg-black/80 rounded-lg p-3 text-xs text-white flex-1">
					<h3 class="font-bold text-sm text-cyan-300 mb-1.5">{slide.cards[0]?.title}</h3>
					{@html highlightText(slide.cards[0]?.contentHtml || '', searchQuery)}
				</div>
				<div class="border border-cyan-400 bg-black/80 rounded-lg p-3 text-xs text-white flex-1">
					<h3 class="font-bold text-sm text-cyan-300 mb-1.5">{slide.cards[1]?.title}</h3>
					{@html highlightText(slide.cards[1]?.contentHtml || '', searchQuery)}
				</div>
			</div>

			<!-- Col 2: LSP + ISP + DIP -->
			<div class="flex flex-col gap-2.5 justify-between">
				<div class="border border-cyan-400 bg-black/80 rounded-lg p-2.5 text-xs text-white flex-1">
					<h3 class="font-bold text-xs text-cyan-300 mb-1">{slide.cards[2]?.title}</h3>
					{@html highlightText(slide.cards[2]?.contentHtml || '', searchQuery)}
				</div>
				<div class="border border-cyan-400 bg-black/80 rounded-lg p-2.5 text-xs text-white flex-1">
					<h3 class="font-bold text-xs text-cyan-300 mb-1">{slide.cards[3]?.title}</h3>
					{@html highlightText(slide.cards[3]?.contentHtml || '', searchQuery)}
				</div>
				<div class="border border-cyan-400 bg-black/80 rounded-lg p-2.5 text-xs text-white flex-1">
					<h3 class="font-bold text-xs text-cyan-300 mb-1">{slide.cards[4]?.title}</h3>
					{@html highlightText(slide.cards[4]?.contentHtml || '', searchQuery)}
				</div>
			</div>
		</div>

	{:else if slide.layout === 'grid-2'}
		<!-- 2-column layout for standard 2-card slides -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 h-full items-stretch">
			{#each slide.cards as card}
				<div class="border border-cyan-400 bg-black/80 rounded-lg p-3 lg:p-4 text-xs text-white flex flex-col justify-between">
					{#if card.title}
						<h3 class="font-bold text-sm text-cyan-300 mb-2 leading-tight">
							{@html highlightText(card.title, searchQuery)}
						</h3>
					{/if}
					<div class="flex-1">
						{@html highlightText(card.contentHtml || '', searchQuery)}
					</div>
				</div>
			{/each}
		</div>

	{:else}
		<!-- 1-card full slide (grid-1) -->
		<div class="h-full flex flex-col">
			{#each slide.cards as card}
				<div class="border border-cyan-400 bg-black/80 rounded-lg p-3 lg:p-4 text-xs text-white h-full flex flex-col justify-between">
					{#if card.title}
						<h3 class="font-bold text-base text-cyan-300 mb-2 leading-tight">
							{@html highlightText(card.title, searchQuery)}
						</h3>
					{/if}
					<div class="flex-1">
						{@html highlightText(card.contentHtml || '', searchQuery)}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
