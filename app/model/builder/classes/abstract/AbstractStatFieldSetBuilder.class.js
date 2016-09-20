'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractFieldSetBuilder_class_1 = require("./AbstractFieldSetBuilder.class");
var ModificableImpl_class_1 = require("../../../modificators/classes/implementation/ModificableImpl.class");
var StatFieldSetImpl_class_1 = require("../../../fields/classes/implementation/StatFieldSetImpl.class");
/**
 * Created by becari on 12/09/2016.
 */
var AbstractStatFieldSetBuilder = (function (_super) {
    __extends(AbstractStatFieldSetBuilder, _super);
    function AbstractStatFieldSetBuilder(obj) {
        _super.call(this, obj);
        this.mods = obj && obj.mods || new ModificableImpl_class_1.ModificableImpl();
        this.initPoints = obj && obj.initPoints || 0;
    }
    AbstractStatFieldSetBuilder.prototype.setMods = function (_mods) {
        this.mods = _mods;
        return this;
    };
    AbstractStatFieldSetBuilder.prototype.setInitPoints = function (_initPoints) {
        this.initPoints = _initPoints;
        return this;
    };
    AbstractStatFieldSetBuilder.prototype.build = function () {
        var ret = new StatFieldSetImpl_class_1.StatFieldSetImpl(_super.prototype.build.call(this));
        ret.mods = this.mods;
        ret.initPoints = this.initPoints;
        return ret;
    };
    Object.defineProperty(AbstractStatFieldSetBuilder.prototype, "mods", {
        get: function () {
            return this._mods;
        },
        set: function (_mods) {
            this._mods = _mods;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractStatFieldSetBuilder.prototype, "initPoints", {
        get: function () {
            return this._initPoints;
        },
        set: function (_initPoints) {
            this._initPoints = _initPoints;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractStatFieldSetBuilder;
}(AbstractFieldSetBuilder_class_1.AbstractFieldSetBuilder));
exports.AbstractStatFieldSetBuilder = AbstractStatFieldSetBuilder;
//# sourceMappingURL=AbstractStatFieldSetBuilder.class.js.map