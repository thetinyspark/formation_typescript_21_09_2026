class Factory{

    // private static _instance:Factory|null = null;

    // ça brise la pattern S.O.L.I.D
    // parce que notre classe doit gérer sa propre instance unique
    // et également gérer la création des autres objets 

    // public static getInstance():Factory{
    //     if( Factory._instance === null ){
    //         Factory._instance = new Factory();
    //     }

    //     return Factory._instance;
    // }

    private _map:Map<string,Function> = new Map<string,Function>();

    public register(key:string, func:Function){
        this._map.set(key, func);
    }

    // On utilise le spread operator pour stocker dans un tableau tous les paramètres optionnels qui viennent après le paramètre key:string
    public create<T>(key:string, ...params:any[]):T|null{
        const func:Function|undefined = this._map.get(key);
        if( func === undefined )
            return null;

        return func(...params) as T;
    }
}

// ceci est une bonne façon de gérer proprement le singleton
const factory = new Factory();
export default factory;