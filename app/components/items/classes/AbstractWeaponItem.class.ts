'use strict';
import {AbstractItem} from "./AbstractItem.class";
import {AbstractDamage} from "./AbstractDamage.class";
import {IWeaponItem} from "../interfaces/IWeaponItem.interface";
import {DamageImpl} from "./DamageImpl.class";
/**
 * Created by Mor on 24/08/2016.
 */
export abstract class AbstractWeaponItem extends AbstractItem implements IWeaponItem {
    _damage: AbstractDamage;
    _dif: number;

    constructor(obj?: AbstractWeaponItem) {
        super(obj);
        this.damage = obj && obj.damage || new DamageImpl();
        this.dif = obj && obj.dif || 6;
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
    get dif(): number {
        return this._dif;
    }
    set dif(_dif: number) {
        this._dif = _dif;
    }
}