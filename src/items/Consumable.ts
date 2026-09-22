export default abstract class Consumable{

    constructor( 
        public name:string = "",
        private _numUses:number = 0
    ){}

    public use():void{
        this._numUses--;
        if( this._numUses < 0 )
            this._numUses = 0;
    }

    public isUsable():boolean{
        return this._numUses > 0;
    }
}