'use strict';
import {AbstractItem} from "../abstract/AbstractItem.class";
/**
 * Created by Mor on 24/08/2016.
 */
export class VehicleItem extends AbstractItem {
    _safeSpeed: number;
    _maxSpeed: number;
    _maneuver: number;

    constructor(obj?: VehicleItem) {
        super(obj);
        this.safeSpeed = obj && obj.safeSpeed || 95;
        this.maxSpeed = obj && obj.maxSpeed || 145;
        this.maneuver = obj && obj.maneuver || 3;
    }

    get safeSpeed(): number {
        return this._safeSpeed;
    }
    set safeSpeed(_safeSpeed: number) {
        this._safeSpeed = _safeSpeed;
    }
    get maxSpeed(): number {
        return this._maxSpeed;
    }
    set maxSpeed(_maxSpeed: number) {
        this._maxSpeed = _maxSpeed;
    }
    get maneuver(): number {
        return this._maneuver;
    }
    set maneuver(_maneuver: number) {
        this._maneuver = _maneuver;
    }
}