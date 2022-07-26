<script>
    export let title;
</script>

<style>
    .wrapper {
        display: flex;
        justify-content: space-around;
    }

    .content {
        width: 750px;
    }
</style>

<svelte:head>
    <title>{ title }</title>
</svelte:head>

<div class='wrapper'>
    <div class='content'>
        <a href="..">Home</a>
        <h1>{ title }</h1>
        <hr />

        <slot></slot>
    </div>
</div>