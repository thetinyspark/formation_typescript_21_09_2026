import { Heroe } from "./characters/Heroe";


const merlin:Heroe = new Heroe("Merlin", 1000, 10, 100);
const hercule:Heroe = new Heroe("Hercule", 800, 30, 100);
const batman:Heroe = new Heroe("Batman", 900, 40, 100);
const spiderman:Heroe = new Heroe("Peter Parker", 900, 35, 100);
const sonic:Heroe = new Heroe("Sonic", 300, 15, 100);

// Typescript est un langage structurellement typé, cela signifie que l'on peut
// utiliser la notation JSON pour créer un nouvel objet correspondant à un type 
// précis comme celui d'une classe customisée, du moment que l'on déclare 
// toutes les propriétés qui sont décrites sur la classe.

// En revanche cette façon de faire n'accorde pas aux objets les méthodes 
// et propriété privée inhérents à la classe.
const mulan:Heroe = {atk: 1000, def: 1000, hp: 5000, name: "Mulan"} as Heroe;

// Ici, mulan ne peut pas utiliser la méthode fight, même si l'objet est 
// structurellement identique à un Heroe et qu'il peut être considéré comme tel.
mulan.fight(sonic);

console.log(sonic.hp);