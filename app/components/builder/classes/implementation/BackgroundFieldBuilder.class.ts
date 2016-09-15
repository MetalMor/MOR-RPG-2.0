'use strict';
import {AbstractStatDataFieldBuilder} from "../abstract/AbstractStatDataFieldBuilder.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {BackgroundField} from "../../../fields/classes/implementation/BackgroundField.class";
/**
 * Created by becari on 14/09/2016.
 */
export class BackgroundFieldBuilder extends AbstractStatDataFieldBuilder implements IBuilder<BackgroundField> {
    constructor(obj?: BackgroundFieldBuilder) {
        super(obj);
    }

    build(): BackgroundField {
        return new BackgroundField(<BackgroundField> super.build());
    }
}