'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractRollOperationBuilder_class_1 = require("./AbstractRollOperationBuilder.class");
var RollImpl_class_1 = require("../../../actions/classes/implementation/RollImpl.class");
/**
 * Created by becari on 14/09/2016.
 */
var AbstractRollBuilder = (function (_super) {
    __extends(AbstractRollBuilder, _super);
    function AbstractRollBuilder(obj) {
        _super.call(this, obj);
        this.res = obj && obj.res || 0;
    }
    AbstractRollBuilder.prototype.setRes = function (_res) {
        this.res = _res;
        return this;
    };
    AbstractRollBuilder.prototype.build = function () {
        var ret = new RollImpl_class_1.RollImpl(_super.prototype.build.call(this));
        ret.res = this.res;
        return ret;
    };
    Object.defineProperty(AbstractRollBuilder.prototype, "res", {
        get: function () {
            return this._res;
        },
        set: function (_res) {
            this._res = _res;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractRollBuilder;
}(AbstractRollOperationBuilder_class_1.AbstractRollOperationBuilder));
exports.AbstractRollBuilder = AbstractRollBuilder;
//# sourceMappingURL=AbstractRollBuilder.class.js.map