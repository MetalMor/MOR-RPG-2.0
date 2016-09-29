'use strict';
import {AbstractItemBuilder} from "./AbstractItemBuilder.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {AbstractWeaponItem} from "../../../items/classes/abstract/AbstractWeaponItem.class";
import {AbstractDamage} from "../../../items/classes/abstract/AbstractDamage.class";
import {DamageImpl} from "../../../items/classes/implementation/DamageImpl.class";
import {WeaponItemImpl} from "../../../items/classes/implementation/WeaponItemImpl.class";
/**
 * Created by becari on 14/09/2016.
 */
export abstract class AbstractWeaponItemBuilder extends AbstractItemBuilder implements IBuilder<AbstractWeaponItem> {
    _damage: AbstractDamage;

    constructor(obj?: AbstractWeaponItemBuilder) {
        super(obj);
        this.damage = obj && obj.damage || new DamageImpl();
    }

    setDamage(_damage: AbstractDamage): AbstractWeaponItemBuilder {
        this.damage = _damage;
        return this;
    }
    build(): AbstractWeaponItem {
        var ret: AbstractWeaponItem = new WeaponItemImpl(<AbstractWeaponItem> super.build());
        ret.damage = this.damage;
        return ret;
    }

    get damage(): AbstractDamage {
        return this._damage;
    }
    set damage(_damage: AbstractDamage) {
        this._damage = _damage;
    }
}