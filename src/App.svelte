<script>
    export let name;
    export let fields;
</script>

<main>
    <h1>Hello {name}!</h1>
    <div id="field">
        {#each fields as field, i}
            <input id={i}, type="text" maxlength="1">
        {/each}
    </div>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
    #field {
        width: 100%;
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(10, minmax(2em, min-content));
        grid-template-rows: repeat(10, 1fr);
    }

    #field input {
        margin: 0;
        width: 100%;
    }

    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>