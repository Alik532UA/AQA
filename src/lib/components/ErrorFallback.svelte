<script lang="ts">
	let { error, reset }: { error: unknown; reset: () => void } = $props();
</script>

<div class="min-h-[300px] flex items-center justify-center p-6 text-center">
	<div class="neon-card max-w-md w-full p-8 rounded-2xl border border-rose-500/30 bg-[#09111c]">
		<div class="text-4xl mb-3">⚠️</div>
		<h2 class="text-xl font-bold text-white mb-2">Сталася помилка інтерфейсу</h2>
		<p
			class="text-xs font-mono text-rose-300 mb-6 bg-rose-950/40 p-3 rounded-lg border border-rose-900/50"
		>
			{error instanceof Error ? error.message : 'Невідома помилка рендерингу'}
		</p>
		<button
			type="button"
			class="px-5 py-2.5 rounded-xl bg-cyan-500 text-[#050a12] font-semibold hover:bg-cyan-400 transition-colors cursor-pointer"
			onclick={reset}
		>
			Перезапустити слайд
		</button>
	</div>
</div>
