import { Barbarian } from "./characters/Barbarian";
import { Heroe } from "./characters/Heroe";
import { Mage } from "./characters/Mage";
import Factory from "./factory/Factory";


const PRODUCTION:boolean = false;
// une factory permet de stocker des fonctions créatrices d'objets
// ces fonctions sont associées à une clé, et en demandant à la factory
// de créer des objets en fonction d'une certaine clé, on fait en sorte 
// d'éxécuter la fonction en question.
// l'intérêt d'une factory est d'avoir une classe qui nous aide à créer des objets
// en fonction d'une configuration qui peut être changeante en fonction du contexte
const myFactory:Factory = new Factory();

// if( PRODUCTION){
//     myFactory.register(
//         "SpecialWarrior",
//         (name:string, hp:number, atk:number, def:number, mana:number ) =>{
//             return new Mage(name,hp,atk,def,mana);
//         }
//     );
// }
// else{
    myFactory.register(
        "SpecialWarrior",
        (name:string, hp:number, atk:number, def:number, stamina:number ) =>{
            return new Barbarian(name,hp,atk,def,stamina);
        }
    );
// }

const merlin:Heroe = myFactory.create<Heroe>("SpecialWarrior", "Merlin",1000,10,100,1000) as Heroe;
const gandalf:Heroe = myFactory.create<Heroe>("SpecialWarrior", "Gandalf",1,1,1,1) as Heroe;
