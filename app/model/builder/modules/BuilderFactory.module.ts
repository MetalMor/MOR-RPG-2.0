'use strict';
import {IBuilder} from "../interfaces/IBuilder.interface";
import {AbstractGameEntity} from "../../entities/classes/abstract/AbstractGameEntity.class";
import {Util} from "../../util/classes/Util.class";
/**
 * Created by becari on 29/09/2016.
 */
export module BuilderFactory {
    export class GenericFactory {
        constructor(obj?: GenericFactory) { }

        protected static getBuilder<T extends AbstractGameEntity>(_type: IConstructor<IBuilder<T>>): IBuilder<T> {
            return new _type();
        }
        static create<T extends AbstractGameEntity>(_type: IConstructor<T>): IBuilder<T> {
            //return this.getBuilder(<Constructor<IBuilder<T>>>[_type.name + "Builder"].constructor)
            var _builderType: IConstructor<IBuilder<T>> = Util.getBuilderType(_type);
            return this.getBuilder(_builderType);
        }
    }
}