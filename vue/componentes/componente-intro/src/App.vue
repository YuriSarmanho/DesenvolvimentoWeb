<template>
  <div id="app">
    <h1>contador</h1>
    <app-contadores/>
  </div>
</template>

<script>
import AppContadores from './app-contadores.vue'
export default {
  components: { AppContadores },
  data() {
    return {
      contador: 0
    }
  },

}
</script>

<style>
</style>
