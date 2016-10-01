'use strict';
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {Builders} from "../../../util/classes/Builders.class";
import {AbstractGameEntity} from "../../../entities/classes/abstract/AbstractGameEntity.class";
import {GameEntityImpl} from "../../../entities/classes/implementation/GameEntityImpl.class";
/**
 * Created by Mor on 28/09/2016.
 */
export abstract class AbstractBuilder implements IBuilder<Object>{
    constructor(obj?: AbstractBuilder) { }

    build(): Object {
        return new Object();
    }
}