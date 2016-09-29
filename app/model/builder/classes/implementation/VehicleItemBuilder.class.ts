'use strict';
import {AbstractItemBuilder} from "../abstract/AbstractItemBuilder.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {AbstractItem} from "../../../items/classes/abstract/AbstractItem.class";
import {NumericDataField} from "../../../fields/classes/implementation/NumericDataField.class";
/**
 * Created by becari on 14/09/2016.
 */
export class VehicleItemBuilder extends AbstractItemBuilder implements IBuilder<AbstractItem> {
    _safeSpeed: NumericDataField;
    _maxSpeed: NumericDataField;
    _maneuver: NumericDataField;

    constructor(obj?: VehicleItemBuilder) {
        super(obj);
        this.safeSpeed = obj && obj.safeSpeed || this.numericDataFieldBuilder.build();
        this.maxSpeed = obj && obj.maxSpeed || this.numericDataFieldBuilder.build();
        this.maneuver = obj && obj.maneuver || this.numericDataFieldBuilder.build();
    }

    setSafeSpeed(_safeSpeed: number): VehicleItemBuilder {
        this.safeSpeed = this.createNumericDataField("Velocidad segura", _safeSpeed);
        return this;
    }
    setMaxSpeed(_maxSpeed: number): VehicleItemBuilder {
        this.maxSpeed = this.createNumericDataField("Velocidad máxima", _maxSpeed);
        return this;
    }
    setManeuver(_maneuver: number): VehicleItemBuilder {
        this.maneuver = this.createNumericDataField("Maniobrabilidad", _maneuver);
        return this;
    }
    build(): AbstractItem {
        var ret: AbstractItem = super.build();
        ret.add(this.safeSpeed);
        ret.add(this.maxSpeed);
        ret.add(this.maneuver);
        return ret;
    }

    get safeSpeed(): NumericDataField {
        return this._safeSpeed;
    }
    set safeSpeed(_safeSpeed: NumericDataField) {
        this._safeSpeed = _safeSpeed;
    }
    get maxSpeed(): NumericDataField {
        return this._maxSpeed;
    }
    set maxSpeed(_maxSpeed: NumericDataField) {
        this._maxSpeed = _maxSpeed;
    }
    get maneuver(): NumericDataField {
        return this._maneuver;
    }
    set maneuver(_maneuver: NumericDataField) {
        this._maneuver = _maneuver;
    }
}