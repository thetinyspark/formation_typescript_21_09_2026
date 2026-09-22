import { AppConstants } from "../factory/AppConstants";

const ARENA_DATA = {
    characters: [
        {
            key: AppConstants.WARRIOR, 
            params: ["Conan", 1000, 100, 80, 100], 
            items: [
                {
                    key:AppConstants.WATER,
                    params: ["Eau pétillante", 2]
                }
            ]
        }, 
        {
            key: AppConstants.MAGE, 
            params: ["Merlin", 1, 1, 1, 1], 
            items: [
                {
                    key:AppConstants.POTION,
                    params: ["Potion de mana", 1]
                }
            ]
        }
    ]
};

export default ARENA_DATA;