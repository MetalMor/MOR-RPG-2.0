'use strict';
import {AbstractDataFieldBuilder} from "../abstract/AbstractDataFieldBuilder.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {NumericDataField} from "../../../fields/classes/implementation/NumericDataField.class";
/**
 * Created by becari on 14/09/2016.
 */
export class NumericDataFieldBuilder extends AbstractDataFieldBuilder implements IBuilder<NumericDataField> {
    _value: number;

    constructor(obj?: NumericDataFieldBuilder) {
        super(obj);
        this.value = obj && obj.value || 0;
    }

    setValue(_value: number): NumericDataFieldBuilder {
        this.value = _value;
        return this;
    }
    build(): NumericDataField {
        var ret: NumericDataField = new NumericDataField(<NumericDataField> super.build());
        ret.value = this.value;
        return ret;
    }

    get value(): number {
        return this._value;
    }
    set value(_value: number) {
        this._value = _value;
    }

}