'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractWeaponItemBuilder_class_1 = require("../abstract/AbstractWeaponItemBuilder.class");
var MeleeWeaponItem_class_1 = require("../../../items/classes/implementation/MeleeWeaponItem.class");
var StatFieldImpl_class_1 = require("../../../fields/classes/implementation/StatFieldImpl.class");
/**
 * Created by becari on 14/09/2016.
 */
var MeleeWeaponItemBuilder = (function (_super) {
    __extends(MeleeWeaponItemBuilder, _super);
    function MeleeWeaponItemBuilder(obj) {
        _super.call(this, obj);
        this.uses = obj && obj.uses || new StatFieldImpl_class_1.StatFieldImpl();
    }
    MeleeWeaponItemBuilder.prototype.setUses = function (_uses) {
        this.uses = _uses;
        return this;
    };
    MeleeWeaponItemBuilder.prototype.build = function () {
        var ret = new MeleeWeaponItem_class_1.MeleeWeaponItem(_super.prototype.build.call(this));
        ret.uses = this.uses;
        return ret;
    };
    Object.defineProperty(MeleeWeaponItemBuilder.prototype, "uses", {
        get: function () {
            return this._uses;
        },
        set: function (_uses) {
            this._uses = _uses;
        },
        enumerable: true,
        configurable: true
    });
    return MeleeWeaponItemBuilder;
}(AbstractWeaponItemBuilder_class_1.AbstractWeaponItemBuilder));
exports.MeleeWeaponItemBuilder = MeleeWeaponItemBuilder;
//# sourceMappingURL=MeleeWeaponItemBuilder.class.js.map