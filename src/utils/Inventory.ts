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

    public getItems():T[]{
        return this._items;
    }
}