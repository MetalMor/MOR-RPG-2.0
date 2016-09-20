'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractCharacterListBuilder_class_1 = require("../abstract/AbstractCharacterListBuilder.class");
var GameCharacterList_class_1 = require("../../../properties/classes/implementation/GameCharacterList.class");
/**
 * Created by becari on 14/09/2016.
 */
var GameCharacterListBuilder = (function (_super) {
    __extends(GameCharacterListBuilder, _super);
    function GameCharacterListBuilder(obj) {
        _super.call(this, obj);
        this.npcs = obj && obj.npcs || new Array();
    }
    GameCharacterListBuilder.prototype.setNpcs = function (_npcs) {
        this.npcs = _npcs;
        return this;
    };
    GameCharacterListBuilder.prototype.build = function () {
        var ret = new GameCharacterList_class_1.GameCharacterList(_super.prototype.build.call(this));
        ret.npcs = this.npcs;
        return ret;
    };
    Object.defineProperty(GameCharacterListBuilder.prototype, "npcs", {
        get: function () {
            return this._npcs;
        },
        set: function (_npcs) {
            this._npcs = _npcs;
        },
        enumerable: true,
        configurable: true
    });
    return GameCharacterListBuilder;
}(AbstractCharacterListBuilder_class_1.AbstractCharacterListBuilder));
exports.GameCharacterListBuilder = GameCharacterListBuilder;
//# sourceMappingURL=GameCharacterListBuilder.class.js.map