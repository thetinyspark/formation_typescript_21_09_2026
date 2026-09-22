import { Barbarian } from "./characters/Barbarian";
import { Heroe } from "./characters/Heroe";
import { Mage } from "./characters/Mage";
import ARENA_DATA from "./config/Arena";
import { AppConstants } from "./factory/AppConstants";
import factory from "./factory/Factory";
import Bread from "./items/Bread";
import IConsumable from "./items/IConsumable";
import Potion from "./items/Potion";
import Water from "./items/Water";
import Sword from "./items/weapons/Sword";


factory.register(
    AppConstants.WARRIOR,
    (name:string, hp:number, atk:number, def:number, stamina:number ) =>{
        return new Barbarian(name,hp,atk,def,stamina);
    }
);

factory.register(
    AppConstants.MAGE,
    (name:string, hp:number, atk:number, def:number, mana:number ) =>{
        return new Mage(name,hp,atk,def,mana);
    }
);

factory.register(
    AppConstants.BREAD,
    (name:string, uses:number ) =>{
        return new Bread(name,uses);
    }
);

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

factory.register(
    AppConstants.WATER,
    (name:string, uses:number ) =>{
        return new Water(name, uses);
    }
);




const data = ARENA_DATA;
const characters:Heroe[] = [];

data.characters.forEach( 
    (characterInfo: any)=>{
        const character:Heroe = factory.create<Heroe>(characterInfo.key, ...characterInfo.params) as Heroe;
        characterInfo.items.forEach( 
            (itemInfo:any)=>{
                character.getInventory().addItem( 
                    factory.create<IConsumable>(itemInfo.key, ... itemInfo.params ) as IConsumable
                );
            }
        )
        characters.push(character);
    }
);


while( characters.length > 1 ){
    const character1 = characters[0]; 
    const character2 = characters[1]; 

    character1.fight(character2);
    character2.fight(character1);

    if( character1.isDead())
        characters.splice( characters.indexOf(character1),1);

    if( character2.isDead())
        characters.splice( characters.indexOf(character2),1);
}

console.log(`${characters[0].name} is the winner`);



