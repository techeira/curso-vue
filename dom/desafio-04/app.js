new Vue({
	el: '#desafio',
	data: {
		efeito: "",
		c1: "c1",
		ativarC2: true,
		classeUsuario1: "c3",
		classeUsuario2: "c4",
		textC5: "true",
		estiloUsuario1: "cyan",
		progresso: '0%'
	},
	computed: {
		aplicarC5(){
			return this.textC5 == "true" ? true : false;
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{
				this.efeito = this.efeito=="destaque" ? "encolher" : "destaque"
			}, 2000)
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(()=>{
				valor+=5
				this.progresso = `${valor}%`
				if(valor>=100){
					clearInterval(temporizador)
				}
			}, 500)
		}
	}
})
