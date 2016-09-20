'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractFieldBuilder_class_1 = require("./AbstractFieldBuilder.class");
var WrapperFieldImpl_class_1 = require("../../../fields/classes/implementation/WrapperFieldImpl.class");
/**
 * Created by becari on 13/09/2016.
 */
var AbstractWrapperFieldBuilder = (function (_super) {
    __extends(AbstractWrapperFieldBuilder, _super);
    function AbstractWrapperFieldBuilder(obj) {
        _super.call(this, obj);
    }
    AbstractWrapperFieldBuilder.prototype.setInherits = function (_inherits) {
        this.inherits = _inherits;
        return this;
    };
    AbstractWrapperFieldBuilder.prototype.setFields = function (_fields) {
        this.fields = _fields;
        return this;
    };
    AbstractWrapperFieldBuilder.prototype.build = function () {
        var ret = new WrapperFieldImpl_class_1.WrapperFieldImpl(_super.prototype.build.call(this));
        ret.inherits = this.inherits;
        return ret;
    };
    Object.defineProperty(AbstractWrapperFieldBuilder.prototype, "inherits", {
        get: function () {
            return this._inherits;
        },
        set: function (_inherits) {
            this._inherits = _inherits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractWrapperFieldBuilder.prototype, "fields", {
        get: function () {
            return this.inherits.fields;
        },
        set: function (_fields) {
            this.inherits.fields = _fields;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractWrapperFieldBuilder;
}(AbstractFieldBuilder_class_1.AbstractFieldBuilder));
exports.AbstractWrapperFieldBuilder = AbstractWrapperFieldBuilder;
//# sourceMappingURL=AbstractWrapperFieldBuilder.class.js.map