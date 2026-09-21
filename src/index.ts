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

// const keys = map.keys();
// console.log(keys);
