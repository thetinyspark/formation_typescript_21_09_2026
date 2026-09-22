import { Barbarian } from "./characters/Barbarian";
import { Heroe } from "./characters/Heroe";
import { Mage } from "./characters/Mage";
import Inventory from "./utils/Inventory";
import MysticInventory from "./utils/MysticInventory";
import Sword from "./weapons/Sword";
import Weapon from "./weapons/Weapon";


const merlin:Mage = new Mage("Merlin", 1000, 10, 100, 1000);
const conan:Barbarian = new Barbarian("Conan", 800, 30, 100, 5000);
const batman:Heroe = new Heroe("Batman", 900, 40, 100);
const spiderman:Heroe = new Heroe("Peter Parker", 900, 35, 100);
const sonic:Heroe = new Heroe("Sonic", 300, 15000, 20);

const inventory:MysticInventory = new MysticInventory();
const sword:Sword = new Sword();
sword.resist = 100;
sword.atk = 1000; 
sword.name = "Excalibur"; 


inventory.addItem(sword);
console.log(inventory.getItemAt<Weapon>(0)?.atk);
console.log(inventory.getItemAt<Weapon>(0)?.name);
console.log(inventory.getItemAt<Weapon>(0)?.resist);


// conan.critRate = 50;
// conan.fight(merlin); 
// console.log(merlin.hp);
// console.log(merlin.isDead());

