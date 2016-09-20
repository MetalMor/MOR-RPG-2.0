'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractDataFieldBuilder_class_1 = require("../abstract/AbstractDataFieldBuilder.class");
var NumericDataField_class_1 = require("../../../fields/classes/implementation/NumericDataField.class");
/**
 * Created by becari on 14/09/2016.
 */
var NumericDataFieldBuilder = (function (_super) {
    __extends(NumericDataFieldBuilder, _super);
    function NumericDataFieldBuilder(obj) {
        _super.call(this, obj);
        this.value = obj && obj.value || 0;
    }
    NumericDataFieldBuilder.prototype.setValue = function (_value) {
        this.value = _value;
        return this;
    };
    NumericDataFieldBuilder.prototype.build = function () {
        var ret = new NumericDataField_class_1.NumericDataField(_super.prototype.build.call(this));
        ret.value = this.value;
        return ret;
    };
    Object.defineProperty(NumericDataFieldBuilder.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (_value) {
            this._value = _value;
        },
        enumerable: true,
        configurable: true
    });
    return NumericDataFieldBuilder;
}(AbstractDataFieldBuilder_class_1.AbstractDataFieldBuilder));
exports.NumericDataFieldBuilder = NumericDataFieldBuilder;
//# sourceMappingURL=NumericDataFieldBuilder.class.js.map