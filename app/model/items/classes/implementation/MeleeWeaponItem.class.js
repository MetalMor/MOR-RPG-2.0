'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractWeaponItem_class_1 = require("../abstract/AbstractWeaponItem.class");
var StatFieldImpl_class_1 = require("../../../fields/classes/implementation/StatFieldImpl.class");
/**
 * Created by Mor on 24/08/2016.
 */
var MeleeWeaponItem = (function (_super) {
    __extends(MeleeWeaponItem, _super);
    function MeleeWeaponItem(obj) {
        _super.call(this, obj);
        this.uses = obj && obj.uses || new StatFieldImpl_class_1.StatFieldImpl();
    }
    MeleeWeaponItem.prototype.getDamageRolls = function () {
        return this.uses.level + this.damage.value;
    };
    Object.defineProperty(MeleeWeaponItem.prototype, "uses", {
        get: function () {
            return this._uses;
        },
        set: function (_uses) {
            this._uses = _uses;
        },
        enumerable: true,
        configurable: true
    });
    return MeleeWeaponItem;
}(AbstractWeaponItem_class_1.AbstractWeaponItem));
exports.MeleeWeaponItem = MeleeWeaponItem;
//# sourceMappingURL=MeleeWeaponItem.class.js.map