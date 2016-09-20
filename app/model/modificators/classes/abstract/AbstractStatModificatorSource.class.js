'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SingletonCharacter_class_1 = require("../../../entities/classes/implementation/SingletonCharacter.class");
var Arrays_class_1 = require("../../../util/classes/Arrays.class");
var Util_class_1 = require("../../../util/classes/Util.class");
var AbstractGameEntity_class_1 = require("../../../entities/classes/abstract/AbstractGameEntity.class");
/**
 * Created by Mor on 09/09/2016.
 */
var AbstractStatModificatorSource = (function (_super) {
    __extends(AbstractStatModificatorSource, _super);
    function AbstractStatModificatorSource(obj) {
        _super.call(this, obj);
        this.grants = obj && obj.grants || new Array();
        this.owner = obj && obj.owner || null;
    }
    AbstractStatModificatorSource.prototype.modify = function (_char) {
        var mods = this.grants, modificable;
        mods.forEach(function (m) {
            modificable = _char.get(m.modifies);
            if (!Util_class_1.Util.isUndefined(modificable)) {
                m.source = this.owner;
                modificable.addMod(m);
            }
        });
    };
    AbstractStatModificatorSource.prototype.unleash = function () {
        var mods = this.grants, char = SingletonCharacter_class_1.SingletonCharacter.instance, modificable;
        mods.forEach(function (m) {
            modificable = char.get(m.modifies);
            modificable.removeMod(m);
        });
    };
    AbstractStatModificatorSource.prototype.onAppend = function (_parent) {
        this.owner = _parent;
    };
    AbstractStatModificatorSource.prototype.onRemove = function (_parent) {
        this.unleash();
    };
    AbstractStatModificatorSource.prototype.addMod = function (_mod) {
        return Arrays_class_1.Arrays.add(this.grants, _mod);
    };
    AbstractStatModificatorSource.prototype.removeMod = function (_mod) {
        return Arrays_class_1.Arrays.remove(this.grants, _mod);
    };
    AbstractStatModificatorSource.prototype.getMod = function (_mod) {
        return Arrays_class_1.Arrays.get(this.grants, _mod);
    };
    Object.defineProperty(AbstractStatModificatorSource.prototype, "grants", {
        get: function () {
            return this._grants;
        },
        set: function (_grants) {
            this._grants = _grants;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractStatModificatorSource.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (_owner) {
            this._owner = _owner;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractStatModificatorSource;
}(AbstractGameEntity_class_1.AbstractGameEntity));
exports.AbstractStatModificatorSource = AbstractStatModificatorSource;
//# sourceMappingURL=AbstractStatModificatorSource.class.js.map