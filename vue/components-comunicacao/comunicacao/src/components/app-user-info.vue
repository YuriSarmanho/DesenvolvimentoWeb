<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuario: <strong>{{ nome }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idadeLocal }}</strong></p>
        <button @click="reiniciarNome">Reinicia nome</button>
    </div>
</template>

<script>
import barramento from '@/barramentos';

export default {
    props: {
        nome: {
            type:String, 
            default: 'Anonimo'
        },
        idade:{
            type:Number
        }
    },
    data() {
        return {
            idadeLocal: this.idade
        }
    },
    methods: {
        reiniciarNome() {
            this.$emit('nomeMudou', "Pedro")
        }
    },
    created() {
        barramento.$on('idadeMudou', idade => {
            this.idadeLocal = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ff9100;
        color: #fff;
    }
</style>
