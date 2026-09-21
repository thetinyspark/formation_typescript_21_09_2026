import { Heroe } from "./characters/Heroe";
import { Mage } from "./characters/Mage";


const merlin:Mage = new Mage("Merlin", 1000, 10, 100, 1000);
const hercule:Heroe = new Heroe("Hercule", 800, 30, 100);
const batman:Heroe = new Heroe("Batman", 900, 40, 100);
const spiderman:Heroe = new Heroe("Peter Parker", 900, 35, 100);
const sonic:Heroe = new Heroe("Sonic", 300, 15000, 20);

console.log(merlin.mana);


