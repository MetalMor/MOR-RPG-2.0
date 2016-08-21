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

    constructor(obj?: AbstractCharacter) {
        super(obj);
        this.inherits = obj && obj.inherits || new IndexedGameEntityImpl();
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

    toString(): string {
        return this.inherits.toString();
    }
    equals(obj: AbstractCharacter): boolean {
        return this.inherits.equals(obj);
    }
}