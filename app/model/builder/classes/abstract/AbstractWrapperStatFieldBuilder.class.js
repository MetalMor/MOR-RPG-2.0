'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractWrapperFieldBuilder_class_1 = require("./AbstractWrapperFieldBuilder.class");
var WrapperFieldImpl_class_1 = require("../../../fields/classes/implementation/WrapperFieldImpl.class");
var WrapperStatFieldImpl_class_1 = require("../../../fields/classes/implementation/WrapperStatFieldImpl.class");
/**
 * Created by becari on 13/09/2016.
 */
var AbstractWrapperStatFieldBuilder = (function (_super) {
    __extends(AbstractWrapperStatFieldBuilder, _super);
    function AbstractWrapperStatFieldBuilder(obj) {
        _super.call(this, obj);
        this.inherits = obj && obj.inherits || new WrapperFieldImpl_class_1.WrapperFieldImpl();
    }
    AbstractWrapperStatFieldBuilder.prototype.setInherits = function (_inherits) {
        this.inherits = _inherits;
        return this;
    };
    AbstractWrapperStatFieldBuilder.prototype.setFields = function (_fields) {
        this.fields = _fields;
        return this;
    };
    AbstractWrapperStatFieldBuilder.prototype.build = function () {
        var ret = new WrapperStatFieldImpl_class_1.WrapperStatFieldImpl(_super.prototype.build.call(this));
        ret.inherits = this.inherits;
        return ret;
    };
    Object.defineProperty(AbstractWrapperStatFieldBuilder.prototype, "inherits", {
        get: function () {
            return this._inherits;
        },
        set: function (_inherits) {
            this._inherits = _inherits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractWrapperStatFieldBuilder.prototype, "fields", {
        get: function () {
            return this.inherits.fields;
        },
        set: function (_fields) {
            this.inherits.fields = _fields;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractWrapperStatFieldBuilder;
}(AbstractWrapperFieldBuilder_class_1.AbstractWrapperFieldBuilder));
exports.AbstractWrapperStatFieldBuilder = AbstractWrapperStatFieldBuilder;
//# sourceMappingURL=AbstractWrapperStatFieldBuilder.class.js.map