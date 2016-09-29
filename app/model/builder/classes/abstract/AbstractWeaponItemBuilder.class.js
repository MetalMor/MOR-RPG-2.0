'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractItemBuilder_class_1 = require("./AbstractItemBuilder.class");
var DamageImpl_class_1 = require("../../../items/classes/implementation/DamageImpl.class");
var WeaponItemImpl_class_1 = require("../../../items/classes/implementation/WeaponItemImpl.class");
/**
 * Created by becari on 14/09/2016.
 */
var AbstractWeaponItemBuilder = (function (_super) {
    __extends(AbstractWeaponItemBuilder, _super);
    function AbstractWeaponItemBuilder(obj) {
        _super.call(this, obj);
        this.damage = obj && obj.damage || new DamageImpl_class_1.DamageImpl();
    }
    AbstractWeaponItemBuilder.prototype.setDamage = function (_damage) {
        this.damage = _damage;
        return this;
    };
    AbstractWeaponItemBuilder.prototype.build = function () {
        var ret = new WeaponItemImpl_class_1.WeaponItemImpl(_super.prototype.build.call(this));
        ret.damage = this.damage;
        return ret;
    };
    Object.defineProperty(AbstractWeaponItemBuilder.prototype, "damage", {
        get: function () {
            return this._damage;
        },
        set: function (_damage) {
            this._damage = _damage;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractWeaponItemBuilder;
}(AbstractItemBuilder_class_1.AbstractItemBuilder));
exports.AbstractWeaponItemBuilder = AbstractWeaponItemBuilder;
//# sourceMappingURL=AbstractWeaponItemBuilder.class.js.map