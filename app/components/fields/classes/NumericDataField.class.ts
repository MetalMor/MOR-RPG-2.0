'use strict';
import {DataField} from "./DataField.class";
import {IDataField} from "../interfaces/IDataField.interface";
/**
 * Created by Mor on 17/08/2016.
 */
export class NumericDataField extends DataField {
    _value: number;

    constructor(obj?: IDataField) {
        super(obj);
        var cast = <NumericDataField> obj;
        this.value = cast && cast.value || 0;
    }

    get value(): number {
        return this._value;
    }
    set value(_value: number) {
        this._value = _value;
    }
}