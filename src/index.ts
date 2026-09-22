import { Barbarian } from "./characters/Barbarian";
import { Heroe } from "./characters/Heroe";
import { Mage } from "./characters/Mage";
import Inventory from "./utils/Inventory";
import MysticInventory from "./utils/MysticInventory";
import Sword from "./items/weapons/Sword";
import Weapon from "./items/weapons/Weapon";
import Bread from "./items/Bread";


const merlin:Mage = new Mage("Merlin", 1000, 10, 100, 1000);
const conan:Barbarian = new Barbarian("Conan", 800, 30, 100, 5000);
const batman:Heroe = new Heroe("Batman", 900, 40, 100);
const spiderman:Heroe = new Heroe("Peter Parker", 900, 35, 100);
const sonic:Heroe = new Heroe("Sonic", 300, 15000, 20);

const bread:Bread = new Bread("bread",1);

console.log(bread.isUsable());
bread.use();
console.log(bread.isUsable());
