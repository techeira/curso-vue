new Vue({
	el: "#app",
	data: {
		gameRunning: false,
		player: {
			minAtk: 5,
			maxAtk: 10,
			life: 100,
			minHeal: 6,
			maxHeal: 11
		},
		monster: {
			minAtk: 7,
			maxAtk: 12,
			life: 100,
		},
		logs: []
	},
	watch: {
		'player.life'(newVal, oldVal){
			if(newVal == 0){
				this.stopGame()
			} else if(newVal < 0){
				this.player.life = 0
			}
		},
		'monster.life'(newVal){
			console.log("a");
			if(newVal == 0){
				this.stopGame()
			} else if(newVal < 0){
				this.monster.life = 0
			}
		}
	},
	methods: {
		startGame(){
			this.gameRunning = true
			this.player.life = 100
			this.monster.life = 100
			this.logs = []
		},
		stopGame(){
			this.gameRunning = false
		},
		playerAtack(){
			let val = this.getRandomIntInclusive(this.player.minAtk, this.player.maxAtk)
			this.monster.life -= val
			this.logs.unshift({
				acao: 'playerAtack',
				texto: 'Jogador atingiu Monstro com '+ val
			})
			this.monsterAtack()
		},
		playerSpecialAtack(){
			let val = this.getRandomIntInclusive(this.player.minAtk*2, this.player.maxAtk*2)
			this.monster.life -= val
			this.logs.unshift({
				acao: 'playerAtack',
				texto: 'Jogador atingiu Monstro com '+ val
			})
			this.monsterAtack()
		},
		playerHeal(){
			let val = this.getRandomIntInclusive(this.player.minHeal, this.player.maxHeal)
			this.player.life += val
			this.logs.unshift({
				acao: 'playerHeal',
				texto: 'Jogador curou '+ val
			})
			this.monsterAtack()
		},
		monsterAtack(){
			let val = this.getRandomIntInclusive(this.monster.minAtk, this.monster.maxAtk)
			this.player.life -= val
			this.logs.unshift({
				acao: 'monsterAtack',
				texto: 'Monstro atingiu Jogador com '+ val
			})
		},
		getRandomIntInclusive(min, max){
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	}
})