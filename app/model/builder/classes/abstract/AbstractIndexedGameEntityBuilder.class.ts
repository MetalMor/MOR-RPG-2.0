///<reference path='AbstractGameEntityBuilder.class.ts' />
import {AbstractIndexedGameEntity} from "../../../entities/classes/abstract/AbstractIndexedGameEntity.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {AbstractGameEntityBuilder} from "./AbstractGameEntityBuilder.class";
import {IndexedGameEntityImpl} from "../../../entities/classes/implementation/IndexedGameEntityImpl.class";
/**
 * Created by becari on 12/09/2016.
 */
export abstract class AbstractIndexedGameEntityBuilder extends AbstractGameEntityBuilder implements IBuilder<AbstractIndexedGameEntity> {
    _id: number;
    static _staticId: number = 0;

    constructor(obj?: AbstractIndexedGameEntityBuilder) {
        super(obj);
        this.id = obj && obj.id || AbstractIndexedGameEntityBuilder.staticId;
    }

    build(): AbstractIndexedGameEntity {
        var ret: AbstractIndexedGameEntity = new IndexedGameEntityImpl(<AbstractIndexedGameEntity> super.build());
        ret.id = AbstractIndexedGameEntityBuilder.staticId++;
        return ret;
    }

    get id(): number {
        return this._id;
    }
    set id(_id: number) {
        this._id = _id;
    }
    static get staticId(): number {
        return AbstractIndexedGameEntityBuilder._staticId;
    }
    static set staticId(_staticId: number) {
        AbstractIndexedGameEntityBuilder._staticId = _staticId;
    }
}