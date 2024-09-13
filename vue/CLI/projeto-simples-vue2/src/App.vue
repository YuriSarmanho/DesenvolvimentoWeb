<template>
  <div id="app">
    {{ titulo }}
    <button @click="titulo += '#'">Alterar</button>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        titulo: "Esse é o título::"
      }
    }
  };
</script>

<style>
  #app { 
    background-color: chocolate;
  }
</style>
