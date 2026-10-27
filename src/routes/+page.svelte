<script lang="ts">
	import { onMount } from 'svelte';
	import { slidesData, type Slide } from '#lib/data/slidesData';
	import Sidebar from '#lib/components/Sidebar.svelte';
	import SlideView from '#lib/components/SlideView.svelte';
	import {
		Search,
		X,
		Menu,
		ChevronLeft,
		ChevronRight,
		Maximize2,
		Minimize2,
		Sparkles
	} from '@lucide/svelte';

	let activeCategory = $state<'M' | 'A'>('M');
	let activeSlideId = $state<string>('m-basics');
	let searchQuery = $state('');
	let isMobileSidebarOpen = $state(false);
	let isFullscreen = $state(false);
	let showSearchResults = $state(false);

	// Slides in current category
	let categorySlides = $derived.by(() => {
		return slidesData.filter((s) => s.category === activeCategory);
	});

	// Current active slide object
	let currentSlide = $derived.by(() => {
		const found = slidesData.find((s) => s.id === activeSlideId);
		if (found) return found;
		return categorySlides[0] || slidesData[0];
	});

	// Current slide index in active category (1-based)
	let currentSlideIndex = $derived.by(() => {
		const idx = categorySlides.findIndex((s) => s.id === currentSlide.id);
		return idx >= 0 ? idx + 1 : 1;
	});

	// Search matching slides across all slides
	let matchingSlides = $derived.by(() => {
		if (!searchQuery.trim()) return [];
		const q = searchQuery.toLowerCase().trim();
		return slidesData.filter((slide) => {
			const inTitle = slide.menuTitle.toLowerCase().includes(q);
			const inSub = slide.menuSub?.toLowerCase().includes(q) ?? false;
			const inCards = slide.cards.some((c) => {
				const inCardTitle = c.title?.toLowerCase().includes(q) ?? false;
				const inContent = c.contentHtml?.toLowerCase().includes(q) ?? false;
				return inCardTitle || inContent;
			});
			return inTitle || inSub || inCards;
		});
	});

	function handleCategoryChange(cat: 'M' | 'A') {
		activeCategory = cat;
		const slides = slidesData.filter((s) => s.category === cat);
		if (slides.length > 0) {
			activeSlideId = slides[0].id;
		}
	}

	function goToPrevSlide() {
		const idx = categorySlides.findIndex((s) => s.id === currentSlide.id);
		if (idx > 0) {
			activeSlideId = categorySlides[idx - 1].id;
		} else if (idx === 0) {
			// Loop to last slide
			activeSlideId = categorySlides[categorySlides.length - 1].id;
		}
	}

	function goToNextSlide() {
		const idx = categorySlides.findIndex((s) => s.id === currentSlide.id);
		if (idx >= 0 && idx < categorySlides.length - 1) {
			activeSlideId = categorySlides[idx + 1].id;
		} else if (idx === categorySlides.length - 1) {
			// Loop to first slide
			activeSlideId = categorySlides[0].id;
		}
	}

	function selectSlide(id: string) {
		const slide = slidesData.find((s) => s.id === id);
		if (slide) {
			activeCategory = slide.category;
			activeSlideId = slide.id;
		}
	}

	function toggleFullscreen() {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen().catch((err) => {
				console.error(`Error attempting to enable fullscreen: ${err.message}`);
			});
			isFullscreen = true;
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
				isFullscreen = false;
			}
		}
	}

	// Keyboard arrow navigation
	function handleKeydown(e: KeyboardEvent) {
		// Ignore if user is typing in the search bar
		const target = e.target as HTMLElement;
		if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
			if (e.key === 'Escape') {
				searchQuery = '';
				(target as HTMLInputElement).blur();
			}
			return;
		}

		if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
			e.preventDefault();
			goToNextSlide();
		} else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
			e.preventDefault();
			goToPrevSlide();
		} else if (e.key === 'f' || e.key === 'F') {
			toggleFullscreen();
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		const handleFsChange = () => {
			isFullscreen = !!document.fullscreenElement;
		};
		document.addEventListener('fullscreenchange', handleFsChange);

		return () => {
			window.removeEventListener('keydown', handleKeydown);
			document.removeEventListener('fullscreenchange', handleFsChange);
		};
	});
</script>

<svelte:head>
	<title>{currentSlide.menuTitle} | QA Interview Presentation</title>
</svelte:head>

