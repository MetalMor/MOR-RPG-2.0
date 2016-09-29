'use strict';
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {Builders} from "../../../util/classes/Builders.class";
/**
 * Created by Mor on 28/09/2016.
 */
export abstract class AbstractBuilder implements IBuilder<Object>{
    constructor(obj?: AbstractBuilder) { }

    create(_props: Object): any {
        return Builders.create(this, _props);
    }

    build(): Object {
        return new Object();
    }
}