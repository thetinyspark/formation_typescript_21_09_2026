import { Heroe } from "./characters/Heroe";


const merlin:Heroe = new Heroe("Merlin", 1000, 10, 100);
const hercule:Heroe = new Heroe("Hercule", 800, 30, 100);
const batman:Heroe = new Heroe("Batman", 900, 40, 100);
const spiderman:Heroe = new Heroe("Peter Parker", 900, 35, 100);
const sonic:Heroe = new Heroe("Sonic", 300, 15000, 20);

sonic.reinforce();
spiderman.fight(sonic); 
console.log(sonic.getHP());
