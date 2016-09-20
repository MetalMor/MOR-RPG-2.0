'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractDataFieldBuilder_class_1 = require("../abstract/AbstractDataFieldBuilder.class");
var RegularDataField_class_1 = require("../../../fields/classes/implementation/RegularDataField.class");
/**
 * Created by becari on 14/09/2016.
 */
var RegularDataFieldBuilder = (function (_super) {
    __extends(RegularDataFieldBuilder, _super);
    function RegularDataFieldBuilder(obj) {
        _super.call(this, obj);
        this.value = obj && obj.value || 'undefined';
    }
    RegularDataFieldBuilder.prototype.setValue = function (_value) {
        this.value = _value;
        return this;
    };
    RegularDataFieldBuilder.prototype.build = function () {
        var ret = new RegularDataField_class_1.RegularDataField(_super.prototype.build.call(this));
        ret.value = this.value;
        return ret;
    };
    Object.defineProperty(RegularDataFieldBuilder.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (_value) {
            this._value = _value;
        },
        enumerable: true,
        configurable: true
    });
    return RegularDataFieldBuilder;
}(AbstractDataFieldBuilder_class_1.AbstractDataFieldBuilder));
exports.RegularDataFieldBuilder = RegularDataFieldBuilder;
//# sourceMappingURL=RegularDataFieldBuilder.class.js.map