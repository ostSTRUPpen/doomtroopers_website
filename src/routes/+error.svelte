<script lang="ts">
    import { page } from '$app/stores';
</script>
Aj <!-- TODO udělat lepší design-->
<h1>{$page.status}: {$page.error?.message}</h1>