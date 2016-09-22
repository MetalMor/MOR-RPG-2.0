'use strict';
import {DamageType} from "../../enumerations/DamageType.enumeration";
import {IDamage} from "../../interfaces/IDamage.interface";
import {Constants} from "../../../util/classes/Constants.class";
/**
 * Created by Mor on 24/08/2016.
 */
export abstract class AbstractDamage implements IDamage {
    _value: number;
    _type: DamageType;

    constructor(obj?: AbstractDamage) {
        this.value = obj && obj.value || 1;
        this.type = obj && obj.type || DamageType.Bashing;
    }

    getDamageTypeAsString(): string {
        var ret: string;
        switch(this.type) {
            case DamageType.Bashing:
                ret = Constants.Types.TYPE_DMG_BASHING;
                break;
            case DamageType.Lethal:
                ret = Constants.Types.TYPE_DMG_LETHAL;
                break;
            case DamageType.Aggravated:
                ret = Constants.Types.TYPE_DMG_AGGRAVATED;
                break;
            default:
                throw new Error(Constants.Errors.ERR_DMGTYPE);
        }
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