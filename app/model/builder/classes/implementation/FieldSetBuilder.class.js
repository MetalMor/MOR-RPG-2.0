'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractFieldSetBuilder_class_1 = require("../abstract/AbstractFieldSetBuilder.class");
var FieldSetImpl_class_1 = require("../../../fields/classes/implementation/FieldSetImpl.class");
/**
 * Created by becari on 14/09/2016.
 */
var FieldSetBuilder = (function (_super) {
    __extends(FieldSetBuilder, _super);
    function FieldSetBuilder(obj) {
        _super.call(this, obj);
    }
    FieldSetBuilder.prototype.build = function () {
        return new FieldSetImpl_class_1.FieldSetImpl(_super.prototype.build.call(this));
    };
    return FieldSetBuilder;
}(AbstractFieldSetBuilder_class_1.AbstractFieldSetBuilder));
exports.FieldSetBuilder = FieldSetBuilder;
//# sourceMappingURL=FieldSetBuilder.class.js.map