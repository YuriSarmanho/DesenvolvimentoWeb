<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <button @click="alterarNome">Alterar Nome</button> <br/>
        <strong>{{ idade }}</strong>
        <hr>
        <div class="componentes">
            <app-usuario-info 
            :nome="nome" 
            :idade="idade"
            @nomeMudou="nome = $event"
            />
            <app-usuario-editar 
            :idade="idade"
            />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './app-user-info'
import AppUsuarioEditar from './app-user-editar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            idade: 21,
            nome: "Pedro"
        }
    },
    methods: {
        alterarNome() {
            this.nome = 'Ana'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
