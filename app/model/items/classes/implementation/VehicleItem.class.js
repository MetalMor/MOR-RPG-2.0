'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractItem_class_1 = require("../abstract/AbstractItem.class");
/**
 * Created by Mor on 24/08/2016.
 */
var VehicleItem = (function (_super) {
    __extends(VehicleItem, _super);
    function VehicleItem(obj) {
        _super.call(this, obj);
        this.safeSpeed = obj && obj.safeSpeed || 95;
        this.maxSpeed = obj && obj.maxSpeed || 145;
        this.maneuver = obj && obj.maneuver || 3;
    }
    Object.defineProperty(VehicleItem.prototype, "safeSpeed", {
        get: function () {
            return this._safeSpeed;
        },
        set: function (_safeSpeed) {
            this._safeSpeed = _safeSpeed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VehicleItem.prototype, "maxSpeed", {
        get: function () {
            return this._maxSpeed;
        },
        set: function (_maxSpeed) {
            this._maxSpeed = _maxSpeed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VehicleItem.prototype, "maneuver", {
        get: function () {
            return this._maneuver;
        },
        set: function (_maneuver) {
            this._maneuver = _maneuver;
        },
        enumerable: true,
        configurable: true
    });
    return VehicleItem;
}(AbstractItem_class_1.AbstractItem));
exports.VehicleItem = VehicleItem;
//# sourceMappingURL=VehicleItem.class.js.map