type IdCard = {
    lastname:string,
    name:string, 
    birth:string, 
    age:number, 
    retired?:boolean
}; 

type City = {
    name:string, 
    zipcode:number, 
    population:number
}; 

function buildReversedMap( from:Map<IdCard,City>):Map<City, IdCard>{
    const entries = Array.from(from.entries());
    const result:Map<City,IdCard> = new Map<City,IdCard>();

    entries.forEach( 
        (value:[IdCard, City])=>{
            result.set(value[1], value[0]);
        }
    );
    return result;
}

const map:Map<IdCard,City> = new Map<IdCard,City>();
const me:IdCard = {
    lastname: "Legrand", 
    name: "Nicolas", 
    birth: "23/07/1986", 
    age: 40
}; 

const home = {
    name:"La Loupe", 
    zipcode: 28240, 
    population: 3000
};

map.set(me,home); 

console.log(buildReversedMap(map).get(home));
