export default abstract class Weapon{
    public name:string = "";
    public atk:number = 0;
    public resist:number = 0;

    public use():void{
        this.resist = Math.round( this.resist * 0.8 );
    }

    public isUsable():boolean{
        return this.resist > 5;
    }
}