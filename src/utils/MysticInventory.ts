export default class MysticInventory{
    private _items:any[] = [];

    public addItem(item:any):void{
        this._items.push(item);
    }

    public getItemAt<T>(pos:number):T|null{
        if( pos >=  this._items.length)
            return null;
        
        return this._items[pos] as T;
    }

    public getItems<T>():T[]{
        return this._items as T[];
    }
}