<template>
	<div id="app">

		<span>
			<button @click="componente = 'Sobre'">Sobre</button>
			<button @click="componente = 'Citacoes'">Citacoes</button>
		</span>
		<keep-alive>
			<component :is="componente"/>
		</keep-alive>

		<!-- <Citacoes />
		<Sobre /> -->
	</div>
</template>

<script>
import Citacoes from './components/app-citacoes'
import Sobre from './components/app-sobre'

export default {
	components: { Citacoes, Sobre },
	data() {
		return {
			componente: 'Sobre'
		}
	}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 3px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(0, 0, 0, .5);
    }
</style>