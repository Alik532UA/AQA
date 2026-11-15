<script lang="ts">
	import type { QACard } from '#lib/types';
	import { Bookmark, BookmarkCheck, Copy, Check, Lightbulb, Code2 } from '@lucide/svelte';

	interface Props {
		card: QACard;
		searchQuery: string;
		isBookmarked: boolean;
		onToggleBookmark: (id: string) => void;
		onTagClick: (tag: string) => void;
	}

	let { card, searchQuery, isBookmarked, onToggleBookmark, onTagClick }: Props = $props();

	let copied = $state(false);
	let codeCopied = $state(false);

	function copyCardText() {
		const text = `${card.title} (${card.subtitle || ''})\n\n${card.summary}\n\n${
			card.points ? card.points.join('\n') : ''
		}\n\n${card.interviewTip ? 'Порада: ' + card.interviewTip : ''}`;

		navigator.clipboard.writeText(text);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}

	function copyCode(code: string) {
		navigator.clipboard.writeText(code);
		codeCopied = true;
		setTimeout(() => (codeCopied = false), 2000);
	}

	function escapeHtml(str: string): string {
		return str
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#039;');
	}

	function highlightText(text: string, query: string) {
		if (!text) return '';
		const safeText = escapeHtml(text);
		if (!query || !query.trim()) return safeText;
		const safeQuery = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		const regex = new RegExp(`(${safeQuery})`, 'gi');
		return safeText.replace(
			regex,
			'<mark class="bg-cyan-500/30 text-cyan-200 px-1 py-0.5 rounded font-semibold">$1</mark>'
		);
	}
</script>

<article
	id={card.id}
	class="neon-card group relative flex flex-col justify-between rounded-xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-1"
>
	<!-- Card Glow Accent Bar -->
	<div
		class="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
	></div>

	<div>
		<!-- Top Meta & Actions -->
		<div class="flex items-start justify-between gap-3 mb-3">
			<div class="flex flex-wrap items-center gap-2">
				<span
					class="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-mono font-bold tracking-wider {card.category ===
					'manual'
						? 'bg-cyan-950/80 text-cyan-400 border border-cyan-500/40'
						: 'bg-purple-950/80 text-purple-300 border border-purple-500/40'}"
				>
					{card.category === 'manual' ? 'M' : 'A'}
				</span>
				<span class="text-xs font-mono uppercase tracking-wider text-cyan-500/80">
					{card.section}
				</span>
			</div>

			<div class="flex items-center gap-1.5">
				<button
					type="button"
					onclick={() => onToggleBookmark(card.id)}
					title={isBookmarked ? 'Видалити з обраного' : 'Додати в обране'}
					class="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-cyan-950/50 transition-colors"
				>
					{#if isBookmarked}
						<BookmarkCheck class="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
					{:else}
						<Bookmark class="w-4 h-4" />
					{/if}
				</button>

				<button
					type="button"
					onclick={copyCardText}
					title="Скопіювати короткий конспект"
					class="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-cyan-950/50 transition-colors"
				>
					{#if copied}
						<Check class="w-4 h-4 text-emerald-400" />
					{:else}
						<Copy class="w-4 h-4" />
					{/if}
				</button>
			</div>
		</div>

		<!-- Title & Subtitle -->
		<h3
			class="text-lg md:text-xl font-bold text-white tracking-tight mb-1 group-hover:text-cyan-300 transition-colors"
		>
			{@html highlightText(card.title, searchQuery)}
		</h3>

		{#if card.subtitle}
			<p class="text-xs md:text-sm text-cyan-400/90 font-medium mb-3">
				{@html highlightText(card.subtitle, searchQuery)}
			</p>
		{/if}

		<!-- Summary -->
		<div class="text-sm text-slate-300 leading-relaxed mb-4">
			{@html highlightText(card.summary, searchQuery)}
		</div>

		<!-- Bullet Points (if any) -->
		{#if card.points && card.points.length > 0}
			<ul class="space-y-2 mb-4 text-sm text-slate-300/90">
				{#each card.points as point}
					<li class="flex items-start gap-2">
						<span
							class="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_6px_#00f0ff]"
						></span>
						<span class="leading-relaxed">{@html highlightText(point, searchQuery)}</span>
					</li>
				{/each}
			</ul>
		{/if}

		<!-- Structured Concepts (if any) -->
		{#if card.concepts && card.concepts.length > 0}
			<div class="space-y-2 mb-4">
				{#each card.concepts as concept}
					<div
						class="p-2.5 rounded-lg bg-[#0b1320]/80 border border-cyan-900/40 hover:border-cyan-500/40 transition-colors"
					>
						<div class="text-xs md:text-sm font-semibold text-cyan-300 mb-0.5">
							{@html highlightText(concept.title, searchQuery)}
						</div>
						<div class="text-xs text-slate-300 leading-relaxed">
							{@html highlightText(concept.desc, searchQuery)}
						</div>
					</div>
				{/each}
			</div>
		{/if}

		<!-- Code Snippet (if any) -->
		{#if card.codeSnippet}
			<div class="relative my-3 rounded-lg overflow-hidden border border-cyan-900/60 bg-[#060a12]">
				<div
					class="flex items-center justify-between px-3 py-1.5 bg-[#09111c] border-b border-cyan-950 text-xs font-mono text-cyan-400"
				>
					<div class="flex items-center gap-1.5">
						<Code2 class="w-3.5 h-3.5 text-cyan-400" />
						<span>{card.codeSnippet.language.toUpperCase()}</span>
					</div>
					<button
						type="button"
						onclick={() => copyCode(card.codeSnippet!.code)}
						class="flex items-center gap-1 hover:text-cyan-200 transition-colors"
					>
						{#if codeCopied}
							<Check class="w-3 h-3 text-emerald-400" />
							<span class="text-emerald-400 text-[10px]">Copied</span>
						{:else}
							<Copy class="w-3 h-3" />
							<span class="text-[10px]">Copy</span>
						{/if}
					</button>
				</div>
				<pre class="p-3 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed"><code
						>{card.codeSnippet.code}</code
					></pre>
			</div>
		{/if}

		<!-- Interview Tip Box -->
		{#if card.interviewTip}
			<div
				class="mt-4 p-3 rounded-lg bg-cyan-950/25 border border-cyan-500/30 text-xs text-cyan-200/95 leading-relaxed flex items-start gap-2.5"
			>
				<Lightbulb class="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
				<div>
					<span class="font-bold text-cyan-300 block mb-0.5">Порада для співбесіди:</span>
					{@html highlightText(card.interviewTip, searchQuery)}
				</div>
			</div>
		{/if}
	</div>

	<!-- Tags Footer -->
	<div class="mt-5 pt-3 border-t border-cyan-950 flex flex-wrap gap-1.5">
		{#each card.tags as tag}
			<button
				type="button"
				onclick={() => onTagClick(tag)}
				class="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#0a1526] text-cyan-400/80 border border-cyan-900/50 hover:border-cyan-400 hover:text-cyan-200 transition-colors cursor-pointer"
			>
				#{tag}
			</button>
		{/each}
	</div>
</article>
