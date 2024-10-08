class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      
    
      if (this.tipo === 'Mago') {
        ataque = 'usou magia';
      } else if (this.tipo === 'Guerreiro') {
        ataque = 'usou espada';
      } else if (this.tipo === 'Monge') {
        ataque = 'usou artes marciais';
      } else if (this.tipo === 'Ninja') {
        ataque = 'usou shuriken';
      } else {
        ataque = 'realizou um ataque desconhecido';
      }
  
      console.log(` O  ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  
  let personagens_1 = new Heroi("Merlin", 35, "Guerreiro");
  let personagens_2 = new Heroi("Charlote", 50, "Mago");
  let personagens_3 = new Heroi("Lory", 150, "Monge");
  let personagens_4 = new Heroi("Godô", 25, "Ninja");
  
  
  personagens_1.atacar(); 
  personagens_2.atacar(); 
  personagens_3.atacar(); 
  personagens_4.atacar(); 