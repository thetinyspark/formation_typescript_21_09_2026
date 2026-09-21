import { Heroe } from "./Heroe";

export class Barbarian extends Heroe{

    protected _stamina:number = 0;
    protected _staminaMax:number = 0;
    protected _critRate:number = 0;

    constructor(
        name:string = "",
        hp:number = 0,
        atk:number = 0, 
        def:number = 0 , 
        stamina:number = 0
    ){
        super(name, hp, atk, def);
        this._stamina = stamina;
        this._staminaMax = stamina;
    }

    protected _calcDmg(def: number, atk: number): number {
        // si vous voulez réutiliser la fonction de base définie 
        // sur la classe parent, alors vous pouvez le mot clé super
        const rand = Math.round( Math.random() * 100 );
        const staminaCost = Math.round( this._staminaMax  * 0.5 );
        const basicDmg = super._calcDmg(def,atk);

        console.log("rand:"+rand, "critRate: "+this.critRate);
        if( this._stamina < staminaCost )
            return basicDmg;

        if( rand > this.critRate )
            return basicDmg;

        this.stamina -= staminaCost;
        return super._calcDmg(def, atk + staminaCost);
    }

    public get stamina():number{
        return this._stamina;
    }

    public set stamina(value:number){
        this._stamina = value;
        if( this._stamina < 0 )
            this._stamina = 0;
    }

    public set critRate(value:number){
        this._critRate = value > 100 ? 100 : (value < 0 ) ? 0 : value;
    }

    public get critRate():number{
        return this._critRate;
    }
}