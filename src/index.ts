// Array of strings

const tab:string[] = ["HTML", "CSS", "JS", "TS"];
tab[0] = "Sébastien";

const isFormateurSuperCool: boolean = true;
// console.log(isFormateurSuperCool);

// null && undefined

let toto = null;
let tata;
// console.log(toto, tata, tata === toto);


// number and strings 
let value1 = 40; 
let value2 = [40];


// cast string to number automatically
// console.log(value1 == value2);

// // with === there's no automatic cast
// console.log(value1 === value2);

// créer un objet notation JSON
const obj:any = {
    formation: {
        participants: [
            "Sébastien", 
            "Michaël",
            "Perrine", 
            "Pascal"
        ]
    }
};


obj.toto = "titi";

// le type void est le type de retour par défaut
// lorsqu'on choisit de ne retourner aucune valeur

// le fait de ne pas exprimer explicitement le type
// de retour s'appelle l'inférence de type (data type infering)
function sayHello(){
    console.log("Hello world");
}

function by2(num:number):number{
    return num * 2;
}

let prenom = "Michaël";

sayHello();