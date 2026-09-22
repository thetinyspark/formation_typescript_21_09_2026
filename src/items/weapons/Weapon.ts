import { Heroe } from "../../characters/Heroe";
import IConsumable from "../IConsumable";

export default abstract class Weapon implements IConsumable{


    constructor( 
        public name:string = "",
        public atk:number = 0,
        public resist:number = 0
    ){

    }

    public use(heroe:Heroe):void{
        this.resist = Math.round( this.resist * 0.8 );
    }

    public isUsable():boolean{
        return this.resist > 5;
    }
}