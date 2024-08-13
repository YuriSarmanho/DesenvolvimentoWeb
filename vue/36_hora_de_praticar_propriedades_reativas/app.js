new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    watch: {
        valor() {
            setTimeout(() => {
                this.valor = 0
            },5000)
        }
    }
});