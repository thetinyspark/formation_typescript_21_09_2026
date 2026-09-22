import { Barbarian } from "./characters/Barbarian";
import { AppConstants } from "./factory/AppConstants";
import factory from "./factory/Factory";
import Bread from "./items/Bread";
import Potion from "./items/Potion";
import Sword from "./items/weapons/Sword";

new Bread();

factory.register(
    AppConstants.WARRIOR,
    (name:string, hp:number, atk:number, def:number, stamina:number ) =>{
        return new Barbarian(name,hp,atk,def,stamina);
    }
);

// factory.register(
//     AppConstants.BREAD,
//     (name:string, uses:number ) =>{
//         return new Bread(name,uses);
//     }
// );

factory.register(
    AppConstants.SWORD,
    (name:string, atk:number, resist:number ) =>{
        return new Sword(name, atk, resist);
    }
);

factory.register(
    AppConstants.POTION,
    (name:string, uses:number ) =>{
        return new Potion(name, uses);
    }
);

const bread = factory.create<Bread>(AppConstants.BREAD, "pain croustillant", 1) as Bread;
bread.use();
console.log(bread.isUsable());




