'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractFieldSet_class_1 = require("./AbstractFieldSet.class");
var ModificableImpl_class_1 = require("../../../modificators/classes/implementation/ModificableImpl.class");
/**
 * Created by Mor on 17/08/2016.
 */
var AbstractStatFieldSet = (function (_super) {
    __extends(AbstractStatFieldSet, _super);
    function AbstractStatFieldSet(obj) {
        _super.call(this, obj);
        this.mods = obj && obj.mods || new ModificableImpl_class_1.ModificableImpl();
        this.initPoints = obj && obj.initPoints || 0;
    }
    AbstractStatFieldSet.prototype.getValue = function () {
        return this.mods.getValue(this);
    };
    AbstractStatFieldSet.prototype.getModsByType = function (_type) {
        return this.mods.getModsByType(_type);
    };
    AbstractStatFieldSet.prototype.addMod = function (_mod) {
        return this.mods.addMod(_mod);
    };
    AbstractStatFieldSet.prototype.removeMod = function (_mod) {
        return this.mods.removeMod(_mod);
    };
    AbstractStatFieldSet.prototype.getMod = function (_mod) {
        return this.mods.getMod(_mod);
    };
    Object.defineProperty(AbstractStatFieldSet.prototype, "mods", {
        get: function () {
            return this._mods;
        },
        set: function (_mods) {
            this._mods = _mods;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractStatFieldSet.prototype, "initPoints", {
        get: function () {
            return this._initPoints;
        },
        set: function (_initPoints) {
            this._initPoints = _initPoints;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractStatFieldSet;
}(AbstractFieldSet_class_1.AbstractFieldSet));
exports.AbstractStatFieldSet = AbstractStatFieldSet;
//# sourceMappingURL=AbstractStatFieldSet.class.js.map