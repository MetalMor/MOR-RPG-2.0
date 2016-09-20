'use strict';
import {AbstractStatFieldSetBuilder} from "../abstract/AbstractStatFieldSetBuilder.class";
import {StatFieldSetImpl} from "../../../fields/classes/implementation/StatFieldSetImpl.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
/**
 * Created by becari on 14/09/2016.
 */
export class StatFieldSetBuilder extends AbstractStatFieldSetBuilder implements IBuilder<StatFieldSetImpl> {
    constructor(obj?: StatFieldSetBuilder) {
        super(obj);
    }

    build(): StatFieldSetImpl {
        return new StatFieldSetImpl(<StatFieldSetImpl> super.build());
    }
}