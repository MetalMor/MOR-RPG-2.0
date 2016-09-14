'use strict';
import {AbstractWeaponItemBuilder} from "./AbstractWeaponItemBuilder.class";
import {MeleeWeaponItem} from "../../items/classes/MeleeWeaponItem.class";
import {IBuilder} from "../interfaces/IBuilder.interface";
import {AbstractStatField} from "../../fields/classes/AbstractStatField.class";
import {StatFieldImpl} from "../../fields/classes/StatFieldImpl.class";
/**
 * Created by becari on 14/09/2016.
 */
export class MeleeWeaponItemBuilder extends AbstractWeaponItemBuilder implements IBuilder<MeleeWeaponItem> {
    _uses: AbstractStatField;

    constructor(obj?: MeleeWeaponItemBuilder) {
        super(obj);
        this.uses = obj && obj.uses || new StatFieldImpl();
    }

    setUses(_uses: AbstractStatField): MeleeWeaponItemBuilder {
        this.uses = _uses;
        return this;
    }
    build(): MeleeWeaponItem {
        var ret: MeleeWeaponItem = <MeleeWeaponItem> super.build();
        ret.uses = this.uses;
        return ret;
    }

    get uses(): AbstractStatField {
        return this._uses;
    }
    set uses(_uses: AbstractStatField) {
        this._uses = _uses;
    }
}