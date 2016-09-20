'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractItemBuilder_class_1 = require("../abstract/AbstractItemBuilder.class");
var VehicleItem_class_1 = require("../../../items/classes/implementation/VehicleItem.class");
/**
 * Created by becari on 14/09/2016.
 */
var VehicleItemBuilder = (function (_super) {
    __extends(VehicleItemBuilder, _super);
    function VehicleItemBuilder(obj) {
        _super.call(this, obj);
        this.safeSpeed = obj && obj.safeSpeed || 95;
        this.maxSpeed = obj && obj.maxSpeed || 145;
        this.maneuver = obj && obj.maneuver || 3;
    }
    VehicleItemBuilder.prototype.setSafeSpeed = function (_safeSpeed) {
        this.safeSpeed = _safeSpeed;
        return this;
    };
    VehicleItemBuilder.prototype.setMaxSpeed = function (_maxSpeed) {
        this.maxSpeed = _maxSpeed;
        return this;
    };
    VehicleItemBuilder.prototype.setManeuver = function (_maneuver) {
        this.maneuver = _maneuver;
        return this;
    };
    VehicleItemBuilder.prototype.build = function () {
        var ret = new VehicleItem_class_1.VehicleItem(_super.prototype.build.call(this));
        ret.safeSpeed = this.safeSpeed;
        ret.maxSpeed = this.maxSpeed;
        ret.maneuver = this.maneuver;
        return ret;
    };
    Object.defineProperty(VehicleItemBuilder.prototype, "safeSpeed", {
        get: function () {
            return this._safeSpeed;
        },
        set: function (_safeSpeed) {
            this._safeSpeed = _safeSpeed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VehicleItemBuilder.prototype, "maxSpeed", {
        get: function () {
            return this._maxSpeed;
        },
        set: function (_maxSpeed) {
            this._maxSpeed = _maxSpeed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VehicleItemBuilder.prototype, "maneuver", {
        get: function () {
            return this._maneuver;
        },
        set: function (_maneuver) {
            this._maneuver = _maneuver;
        },
        enumerable: true,
        configurable: true
    });
    return VehicleItemBuilder;
}(AbstractItemBuilder_class_1.AbstractItemBuilder));
exports.VehicleItemBuilder = VehicleItemBuilder;
//# sourceMappingURL=VehicleItemBuilder.class.js.map