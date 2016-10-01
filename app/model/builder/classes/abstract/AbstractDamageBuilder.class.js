'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DamageType_enumeration_1 = require("../../../items/enumerations/DamageType.enumeration");
var DamageImpl_class_1 = require("../../../items/classes/implementation/DamageImpl.class");
var AbstractGameEntityBuilder_class_1 = require("./AbstractGameEntityBuilder.class");
/**
 * Created by becari on 14/09/2016.
 */
var AbstractDamageBuilder = (function (_super) {
    __extends(AbstractDamageBuilder, _super);
    function AbstractDamageBuilder(obj) {
        _super.call(this, obj);
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
}(AbstractGameEntityBuilder_class_1.AbstractGameEntityBuilder));
exports.AbstractDamageBuilder = AbstractDamageBuilder;
//# sourceMappingURL=AbstractDamageBuilder.class.js.map