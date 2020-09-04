new Vue({
    el: "#desafio",
    data: {
        nome: "BRUNO HENRIQUE TECHEIRA",
        idade: 23,
        linkImg: "https://www.rightstufanime.com/images/productImages/4573347242830_figure-kiss-shot-acerola-orion-heart-under-blade-kizumonogatari-alta.jpg"
    },
    methods: {
        idadeMultiplicada(multiplicador){
            return this.idade * multiplicador
        },
        gerarRandom(){
            return Math.random()
        }
    }
})