import { Heroe } from "./Heroe";

export class Mage extends Heroe{

    protected _mana:number = 0;
    protected _manaMax:number = 0;

    constructor(
        name:string = "",
        hp:number = 0,
        atk:number = 0, 
        def:number = 0 , 
        mana:number = 0
        
    ){
        super(name, hp, atk, def);
        this._mana = mana;
        this._manaMax = mana;
    }

    protected _calcDmg(def: number, atk: number): number {
        // si vous voulez réutiliser la fonction de base définie 
        // sur la classe parent, alors vous pouvez le mot clé super

        const manaCost = Math.round( this._manaMax  * 0.1 );
        const basicDmg = super._calcDmg(def,atk);
        if( this._mana < manaCost )
            return basicDmg;

        this.mana -= manaCost;
        return super._calcDmg(def, atk + manaCost);
    }

    public get mana():number{
        return this._mana;
    }

    public set mana(value:number){
        this._mana = value;
        if( this._mana < 0 )
            this._mana = 0;
    }
}