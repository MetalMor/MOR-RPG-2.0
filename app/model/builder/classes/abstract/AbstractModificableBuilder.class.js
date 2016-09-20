'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractGameEntityBuilder_class_1 = require("./AbstractGameEntityBuilder.class");
var StatFieldImpl_class_1 = require("../../../fields/classes/implementation/StatFieldImpl.class");
var ModificableImpl_class_1 = require("../../../modificators/classes/implementation/ModificableImpl.class");
/**
 * Created by becari on 13/09/2016.
 */
var AbstractModificableBuilder = (function (_super) {
    __extends(AbstractModificableBuilder, _super);
    function AbstractModificableBuilder(obj) {
        _super.call(this, obj);
        this.mods = obj && obj.mods || new Array();
        this.idCounter = obj && obj.idCounter || 0;
        this.owner = obj && obj.owner || new StatFieldImpl_class_1.StatFieldImpl();
    }
    AbstractModificableBuilder.prototype.setMods = function (_mods) {
        this.mods = _mods;
        return this;
    };
    AbstractModificableBuilder.prototype.setOwner = function (_owner) {
        this.owner = _owner;
        return this;
    };
    AbstractModificableBuilder.prototype.setIdCounter = function (_idCounter) {
        this.idCounter = _idCounter;
        return this;
    };
    AbstractModificableBuilder.prototype.build = function () {
        var ret = new ModificableImpl_class_1.ModificableImpl(_super.prototype.build.call(this));
        ret.mods = this.mods;
        ret.owner = this.owner;
        ret.idCounter = this.idCounter;
        return ret;
    };
    Object.defineProperty(AbstractModificableBuilder.prototype, "mods", {
        get: function () {
            return this._mods;
        },
        set: function (_mods) {
            this._mods = _mods;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractModificableBuilder.prototype, "idCounter", {
        get: function () {
            return this._idCounter;
        },
        set: function (_idCounter) {
            this._idCounter = _idCounter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractModificableBuilder.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (_owner) {
            this._owner = _owner;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractModificableBuilder;
}(AbstractGameEntityBuilder_class_1.AbstractGameEntityBuilder));
exports.AbstractModificableBuilder = AbstractModificableBuilder;
//# sourceMappingURL=AbstractModificableBuilder.class.js.map