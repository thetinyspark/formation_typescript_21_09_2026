import { Heroe } from "./Heroe";

export class Mage extends Heroe{
    constructor(
        name:string = "",
        hp:number = 0,
        atk:number = 0, 
        def:number = 0 , 
        protected _mana:number = 0
    ){
        super(name, hp, atk, def);
    }

    protected _calcDmg(def: number, atk: number): number {
        // si vous voulez réutiliser la fonction de base définie 
        // sur la classe parent, alors vous pouvez le mot clé super
        const basicDmg = super._calcDmg(def,atk);
        return basicDmg;
    }

    public get mana():number{
        return this._mana;
    }

    public set mana(value:number){
        this._mana = value;
    }
}