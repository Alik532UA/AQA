<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="min-h-screen flex items-center justify-center p-6 bg-[#030712] text-white">
	<div
		class="max-w-md w-full bg-[#0b1320] rounded-2xl p-8 border border-cyan-500/30 text-center shadow-[0_0_30px_rgba(0,240,255,0.1)]"
	>
		<div class="text-6xl font-black text-cyan-400 font-mono mb-3">{page.status}</div>
		<h1 class="text-2xl font-bold mb-2 text-white">
			{page.status === 404 ? 'Розділ або слайд не знайдено' : 'Неочікувана помилка'}
		</h1>
		<p class="text-slate-400 mb-6 text-sm">
			{page.error?.message || 'Будь ласка, оберіть іншу тему у бічному меню дашборду.'}
		</p>
		<a
			href="/"
			class="inline-block px-6 py-2.5 rounded-xl bg-cyan-500 text-[#050a12] font-semibold hover:bg-cyan-400 transition-colors cursor-pointer"
		>
			Повернутися до дашборду
		</a>
	</div>
</div>
