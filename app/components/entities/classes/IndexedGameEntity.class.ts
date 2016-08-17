'use strict';
import {GameEntity} from './GameEntity.class';
import {IIndexedGameEntity} from "../interfaces/IIndexedGameEntity.interface";
import {Util} from "../../util/classes/Util.class";
/**
 * Created by Mor on 15/08/2016.
 */
export abstract class IndexedGameEntity extends GameEntity implements IIndexedGameEntity {
    _id: number;

    constructor(obj?: IIndexedGameEntity) {
        super(obj);
        var cast = <IndexedGameEntity> obj;
        this.id = cast && cast.id || Util.autoId();
    }

    get id(): number {
        return this._id;
    }
    set id(_id: number) {
        this._id = _id;
    }

    toString(): string {
        return super.toString();
    }
    equals(obj: IIndexedGameEntity): boolean {
        if(!obj) return false;
        var other = <IndexedGameEntity> obj;
        return this.id === other.id;
    }
}