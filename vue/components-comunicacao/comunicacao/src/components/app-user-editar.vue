<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>
    <p>
      Idade do Usuario: <strong>{{ idadeLocal }}</strong> <br>
      <button @click="alterarIdade">Alterar Idade</button>
    </p>
  </div>
</template>

<script>
import barramento from '@/barramentos'

export default {
    props: ['idade'],
    data() {
        return {
            idadeLocal: this.idade
        }
    },
    methods: {
        alterarIdade() {
            this.idadeLocal += 1
            barramento.$emit('idadeMudou', this.idadeLocal)
        }
    }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #0044ff;
  color: #fff;
}
</style>
