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
    static _instance: AbstractCharacter;

    constructor(obj?: AbstractCharacter) {
        super(obj);
        if(AbstractCharacter.instance)
            throw new Error(Constants.ERR_SINGLETON);
        this.inherits = obj && obj.inherits || new IndexedGameEntityImpl();
        AbstractCharacter.instance = this;
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