'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractWeaponItemBuilder_class_1 = require("../abstract/AbstractWeaponItemBuilder.class");
/**
 * Created by becari on 14/09/2016.
 */
var RangedWeaponItemBuilder = (function (_super) {
    __extends(RangedWeaponItemBuilder, _super);
    function RangedWeaponItemBuilder(obj) {
        _super.call(this, obj);
        this.range = obj && obj.range || this.numericDataFieldBuilder.build();
        this.cadency = obj && obj.cadency || this.numericDataFieldBuilder.build();
        this.capacity = obj && obj.capacity || this.numericDataFieldBuilder.build();
    }
    RangedWeaponItemBuilder.prototype.setRange = function (_range) {
        this.range = this.createNumericDataField("Cadencia", _range);
        return this;
    };
    RangedWeaponItemBuilder.prototype.setCadency = function (_cadency) {
        this.cadency = this.createNumericDataField("Cadencia", _cadency);
        return this;
    };
    RangedWeaponItemBuilder.prototype.setCapacity = function (_capacity) {
        this.capacity = this.createNumericDataField("Capacidad", _capacity);
        return this;
    };
    RangedWeaponItemBuilder.prototype.build = function () {
        var ret = _super.prototype.build.call(this);
        ret.add(this.range);
        ret.add(this.cadency);
        ret.add(this.capacity);
        return ret;
    };
    Object.defineProperty(RangedWeaponItemBuilder.prototype, "range", {
        get: function () {
            return this._range;
        },
        set: function (_range) {
            this._range = _range;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangedWeaponItemBuilder.prototype, "cadency", {
        get: function () {
            return this._cadency;
        },
        set: function (_cadency) {
            this._cadency = _cadency;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangedWeaponItemBuilder.prototype, "capacity", {
        get: function () {
            return this._capacity;
        },
        set: function (_capacity) {
            this._capacity = _capacity;
        },
        enumerable: true,
        configurable: true
    });
    return RangedWeaponItemBuilder;
}(AbstractWeaponItemBuilder_class_1.AbstractWeaponItemBuilder));
exports.RangedWeaponItemBuilder = RangedWeaponItemBuilder;
//# sourceMappingURL=RangedWeaponItemBuilder.class.js.map