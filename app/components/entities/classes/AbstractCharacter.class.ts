import {IndexedGameEntity} from "./IndexedGameEntity.class";
import {ICharacter} from "../interfaces/ICharacter.interface";
import {IIndexedGameEntity} from "../interfaces/IIndexedGameEntity.interface";
import {StatFieldSet} from "../../fields/classes/StatFieldSet.class";
import {IndexedGameEntityImpl} from "./IndexedGameEntityImpl.class";
import {Constants} from "../../util/classes/Constants.class";
/**
 * Created by becari on 18/08/2016.
 */
export abstract class AbstractCharacter extends StatFieldSet implements ICharacter {
    _inherits: IIndexedGameEntity;
    // HOWDY! por ahora esto será un singleton, pero posiblemente englobe personajes, usuarios y partidas
    // dentro de un objeto contexto que sea un singleton (no me fío demasiado de que en ningun momento haya
    // más de una instancia de character, game o user)
    // Otra opción es implementar todas estas clases con normalidad y luego heredarlas en clases con patron
    // singleton, las cuales serán las que se instancien en el cliente (de este modo en el servidor se reseva
    // el singleton para algo que realmente sea único)
    static _instance: AbstractCharacter; // <-- esto hace que sea un singleton

    constructor(obj?: AbstractCharacter) {
        super(obj);
        if(AbstractCharacter.instance)
            throw new Error(Constants.ERR_SINGLETON);
        this.inherits = obj && obj.inherits || new IndexedGameEntityImpl();
        AbstractCharacter.instance = this; // <-- auto-referencia del singleton aquí
    }

    get id(): number {
        return (<IndexedGameEntity> this.inherits).id;
    }
    set id(_id: number) {
        (<IndexedGameEntity> this.inherits).id = _id;
    }
    get inherits(): IIndexedGameEntity {
        return this._inherits;
    }
    set inherits(_inherits: IIndexedGameEntity) {
        this._inherits = _inherits;
    }
    static get instance(): AbstractCharacter {
        return AbstractCharacter._instance;
    }
    static set instance(_instance: AbstractCharacter) {
        AbstractCharacter._instance = _instance;
    }

    toString(): string {
        return this.inherits.toString();
    }
    equals(obj: AbstractCharacter): boolean {
        return this.inherits.equals(obj);
    }
}