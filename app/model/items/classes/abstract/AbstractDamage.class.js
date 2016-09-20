'use strict';
var DamageType_enumeration_1 = require("../../enumerations/DamageType.enumeration");
/**
 * Created by Mor on 24/08/2016.
 */
var AbstractDamage = (function () {
    function AbstractDamage(obj) {
        this.value = obj && obj.value || 1;
        this.type = obj && obj.type || DamageType_enumeration_1.DamageType.Bashing;
    }
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
}());
exports.AbstractDamage = AbstractDamage;
//# sourceMappingURL=AbstractDamage.class.js.map