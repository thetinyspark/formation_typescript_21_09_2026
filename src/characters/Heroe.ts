export class Heroe{

    private _reinforced:boolean = false;

    constructor(
        public name:string = "",
        protected _hp:number = 0,
        protected _atk:number = 0, 
        protected _def:number = 0 
    ){}

    protected _calcDmg(def:number, atk:number):number{
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
        opponent.hp -= this._calcDmg(opponent.def, this._atk);
    }



    // accessors 

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