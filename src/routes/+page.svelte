<script lang="ts">
	import { onMount } from 'svelte';
	import { slidesData } from '#lib/data/slidesData';
	import Sidebar from '#lib/components/Sidebar.svelte';
	import SlideView from '#lib/components/SlideView.svelte';
	import PrintBooklet from '#lib/components/PrintBooklet.svelte';
	import { slideToMarkdown } from '#lib/utils/markdownExporter';
	import { presentation, type CategoryKey } from '#lib/controllers/presentation.svelte';
	import {
		Search,
		X,
		Menu,
		ChevronLeft,
		ChevronRight,
		Maximize2,
		Minimize2,
		Copy,
		Check,
		Printer
	} from '@lucide/svelte';

	let isMobileSidebarOpen = $state(false);
	let isCopied = $state(false);
	let isFullscreen = $state(false);

	let activeCategory = $derived(presentation.activeCategory);
	let activeSlideId = $derived(presentation.activeSlideId);
	let isSidebarCollapsed = $derived(presentation.isSidebarCollapsed);
	let fontScale = $derived(presentation.fontScale);
	let currentSlide = $derived(presentation.currentSlide);
	let currentSlideIndex = $derived(presentation.currentSlideIndex);
	let categorySlides = $derived(presentation.categorySlides);
	let matchingSlides = $derived(presentation.matchingSlides);
	let searchQuery = $derived(presentation.searchQuery);
	let showSearchResults = $derived(presentation.showSearchResults);

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		const handleFsChange = () => {
			isFullscreen = !!document.fullscreenElement;
			presentation.isFullscreen = isFullscreen;
		};
		document.addEventListener('fullscreenchange', handleFsChange);

		return () => {
			window.removeEventListener('keydown', handleKeydown);
			document.removeEventListener('fullscreenchange', handleFsChange);
		};
	});

	function toggleSidebarCollapse() {
		presentation.toggleSidebarCollapse();
	}

	function changeFontScale(delta: number) {
		presentation.changeFontScale(delta);
	}

	function resetFontScale() {
		presentation.resetFontScale();
	}

	async function copyCurrentSlideMarkdown() {
		try {
			const md = slideToMarkdown(currentSlide);
			await navigator.clipboard.writeText(md);
			isCopied = true;
			setTimeout(() => {
				isCopied = false;
			}, 2000);
		} catch (e) {
			console.error('Failed to copy markdown', e);
		}
	}

	function triggerPrint() {
		window.print();
	}

	function handleCategoryChange(cat: CategoryKey) {
		presentation.setCategory(cat);
	}

	function goToPrevSlide() {
		presentation.goToPrevSlide();
	}

	function goToNextSlide() {
		presentation.goToNextSlide();
	}

	function selectSlide(id: string) {
		presentation.selectSlide(id);
	}

	function handleSearchInput(value: string) {
		presentation.setSearch(value);
	}

	function clearSearch() {
		presentation.clearSearch();
	}

	function closeSearchResults() {
		presentation.showSearchResults = false;
	}

	function toggleFullscreen() {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen().catch((err) => {
				console.error(`Error attempting to enable fullscreen: ${err.message}`);
			});
			isFullscreen = true;
			presentation.isFullscreen = true;
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
				isFullscreen = false;
				presentation.isFullscreen = false;
			}
		}
	}

	// Keyboard arrow and shortcut navigation
	function handleKeydown(e: KeyboardEvent) {
		const target = e.target as HTMLElement;
		if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
			if (e.key === 'Escape') {
				clearSearch();
				(target as HTMLInputElement).blur();
			}
			return;
		}

		if (e.ctrlKey && e.key.toLowerCase() === 'b') {
			e.preventDefault();
			toggleSidebarCollapse();
			return;
		}

		if (e.key === '[' || e.key === ']') {
			e.preventDefault();
			toggleSidebarCollapse();
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
</script>

<svelte:head>
	<title>{currentSlide.menuTitle} | QA Interview Presentation</title>
</svelte:head>

<!-- ARIA Live Announcement Region (ACCESSIBILITY-v10) -->
<div class="sr-only" role="status" aria-live="polite" aria-atomic="true">
	{presentation.announcement}
</div>

<!-- Interactive App Container (Hidden during Print) -->
<div
	class="no-print h-screen w-screen bg-black text-slate-100 flex overflow-hidden font-sans select-none"
>
	<!-- Left Navigation Sidebar -->
	<Sidebar
		{activeCategory}
		onCategoryChange={handleCategoryChange}
		{activeSlideId}
		onSelectSlide={selectSlide}
		isMobileOpen={isMobileSidebarOpen}
		onCloseMobile={() => (isMobileSidebarOpen = false)}
		isCollapsed={isSidebarCollapsed}
		onToggleCollapse={toggleSidebarCollapse}
	/>

	<!-- Main Presentation Slide Area -->
	<div
		class="{isSidebarCollapsed
			? 'pl-0'
			: 'lg:pl-72 md:lg:pl-80'} flex-1 flex flex-col h-full overflow-hidden bg-black transition-all duration-300"
	>
		<!-- Compact Top Bar -->
		<header
			class="h-11 border-b border-cyan-950/80 bg-black/95 px-2.5 lg:px-4 flex items-center justify-between gap-2 shrink-0 z-20"
		>
			<!-- Left: Mobile Menu / Collapse Re-open & Topic Title -->
			<div class="flex items-center gap-2 overflow-hidden">
				<!-- Mobile Menu Button -->
				<button
					type="button"
					onclick={() => (isMobileSidebarOpen = true)}
					class="lg:hidden p-1.5 rounded-md bg-[#09111c] border border-cyan-800 text-cyan-300 hover:text-white cursor-pointer"
					aria-label="Меню"
				>
					<Menu class="w-4 h-4" />
				</button>

				<!-- Desktop Re-open Sidebar Button when Collapsed -->
				{#if isSidebarCollapsed}
					<button
						type="button"
						onclick={toggleSidebarCollapse}
						class="hidden lg:flex items-center gap-1 px-2 py-1 rounded-md bg-[#09111c] border border-cyan-800 text-cyan-300 hover:text-white hover:border-cyan-400 cursor-pointer text-xs font-mono transition-all"
						title="Розгорнути меню (Ctrl+B або [)"
					>
						<ChevronRight class="w-4 h-4" />
						<span class="text-[11px] font-bold">Меню</span>
					</button>
				{/if}

				<div class="flex items-center gap-1.5 truncate">
					<span
						class="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider {activeCategory ===
						'M'
							? 'bg-cyan-950 text-cyan-300 border border-cyan-700/60'
							: activeCategory === 'A'
								? 'bg-purple-950 text-purple-300 border border-purple-700/60'
								: activeCategory === 'C'
									? 'bg-emerald-950 text-emerald-300 border border-emerald-700/60'
									: activeCategory === 'F'
										? 'bg-sky-950 text-sky-300 border border-sky-700/60'
										: 'bg-purple-950 text-purple-300 border border-purple-700/60'}"
					>
						{activeCategory === 'M'
							? 'Manual QA'
							: activeCategory === 'A'
								? 'Automation QA'
								: activeCategory === 'C'
									? 'Senior AQA Consultant'
									: activeCategory === 'F'
										? 'Middle Flutter QA'
										: 'C# Core & .NET'}
					</span>
					<span class="font-bold text-xs text-white truncate hidden sm:inline">
						{currentSlide.menuTitle}
					</span>
				</div>
			</div>

			<!-- Center: Search Input Bar -->
			<div class="flex-1 max-w-sm lg:max-w-md mx-1 lg:mx-2 relative">
				<div class="relative flex items-center">
					<Search class="w-3.5 h-3.5 absolute left-2.5 text-cyan-400 pointer-events-none" />
					<input
						type="text"
						value={searchQuery}
						onfocus={() => {
							if (searchQuery.trim()) presentation.showSearchResults = true;
						}}
						oninput={(e) => handleSearchInput(e.currentTarget.value)}
						placeholder="Швидкий пошук (BVA, STLC, SOLID, Git, SQL)..."
						class="w-full pl-8 pr-7 py-1 text-xs rounded-lg bg-[#070d18] border border-cyan-900 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-400 font-sans"
					/>
					{#if searchQuery}
						<button
							type="button"
							onclick={clearSearch}
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
						<div
							class="text-[10px] font-mono text-cyan-400 px-2 py-0.5 flex items-center justify-between"
						>
							<span>Знайдено у {matchingSlides.length} слайдах:</span>
							<button
								type="button"
								onclick={closeSearchResults}
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
									{match.category === 'M'
										? 'Manual'
										: match.category === 'A'
											? 'Auto'
											: match.category === 'C'
												? 'Consultant'
												: match.category === 'F'
													? 'Flutter'
													: 'C#'}
								</span>
							</button>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Right: Controls & Actions (Font Size, Export, Navigation, Fullscreen) -->
			<div class="flex items-center gap-1.5 shrink-0">
				<!-- Font Scaling Switcher (A- / 100% / A+) -->
				<div
					class="hidden sm:flex items-center border border-cyan-950 bg-[#070d18] rounded-md overflow-hidden text-[10px] font-mono"
				>
					<button
						type="button"
						onclick={() => changeFontScale(-10)}
						class="px-1.5 py-1 text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/60 cursor-pointer transition-colors"
						title="Зменшити шрифт"
					>
						A-
					</button>
					<button
						type="button"
						onclick={resetFontScale}
						class="px-1.5 py-1 text-cyan-400 hover:bg-cyan-950/60 cursor-pointer transition-colors font-bold border-x border-cyan-950"
						title="Скинути масштаб шрифту (100%)"
					>
						{fontScale}%
					</button>
					<button
						type="button"
						onclick={() => changeFontScale(10)}
						class="px-1.5 py-1 text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/60 cursor-pointer transition-colors"
						title="Збільшити шрифт"
					>
						A+
					</button>
				</div>

				<!-- Copy to Markdown Button -->
				<button
					type="button"
					onclick={copyCurrentSlideMarkdown}
					class="p-1 rounded-md bg-[#09111c] border border-cyan-900 hover:border-cyan-600 cursor-pointer transition-all flex items-center gap-1 text-[11px] font-mono {isCopied
						? 'text-green-400 border-green-500 bg-green-950/40'
						: 'text-slate-300 hover:text-cyan-300'}"
					title="Скопіювати цей слайд у форматі Markdown"
				>
					{#if isCopied}
						<Check class="w-3.5 h-3.5 text-green-400" />
						<span class="hidden md:inline text-[10px]">Скопійовано!</span>
					{:else}
						<Copy class="w-3.5 h-3.5" />
						<span class="hidden md:inline text-[10px]">MD</span>
					{/if}
				</button>

				<!-- Print / PDF Booklet Button -->
				<button
					type="button"
					onclick={triggerPrint}
					class="p-1 rounded-md bg-[#09111c] border border-cyan-900 text-slate-300 hover:text-cyan-300 hover:border-cyan-600 cursor-pointer transition-all flex items-center gap-1 text-[11px] font-mono"
					title="Друк / Зберегти всі 16 слайдів у PDF"
				>
					<Printer class="w-3.5 h-3.5" />
					<span class="hidden md:inline text-[10px]">PDF</span>
				</button>

				<!-- Prev Button -->
				<button
					type="button"
					onclick={goToPrevSlide}
					class="p-1 rounded-md bg-[#09111c] border border-cyan-900 text-slate-300 hover:text-cyan-300 hover:border-cyan-600 transition-colors cursor-pointer ml-1"
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
					class="hidden sm:inline-flex p-1 rounded-md bg-[#09111c] border border-cyan-900 text-slate-300 hover:text-cyan-300 hover:border-cyan-600 transition-colors cursor-pointer"
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
			<SlideView slide={currentSlide} {searchQuery} {fontScale} />
		</main>
	</div>
</div>

<!-- Dedicated Print Booklet View (Rendered only on print / Save to PDF) -->
<PrintBooklet slides={slidesData} />
