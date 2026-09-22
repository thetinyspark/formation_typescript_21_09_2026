import { Heroe } from "../characters/Heroe";
import { Mage } from "../characters/Mage";
import Consumable from "./Consumable";

export default class Potion extends Consumable{
    public use(heroe:Heroe):void{
        super.use(heroe); 
        const mage = heroe as Mage;
        if( mage.mana ){
            mage.mana += 100;
        }
    }
}