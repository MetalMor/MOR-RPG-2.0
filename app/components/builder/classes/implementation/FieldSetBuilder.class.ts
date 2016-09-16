'use strict';
import {AbstractFieldSetBuilder} from "../abstract/AbstractFieldSetBuilder.class";
import {FieldSetImpl} from "../../../fields/classes/implementation/FieldSetImpl.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
/**
 * Created by becari on 14/09/2016.
 */
export class FieldSetBuilder extends AbstractFieldSetBuilder implements IBuilder<FieldSetImpl> {
    constructor(obj?: FieldSetBuilder) {
        super(obj);
    }

    build(): FieldSetImpl {
        return new FieldSetImpl(<FieldSetImpl> super.build());
    }
}