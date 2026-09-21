export class Heroe{

    private _reinforced:boolean = false;

    constructor(
        private _name:string = "",
        private _hp:number = 0,
        private _atk:number = 0, 
        private _def:number = 0 
    ){}

    private _calcDmg(def:number, atk:number):number{
        // si la défense est supérieure à l'atk, alors on retourne
        if( def >= atk )
            return 0; 
        else
            return atk - def; // sinon on retourne la diff
    }

    public reinforce():void{
        this._reinforced = true;
    }

    public fight(opponent:Heroe):void{
        opponent.setHP( opponent.getHP() - this._calcDmg(opponent.getDef(), this._atk) );
    }

    public setHP(value:number){
        this._hp = value;
    }

    public getHP(){
        return this._hp;
    }

    public getDef(){
        if( this._reinforced === true ){
            this._reinforced = false;
            return this._def * 2;
        }
        else{
            return this._def;
        }
    }

    public getAtk(){
        return this._atk;
    }

    public getName(){
        return this._name;
    }

    public isDead():boolean{
        if( this._hp <= 0 )
            return true;
        else
            return false;
    }
}