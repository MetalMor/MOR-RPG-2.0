'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractItem_class_1 = require("./AbstractItem.class");
var DamageImpl_class_1 = require("../implementation/DamageImpl.class");
/**
 * Created by Mor on 24/08/2016.
 */
var AbstractWeaponItem = (function (_super) {
    __extends(AbstractWeaponItem, _super);
    function AbstractWeaponItem(obj) {
        _super.call(this, obj);
        this.damage = obj && obj.damage || new DamageImpl_class_1.DamageImpl();
        this.dif = obj && obj.dif || 6;
    }
    AbstractWeaponItem.prototype.getDamageRolls = function () {
        return this.damage.value;
    };
    Object.defineProperty(AbstractWeaponItem.prototype, "damage", {
        get: function () {
            return this._damage;
        },
        set: function (_damage) {
            this._damage = _damage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractWeaponItem.prototype, "dif", {
        get: function () {
            return this._dif;
        },
        set: function (_dif) {
            this._dif = _dif;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractWeaponItem;
}(AbstractItem_class_1.AbstractItem));
exports.AbstractWeaponItem = AbstractWeaponItem;
//# sourceMappingURL=AbstractWeaponItem.class.js.map