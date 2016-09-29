'use strict';
import {AbstractGameEntity} from "../../../entities/classes/abstract/AbstractGameEntity.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {GameEntityImpl} from "../../../entities/classes/implementation/GameEntityImpl.class";
import {AbstractBuilder} from "./AbstractBuilder.class";
/**
 * Created by becari on 12/09/2016.
 */
export abstract class AbstractGameEntityBuilder extends AbstractBuilder implements IBuilder<AbstractGameEntity> {
    _name: string;

    constructor(obj?: AbstractGameEntityBuilder) {
        super(obj);
        this.name = obj && obj.name || "unnamed";
    }

    build(): AbstractGameEntity {
        var ret: AbstractGameEntity = new GameEntityImpl(<AbstractGameEntity> super.build());
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