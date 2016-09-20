'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractField_class_1 = require("./AbstractField.class");
var StatModificatorSourceImpl_class_1 = require("../../../modificators/classes/implementation/StatModificatorSourceImpl.class");
var SingletonCharacter_class_1 = require("../../../entities/classes/implementation/SingletonCharacter.class");
/**
 * Created by Mor on 15/08/2016.
 */
var AbstractDataField = (function (_super) {
    __extends(AbstractDataField, _super);
    function AbstractDataField(obj) {
        _super.call(this, obj);
        this.grants = obj && obj.grants || new StatModificatorSourceImpl_class_1.StatModificatorSourceImpl();
    }
    AbstractDataField.prototype.addMod = function (_mod) {
        return this.grants.addMod(_mod);
    };
    AbstractDataField.prototype.removeMod = function (_mod) {
        return this.grants.removeMod(_mod);
    };
    AbstractDataField.prototype.getMod = function (_mod) {
        return this.grants.getMod(_mod);
    };
    AbstractDataField.prototype.modify = function () {
        this.grants.modify(SingletonCharacter_class_1.SingletonCharacter.instance);
    };
    AbstractDataField.prototype.unleash = function () {
        this.grants.unleash();
    };
    Object.defineProperty(AbstractDataField.prototype, "grants", {
        get: function () {
            return this._grants;
        },
        set: function (_grants) {
            _grants.owner = this;
            this._grants = _grants;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractDataField;
}(AbstractField_class_1.AbstractField));
exports.AbstractDataField = AbstractDataField;
//# sourceMappingURL=AbstractDataField.class.js.map