'use strict';
import {AbstractGameEntity} from "../../../entities/classes/abstract/AbstractGameEntity.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {GameEntityImpl} from "../../../entities/classes/implementation/GameEntityImpl.class";
/**
 * Created by becari on 12/09/2016.
 */
export abstract class AbstractGameEntityBuilder implements IBuilder<AbstractGameEntity> {
    _name: string;

    constructor(obj?: AbstractGameEntityBuilder) {
        this.name = obj && obj.name || "unnamed";
    }

    build(): AbstractGameEntity {
        var ret: AbstractGameEntity = new GameEntityImpl();
        ret.name = this.name;
        return ret;
    }
    setName(_name: string): AbstractGameEntityBuilder {
        this.name = _name;
        return this;
    }

    get name(): string {
        return this._name;
    }
    set name(_name: string) {
        this._name = _name;
    }
}