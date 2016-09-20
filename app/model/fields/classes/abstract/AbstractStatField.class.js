"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractField_class_1 = require("./AbstractField.class");
var ModificableImpl_class_1 = require("../../../modificators/classes/implementation/ModificableImpl.class");
/**
 * Created by becari on 17/08/2016.
 */
var AbstractStatField = (function (_super) {
    __extends(AbstractStatField, _super);
    function AbstractStatField(obj) {
        _super.call(this, obj);
        var cast = obj;
        this.min = cast && cast.min || 1;
        this.level = cast && cast.level || this.min;
        this.limit = cast && cast.limit || 10;
        this.mods = cast && cast.mods || new ModificableImpl_class_1.ModificableImpl();
    }
    AbstractStatField.prototype.getModsByType = function (_type) {
        return this.mods.getModsByType(_type);
    };
    AbstractStatField.prototype.getValue = function () {
        return this.mods.getValue(this);
    };
    AbstractStatField.prototype.grow = function () {
        if (this.level < this.limit)
            this.level++;
        return this;
    };
    AbstractStatField.prototype.addMod = function (_mod) {
        return this.mods.addMod(_mod);
    };
    AbstractStatField.prototype.removeMod = function (_mod) {
        return this.mods.removeMod(_mod);
    };
    AbstractStatField.prototype.getMod = function (_mod) {
        return this.mods.getMod(_mod);
    };
    Object.defineProperty(AbstractStatField.prototype, "mods", {
        get: function () {
            return this._mods;
        },
        set: function (_mods) {
            _mods.owner = this;
            this._mods = _mods;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractStatField.prototype, "level", {
        get: function () {
            return this._level;
        },
        set: function (_level) {
            if (_level >= (this.min || 0))
                this._level = _level;
            else
                console.log(_level + " < " + this.min);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractStatField.prototype, "limit", {
        get: function () {
            return this._limit;
        },
        set: function (_limit) {
            if (_limit >= (this.min || 0))
                this._limit = _limit;
            else
                console.log(_limit + " < " + this.min);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractStatField.prototype, "min", {
        get: function () {
            return this._min;
        },
        set: function (_min) {
            this._min = _min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractStatField.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (_parent) {
            this._parent = _parent;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractStatField;
}(AbstractField_class_1.AbstractField));
exports.AbstractStatField = AbstractStatField;
//# sourceMappingURL=AbstractStatField.class.js.map