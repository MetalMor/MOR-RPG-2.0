'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractCharacterList_class_1 = require("../abstract/AbstractCharacterList.class");
var Arrays_class_1 = require("../../../util/classes/Arrays.class");
/**
 * Created by Mor on 20/08/2016.
 */
var GameCharacterList = (function (_super) {
    __extends(GameCharacterList, _super);
    function GameCharacterList(obj) {
        _super.call(this, obj);
        this.npcs = obj && obj.npcs || new Array();
    }
    Object.defineProperty(GameCharacterList.prototype, "npcs", {
        get: function () {
            return this._npcs;
        },
        set: function (_npcs) {
            this._npcs = _npcs;
        },
        enumerable: true,
        configurable: true
    });
    GameCharacterList.prototype.addNpc = function (_npc) {
        return Arrays_class_1.Arrays.add(this.npcs, _npc);
    };
    GameCharacterList.prototype.removeNpc = function (_npc) {
        return Arrays_class_1.Arrays.remove(this.npcs, _npc);
    };
    GameCharacterList.prototype.getNpc = function (_npc) {
        return Arrays_class_1.Arrays.get(this.npcs, _npc);
    };
    GameCharacterList.prototype.setNpc = function (_npc) {
        return Arrays_class_1.Arrays.set(this.npcs, _npc);
    };
    return GameCharacterList;
}(AbstractCharacterList_class_1.AbstractCharacterList));
exports.GameCharacterList = GameCharacterList;
//# sourceMappingURL=GameCharacterList.class.js.map