import Injectable from "../decorators/Injectable";
import { AppConstants } from "../factory/AppConstants";
import Consumable from "./Consumable";

@Injectable({
    builder: (name:string, use:number)=>{
        return new Bread(name, use);
    }, 
    key: AppConstants.BREAD
})
export default class Bread extends Consumable{
    public croustille():void{}
}