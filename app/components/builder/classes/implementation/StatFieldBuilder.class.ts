'use strict';
import {AbstractStatFieldBuilder} from "../abstract/AbstractStatFieldBuilder.class";
import {StatFieldImpl} from "../../../fields/classes/implementation/StatFieldImpl.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
/**
 * Created by becari on 14/09/2016.
 */
export class StatFieldBuilder extends AbstractStatFieldBuilder implements IBuilder<StatFieldImpl> {
    constructor(obj?: StatFieldBuilder) {
        super(obj);
    }

    build(): StatFieldImpl {
        return new StatFieldImpl(<StatFieldImpl> super.build());
    }
}