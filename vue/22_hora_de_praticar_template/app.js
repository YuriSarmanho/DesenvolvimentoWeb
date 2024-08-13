new Vue({
    el: '#desafio',
    data: {
        nome: 'YuriSarmanho',
        idade: 23,
        linkImg:'https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_640.jpg',
        
    },
    methods: {
        mutiplicarIdade() {
            MinhaIdade = this.idade
            return MinhaIdade * 3
        },
        randomNumber() {
            return Math.random()
        }
    }

})