'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractWrapperFieldBuilder_class_1 = require("../abstract/AbstractWrapperFieldBuilder.class");
var WrapperFieldImpl_class_1 = require("../../../fields/classes/implementation/WrapperFieldImpl.class");
/**
 * Created by becari on 14/09/2016.
 */
var WrapperFieldBuilder = (function (_super) {
    __extends(WrapperFieldBuilder, _super);
    function WrapperFieldBuilder(obj) {
        _super.call(this, obj);
    }
    WrapperFieldBuilder.prototype.build = function () {
        return new WrapperFieldImpl_class_1.WrapperFieldImpl(_super.prototype.build.call(this));
    };
    return WrapperFieldBuilder;
}(AbstractWrapperFieldBuilder_class_1.AbstractWrapperFieldBuilder));
exports.WrapperFieldBuilder = WrapperFieldBuilder;
//# sourceMappingURL=WrapperFieldBuilder.class.js.map