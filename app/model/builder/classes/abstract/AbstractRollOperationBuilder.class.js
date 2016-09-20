'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractGameEntityBuilder_class_1 = require("./AbstractGameEntityBuilder.class");
var RollOperationImpl_class_1 = require("../../../actions/classes/implementation/RollOperationImpl.class");
/**
 * Created by becari on 14/09/2016.
 */
var AbstractRollOperationBuilder = (function (_super) {
    __extends(AbstractRollOperationBuilder, _super);
    function AbstractRollOperationBuilder(obj) {
        _super.call(this, obj);
        this.dif = obj && obj.dif || 6;
        this.label = obj && obj.label || "unnamed";
        this.implies = obj && obj.implies || new Array();
    }
    AbstractRollOperationBuilder.prototype.setDif = function (_dif) {
        this.dif = _dif;
        return this;
    };
    AbstractRollOperationBuilder.prototype.setLabel = function (_label) {
        this.label = _label;
        return this;
    };
    AbstractRollOperationBuilder.prototype.setImplies = function (_implies) {
        this.implies = _implies;
        return this;
    };
    AbstractRollOperationBuilder.prototype.build = function () {
        var ret = new RollOperationImpl_class_1.RollOperationImpl(_super.prototype.build.call(this));
        ret.dif = this.dif;
        ret.label = this.label;
        ret.implies = this.implies;
        return ret;
    };
    Object.defineProperty(AbstractRollOperationBuilder.prototype, "dif", {
        get: function () {
            return this._dif;
        },
        set: function (_dif) {
            this._dif = _dif;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractRollOperationBuilder.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (_label) {
            this._label = _label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractRollOperationBuilder.prototype, "implies", {
        get: function () {
            return this._implies;
        },
        set: function (_implies) {
            this._implies = _implies;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractRollOperationBuilder;
}(AbstractGameEntityBuilder_class_1.AbstractGameEntityBuilder));
exports.AbstractRollOperationBuilder = AbstractRollOperationBuilder;
//# sourceMappingURL=AbstractRollOperationBuilder.class.js.map