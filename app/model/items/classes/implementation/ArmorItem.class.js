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
var ArmorItem = (function (_super) {
    __extends(ArmorItem, _super);
    function ArmorItem(obj) {
        _super.call(this, obj);
        this.value = obj && obj.value || 1;
        this.penalty = obj && obj.penalty || 0;
    }
    Object.defineProperty(ArmorItem.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (_value) {
            this._value = _value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArmorItem.prototype, "penalty", {
        get: function () {
            return this._penalty;
        },
        set: function (_penalty) {
            this._penalty = _penalty;
        },
        enumerable: true,
        configurable: true
    });
    return ArmorItem;
}(AbstractItem_class_1.AbstractItem));
exports.ArmorItem = ArmorItem;
//# sourceMappingURL=ArmorItem.class.js.map