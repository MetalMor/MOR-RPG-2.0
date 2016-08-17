'use strict';
import {DataField} from "./DataField.class";
import {IDataField} from "../interfaces/IDataField.interface";
import {IFieldSet} from "../interfaces/IFieldSet.interface";
/**
 * Created by Mor on 17/08/2016.
 */
export class RegularDataField extends DataField {
    _value: string;

    constructor(obj?: IDataField) {
        super(obj);
        var cast = <RegularDataField> obj;
        this.value = cast && cast.value || 'undefined';
    }

    get value(): string {
        return this._value;
    }
    set value(_value: string) {
        this._value = _value;
    }
}