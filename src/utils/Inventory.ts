export default class Inventory<T>{
    private _items:T[] = [];

    public addItem(item:T):void{
        this._items.push(item);
    }

    public getItemAt(pos:number):T|null{
        if( pos >=  this._items.length)
            return null;
        
        return this._items[pos] as T;
    }

    public removeItemAt(pos:number):void{
        this._items.splice(pos,1);
    }

    public getItems():T[]{
        return this._items;
    }
}