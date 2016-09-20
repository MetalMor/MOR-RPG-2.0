"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractDataField_class_1 = require("../abstract/AbstractDataField.class");
/**
 * Created by becari on 18/08/2016.
 */
var ImageDataField = (function (_super) {
    __extends(ImageDataField, _super);
    function ImageDataField(obj) {
        _super.call(this, obj);
        this.value = obj && obj.value || new Image();
    }
    Object.defineProperty(ImageDataField.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (_value) {
            this._value = _value;
        },
        enumerable: true,
        configurable: true
    });
    return ImageDataField;
}(AbstractDataField_class_1.AbstractDataField));
exports.ImageDataField = ImageDataField;
//# sourceMappingURL=ImageDataField.class.js.map