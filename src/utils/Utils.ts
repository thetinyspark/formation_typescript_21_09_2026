import { EmployeeWithSalary } from "../types/EmployeeWithSalary";
import { IDCard } from "../types/IDCard";


export function getEmployeesWithSalaries():EmployeeWithSalary[]{
    const result:EmployeeWithSalary[] = [
        {
            employeeId: 1, 
            salary: 5000
        }, 
        {
            employeeId: 2, 
            salary: 10000
        }, 
        {
            employeeId: 3, 
            salary: 15000
        }, 
        {
            employeeId: 4, 
            salary: 20000
        }, 
    ];
    return result;
}

export function getIdCards():IDCard[]{
    const result:IDCard[] = [
        {
            age: 99, 
            birth: "08/05", 
            employeeId: 1, 
            lastName: "Pelissier", 
            name: "Pascal", 
            retired: false
        }, 
        {
            age: 54, 
            birth: "14/05", 
            employeeId: 2, 
            lastName: "Rémy", 
            name: "Sébastien", 
            retired: false
        }, 
        {
            age: 26, 
            birth: "20/05", 
            employeeId: 3, 
            lastName: "Szand", 
            name: "Michaël", 
            retired: false
        }, 
        {
            age: 35, 
            birth: "08/07", 
            employeeId: 4, 
            lastName: "Tubia", 
            name: "Perrine", 
            retired: false
        }, 

    ];
    return result;
}

export function getIdCardsWithSalaries():Map<IDCard,EmployeeWithSalary>{

    // on construit notre map
    const map:Map<IDCard,EmployeeWithSalary> = new Map<IDCard,EmployeeWithSalary>();

    // on récupère nos données brutes depuis les deux fonctions utilitaires
    const employees:EmployeeWithSalary[] = getEmployeesWithSalaries();
    const cards:IDCard[] = getIdCards();

    // on parcourt le tableau des IDCards
    for( let i:number = 0; i < cards.length; i++ ){
        // la carte en cours est celle-ci
        const currentCard = cards[i];

        // on recherche la donnée de type EmployeeWithSalary qui correspond à la carte en cours
        const corresp:EmployeeWithSalary = employees.find(
            (currentEmployee:EmployeeWithSalary)=>{
                // si l'employeeId de la carte et de l'employé en cours correspondent
                // alors la fonction renvoie true et 'const corresp' vaut notre employee
                return ( currentEmployee.employeeId === currentCard.employeeId );
            }
        ) || null;

        // on définit la valeur associée à la carte qui vaut 'corresp'
        map.set(currentCard, corresp);
    }

    // on retourne notre map
    return map;
}