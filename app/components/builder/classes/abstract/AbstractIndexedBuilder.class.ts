'use strict';
import {AbstractIndexedGameEntity} from "../../../entities/classes/AbstractIndexedGameEntity.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {AbstractBuilder} from "./AbstractBuilder.class";
/**
 * Created by becari on 12/09/2016.
 */
export abstract class AbstractIndexedBuilder extends AbstractBuilder implements IBuilder<AbstractIndexedGameEntity> {
    _id: number;
    static _staticId: number = 0;

    constructor(obj?: AbstractIndexedBuilder) {
        super(obj);
        this.id = obj && obj.id || AbstractIndexedBuilder._staticId;
    }

    build(): AbstractIndexedGameEntity {
        var ret: AbstractIndexedGameEntity = <AbstractIndexedGameEntity> super.build();
        ret.id = AbstractIndexedBuilder.staticId++;
        return ret;
    }

    get id(): number {
        return this._id;
    }
    set id(_id: number) {
        this._id = _id;
    }
    static get staticId(): number {
        return AbstractIndexedBuilder._staticId;
    }
    static set staticId(_staticId: number) {
        AbstractIndexedBuilder._staticId = _staticId;
    }
}