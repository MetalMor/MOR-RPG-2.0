'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractDataFieldBuilder_class_1 = require("../abstract/AbstractDataFieldBuilder.class");
var ImageDataField_class_1 = require("../../../fields/classes/implementation/ImageDataField.class");
/**
 * Created by becari on 14/09/2016.
 */
var ImageDataFieldBuilder = (function (_super) {
    __extends(ImageDataFieldBuilder, _super);
    function ImageDataFieldBuilder(obj) {
        _super.call(this, obj);
        this.value = obj && obj.value || new Image();
    }
    ImageDataFieldBuilder.prototype.setValue = function (_value) {
        this.value = _value;
        return this;
    };
    ImageDataFieldBuilder.prototype.build = function () {
        var ret = new ImageDataField_class_1.ImageDataField(_super.prototype.build.call(this));
        ret.value = this.value;
        return ret;
    };
    Object.defineProperty(ImageDataFieldBuilder.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (_value) {
            this._value = _value;
        },
        enumerable: true,
        configurable: true
    });
    return ImageDataFieldBuilder;
}(AbstractDataFieldBuilder_class_1.AbstractDataFieldBuilder));
exports.ImageDataFieldBuilder = ImageDataFieldBuilder;
//# sourceMappingURL=ImageDataFieldBuilder.class.js.map