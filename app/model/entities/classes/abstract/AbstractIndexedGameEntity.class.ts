'use strict';
import {AbstractGameEntity} from './AbstractGameEntity.class';
import {IIndexedGameEntity} from "../../interfaces/IIndexedGameEntity.interface";
import {Constants} from "../../../util/classes/Constants.class";
import {Util} from "../../../util/classes/Util.class";
/**
 * Created by Mor on 15/08/2016.
 */
export abstract class AbstractIndexedGameEntity extends AbstractGameEntity implements IIndexedGameEntity {
    _id: number;

    constructor(obj?: IIndexedGameEntity) {
        super(obj);
        var cast = <AbstractIndexedGameEntity> obj;
        if(Util.isUndefined(cast.id)) throw new Error(Constants.Errors.ERR_BUILDER);
        this.id = cast && cast.id;
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
        var other = <AbstractIndexedGameEntity> obj;
        if(!other.id) return false;
        return this.id === other.id;
    }
}