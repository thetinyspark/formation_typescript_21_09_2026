import { Heroe } from "../characters/Heroe";
import IConsumable from "./IConsumable";

export default abstract class Consumable implements IConsumable{

    constructor( 
        public name:string = "",
        private _numUses:number = 0
    ){}

    public use(heroe:Heroe):void{
        this._numUses--;
        if( this._numUses < 0 )
            this._numUses = 0;
    }

    public isUsable():boolean{
        return this._numUses > 0;
    }
}