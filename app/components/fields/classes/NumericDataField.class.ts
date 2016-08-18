'use strict';
import {AbstractDataField} from "./AbstractDataField.class";
/**
 * Created by Mor on 17/08/2016.
 */
export class NumericDataField extends AbstractDataField {
    _value: number;

    constructor(obj?: NumericDataField) {
        super(obj);
        this.value = obj && obj.value || 0;
    }

    get value(): number {
        return this._value;
    }
    set value(_value: number) {
        this._value = _value;
    }
}