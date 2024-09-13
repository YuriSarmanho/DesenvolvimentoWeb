<template>
    <div class="contadores">
        <app-contador v-for="c in 5" :key="c"/>
    </div>
</template>

<script>
import AppContador from './app-contador.vue'
    export default {
        components: {AppContador}
    }
</script>

<style scoped>

</style>