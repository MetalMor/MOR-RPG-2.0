'use strict';
var DamageType_enumeration_1 = require("../../../items/enumerations/DamageType.enumeration");
var DamageImpl_class_1 = require("../../../items/classes/implementation/DamageImpl.class");
/**
 * Created by becari on 14/09/2016.
 */
var AbstractDamageBuilder = (function () {
    function AbstractDamageBuilder(obj) {
        this.value = obj && obj.value || 1;
        this.type = obj && obj.type || DamageType_enumeration_1.DamageType.Bashing;
    }
    AbstractDamageBuilder.prototype.setValue = function (_value) {
        this.value = _value;
        return this;
    };
    AbstractDamageBuilder.prototype.setType = function (_type) {
        this.type = _type;
        return this;
    };
    AbstractDamageBuilder.prototype.build = function () {
        var ret = new DamageImpl_class_1.DamageImpl();
        ret.value = this.value;
        ret.type = this.type;
        return ret;
    };
    Object.defineProperty(AbstractDamageBuilder.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (_value) {
            this._value = _value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractDamageBuilder.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (_type) {
            this._type = _type;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractDamageBuilder;
}());
exports.AbstractDamageBuilder = AbstractDamageBuilder;
//# sourceMappingURL=AbstractDamageBuilder.class.js.map