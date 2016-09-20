'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ArmorItem_class_1 = require("../../../items/classes/implementation/ArmorItem.class");
var AbstractItemBuilder_class_1 = require("../abstract/AbstractItemBuilder.class");
/**
 * Created by becari on 14/09/2016.
 */
var ArmorItemBuilder = (function (_super) {
    __extends(ArmorItemBuilder, _super);
    function ArmorItemBuilder(obj) {
        _super.call(this, obj);
        this.value = obj && obj.value || 1;
        this.penalty = obj && obj.penalty || 0;
    }
    ArmorItemBuilder.prototype.setValue = function (_value) {
        this.value = _value;
        return this;
    };
    ArmorItemBuilder.prototype.setPenalty = function (_penalty) {
        this.penalty = _penalty;
        return this;
    };
    ArmorItemBuilder.prototype.build = function () {
        var ret = new ArmorItem_class_1.ArmorItem(_super.prototype.build.call(this));
        ret.value = this.value;
        ret.penalty = this.penalty;
        return ret;
    };
    Object.defineProperty(ArmorItemBuilder.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (_value) {
            this._value = _value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArmorItemBuilder.prototype, "penalty", {
        get: function () {
            return this._penalty;
        },
        set: function (_penalty) {
            this._penalty = _penalty;
        },
        enumerable: true,
        configurable: true
    });
    return ArmorItemBuilder;
}(AbstractItemBuilder_class_1.AbstractItemBuilder));
exports.ArmorItemBuilder = ArmorItemBuilder;
//# sourceMappingURL=ArmorItemBuilder.class.js.map