'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractStatDataFieldBuilder_class_1 = require("../abstract/AbstractStatDataFieldBuilder.class");
var BackgroundField_class_1 = require("../../../fields/classes/implementation/BackgroundField.class");
/**
 * Created by becari on 14/09/2016.
 */
var BackgroundFieldBuilder = (function (_super) {
    __extends(BackgroundFieldBuilder, _super);
    function BackgroundFieldBuilder(obj) {
        _super.call(this, obj);
    }
    BackgroundFieldBuilder.prototype.build = function () {
        return new BackgroundField_class_1.BackgroundField(_super.prototype.build.call(this));
    };
    return BackgroundFieldBuilder;
}(AbstractStatDataFieldBuilder_class_1.AbstractStatDataFieldBuilder));
exports.BackgroundFieldBuilder = BackgroundFieldBuilder;
//# sourceMappingURL=BackgroundFieldBuilder.class.js.map