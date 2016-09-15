'use strict';
import {AbstractDataFieldBuilder} from "../abstract/AbstractDataFieldBuilder.class";
import {RegularDataField} from "../../../fields/classes/implementation/RegularDataField.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
/**
 * Created by becari on 14/09/2016.
 */
export class RegularDataFieldBuilder extends AbstractDataFieldBuilder implements IBuilder<RegularDataField> {
    _value: string;

    constructor(obj?: RegularDataFieldBuilder) {
        super(obj);
        this.value = obj && obj.value || 'undefined';
    }

    setValue(_value: string): RegularDataFieldBuilder {
        this.value = _value;
        return this;
    }
    build(): RegularDataField {
        var ret: RegularDataField = new RegularDataField(<RegularDataField> super.build());
        ret.value = this.value;
        return ret;
    }

    get value(): string {
        return this._value;
    }
    set value(_value: string) {
        this._value = _value;
    }
}