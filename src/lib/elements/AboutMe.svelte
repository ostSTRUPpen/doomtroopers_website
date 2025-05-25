<!--
	Element sloužící pro zobrazení informací o autorovi
	@file AboutMe.svelte
-->

<script lang="ts">
	let { displayAboutMe } = $props<{ displayAboutMe: boolean }>();
</script>

{#if displayAboutMe}
	<div class="">
		<p>
			Správce webu (a člen týmu) <a
				href="mailto:vojvol@post"
				rel="author"
				target="_blank"
 				class="link-hover link-primary">Vojtěch Voldřich</a
			> <span class="text-secondary">(šnek)</span>
		</p>
	</div>
{/if}

<!-- Konec souboru AboutMe.svelte -->