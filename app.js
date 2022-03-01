class Pokemon{
    constructor(name, type, attack){
        this.name = name
        this.type = type 
        this.attack = attack
    }
    attack1 = () =>{
        console.log(`${this.name} used ${this.attack}.`)
    }
}

const Pikachu = new Pokemon("Pikachu", "Electric", "Thunderbolt");
const charmander = new Pokemon("Charmander", "Fire", "Fire Fang");
Pikachu.attack1();
charmander.attack1();