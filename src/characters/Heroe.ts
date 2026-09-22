import IConsumable from "../items/IConsumable";
import Inventory from "../utils/Inventory";

export class Heroe{

    private _reinforced:boolean = false;
    private _inventory:Inventory<IConsumable> = new Inventory<IConsumable>();

    constructor(
        public name:string = "",
        protected _hp:number = 0,
        protected _atk:number = 0, 
        protected _def:number = 0 
    ){
        this._reinforce = this._reinforce.bind(this);
    }

    protected _calcDmg(def:number, atk:number):number{
        // si la défense est supérieure à l'atk, alors on retourne
        if( def >= atk )
            return 0; 
        else
            return atk - def; // sinon on retourne la diff
    }

    // la fonction fléchée ou le bind font la même chose
    // à savoir, lier la fonction à un contexte d'éxécution précis
    // private _reinforce = ():void=>{
    private _reinforce ():void{
        console.log(this);
        this._reinforced = true;
    }

    public reinforce():void{
        this._reinforce();
        setTimeout( this._reinforce, 5000 );
    }

    public fight(opponent:Heroe):void{
        opponent.hp -= this._calcDmg(opponent.def, this._atk);
    }

    public useItemAt(pos:number):void{
        const item:IConsumable|null = this._inventory.getItemAt(pos); 
        if( item === null )
            return;

        if( item.isUsable() )
            item.use(this);

        if( item.isUsable() === false )
            this._inventory.removeItemAt(pos);
    }

    // accessors 

    public getInventory():Inventory<IConsumable>{
        return this._inventory;
    }

    //issers
    public isDead():boolean{
        if( this._hp <= 0 )
            return true;
        else
            return false;
    }

    // setters
    public set hp(value:number){
        this._hp = value;
        if( this._hp < 0 )
            this._hp = 0;
    }

    // getters
    public get hp(){
        return this._hp;
    }


    public set def(value:number){
        this._def = value;
    }

    public get def(){
        if( this._reinforced === true ){
            this._reinforced = false;
            return this._def * 2;
        }
        else{
            return this._def;
        }
    }


    public set atk(value:number){
        this._atk = value;
    }

    public get atk(){
        return this._atk;
    }

    
}