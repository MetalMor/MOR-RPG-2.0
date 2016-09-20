'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractIndexedGameEntityBuilder_class_1 = require("./AbstractIndexedGameEntityBuilder.class");
var CharacterListImpl_class_1 = require("../../../properties/classes/implementation/CharacterListImpl.class");
/**
 * Created by becari on 14/09/2016.
 */
var AbstractCharacterListBuilder = (function (_super) {
    __extends(AbstractCharacterListBuilder, _super);
    function AbstractCharacterListBuilder(obj) {
        _super.call(this, obj);
        this.pcs = obj && obj.pcs || new Array();
        this.ownerId = obj && obj.ownerId || 0;
    }
    AbstractCharacterListBuilder.prototype.setPcs = function (_pcs) {
        this.pcs = _pcs;
        return this;
    };
    AbstractCharacterListBuilder.prototype.setOwnerId = function (_ownerId) {
        this.ownerId = _ownerId;
        return this;
    };
    AbstractCharacterListBuilder.prototype.build = function () {
        var ret = new CharacterListImpl_class_1.CharacterListImpl(_super.prototype.build.call(this));
        ret.pcs = this.pcs;
        ret.ownerId = this.ownerId;
        return ret;
    };
    Object.defineProperty(AbstractCharacterListBuilder.prototype, "pcs", {
        get: function () {
            return this._pcs;
        },
        set: function (_pcs) {
            this._pcs = _pcs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractCharacterListBuilder.prototype, "ownerId", {
        get: function () {
            return this._ownerId;
        },
        set: function (_ownerId) {
            this._ownerId = _ownerId;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractCharacterListBuilder;
}(AbstractIndexedGameEntityBuilder_class_1.AbstractIndexedGameEntityBuilder));
exports.AbstractCharacterListBuilder = AbstractCharacterListBuilder;
//# sourceMappingURL=AbstractCharacterListBuilder.class.js.map