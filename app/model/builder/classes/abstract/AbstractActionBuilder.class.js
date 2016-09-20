'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractIndexedGameEntityBuilder_class_1 = require("./AbstractIndexedGameEntityBuilder.class");
var ActionImpl_class_1 = require("../../../actions/classes/implementation/ActionImpl.class");
/**
 * Created by becari on 14/09/2016.
 */
var AbstractActionBuilder = (function (_super) {
    __extends(AbstractActionBuilder, _super);
    function AbstractActionBuilder(obj) {
        _super.call(this, obj);
        this.desc = obj && obj.desc || "void desc";
        this.time = obj && obj.time || new Date();
        this.rolls = obj && obj.rolls || new Array();
    }
    AbstractActionBuilder.prototype.setDesc = function (_desc) {
        this.desc = _desc;
        return this;
    };
    AbstractActionBuilder.prototype.setTime = function (_time) {
        this.time = _time;
        return this;
    };
    AbstractActionBuilder.prototype.setRolls = function (_rolls) {
        this.rolls = _rolls;
        return this;
    };
    AbstractActionBuilder.prototype.build = function () {
        var ret = new ActionImpl_class_1.ActionImpl(_super.prototype.build.call(this));
        ret.desc = this.desc;
        ret.time = this.time;
        ret.rolls = this.rolls;
        return ret;
    };
    Object.defineProperty(AbstractActionBuilder.prototype, "desc", {
        get: function () {
            return this._desc;
        },
        set: function (_desc) {
            this._desc = _desc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractActionBuilder.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (_time) {
            this._time = _time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractActionBuilder.prototype, "rolls", {
        get: function () {
            return this._rolls;
        },
        set: function (_rolls) {
            this._rolls = _rolls;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractActionBuilder;
}(AbstractIndexedGameEntityBuilder_class_1.AbstractIndexedGameEntityBuilder));
exports.AbstractActionBuilder = AbstractActionBuilder;
//# sourceMappingURL=AbstractActionBuilder.class.js.map