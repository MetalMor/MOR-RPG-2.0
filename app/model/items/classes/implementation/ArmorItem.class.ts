'use strict';
import {AbstractItem} from "../abstract/AbstractItem.class";
/**
 * Created by Mor on 24/08/2016.
 */
export class ArmorItem extends AbstractItem {
    _value: number;
    _penalty: number;

    constructor(obj?: ArmorItem) {
        super(obj);
        this.value = obj && obj.value || 1;
        this.penalty = obj && obj.penalty || 0;
    }

    get value(): number {
        return this._value;
    }
    set value(_value: number) {
        this._value = _value;
    }
    get penalty(): number {
        return this._penalty;
    }
    set penalty(_penalty: number) {
        this._penalty = _penalty;
    }
}