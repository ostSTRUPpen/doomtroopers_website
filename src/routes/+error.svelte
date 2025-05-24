<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="ml-5 h-fit w-fit max-w-7xl content-between p-5 text-error">
	<h1 class="text-5xl">Došlo k chybě!</h1>
	<h1 class="text-4xl">{page.status}: {page.error?.message}</h1>
</div>
