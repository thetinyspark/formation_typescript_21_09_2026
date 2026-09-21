type IdCard = {
    lastname:string,
    name:string, 
    birth:string, 
    age:number, 
    retired:boolean
}; 


const nicolas:IdCard = {
    lastname: "Legrand", 
    name: "Nicolas", 
    birth: "23/07/1986", 
    age: 40, 
    retired: false
};

console.log(nicolas);