import factory from "../factory/Factory";
import { Constructable } from "../types/Constructable";


// notre décorator ici, est un décorateur de classe
// il retourne une fonction qui devra s'éxécuter 
// sur une classe et son constructeur

// le décorator injectable nous permet de décrire 
// la fonction de création des objets du type <ma_classe>
// et de le register directement auprès de la factory

type InjectConfig = {key:string, builder:Function};
export default function Injectable<T>(config:InjectConfig){
    return function (constructor: Constructable<T>){
        factory.register(config.key, config.builder);
        console.log(constructor, config);
    }
}