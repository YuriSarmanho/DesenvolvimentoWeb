<template>
  <div class="usuario-detalhe">
    <h2 v-if="!usuario.id">Usuário não selecionado!</h2>
    <div v-else>
      <h6>ID: {{ usuario.id }}</h6>
      <h6>Nome: {{ usuario.nome }}</h6>
      <h6>Idade: {{ usuario.idade }}</h6>
    </div>
  </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  data() {
    return {
      usuario: {
        id:  null,
        nome: null,
        idade: null
      },
    };
  },
  created() {
    barramento.$on("userSelected", (userName, userId, userAge) => {
      this.usuario.id = userId;
      this.usuario.nome = userName;
      this.usuario.idade = userAge
    });
  },
};
</script>

<style>
.usuario-detalhe {
  flex: 1;
  border: 1px solid #ccc;
}
</style>
