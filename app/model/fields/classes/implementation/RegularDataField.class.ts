'use strict';
import {AbstractDataField} from "../abstract/AbstractDataField.class";
/**
 * Created by Mor on 17/08/2016.
 */
export class RegularDataField extends AbstractDataField {
    _value: string;

    constructor(obj?: RegularDataField) {
        super(obj);
        this.value = obj && obj.value || 'undefined';
    }

    get value(): string {
        return this._value;
    }
    set value(_value: string) {
        this._value = _value;
    }
}