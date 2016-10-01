'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var WrapperFieldImpl_class_1 = require("../implementation/WrapperFieldImpl.class");
var AbstractStatField_class_1 = require("./AbstractStatField.class");
/**
 * Created by Mor on 17/08/2016.
 */
var AbstractWrapperStatField = (function (_super) {
    __extends(AbstractWrapperStatField, _super);
    function AbstractWrapperStatField(obj) {
        _super.call(this, obj);
        var cast = obj;
        this.inherits = obj && cast.inherits || new WrapperFieldImpl_class_1.WrapperFieldImpl();
    }
    Object.defineProperty(AbstractWrapperStatField.prototype, "inherits", {
        get: function () {
            return this._inherits;
        },
        set: function (_inherits) {
            this._inherits = _inherits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractWrapperStatField.prototype, "fields", {
        get: function () {
            return this.inherits.fields;
        },
        set: function (_fields) {
            this.inherits.fields = _fields;
        },
        enumerable: true,
        configurable: true
    });
    AbstractWrapperStatField.prototype.get = function (field) {
        return this.inherits.get(field);
    };
    AbstractWrapperStatField.prototype.set = function (field) {
        return this.inherits.set(field);
    };
    AbstractWrapperStatField.prototype.add = function (field) {
        return this.inherits.add(field);
    };
    AbstractWrapperStatField.prototype.addAll = function (fields) {
        return this.inherits.addAll(fields);
    };
    AbstractWrapperStatField.prototype.remove = function (field) {
        return this.inherits.remove(field);
    };
    return AbstractWrapperStatField;
}(AbstractStatField_class_1.AbstractStatField));
exports.AbstractWrapperStatField = AbstractWrapperStatField;
//# sourceMappingURL=AbstractWrapperStatField.class.js.map