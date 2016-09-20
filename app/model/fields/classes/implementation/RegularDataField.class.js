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
var RegularDataField = (function (_super) {
    __extends(RegularDataField, _super);
    function RegularDataField(obj) {
        _super.call(this, obj);
        this.value = obj && obj.value || 'undefined';
    }
    Object.defineProperty(RegularDataField.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (_value) {
            this._value = _value;
        },
        enumerable: true,
        configurable: true
    });
    return RegularDataField;
}(AbstractDataField_class_1.AbstractDataField));
exports.RegularDataField = RegularDataField;
//# sourceMappingURL=RegularDataField.class.js.map