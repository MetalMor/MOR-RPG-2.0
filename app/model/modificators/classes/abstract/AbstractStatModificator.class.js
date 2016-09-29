'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StatModificatorType_enum_1 = require("../../enumerations/StatModificatorType.enum");
var StatFieldImpl_class_1 = require("../../../fields/classes/implementation/StatFieldImpl.class");
var AbstractGameEntity_class_1 = require("../../../entities/classes/abstract/AbstractGameEntity.class");
var Constants_module_1 = require("../../../util/modules/Constants.module");
/**
 * Created by Mor on 24/08/2016.
 */
var AbstractStatModificator = (function (_super) {
    __extends(AbstractStatModificator, _super);
    function AbstractStatModificator(obj) {
        _super.call(this, obj);
        this.modifies = obj && obj.modifies || new StatFieldImpl_class_1.StatFieldImpl();
        this.type = obj && obj.type || StatModificatorType_enum_1.StatModificatorType.Level;
        this.value = obj && obj.value || 0;
        //this.source = obj && obj.source || source;
    }
    AbstractStatModificator.prototype.getTypeAsString = function () {
        switch (this.type) {
            case StatModificatorType_enum_1.StatModificatorType.Level:
                return Constants_module_1.Constants.Types.TYPE_MOD_LEVEL;
            case StatModificatorType_enum_1.StatModificatorType.Difficulty:
                return Constants_module_1.Constants.Types.TYPE_MOD_DIFFICULTY;
            default:
                throw new Error(Constants_module_1.Constants.Errors.ERR_MODTYPE);
        }
    };
    AbstractStatModificator.prototype.isType = function (_type) {
        return this.type === _type;
    };
    Object.defineProperty(AbstractStatModificator.prototype, "modifies", {
        get: function () {
            return this._modifies;
        },
        set: function (_modifies) {
            this._modifies = _modifies;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractStatModificator.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (_type) {
            this._type = _type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractStatModificator.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (_value) {
            this._value = _value;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractStatModificator;
}(AbstractGameEntity_class_1.AbstractGameEntity));
exports.AbstractStatModificator = AbstractStatModificator;
//# sourceMappingURL=AbstractStatModificator.class.js.map