<!--
	Element zobrazující obrázek
	Soubor: Image.svelte
-->

<script lang="ts">
	import { PUBLIC_API_LINK, PUBLIC_START_URL, PUBLIC_IMAGE_URL } from '$env/static/public';

	let {
		imageLink,
		displayStyle = 'gallery-list',
		imageNumber = -1,
		maxImageNumber = -2
	} = $props<{
		imageLink: string;
		displayStyle: string;
		imageNumber?: number;
		maxImageNumber?: number;
	}>();
	
	/**
	 * Odkaz na obrázek
	 */
	const baseImageUrl: string = `${PUBLIC_START_URL}://${PUBLIC_API_LINK}/${PUBLIC_IMAGE_URL}/`;
</script>

{#if imageLink !== '' || imageLink !== undefined || imageLink !== null || displayStyle == 'none'}
	<!-- V závislosti na displayStyle se nastaví příslušná CSS třída-->
	<div
		class={displayStyle === 'gallery-list' && imageNumber > 0 && imageNumber <= maxImageNumber
			? 'tooltip'
			: ''}
		data-tip="{imageNumber}/{maxImageNumber}"
	>
		<img
			src={baseImageUrl + imageLink}
			alt="Obrázek"
			class={displayStyle}
			onerror={() => (displayStyle = 'none')}
		/>
	</div>
{/if}

<style>
	/**
	 * Zobrazení pro seznam obrázků
	 */
	.gallery-list {
		margin: 0.25rem;
		max-height: 100px;
		width: auto;
		border: 1px solid black;
	}

	/**
	 * Zobrazení v přiblíženém režimu
	 */
	.gallery-main {
		max-height: 700px;
		width:auto;
		object-fit: fill;
	}

	/**
	 * Schování, například v případě chyby
	 */
	.none.none {
		display: none;
	}
</style>

<!-- Konec souboru Image.svelte -->