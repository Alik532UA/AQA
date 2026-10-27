<script lang="ts">
	import { onMount } from 'svelte';
	import { qaCards } from '#lib/data/qaData';
	import type { QACard, QACategory } from '#lib/types';
	import Sidebar from '#lib/components/Sidebar.svelte';
	import Navbar from '#lib/components/Navbar.svelte';
	import Card from '#lib/components/Card.svelte';
	import { ArrowUp, BookOpen, Sparkles, AlertCircle } from '@lucide/svelte';

	let searchQuery = $state('');
	let activeCategory = $state<QACategory>('manual');
	let selectedTag = $state<string | null>(null);
	let onlyFavorites = $state(false);
	let bookmarkedIds = $state<string[]>([]);
	let isMobileSidebarOpen = $state(false);
	let activeCardId = $state<string | undefined>(undefined);
	let showBackToTop = $state(false);

	// Load bookmarks from LocalStorage
	onMount(() => {
		try {
			const saved = localStorage.getItem('qa_cheat_sheet_bookmarks');
			if (saved) {
				bookmarkedIds = JSON.parse(saved);
			}
		} catch (e) {
			console.error('Failed to load bookmarks', e);
		}

		const handleScroll = () => {
			showBackToTop = window.scrollY > 400;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function toggleBookmark(id: string) {
		if (bookmarkedIds.includes(id)) {
			bookmarkedIds = bookmarkedIds.filter((item) => item !== id);
		} else {
			bookmarkedIds = [...bookmarkedIds, id];
		}
		try {
			localStorage.setItem('qa_cheat_sheet_bookmarks', JSON.stringify(bookmarkedIds));
		} catch (e) {
			console.error('Failed to save bookmark', e);
		}
	}

	function handleTagClick(tag: string) {
		selectedTag = tag;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function clearTag() {
		selectedTag = null;
	}

	function scrollToCard(id: string) {
		activeCardId = id;
		const el = document.getElementById(id);
		if (el) {
			const yOffset = -100;
			const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
			window.scrollTo({ top: y, behavior: 'smooth' });
		}
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	// Filtered cards list
	let filteredCards = $derived.by(() => {
		return qaCards.filter((card) => {
			// Category filter
			if (activeCategory !== 'all' && card.category !== activeCategory) {
				return false;
			}

			// Favorites filter
			if (onlyFavorites && !bookmarkedIds.includes(card.id)) {
				return false;
			}

			// Tag filter
			if (selectedTag && !card.tags.includes(selectedTag)) {
				return false;
			}

			// Search query filter
			if (searchQuery.trim()) {
				const query = searchQuery.toLowerCase().trim();
				const inTitle = card.title.toLowerCase().includes(query);
				const inSubtitle = card.subtitle?.toLowerCase().includes(query) ?? false;
				const inSummary = card.summary.toLowerCase().includes(query);
				const inTags = card.tags.some((t) => t.toLowerCase().includes(query));
				const inPoints = card.points?.some((p) => p.toLowerCase().includes(query)) ?? false;
				const inConcepts =
					card.concepts?.some(
						(c) => c.title.toLowerCase().includes(query) || c.desc.toLowerCase().includes(query)
					) ?? false;
				const inCode = card.codeSnippet?.code.toLowerCase().includes(query) ?? false;

				if (!inTitle && !inSubtitle && !inSummary && !inTags && !inPoints && !inConcepts && !inCode) {
					return false;
				}
			}

			return true;
		});
	});

	// Cards available in the current category mode (for sidebar navigation)
	let sidebarCards = $derived.by(() => {
		if (activeCategory === 'all') return qaCards;
		return qaCards.filter((c) => c.category === activeCategory);
	});
</script>

<div class="min-h-screen bg-[#05070c] text-slate-100 flex flex-col">
	<!-- Left Sidebar (Desktop Fixed & Mobile Drawer) -->
	<Sidebar
		cards={sidebarCards}
		{activeCategory}
		onCategoryChange={(cat) => {
			activeCategory = cat;
			selectedTag = null;
		}}
		onSelectCard={scrollToCard}
		{activeCardId}
		isMobileOpen={isMobileSidebarOpen}
		onCloseMobile={() => (isMobileSidebarOpen = false)}
	/>

	<!-- Main Content Area with Left Margin for Sidebar -->
	<div class="lg:pl-72 md:lg:pl-80 flex-1 flex flex-col">
		<!-- Top Navigation Bar -->
		<Navbar
			{searchQuery}
			onSearchChange={(q) => (searchQuery = q)}
			{activeCategory}
			onCategoryChange={(cat) => {
				activeCategory = cat;
				selectedTag = null;
			}}
			{selectedTag}
			onClearTag={clearTag}
			{onlyFavorites}
			onToggleOnlyFavorites={() => (onlyFavorites = !onlyFavorites)}
			totalCount={qaCards.length}
			visibleCount={filteredCards.length}
			favoritesCount={bookmarkedIds.length}
			onToggleMobileSidebar={() => (isMobileSidebarOpen = !isMobileSidebarOpen)}
		/>

		<!-- Content Container -->
		<main class="flex-1 p-4 md:p-6 lg:p-8 max-w-7xl w-full mx-auto">
			<!-- Header Banner with Status & Quick Stats -->
			<div class="mb-6 p-4 md:p-5 rounded-2xl bg-gradient-to-r from-[#091322] via-[#0b192e] to-[#07101c] border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
				<div class="flex items-center gap-3">
					<div class="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-400 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
						<BookOpen class="w-5 h-5" />
					</div>
					<div>
						<h2 class="text-base md:text-lg font-bold text-white flex items-center gap-2">
							<span>База знань QA</span>
							<span class="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/40">
								{activeCategory === 'manual' ? 'Manual QA' : activeCategory === 'automation' ? 'Automation QA (.NET)' : 'Всі розділи'}
							</span>
						</h2>
						<p class="text-xs text-slate-400">
							Швидкий огляд ключових концепцій, класифікацій, термінології та прикладів для успішного проходження співбесіди
						</p>
					</div>
				</div>

				<div class="flex items-center gap-2 text-xs font-mono text-cyan-300/80">
					<span class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
					<span>Готово до співбесіди</span>
				</div>
			</div>

			<!-- Cards Grid -->
			{#if filteredCards.length > 0}
				<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-start">
					{#each filteredCards as card (card.id)}
						<Card
							{card}
							{searchQuery}
							isBookmarked={bookmarkedIds.includes(card.id)}
							onToggleBookmark={toggleBookmark}
							onTagClick={handleTagClick}
						/>
					{/each}
				</div>
			{:else}
				<!-- Empty Search State -->
				<div class="text-center py-16 px-4 rounded-2xl bg-[#09111c] border border-cyan-950 my-8">
					<AlertCircle class="w-12 h-12 text-cyan-400 mx-auto mb-3 opacity-60" />
					<h3 class="text-lg font-bold text-white mb-1">Нічого не знайдено</h3>
					<p class="text-sm text-slate-400 max-w-md mx-auto mb-5">
						За вашим запитом "{searchQuery}" не знайдено жодної картки. Спробуйте змінити ключові слова або скинути активні фільтри.
					</p>
					<button
						type="button"
						onclick={() => {
							searchQuery = '';
							selectedTag = null;
							onlyFavorites = false;
						}}
						class="px-4 py-2 rounded-xl bg-cyan-500 text-black font-semibold text-sm hover:bg-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all cursor-pointer"
					>
						Скинути всі фільтри
					</button>
				</div>
			{/if}
		</main>

		<!-- Footer -->
		<footer class="mt-auto py-6 px-4 md:px-8 border-t border-cyan-950 text-center text-xs font-mono text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-7xl w-full mx-auto">
			<div>
				<span>QA Cheat Sheet • Створено для підготовки до співбесід</span>
			</div>
			<div class="flex items-center gap-4 text-cyan-400/80">
				<span>Manual QA</span>
				<span>•</span>
				<span>Automation (.NET)</span>
				<span>•</span>
				<span>ISTQB Standard</span>
			</div>
		</footer>
	</div>

	<!-- Floating Back To Top Button -->
	{#if showBackToTop}
		<button
			type="button"
			onclick={scrollToTop}
			class="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-cyan-500 text-black shadow-[0_0_20px_#00f0ff] hover:bg-cyan-400 hover:scale-110 transition-all duration-300 cursor-pointer"
			title="Вгору"
			aria-label="Вгору"
		>
			<ArrowUp class="w-5 h-5 font-bold" />
		</button>
	{/if}
</div>
