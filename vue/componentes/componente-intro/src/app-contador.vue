<template>
  <div class="Contador">
    <span>{{ contador }}</span>
    <button @click="adicionar">ADD</button>
    <button @click="subtrair">SUB</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        adicionar() {
            this.contador++
        },
        subtrair() {
            this.contador--
        }
    }
}
</script>

<style>

</style>