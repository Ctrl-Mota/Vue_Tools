new Vue({
  el: '#app',
  data:{
    player:{
      life  : 100,
      max_attack: 10,
      min_attack: 5
    },
    monster: {
      life  : 100,
      max_attack: 15,
      min_attack: 8
    },
    logs: []
  },
  watch:{
  
  },
  computed:{
    
    player_life(){
      if(this.player.life <= 0){
        alert('Monstro venceu!') 
        this.initGame();
      }else if(this.player.life > 100){
        this.player.life = 100;
      }
      return `${this.player.life}%`; 
    },
    monster_life(){
      if(this.monster.life <= 0){
        alert('Jogador venceu!') 
        this.initGame();
      }
      return `${this.monster.life}%`; 
    }
  },
  methods:{
    
    initGame(){
      this.player.life = 100,
      this.monster.life = 100
    },
    hit(){
      this.monster.life -= this.random(this.player.max_attack, this.player.min_attack)
      this.player.life  -= this.random(this.monster.max_attack, this.monster.min_attack)
    },
    special_hit(){
      this.monster.life -= this.random(this.player.max_attack + 8, this.player.min_attack)
      this.player.life  -= this.random(this.monster.max_attack, this.monster.min_attack)
    },
    heal(){
        this.player.life += (this.random( 20, 8 ) - this.random(this.monster.max_attack, this.monster.min_attack)) 
    },
    random(max,min){
      return Math.floor(Math.random() * (max - min)) + min
    },
    createLog(){

    }
   
  }
})