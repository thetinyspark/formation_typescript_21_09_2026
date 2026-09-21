export class Heroe{

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


    public fight(opponent:Heroe):void{
        opponent._hp -= this._calcDmg(opponent._def, this._atk);
    }

    public getHP(){
        return this._hp;
    }

    public isDead():boolean{
        if( this._hp <= 0 )
            return true;
        else
            return false;
    }
}