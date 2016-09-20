'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractFieldBuilder_class_1 = require("./AbstractFieldBuilder.class");
var ModificableImpl_class_1 = require("../../../modificators/classes/implementation/ModificableImpl.class");
var StatFieldImpl_class_1 = require("../../../fields/classes/implementation/StatFieldImpl.class");
/**
 * Created by becari on 12/09/2016.
 */
var AbstractStatFieldBuilder = (function (_super) {
    __extends(AbstractStatFieldBuilder, _super);
    function AbstractStatFieldBuilder(obj) {
        _super.call(this, obj);
        this.min = obj && obj.min || 1;
        this.level = obj && obj.level || this.min;
        this.limit = obj && obj.limit || 10;
        this.mods = obj && obj.mods || new ModificableImpl_class_1.ModificableImpl();
    }
    AbstractStatFieldBuilder.prototype.setMods = function (_mods) {
        this.mods = _mods;
        return this;
    };
    AbstractStatFieldBuilder.prototype.setLevel = function (_level) {
        this.level = _level;
        return this;
    };
    AbstractStatFieldBuilder.prototype.setLimit = function (_limit) {
        this.limit = _limit;
        return this;
    };
    AbstractStatFieldBuilder.prototype.setMin = function (_min) {
        this.min = _min;
        return this;
    };
    AbstractStatFieldBuilder.prototype.build = function () {
        var ret = new StatFieldImpl_class_1.StatFieldImpl(_super.prototype.build.call(this));
        ret.mods = this.mods;
        ret.level = this.level;
        ret.limit = this.limit;
        ret.min = this.min;
        return ret;
    };
    Object.defineProperty(AbstractStatFieldBuilder.prototype, "mods", {
        get: function () {
            return this._mods;
        },
        set: function (_mods) {
            this._mods = _mods;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractStatFieldBuilder.prototype, "level", {
        get: function () {
            return this._level;
        },
        set: function (_level) {
            this._level = _level;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractStatFieldBuilder.prototype, "limit", {
        get: function () {
            return this._limit;
        },
        set: function (_limit) {
            this._limit = _limit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractStatFieldBuilder.prototype, "min", {
        get: function () {
            return this._min;
        },
        set: function (_min) {
            this._min = _min;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractStatFieldBuilder;
}(AbstractFieldBuilder_class_1.AbstractFieldBuilder));
exports.AbstractStatFieldBuilder = AbstractStatFieldBuilder;
//# sourceMappingURL=AbstractStatFieldBuilder.class.js.map