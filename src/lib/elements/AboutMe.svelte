<script lang="ts">
    export let displayAboutMe: boolean = true
</script>

{#if displayAboutMe}
<div class="">
	<p>
		Správce webu (a člen týmu) <a
			href="https://www.linkedin.com/in/vojt%C4%9Bch-vold%C5%99ich-955577277/"
			rel="author"
			target="_blank"
			class="link-hover link-primary">Vojtěch Voldřich</a
		> <span class="text-secondary">(šnek)</span>
	</p>
</div>
{/if}