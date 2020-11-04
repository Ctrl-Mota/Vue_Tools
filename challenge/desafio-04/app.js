new Vue({
	el: '#desafio',
	efeito: '#efeito',
	data: {
		efects: true,
		classEfeito: '',
		classesCss: ['cor','tamanhoTxt'],
		width: '0',

	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{
				
				if(this.efects){
					this.classEfeito = 'destaque'
				}else{
					this.classEfeito = "encolher"
				}
				this.efects = !this.efects
				
			}, 2000)
		},
		iniciarProgresso() {
			let valor = 0
			const temp = setInterval(()=>{
				valor += 0.6
				this.width = `${valor}%`;
				if(valor >= 100) clearInterval(temp)
			}, 15)
		}
	}
})
