import { Barbarian } from "../characters/Barbarian";
import { Heroe } from "../characters/Heroe";
import { Mage } from "../characters/Mage";
import Consumable from "./Consumable";

export default class Water extends Consumable{
    public use(heroe:Heroe):void{
        super.use(heroe); 
        const barbarian = heroe as Barbarian;
        if( barbarian.stamina ){
            barbarian.stamina += 100;
        }
    }
}