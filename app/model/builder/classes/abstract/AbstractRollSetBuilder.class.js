'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractRollOperationBuilder_class_1 = require("./AbstractRollOperationBuilder.class");
var RollSetImpl_class_1 = require("../../../actions/classes/implementation/RollSetImpl.class");
/**
 * Created by becari on 14/09/2016.
 */
var AbstractRollSetBuilder = (function (_super) {
    __extends(AbstractRollSetBuilder, _super);
    function AbstractRollSetBuilder(obj) {
        _super.call(this, obj);
        this.rolls = obj && obj.rolls || new Array();
    }
    AbstractRollSetBuilder.prototype.setRolls = function (_rolls) {
        this.rolls = _rolls;
        return this;
    };
    AbstractRollSetBuilder.prototype.build = function () {
        var ret = new RollSetImpl_class_1.RollSetImpl(_super.prototype.build.call(this));
        ret.rolls = this.rolls;
        return ret;
    };
    Object.defineProperty(AbstractRollSetBuilder.prototype, "rolls", {
        get: function () {
            return this._rolls;
        },
        set: function (_rolls) {
            this._rolls = _rolls;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractRollSetBuilder;
}(AbstractRollOperationBuilder_class_1.AbstractRollOperationBuilder));
exports.AbstractRollSetBuilder = AbstractRollSetBuilder;
//# sourceMappingURL=AbstractRollSetBuilder.class.js.map