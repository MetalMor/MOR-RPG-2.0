'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractFieldBuilder_class_1 = require("./AbstractFieldBuilder.class");
var FieldSetImpl_class_1 = require("../../../fields/classes/implementation/FieldSetImpl.class");
/**
 * Created by becari on 12/09/2016.
 */
var AbstractFieldSetBuilder = (function (_super) {
    __extends(AbstractFieldSetBuilder, _super);
    function AbstractFieldSetBuilder(obj) {
        _super.call(this, obj);
        this.fields = obj && obj.fields || new Array();
    }
    AbstractFieldSetBuilder.prototype.setFields = function (_fields) {
        this.fields = _fields;
        return this;
    };
    AbstractFieldSetBuilder.prototype.build = function () {
        var ret = new FieldSetImpl_class_1.FieldSetImpl(_super.prototype.build.call(this));
        ret.fields = this.fields;
        return ret;
    };
    Object.defineProperty(AbstractFieldSetBuilder.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        set: function (_fields) {
            this._fields = _fields;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractFieldSetBuilder;
}(AbstractFieldBuilder_class_1.AbstractFieldBuilder));
exports.AbstractFieldSetBuilder = AbstractFieldSetBuilder;
//# sourceMappingURL=AbstractFieldSetBuilder.class.js.map