<div class="h-screen w-screen bg-black text-slate-100 flex overflow-hidden font-sans select-none">
	<!-- Left Navigation Sidebar -->
	<Sidebar
		{activeCategory}
		onCategoryChange={handleCategoryChange}
		{activeSlideId}
		onSelectSlide={selectSlide}
		isMobileOpen={isMobileSidebarOpen}
		onCloseMobile={() => (isMobileSidebarOpen = false)}
	/>

	<!-- Main Presentation Slide Area -->
	<div class="lg:pl-72 md:lg:pl-80 flex-1 flex flex-col h-full overflow-hidden bg-black">
		<!-- Compact Top Bar -->
		<header
			class="h-11 border-b border-cyan-950/80 bg-black/95 px-3 lg:px-4 flex items-center justify-between gap-2 shrink-0 z-20"
		>
			<!-- Left: Mobile Menu & Current Topic Title -->
			<div class="flex items-center gap-2 overflow-hidden">
				<button
					type="button"
					onclick={() => (isMobileSidebarOpen = true)}
					class="lg:hidden p-1.5 rounded-md bg-[#09111c] border border-cyan-800 text-cyan-300 hover:text-white cursor-pointer"
					aria-label="Меню"
				>
					<Menu class="w-4 h-4" />
				</button>

				<div class="flex items-center gap-2 truncate">
					<span
						class="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider {activeCategory ===
						'M'
							? 'bg-cyan-950 text-cyan-300 border border-cyan-700/60'
							: 'bg-purple-950 text-purple-300 border border-purple-700/60'}"
					>
						{activeCategory === 'M' ? 'Manual QA' : 'Automation QA'}
					</span>
					<span class="font-bold text-xs text-white truncate hidden sm:inline">
						{currentSlide.menuTitle}
					</span>
				</div>
			</div>

			<!-- Center: Search Input Bar -->
			<div class="flex-1 max-w-md mx-2 relative">
				<div class="relative flex items-center">
					<Search class="w-3.5 h-3.5 absolute left-2.5 text-cyan-400 pointer-events-none" />
					<input
						type="text"
						value={searchQuery}
						onfocus={() => (showSearchResults = true)}
						oninput={(e) => {
							searchQuery = e.currentTarget.value;
							showSearchResults = true;
						}}
						placeholder="Швидкий пошук (BVA, STLC, SOLID, Git, SQL)..."
						class="w-full pl-8 pr-7 py-1 text-xs rounded-lg bg-[#070d18] border border-cyan-900 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-400 font-sans"
					/>
					{#if searchQuery}
						<button
							type="button"
							onclick={() => {
								searchQuery = '';
								showSearchResults = false;
							}}
							class="absolute right-2 p-0.5 text-slate-400 hover:text-cyan-300 cursor-pointer"
							title="Очистити"
						>
							<X class="w-3.5 h-3.5" />
						</button>
					{/if}
				</div>

				<!-- Search Dropdown Results Popover -->
				{#if showSearchResults && searchQuery.trim() && matchingSlides.length > 0}
					<div
						class="absolute top-full left-0 right-0 mt-1.5 bg-[#060c18] border border-cyan-500/80 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.9)] p-2 z-50 max-h-72 overflow-y-auto space-y-1"
					>
						<div class="text-[10px] font-mono text-cyan-400 px-2 py-0.5 flex items-center justify-between">
							<span>Знайдено у {matchingSlides.length} слайдах:</span>
							<button
								type="button"
								onclick={() => (showSearchResults = false)}
								class="text-slate-400 hover:text-white"
								title="Закрити список"
							>
								✕
							</button>
						</div>
						{#each matchingSlides as match}
							<button
								type="button"
								onclick={() => {
									selectSlide(match.id);
									showSearchResults = false;
								}}
								class="w-full text-left px-2.5 py-1.5 rounded-lg text-xs hover:bg-cyan-950/60 hover:text-cyan-300 flex items-center justify-between transition-colors cursor-pointer {match.id ===
								activeSlideId
									? 'bg-cyan-900/40 text-cyan-200 border border-cyan-600/50'
									: 'text-slate-200'}"
							>
								<div class="truncate">
									<span class="font-bold">{match.menuTitle}</span>
									{#if match.menuSub}
										<span class="text-[10px] text-slate-400 ml-1">({match.menuSub})</span>
									{/if}
								</div>
								<span class="text-[10px] font-mono text-cyan-400 shrink-0 ml-2">
									{match.category === 'M' ? 'Manual' : 'Auto'}
								</span>
							</button>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Right: Slide Navigation Controls & Fullscreen -->
			<div class="flex items-center gap-1.5 shrink-0">
				<!-- Prev Button -->
				<button
					type="button"
					onclick={goToPrevSlide}
					class="p-1 rounded-md bg-[#09111c] border border-cyan-900 text-slate-300 hover:text-cyan-300 hover:border-cyan-600 transition-colors cursor-pointer"
					title="Попередній слайд (←)"
				>
					<ChevronLeft class="w-4 h-4" />
				</button>

				<!-- Slide Counter Badge -->
				<span
					class="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#09111c] border border-cyan-950 text-cyan-300"
				>
					{currentSlideIndex} / {categorySlides.length}
				</span>

				<!-- Next Button -->
				<button
					type="button"
					onclick={goToNextSlide}
					class="p-1 rounded-md bg-[#09111c] border border-cyan-900 text-slate-300 hover:text-cyan-300 hover:border-cyan-600 transition-colors cursor-pointer"
					title="Наступний слайд (→ або Space)"
				>
					<ChevronRight class="w-4 h-4" />
				</button>

				<!-- Fullscreen Toggle -->
				<button
					type="button"
					onclick={toggleFullscreen}
					class="hidden sm:inline-flex p-1 rounded-md bg-[#09111c] border border-cyan-900 text-slate-300 hover:text-cyan-300 hover:border-cyan-600 transition-colors ml-1 cursor-pointer"
					title="Повноекранний режим (F)"
				>
					{#if isFullscreen}
						<Minimize2 class="w-4 h-4" />
					{:else}
						<Maximize2 class="w-4 h-4" />
					{/if}
				</button>
			</div>
		</header>

		<!-- Main Active Slide Content -->
		<main class="flex-1 overflow-hidden p-2 lg:p-3 bg-black flex flex-col justify-center">
			<SlideView slide={currentSlide} {searchQuery} />
		</main>
	</div>
</div>
