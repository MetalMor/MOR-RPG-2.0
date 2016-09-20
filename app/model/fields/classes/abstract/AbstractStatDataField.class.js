'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RegularDataField_class_1 = require("../implementation/RegularDataField.class");
var AbstractStatField_class_1 = require("./AbstractStatField.class");
var SingletonCharacter_class_1 = require("../../../entities/classes/implementation/SingletonCharacter.class");
/**
 * Created by Mor on 15/08/2016.
 */
var AbstractStatDataField = (function (_super) {
    __extends(AbstractStatDataField, _super);
    function AbstractStatDataField(obj) {
        _super.call(this, obj);
        this.inherits = obj && obj.inherits || new RegularDataField_class_1.RegularDataField();
    }
    AbstractStatDataField.prototype.modify = function () {
        this.inherits.modify(SingletonCharacter_class_1.SingletonCharacter.instance);
    };
    AbstractStatDataField.prototype.unleash = function () {
        this.inherits.unleash();
    };
    AbstractStatDataField.prototype.addMod = function (_mod) {
        return this.inherits.addMod(_mod);
    };
    AbstractStatDataField.prototype.removeMod = function (_mod) {
        return this.inherits.removeMod(_mod);
    };
    AbstractStatDataField.prototype.getMod = function (_mod) {
        return this.inherits.getMod(_mod);
    };
    Object.defineProperty(AbstractStatDataField.prototype, "inherits", {
        get: function () {
            return this._inherits;
        },
        set: function (_inherits) {
            this._inherits = _inherits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractStatDataField.prototype, "grants", {
        get: function () {
            return this.inherits.grants;
        },
        set: function (_grants) {
            this.inherits.grants = _grants;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractStatDataField;
}(AbstractStatField_class_1.AbstractStatField));
exports.AbstractStatDataField = AbstractStatDataField;
//# sourceMappingURL=AbstractStatDataField.class.js.map