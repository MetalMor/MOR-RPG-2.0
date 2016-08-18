'use strict';
import {IItem} from "../interfaces/IItem.interface";
import {RegularFieldSet} from "../../fields/classes/RegularFieldSet.class";
import {IIndexedGameEntity} from "../interfaces/IIndexedGameEntity.interface";
import {IndexedGameEntity} from "./IndexedGameEntity.class";
import {IndexedGameEntityImpl} from "./IndexedGameEntityImpl.class";
/**
 * Created by Mor on 17/08/2016.
 */
export abstract class AbstractItem extends RegularFieldSet implements IItem {
    _inherits: IIndexedGameEntity;

    constructor(obj?: IItem) {
        super(obj);
        var cast = <AbstractItem> obj;
        this.inherits = cast && cast.inherits || new IndexedGameEntityImpl();
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

    equals(obj: IIndexedGameEntity): boolean {
        return obj && (<IndexedGameEntityImpl> this.inherits).equals(obj);
    }
    toString(): string {
        return (<IndexedGameEntityImpl> this.inherits).toString();
    }
}