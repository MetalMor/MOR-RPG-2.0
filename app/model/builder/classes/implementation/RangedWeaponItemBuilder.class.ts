'use strict';
import {AbstractWeaponItemBuilder} from "../abstract/AbstractWeaponItemBuilder.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {AbstractWeaponItem} from "../../../items/classes/abstract/AbstractWeaponItem.class";
import {RangedWeaponItem} from "../../../items/classes/implementation/RangedWeaponItem.class";
/**
 * Created by becari on 14/09/2016.
 */
export class RangedWeaponItemBuilder extends AbstractWeaponItemBuilder implements IBuilder<AbstractWeaponItem> {
    _range: number;
    _cadency: number;
    _capacity: number;

    constructor(obj?: RangedWeaponItemBuilder) {
        super(obj);
        this.range = obj && obj.range || 12;
        this.cadency = obj && obj.cadency || 3;
        this.capacity = obj && obj.capacity || 6;
    }

    setRange(_range: number): RangedWeaponItemBuilder {
        this.range = _range;
        return this;
    }
    setCadency(_cadency: number): RangedWeaponItemBuilder {
        this.cadency = _cadency;
        return this;
    }
    setCapacity(_capacity: number): RangedWeaponItemBuilder {
        this.capacity = _capacity;
        return this;
    }
    build(): RangedWeaponItem {
        var ret: RangedWeaponItem = new RangedWeaponItem(<RangedWeaponItem> super.build());
        ret.range = this.range;
        ret.cadency = this.cadency;
        ret.capacity = this.capacity;
        return ret;
    }

    get range(): number {
        return this._range;
    }
    set range(_range: number) {
        this._range = _range;
    }
    get cadency(): number {
        return this._cadency;
    }
    set cadency(_cadency: number) {
        this._cadency = _cadency;
    }
    get capacity(): number {
        return this._capacity;
    }
    set capacity(_capacity: number) {
        this._capacity = _capacity;
    }
}