'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractStatFieldSetBuilder_class_1 = require("./AbstractStatFieldSetBuilder.class");
var IndexedGameEntityImpl_class_1 = require("../../../entities/classes/implementation/IndexedGameEntityImpl.class");
var Util_class_1 = require("../../../util/classes/Util.class");
var CharacterImpl_class_1 = require("../../../entities/classes/implementation/CharacterImpl.class");
/**
 * Created by becari on 13/09/2016.
 */
var AbstractCharacterBuilder = (function (_super) {
    __extends(AbstractCharacterBuilder, _super);
    function AbstractCharacterBuilder(obj) {
        _super.call(this, obj);
        this.inherits = obj && obj.inherits || new IndexedGameEntityImpl_class_1.IndexedGameEntityImpl();
        this.ownerId = obj && obj.ownerId || Util_class_1.Util.autoId();
    }
    AbstractCharacterBuilder.prototype.setId = function (_id) {
        this.id = _id;
        return this;
    };
    AbstractCharacterBuilder.prototype.setInherits = function (_inherits) {
        this.inherits = _inherits;
        return this;
    };
    AbstractCharacterBuilder.prototype.setOwnerId = function (_ownerId) {
        this.ownerId = _ownerId;
        return this;
    };
    AbstractCharacterBuilder.prototype.build = function () {
        var ret = new CharacterImpl_class_1.CharacterImpl(_super.prototype.build.call(this));
        ret.inherits = this.inherits;
        ret.ownerId = this.ownerId;
        return ret;
    };
    Object.defineProperty(AbstractCharacterBuilder.prototype, "id", {
        get: function () {
            return this.inherits.id;
        },
        set: function (_id) {
            this.inherits.id = _id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractCharacterBuilder.prototype, "inherits", {
        get: function () {
            return this._inherits;
        },
        set: function (_inherits) {
            this._inherits = _inherits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractCharacterBuilder.prototype, "ownerId", {
        get: function () {
            return this._ownerId;
        },
        set: function (_ownerId) {
            this._ownerId = _ownerId;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractCharacterBuilder;
}(AbstractStatFieldSetBuilder_class_1.AbstractStatFieldSetBuilder));
exports.AbstractCharacterBuilder = AbstractCharacterBuilder;
//# sourceMappingURL=AbstractCharacterBuilder.class.js.map