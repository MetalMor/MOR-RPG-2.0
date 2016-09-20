'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractStatFieldBuilder_class_1 = require("../abstract/AbstractStatFieldBuilder.class");
var StatFieldImpl_class_1 = require("../../../fields/classes/implementation/StatFieldImpl.class");
/**
 * Created by becari on 14/09/2016.
 */
var StatFieldBuilder = (function (_super) {
    __extends(StatFieldBuilder, _super);
    function StatFieldBuilder(obj) {
        _super.call(this, obj);
    }
    StatFieldBuilder.prototype.build = function () {
        return new StatFieldImpl_class_1.StatFieldImpl(_super.prototype.build.call(this));
    };
    return StatFieldBuilder;
}(AbstractStatFieldBuilder_class_1.AbstractStatFieldBuilder));
exports.StatFieldBuilder = StatFieldBuilder;
//# sourceMappingURL=StatFieldBuilder.class.js.map