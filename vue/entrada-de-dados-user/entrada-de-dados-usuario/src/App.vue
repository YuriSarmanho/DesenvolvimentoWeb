<template>
	<div id="app">
		<h1>Registrar Reclamação</h1>
		<div class="conteudo">
			<form class="painel">
				<div class="cabecalho">Formulário</div>
				<Rotulo nome="E-mail">
					<input type="text" v-model="usuario.email">
				</Rotulo>
				<Rotulo nome="Senha" >
					<input type="password" v-model="usuario.senha">
				</Rotulo>
				<Rotulo nome="Idade">
					<input type="number" v-model="usuario.idade">
				</Rotulo>
				<Rotulo nome="Mensagem">
					<textarea name="" cols="30" rows="5" v-model="msg"></textarea>
				</Rotulo>
				<Rotulo nome="Características do Problema">
					<span class="mr-4"><input type="checkbox" v-model="caracteristicas"
						value="reproduzivel"> Reproduzível</span>
					<span><input type="checkbox" v-model="caracteristicas"
						value="intermitente"> Intermitente</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span class="mr-4"><input type="radio" value="web" v-model="produto"> Web</span>
					<span class="mr-4"><input type="radio" value="mobile" v-model="produto"> Mobile</span>
					<span><input type="radio" value="outro" v-model="produto"> Outro</span>
				</Rotulo>
				<Rotulo nome="Prioridade" v-model="  fff">
					<select name="" id="">
						<option v-for="prioridade in prioridades" 
						:value="prioridade.codigo"
						:key="prioridade.codigo"
						:selected="prioridade.codigo === 3"
						> {{ prioridade.nome }}</option>
					</select>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<Escolha />
				</Rotulo>
				<hr>
				<button>Enviar</button>
			</form>
			<div class="painel">
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="E-mail">
					<span>{{ usuario.email }}</span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span>{{ usuario.senha }} </span>
				</Rotulo>
				<Rotulo nome="Idade">
					<span>{{ usuario.idade }}</span>
				</Rotulo>
				<RotuBaixalo nome="Mensagem">
					<span style="white-space: pre;"> {{ msg }} </span>
				</RotuBaixalo>	
				<Rotulo nome="Marque as Opções">
					<span>
						<ul>
							<li v-for="c in caracteristicas" :key="c">{{ c }}</li>
						</ul>
					</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span>{{ produto }}</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<span>???</span>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<span>???</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/user-rotulo.vue'
import Escolha from './components/user-escolha.vue'

export default {
	name: 'app',
	components: { Rotulo, Escolha },
	data() {
		return {
			msg: '',
			usuario: {
				senha: '',
				email: '',
				idade: 25
			},
			caracteristicas:[],
			produto:'web',
			prioridades: [
				{codigo:1, nome:'Baixa'},
				{codigo:2, nome:'Moderada'},
				{codigo:3, nome:'Alta'}
			]
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
