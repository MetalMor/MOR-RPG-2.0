'use strict';
import {AbstractWeaponItem} from "./AbstractWeaponItem.class";
import {StatField} from "../../fields/classes/AbstractStatField.class";
/**
 * Created by Mor on 24/08/2016.
 */
export class MeleeWeaponItem extends AbstractWeaponItem {
    _uses: StatField;

    constructor(obj?: MeleeWeaponItem) {
        super(obj);
    }

    getDamageRolls(): number {
        return this.uses.level + this.damage.value;
    }

    get uses(): StatField {
        return this._uses;
    }
    set uses(_uses: StatField) {
        this._uses = _uses;
    }
}