'use strict';
import {AbstractWeaponItem} from "../abstract/AbstractWeaponItem.class";
import {AbstractStatField} from "../../../fields/classes/abstract/AbstractStatField.class";
import {StatFieldImpl} from "../../../fields/classes/implementation/StatFieldImpl.class";
/**
 * Created by Mor on 24/08/2016.
 */
export class MeleeWeaponItem extends AbstractWeaponItem {
    _uses: AbstractStatField;

    constructor(obj?: MeleeWeaponItem) {
        super(obj);
        this.uses = obj && obj.uses || new StatFieldImpl();
    }

    getDamageRolls(): number {
        return this.uses.level + this.damage.value;
    }

    get uses(): AbstractStatField {
        return this._uses;
    }
    set uses(_uses: AbstractStatField) {
        this._uses = _uses;
    }
}