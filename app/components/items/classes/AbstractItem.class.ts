'use strict';
import {IItem} from "../interfaces/IItem.interface";
import {AbstractFieldSet} from "../../fields/classes/AbstractFieldSet.class";
import {IIndexedGameEntity} from "../../entities/interfaces/IIndexedGameEntity.interface";
import {IndexedGameEntity} from "../../entities/classes/IndexedGameEntity.class";
import {IndexedGameEntityImpl} from "../../entities/classes/IndexedGameEntityImpl.class";
import {Hiding} from "../enumerations/Hiding.enumeration";
import {IStatModificator} from "../../fields/interfaces/IStatModificator.interface";
/**
 * Created by Mor on 17/08/2016.
 */
export abstract class AbstractItem extends AbstractFieldSet implements IItem {
    _inherits: IIndexedGameEntity;
    _hiding: Hiding;

    constructor(obj?: IItem) {
        super(obj);
        var cast = <AbstractItem> obj;
        this.inherits = cast && cast.inherits || new IndexedGameEntityImpl();
        this.hiding = cast && cast.hiding || Hiding.Pocket;
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
    get hiding(): Hiding {
        return this._hiding;
    }
    set hiding(_hiding: Hiding) {
        this._hiding = _hiding;
    }

    addMods(): boolean {
        var fields = this.fields;
        // TODO impl
        return !fields;
    }

    equals(obj: IIndexedGameEntity): boolean {
        return obj && (<IndexedGameEntityImpl> this.inherits).equals(obj);
    }
    toString(): string {
        return (<IndexedGameEntityImpl> this.inherits).toString();
    }
}