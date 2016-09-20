'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractStatFieldSetBuilder_class_1 = require("../abstract/AbstractStatFieldSetBuilder.class");
var StatFieldSetImpl_class_1 = require("../../../fields/classes/implementation/StatFieldSetImpl.class");
/**
 * Created by becari on 14/09/2016.
 */
var StatFieldSetBuilder = (function (_super) {
    __extends(StatFieldSetBuilder, _super);
    function StatFieldSetBuilder(obj) {
        _super.call(this, obj);
    }
    StatFieldSetBuilder.prototype.build = function () {
        return new StatFieldSetImpl_class_1.StatFieldSetImpl(_super.prototype.build.call(this));
    };
    return StatFieldSetBuilder;
}(AbstractStatFieldSetBuilder_class_1.AbstractStatFieldSetBuilder));
exports.StatFieldSetBuilder = StatFieldSetBuilder;
//# sourceMappingURL=StatFieldSetBuilder.class.js.map