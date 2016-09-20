'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractWeaponItem_class_1 = require("../abstract/AbstractWeaponItem.class");
/**
 * Created by Mor on 24/08/2016.
 */
var RangedWeaponItem = (function (_super) {
    __extends(RangedWeaponItem, _super);
    function RangedWeaponItem(obj) {
        _super.call(this, obj);
        this.range = obj && obj.range || 12;
        this.cadency = obj && obj.cadency || 3;
        this.capacity = obj && obj.capacity || 6;
    }
    Object.defineProperty(RangedWeaponItem.prototype, "range", {
        get: function () {
            return this._range;
        },
        set: function (_range) {
            this._range = _range;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangedWeaponItem.prototype, "cadency", {
        get: function () {
            return this._cadency;
        },
        set: function (_cadency) {
            this._cadency = _cadency;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangedWeaponItem.prototype, "capacity", {
        get: function () {
            return this._capacity;
        },
        set: function (_capacity) {
            this._capacity = _capacity;
        },
        enumerable: true,
        configurable: true
    });
    return RangedWeaponItem;
}(AbstractWeaponItem_class_1.AbstractWeaponItem));
exports.RangedWeaponItem = RangedWeaponItem;
//# sourceMappingURL=RangedWeaponItem.class.js.map