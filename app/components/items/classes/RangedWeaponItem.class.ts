'use strict';
import {AbstractWeaponItem} from "./AbstractWeaponItem.class";
/**
 * Created by Mor on 24/08/2016.
 */
export class RangedWeaponItem extends AbstractWeaponItem {
    _range: number;
    _cadency: number;
    _capacity: number;

    constructor(obj?: RangedWeaponItem) {
        super(obj);
        this.range = obj && obj.range || 12;
        this.cadency = obj && obj.cadency || 3;
        this.capacity = obj && obj.capacity || 6;
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