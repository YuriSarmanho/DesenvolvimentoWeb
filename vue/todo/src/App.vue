<template>
	<div id="app">
		<todoProgressBar/>
		<todoInputTesk/>
		<todoTeskList/>
	</div>
</template>

<script>
import todoProgressBar from './components/progressBar/todoProgressBar.vue';
import todoInputTesk from './components/inputTesk/todoInputTesk.vue'
import todoTeskList from './components/teskContainer/todoTeskList.vue';

export default {
	components: {todoProgressBar, todoInputTesk, todoTeskList}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
