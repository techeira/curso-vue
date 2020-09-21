new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('botão clicado')
        },
        atualizarValor(e){
            this.valor = event.target.value
        }
    }
})