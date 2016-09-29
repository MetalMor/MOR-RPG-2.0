'use strict';
import {AbstractItem} from "./AbstractItem.class";
import {AbstractDamage} from "./AbstractDamage.class";
import {IWeaponItem} from "../../interfaces/IWeaponItem.interface";
import {DamageImpl} from "../implementation/DamageImpl.class";
/**
 * Created by Mor on 24/08/2016.
 */
export abstract class AbstractWeaponItem extends AbstractItem implements IWeaponItem {
    _damage: AbstractDamage;

    constructor(obj?: AbstractWeaponItem) {
        super(obj);
        this.damage = obj && obj.damage || new DamageImpl();
    }

    getDamageRolls(): number {
        return this.damage.value;
    }

    get damage(): AbstractDamage {
        return this._damage;
    }
    set damage(_damage: AbstractDamage) {
        this._damage = _damage;
    }
}