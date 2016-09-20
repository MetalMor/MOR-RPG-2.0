'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractRollSetBuilder_class_1 = require("../abstract/AbstractRollSetBuilder.class");
var RollSetImpl_class_1 = require("../../../actions/classes/implementation/RollSetImpl.class");
/**
 * Created by becari on 14/09/2016.
 */
var RollSetBuilder = (function (_super) {
    __extends(RollSetBuilder, _super);
    function RollSetBuilder(obj) {
        _super.call(this, obj);
    }
    RollSetBuilder.prototype.build = function () {
        return new RollSetImpl_class_1.RollSetImpl(_super.prototype.build.call(this));
    };
    return RollSetBuilder;
}(AbstractRollSetBuilder_class_1.AbstractRollSetBuilder));
exports.RollSetBuilder = RollSetBuilder;
//# sourceMappingURL=RollSetBuilder.class.js.map