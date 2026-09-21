export class Heroe{
    // public name:string = "";
    // public hp:number = 0; 
    // public atk:number = 0; 
    // public def:number = 0; 

    // constructor(
    //     p_name:string = "", 
    //     p_hp:number = 0, 
    //     p_atk:number = 0, 
    //     p_def:number = 0
    // ){
    //     this.name = p_name;
    //     this.hp = p_hp;
    //     this.atk = p_atk;
    //     this.def = p_def;
    // }

    // écriture raccourcie / sucre syntaxique
    constructor(
        public name:string = "",
        public hp:number = 0,
        public atk:number = 0, 
        public def:number = 0 
    ){}


    public fight(opponent:Heroe):void{

        // si la défense est supérieure à l'atk, alors il ne se passe rien
        if( opponent.def > this.atk )
            return;

        // sinon on soustrait aux hp de l'ennemi la différence entre sa def et notre atk
        opponent.hp -= (opponent.def - this.atk);
    }
}