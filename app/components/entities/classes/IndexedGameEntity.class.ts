'use strict';
import {GameEntity} from './GameEntity.class';
import {IIndexedGameEntity} from "../interfaces/IIndexedGameEntity.interface";
import {Util} from "../../../classes/Util.class";
/**
 * Created by Mor on 15/08/2016.
 */
export abstract class IndexedGameEntity extends GameEntity implements IIndexedGameEntity {
    _id: number;

    constructor(obj?: IIndexedGameEntity) {
        super(obj);
        var cast = <IndexedGameEntity> obj;
        this.id = cast && cast.id || Util.randomNumber(0, 10000);
    }

    public get id(): number {
        return this._id;
    }
    public set id(_id: number) {
        this._id = _id;
    }
}