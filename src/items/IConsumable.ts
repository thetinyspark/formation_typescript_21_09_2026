import { Heroe } from "../characters/Heroe";

export default interface IConsumable{
    use(heroe:Heroe):void;
    isUsable():boolean;
}