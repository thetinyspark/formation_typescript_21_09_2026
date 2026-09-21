export class Heroe{
    public name:string;
    public hp:number; 
    public atk:number; 


    public fight(opponent:Heroe):void{
        opponent.hp = opponent.hp - this.atk;
    }
}