'use strict';
import {AbstractItem} from "./AbstractItem.class";
import {Damage} from "./Damage.class";
import {IWeaponItem} from "../interfaces/IWeaponItem.interface";
/**
 * Created by Mor on 24/08/2016.
 */
export abstract class AbstractWeaponItem extends AbstractItem implements IWeaponItem {
    _damage: Damage;
    _dif: number;

    constructor(obj?: AbstractWeaponItem) {
        super(obj);
        this.damage = obj && obj.damage || new Damage();
        this.dif = obj && obj.dif || 6;
    }

    getDamageRolls(): number {
        return this.damage.value;
    }

    get damage(): Damage {
        return this._damage;
    }
    set damage(_damage: Damage) {
        this._damage = _damage;
    }
    get dif(): number {
        return this._dif;
    }
    set dif(_dif: number) {
        this._dif = _dif;
    }
}