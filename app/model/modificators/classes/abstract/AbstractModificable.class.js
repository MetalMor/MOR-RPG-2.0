'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Arrays_class_1 = require("../../../util/classes/Arrays.class");
var StatModificatorType_enum_1 = require("../../enumerations/StatModificatorType.enum");
var Util_class_1 = require("../../../util/classes/Util.class");
var AbstractGameEntity_class_1 = require("../../../entities/classes/abstract/AbstractGameEntity.class");
/**
 * Created by Mor on 09/09/2016.
 */
var AbstractModificable = (function (_super) {
    __extends(AbstractModificable, _super);
    function AbstractModificable(obj) {
        _super.call(this, obj);
        this.mods = obj && obj.mods || new Array();
        this.idCounter = obj && obj.idCounter || 0;
        this.owner = obj && obj.owner || null;
    }
    AbstractModificable.prototype.onAppend = function (_owner) {
        this.owner = _owner;
    };
    AbstractModificable.prototype.onRemove = function (_owner) { };
    AbstractModificable.prototype.addMod = function (_mod) {
        var mod = _mod;
        mod.name = mod && mod.name || this.name + "_mods" + this.idCounter++;
        return Arrays_class_1.Arrays.add(this.mods, mod);
    };
    AbstractModificable.prototype.removeMod = function (_mod) {
        return Arrays_class_1.Arrays.remove(this.mods, _mod);
    };
    AbstractModificable.prototype.getMod = function (_mod) {
        return Arrays_class_1.Arrays.get(this.mods, _mod);
    };
    AbstractModificable.prototype.getModsByType = function (_type) {
        return this.mods.filter(function (m) { return m.isType(_type); });
    };
    AbstractModificable.prototype.getValue = function (_owner) {
        if (!Util_class_1.Util.isUndefined(this.mods)) {
            var mods = this.getModsByType(StatModificatorType_enum_1.StatModificatorType.Level);
            return _owner.parent.getValue() + Arrays_class_1.Arrays.summation(Arrays_class_1.Arrays.fromProperty(mods, 'value'));
        }
        return 0;
    };
    Object.defineProperty(AbstractModificable.prototype, "mods", {
        get: function () {
            return this._mods;
        },
        set: function (_mods) {
            this._mods = _mods;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractModificable.prototype, "idCounter", {
        get: function () {
            return this._idCounter;
        },
        set: function (_idCounter) {
            this._idCounter = _idCounter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractModificable.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (_owner) {
            this._owner = _owner;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractModificable;
}(AbstractGameEntity_class_1.AbstractGameEntity));
exports.AbstractModificable = AbstractModificable;
//# sourceMappingURL=AbstractModificable.class.js.map