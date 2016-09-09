'use strict';
import {AbstractGameEntity} from './AbstractGameEntity.class';
import {IIndexedGameEntity} from "../interfaces/IIndexedGameEntity.interface";
import {Util} from "../../util/classes/Util.class";
/**
 * Created by Mor on 15/08/2016.
 */
export abstract class AbstractIndexedGameEntity extends AbstractGameEntity implements IIndexedGameEntity {
    _id: number;
    static _staticId: number;

    constructor(obj?: IIndexedGameEntity) {
        super(obj);
        var cast = <AbstractIndexedGameEntity> obj;
        this.id = cast && cast.id || AbstractIndexedGameEntity.staticId++;
    }

    get id(): number {
        return this._id;
    }
    set id(_id: number) {
        this._id = _id;
    }
    static get staticId(): number {
        if(!AbstractIndexedGameEntity.staticId) AbstractIndexedGameEntity.staticId = 0;
        return AbstractIndexedGameEntity.staticId;
    }
    static set staticId(_staticId: number) {
        AbstractIndexedGameEntity._staticId = _staticId;
    }

    toString(): string {
        return super.toString();
    }
    equals(obj: IIndexedGameEntity): boolean {
        if(!obj) return false;
        var other = <AbstractIndexedGameEntity> obj;
        return this.id === other.id;
    }
}