'use strict';
import {AbstractItemBuilder} from "./AbstractItemBuilder.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {AbstractWeaponItem} from "../../../items/classes/AbstractWeaponItem.class";
import {AbstractDamage} from "../../../items/classes/AbstractDamage.class";
import {DamageImpl} from "../../../items/classes/DamageImpl.class";
/**
 * Created by becari on 14/09/2016.
 */
export abstract class AbstractWeaponItemBuilder extends AbstractItemBuilder implements IBuilder<AbstractWeaponItem> {
    _damage: AbstractDamage;
    _dif: number;

    constructor(obj?: AbstractWeaponItemBuilder) {
        super(obj);
        this.damage = obj && obj.damage || new DamageImpl();
        this.dif = obj && obj.dif || 6;
    }

    setDamage(_damage: AbstractDamage): AbstractWeaponItemBuilder {
        this.damage = _damage;
        return this;
    }
    setDif(_dif: number): AbstractWeaponItemBuilder {
        this.dif = _dif;
        return this;
    }
    build(): AbstractWeaponItem {
        var ret: AbstractWeaponItem = <AbstractWeaponItem> super.build();
        ret.damage = this.damage;
        ret.dif = this.dif;
        return ret;
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