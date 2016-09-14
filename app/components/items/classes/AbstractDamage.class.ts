'use strict';
import {DamageType} from "../enumerations/DamageType.enumeration";
/**
 * Created by Mor on 24/08/2016.
 */
export abstract class AbstractDamage {
    _value: number;
    _type: DamageType;

    constructor(obj?: AbstractDamage) {
        this.value = obj && obj.value || 1;
        this.type = obj && obj.type || DamageType.Bashing;
    }

    get value(): number {
        return this._value;
    }
    set value(_value: number) {
        this._value = _value;
    }
    get type(): DamageType {
        return this._type;
    }
    set type(_type: DamageType) {
        this._type = _type;
    }
}