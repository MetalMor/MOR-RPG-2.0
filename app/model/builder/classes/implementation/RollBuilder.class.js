'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractRollBuilder_class_1 = require("../abstract/AbstractRollBuilder.class");
var RollImpl_class_1 = require("../../../actions/classes/implementation/RollImpl.class");
/**
 * Created by becari on 14/09/2016.
 */
var RollBuilder = (function (_super) {
    __extends(RollBuilder, _super);
    function RollBuilder(obj) {
        _super.call(this, obj);
    }
    RollBuilder.prototype.build = function () {
        return new RollImpl_class_1.RollImpl(_super.prototype.build.call(this));
    };
    return RollBuilder;
}(AbstractRollBuilder_class_1.AbstractRollBuilder));
exports.RollBuilder = RollBuilder;
//# sourceMappingURL=RollBuilder.class.js.map