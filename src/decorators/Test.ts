import { Constructable } from "../types/Constructable";

// notre décorator ici, est un décorateur de classe
// il retourne une fonction qui devra s'éxécuter 
// sur une classe et son constructeur
export default function Test<T>(config:any){
    return function (constructor: Constructable<T>){
        console.log(constructor, config);
    }
}