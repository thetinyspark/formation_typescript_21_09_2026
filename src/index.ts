import { Heroe } from "./characters/Heroe";


const merlin:Heroe = new Heroe();
const hercule:Heroe = new Heroe();
const batman:Heroe = new Heroe();
const spiderman:Heroe = new Heroe();
const sonic:Heroe = new Heroe();

merlin.atk = 10;
merlin.hp = 1000; 
merlin.name = "Merlin";

hercule.atk = 30; 
hercule.hp = 800; 
hercule.name = "Hercule";

batman.atk = 40; 
batman.hp = 800; 
batman.name = "Bruce Wayne";

spiderman.atk = 35; 
spiderman.hp = 900; 
spiderman.name = "Peter Parker";

sonic.atk = 15; 
sonic.hp = 300; 
sonic.name = "Sonic";


merlin.fight(sonic);

console.log(sonic.hp);