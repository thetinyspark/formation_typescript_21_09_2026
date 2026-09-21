enum Cardinal{
    NORTH = "Chnord", 
    SOUTH = "Ici c'est Toulouse", 
    EAST = "On aime le pain d'épice et le concordat", 
    WEST = "Vive la bretagne"
}; 

// const direction1:Cardinal = Cardinal.NORTH;
// const direction2:Cardinal = Cardinal.SOUTH;
// const direction3:Cardinal = Cardinal.EAST;
// const direction4:Cardinal = Cardinal.WEST;


function sayHelloToMyFellowFrenchFrom(direction:Cardinal){
    let msg:string = "";
    switch(direction){
        case Cardinal.NORTH: msg = "Bonjour du nord"; break;
        case Cardinal.SOUTH: msg = "Bonjour du sud"; break;
        case Cardinal.EAST: msg = "Bonjour de l'est"; break;
        case Cardinal.WEST: msg = "Bonjour de l'ouest"; break;
        default: msg = "bonjour";
    }
    console.log(msg);
}

// sayHelloToMyFellowFrenchFrom(Cardinal.NORTH);



const employeesWithSalaries:Map<string,Cardinal> = new Map<string,Cardinal>();

employeesWithSalaries.set("Sébastien",Cardinal.NORTH);
employeesWithSalaries.set("Michaël",Cardinal.EAST);
employeesWithSalaries.set("Perrine",Cardinal.SOUTH);
employeesWithSalaries.set("Pascal",Cardinal.SOUTH);

console.log( employeesWithSalaries.get("Michaël") );