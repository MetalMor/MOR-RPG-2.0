'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractIndexedGameEntity_class_1 = require("./AbstractIndexedGameEntity.class");
var GameCharacterList_class_1 = require("../../../properties/classes/implementation/GameCharacterList.class");
var ImageDataField_class_1 = require("../../../fields/classes/implementation/ImageDataField.class");
var RegularDataField_class_1 = require("../../../fields/classes/implementation/RegularDataField.class");
/**
 * Created by Mor on 17/08/2016.
 */
var AbstractGame = (function (_super) {
    __extends(AbstractGame, _super);
    function AbstractGame(obj) {
        _super.call(this, obj);
        this.charList = obj && obj.charList || new GameCharacterList_class_1.GameCharacterList();
        this.story = obj && obj.story || new RegularDataField_class_1.RegularDataField();
        this.image = obj && obj.image || new ImageDataField_class_1.ImageDataField();
    }
    AbstractGame.prototype.addPc = function (_pc) {
        return this.charList.addPc(_pc);
    };
    AbstractGame.prototype.removePc = function (_pc) {
        return this.charList.removePc(_pc);
    };
    AbstractGame.prototype.getPc = function (_pc) {
        return this.charList.getPc(_pc);
    };
    AbstractGame.prototype.setPc = function (_pc) {
        return this.charList.setPc(_pc);
    };
    AbstractGame.prototype.addNpc = function (_npc) {
        return this.charList.addNpc(_npc);
    };
    AbstractGame.prototype.removeNpc = function (_npc) {
        return this.charList.removeNpc(_npc);
    };
    AbstractGame.prototype.getNpc = function (_npc) {
        return this.charList.getNpc(_npc);
    };
    AbstractGame.prototype.setNpc = function (_npc) {
        return this.charList.setNpc(_npc);
    };
    Object.defineProperty(AbstractGame.prototype, "charList", {
        get: function () {
            return this._charList;
        },
        set: function (_charList) {
            this._charList = _charList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractGame.prototype, "story", {
        get: function () {
            return this._story;
        },
        set: function (_story) {
            this._story = _story;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractGame.prototype, "image", {
        get: function () {
            return this._image;
        },
        set: function (_image) {
            this._image = _image;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractGame;
}(AbstractIndexedGameEntity_class_1.AbstractIndexedGameEntity));
exports.AbstractGame = AbstractGame;
//# sourceMappingURL=AbstractGame.class.js.map