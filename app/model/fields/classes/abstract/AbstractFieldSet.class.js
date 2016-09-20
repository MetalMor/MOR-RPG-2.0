'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractField_class_1 = require("./AbstractField.class");
var Arrays_class_1 = require("../../../util/classes/Arrays.class");
/**
 * Created by Mor on 17/08/2016.
 */
var AbstractFieldSet = (function (_super) {
    __extends(AbstractFieldSet, _super);
    function AbstractFieldSet(obj) {
        _super.call(this, obj);
        var cast = obj;
        this.fields = cast && cast.fields || new Array();
    }
    Object.defineProperty(AbstractFieldSet.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        set: function (_fields) {
            this._fields = _fields;
        },
        enumerable: true,
        configurable: true
    });
    AbstractFieldSet.prototype.get = function (_field) {
        return Arrays_class_1.Arrays.get(this.fields, _field);
    };
    AbstractFieldSet.prototype.add = function (_field) {
        var cast = _field;
        cast.parent = this;
        return Arrays_class_1.Arrays.add(this.fields, cast);
    };
    AbstractFieldSet.prototype.remove = function (_field) {
        return Arrays_class_1.Arrays.remove(this.fields, _field);
    };
    AbstractFieldSet.prototype.set = function (_field) {
        return Arrays_class_1.Arrays.set(this.fields, _field);
    };
    return AbstractFieldSet;
}(AbstractField_class_1.AbstractField));
exports.AbstractFieldSet = AbstractFieldSet;
//# sourceMappingURL=AbstractFieldSet.class.js.map