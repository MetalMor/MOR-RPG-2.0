'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DamageType_enumeration_1 = require("../../enumerations/DamageType.enumeration");
var Constants_module_1 = require("../../../util/modules/Constants.module");
var AbstractGameEntity_class_1 = require("../../../entities/classes/abstract/AbstractGameEntity.class");
/**
 * Created by Mor on 24/08/2016.
 */
var AbstractDamage = (function (_super) {
    __extends(AbstractDamage, _super);
    function AbstractDamage(obj) {
        _super.call(this, obj);
        this.value = obj && obj.value || 1;
        this.type = obj && obj.type || DamageType_enumeration_1.DamageType.Bashing;
    }
    AbstractDamage.prototype.getDamageTypeAsString = function () {
        var ret;
        switch (this.type) {
            case DamageType_enumeration_1.DamageType.Bashing:
                ret = Constants_module_1.Constants.Types.TYPE_DMG_BASHING;
                break;
            case DamageType_enumeration_1.DamageType.Lethal:
                ret = Constants_module_1.Constants.Types.TYPE_DMG_LETHAL;
                break;
            case DamageType_enumeration_1.DamageType.Aggravated:
                ret = Constants_module_1.Constants.Types.TYPE_DMG_AGGRAVATED;
                break;
            default:
                throw new Error(Constants_module_1.Constants.Errors.ERR_DMGTYPE);
        }
        return ret;
    };
    Object.defineProperty(AbstractDamage.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (_value) {
            this._value = _value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractDamage.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (_type) {
            this._type = _type;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractDamage;
}(AbstractGameEntity_class_1.AbstractGameEntity));
exports.AbstractDamage = AbstractDamage;
//# sourceMappingURL=AbstractDamage.class.js.map