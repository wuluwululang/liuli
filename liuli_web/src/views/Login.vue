<template>

</template>

<script>
export default {};
</script>

<style>
main.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: calc(100vh);
    padding: 1rem 0;
}

article {
    padding: 0;
    overflow: hidden;
}

article div {
    padding: 1rem;
}

article.grid div.login-cover {

}

@media (min-width: 992px) {
    article.grid div.login-cover {
        display: block;
    }
}
</style>
