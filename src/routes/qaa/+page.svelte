<!--
	Zobrazení často kladených dotazů a odpovědí
	Soubor: +page.svelte
-->

<script lang="ts">
	import QaATexts from '$lib/elements/QaATexts.svelte';

	let { data } = $props<{
		qaaData: any[];
	}>();

	let { qaaData } = $derived(data);
</script>

<div class="ml-5 h-fit max-w-7xl content-between rounded-lg bg-base-200 p-5">
	<h2 class="pb-5 text-center text-5xl font-extrabold text-primary">Kontakt</h2>
	<p>
		Kontaktovat nás můžete přes Facebook <a
			class="link"
			href="https://www.facebook.com/KvhAsDoomtroopers/"
			target="_blank">KvhAsDoomtroopers</a
		>
		nebo na email <a class="link" href="mailto:info@doomtroopers.cz">info@doomtroopers.cz</a>.
	</p>
	<p>
		Pokud se zpráva týká webových stránek prosím využijte email adresu <a
			class="link"
			href="mailto:web@doomtroopers.cz">web@doomtroopers.cz</a
		>.
	</p>
	<br />
	<h2 class="pb-5 text-center text-5xl font-extrabold text-primary">Často kladené dotazy</h2>
	{#if qaaData.length > 0}
		{#each qaaData as qaaDataSection}
			<QaATexts dataSection={qaaDataSection} />
		{/each}
	{:else}
		<p class="text-error">Žádné dotazy nebyly nalezeny</p>
	{/if}
</div>

<!-- Konec souboru +page.svelte -->
