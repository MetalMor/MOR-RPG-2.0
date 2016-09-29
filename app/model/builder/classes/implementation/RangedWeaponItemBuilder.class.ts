'use strict';
import {AbstractWeaponItemBuilder} from "../abstract/AbstractWeaponItemBuilder.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {AbstractWeaponItem} from "../../../items/classes/abstract/AbstractWeaponItem.class";
import {NumericDataField} from "../../../fields/classes/implementation/NumericDataField.class";
/**
 * Created by becari on 14/09/2016.
 */
export class RangedWeaponItemBuilder extends AbstractWeaponItemBuilder implements IBuilder<AbstractWeaponItem> {
    _range: NumericDataField;
    _cadency: NumericDataField;
    _capacity: NumericDataField;

    constructor(obj?: RangedWeaponItemBuilder) {
        super(obj);
        this.range = obj && obj.range || this.numericDataFieldBuilder.build();
        this.cadency = obj && obj.cadency || this.numericDataFieldBuilder.build();
        this.capacity = obj && obj.capacity || this.numericDataFieldBuilder.build();
    }

    setRange(_range: number): RangedWeaponItemBuilder {
        this.range = this.createNumericDataField("Cadencia", _range);
        return this;
    }
    setCadency(_cadency: number): RangedWeaponItemBuilder {
        this.cadency = this.createNumericDataField("Cadencia", _cadency);
        return this;
    }
    setCapacity(_capacity: number): RangedWeaponItemBuilder {
        this.capacity = this.createNumericDataField("Capacidad", _capacity);
        return this;
    }
    build(): AbstractWeaponItem {
        var ret: AbstractWeaponItem = super.build();
        ret.add(this.range);
        ret.add(this.cadency);
        ret.add(this.capacity);
        return ret;
    }

    get range(): NumericDataField {
        return this._range;
    }
    set range(_range: NumericDataField) {
        this._range = _range;
    }
    get cadency(): NumericDataField {
        return this._cadency;
    }
    set cadency(_cadency: NumericDataField) {
        this._cadency = _cadency;
    }
    get capacity(): NumericDataField {
        return this._capacity;
    }
    set capacity(_capacity: NumericDataField) {
        this._capacity = _capacity;
    }
}