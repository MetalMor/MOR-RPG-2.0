'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractIndexedGameEntity_class_1 = require("../../../entities/classes/abstract/AbstractIndexedGameEntity.class");
var Arrays_class_1 = require("../../../util/classes/Arrays.class");
var SingletonUser_class_1 = require("../../../entities/classes/implementation/SingletonUser.class");
/**
 * Created by Mor on 20/08/2016.
 */
var AbstractCharacterList = (function (_super) {
    __extends(AbstractCharacterList, _super);
    function AbstractCharacterList(obj) {
        _super.call(this, obj);
        this.pcs = obj && obj.pcs || new Array();
    }
    Object.defineProperty(AbstractCharacterList.prototype, "pcs", {
        get: function () {
            return this._pcs;
        },
        set: function (_pcs) {
            this._pcs = _pcs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractCharacterList.prototype, "ownerId", {
        get: function () {
            return this._ownerId;
        },
        set: function (_ownerId) {
            this._ownerId = _ownerId;
        },
        enumerable: true,
        configurable: true
    });
    AbstractCharacterList.prototype.addPc = function (_pc) {
        return Arrays_class_1.Arrays.add(this.pcs, _pc);
    };
    AbstractCharacterList.prototype.removePc = function (_pc) {
        return Arrays_class_1.Arrays.remove(this.pcs, _pc);
    };
    AbstractCharacterList.prototype.getPc = function (_pc) {
        return Arrays_class_1.Arrays.get(this.pcs, _pc);
    };
    AbstractCharacterList.prototype.setPc = function (_pc) {
        return Arrays_class_1.Arrays.set(this.pcs, _pc);
    };
    AbstractCharacterList.prototype.getOwner = function () {
        // TODO impl
        return null;
    };
    AbstractCharacterList.prototype.getCurrentUser = function () {
        return SingletonUser_class_1.SingletonUser.instance;
    };
    return AbstractCharacterList;
}(AbstractIndexedGameEntity_class_1.AbstractIndexedGameEntity));
exports.AbstractCharacterList = AbstractCharacterList;
//# sourceMappingURL=AbstractCharacterList.class.js.map