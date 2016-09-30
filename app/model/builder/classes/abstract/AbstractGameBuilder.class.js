'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractIndexedGameEntityBuilder_class_1 = require("./AbstractIndexedGameEntityBuilder.class");
var RegularDataField_class_1 = require("../../../fields/classes/implementation/RegularDataField.class");
var ImageDataField_class_1 = require("../../../fields/classes/implementation/ImageDataField.class");
var GameCharacterList_class_1 = require("../../../properties/classes/implementation/GameCharacterList.class");
var GameImpl_class_1 = require("../../../entities/classes/implementation/GameImpl.class");
/**
 * Created by becari on 12/09/2016.
 */
var AbstractGameBuilder = (function (_super) {
    __extends(AbstractGameBuilder, _super);
    function AbstractGameBuilder(obj) {
        _super.call(this, obj);
        this.charList = obj && obj.charList || new GameCharacterList_class_1.GameCharacterList();
        this.story = obj && obj.story || new RegularDataField_class_1.RegularDataField();
        this.image = obj && obj.image || new ImageDataField_class_1.ImageDataField();
    }
    AbstractGameBuilder.prototype.setCharList = function (_charList) {
        this.charList = _charList;
        return this;
    };
    AbstractGameBuilder.prototype.setImage = function (_image) {
        this.image = _image;
        return this;
    };
    AbstractGameBuilder.prototype.setStory = function (_story) {
        this.story = _story;
        return this;
    };
    AbstractGameBuilder.prototype.build = function () {
        var ret = new GameImpl_class_1.GameImpl(_super.prototype.build.call(this));
        ret.charList = this.charList;
        ret.image = this.image;
        ret.story = this.story;
        return ret;
    };
    Object.defineProperty(AbstractGameBuilder.prototype, "charList", {
        get: function () {
            return this._charList;
        },
        set: function (_charList) {
            this._charList = _charList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractGameBuilder.prototype, "story", {
        get: function () {
            return this._story;
        },
        set: function (_story) {
            this._story = _story;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractGameBuilder.prototype, "image", {
        get: function () {
            return this._image;
        },
        set: function (_image) {
            this._image = _image;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractGameBuilder;
}(AbstractIndexedGameEntityBuilder_class_1.AbstractIndexedGameEntityBuilder));
exports.AbstractGameBuilder = AbstractGameBuilder;
//# sourceMappingURL=AbstractGameBuilder.class.js.map