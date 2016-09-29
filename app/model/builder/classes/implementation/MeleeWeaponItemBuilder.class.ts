'use strict';
import {AbstractWeaponItemBuilder} from "../abstract/AbstractWeaponItemBuilder.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {AbstractWeaponItem} from "../../../items/classes/abstract/AbstractWeaponItem.class";
import {RegularDataField} from "../../../fields/classes/implementation/RegularDataField.class";
import {RegularDataFieldBuilder} from "./RegularDataFieldBuilder.class";
/**
 * Created by becari on 14/09/2016.
 */
export class MeleeWeaponItemBuilder extends AbstractWeaponItemBuilder implements IBuilder<AbstractWeaponItem> {
    _uses: RegularDataField;

    constructor(obj?: MeleeWeaponItemBuilder) {
        super(obj);
        this.uses = obj && obj.uses || new RegularDataField();
    }

    setUses(_uses: string): MeleeWeaponItemBuilder {
        var regularDataFieldBuilder: RegularDataFieldBuilder = new RegularDataFieldBuilder();
        this.uses = (<RegularDataFieldBuilder> regularDataFieldBuilder.setValue(_uses)
            .setDesc("Nombre de la estadística que el objeto requiere.")
            .setName("Utiliza"))
            .build();
        return this;
    }
    build(): AbstractWeaponItem {
        var ret: AbstractWeaponItem = super.build();
        ret.add(this.uses);
        return ret;
    }

    get uses(): RegularDataField {
        return this._uses;
    }
    set uses(_uses: RegularDataField) {
        this._uses = _uses;
    }
}