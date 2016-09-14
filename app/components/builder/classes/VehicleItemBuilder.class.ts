'use strict';
import {AbstractItemBuilder} from "./AbstractItemBuilder.class";
import {IBuilder} from "../interfaces/IBuilder.interface";
import {VehicleItem} from "../../items/classes/VehicleItem.class";
/**
 * Created by becari on 14/09/2016.
 */
export class VehicleItemBuilder extends AbstractItemBuilder implements IBuilder<VehicleItem> {
    _safeSpeed: number;
    _maxSpeed: number;
    _maneuver: number;

    constructor(obj?: VehicleItemBuilder) {
        super(obj);
        this.safeSpeed = obj && obj.safeSpeed || 95;
        this.maxSpeed = obj && obj.maxSpeed || 145;
        this.maneuver = obj && obj.maneuver || 3;
    }

    setSafeSpeed(_safeSpeed: number): VehicleItemBuilder {
        this.safeSpeed = _safeSpeed;
        return this;
    }
    setMaxSpeed(_maxSpeed: number): VehicleItemBuilder {
        this.maxSpeed = _maxSpeed;
        return this;
    }
    setManeuver(_maneuver: number): VehicleItemBuilder {
        this.maneuver = _maneuver;
        return this;
    }
    build(): VehicleItem {
        var ret: VehicleItem = <VehicleItem> super.build();
        ret.safeSpeed = this.safeSpeed;
        ret.maxSpeed = this.maxSpeed;
        ret.maneuver = this.maneuver;
        return ret;
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