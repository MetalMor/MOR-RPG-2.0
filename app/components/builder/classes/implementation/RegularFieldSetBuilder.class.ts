'use strict';
import {AbstractFieldSetBuilder} from "../abstract/AbstractFieldSetBuilder.class";
import {RegularFieldSet} from "../../../fields/classes/implementation/RegularFieldSet.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
/**
 * Created by becari on 14/09/2016.
 */
export class RegularFieldSetBuilder extends AbstractFieldSetBuilder implements IBuilder<RegularFieldSet> {
    constructor(obj?: RegularFieldSetBuilder) {
        super(obj);
    }

    build(): RegularFieldSet {
        return <RegularFieldSet> super.build();
    }
}