<template>
    <div class="citacao">
        <slot name="autor"/>
        <slot name="texto"/>
        <slot name="fonte"/>
    </div>
</template>

<script>
export default {
    props: {
        texto: String
    }
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
