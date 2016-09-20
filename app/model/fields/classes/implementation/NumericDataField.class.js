'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractDataField_class_1 = require("../abstract/AbstractDataField.class");
/**
 * Created by Mor on 17/08/2016.
 */
var NumericDataField = (function (_super) {
    __extends(NumericDataField, _super);
    function NumericDataField(obj) {
        _super.call(this, obj);
        this.value = obj && obj.value || 0;
    }
    Object.defineProperty(NumericDataField.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (_value) {
            this._value = _value;
        },
        enumerable: true,
        configurable: true
    });
    return NumericDataField;
}(AbstractDataField_class_1.AbstractDataField));
exports.NumericDataField = NumericDataField;
//# sourceMappingURL=NumericDataField.class.js.map