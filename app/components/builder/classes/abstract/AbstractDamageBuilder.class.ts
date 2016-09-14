'use strict';
import {AbstractDamage} from "../../../items/classes/AbstractDamage.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {DamageType} from "../../../items/enumerations/DamageType.enumeration";
import {DamageImpl} from "../../../items/classes/DamageImpl.class";
/**
 * Created by becari on 14/09/2016.
 */
export abstract class AbstractDamageBuilder implements IBuilder<AbstractDamage> {
    _value: number;
    _type: DamageType;

    constructor(obj?: AbstractDamageBuilder) {
        this.value = obj && obj.value || 1;
        this.type = obj && obj.type || DamageType.Bashing;
    }

    setValue(_value: number): AbstractDamageBuilder {
        this.value = _value;
        return this;
    }
    setType(_type: DamageType): AbstractDamageBuilder {
        this.type = _type;
        return this;
    }
    build(): AbstractDamage {
        var ret: AbstractDamage = new DamageImpl();
        ret.value = this.value;
        ret.type = this.type;
        return ret;
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