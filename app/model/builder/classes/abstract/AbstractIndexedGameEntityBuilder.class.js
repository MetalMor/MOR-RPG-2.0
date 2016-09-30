"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractGameEntityBuilder_class_1 = require("./AbstractGameEntityBuilder.class");
var IndexedGameEntityImpl_class_1 = require("../../../entities/classes/implementation/IndexedGameEntityImpl.class");
/**
 * Created by becari on 12/09/2016.
 */
var AbstractIndexedGameEntityBuilder = (function (_super) {
    __extends(AbstractIndexedGameEntityBuilder, _super);
    function AbstractIndexedGameEntityBuilder(obj) {
        _super.call(this, obj);
        this.id = obj && obj.id || AbstractIndexedGameEntityBuilder.staticId;
    }
    AbstractIndexedGameEntityBuilder.prototype.build = function () {
        var ret = new IndexedGameEntityImpl_class_1.IndexedGameEntityImpl(_super.prototype.build.call(this));
        ret.id = AbstractIndexedGameEntityBuilder.staticId++;
        return ret;
    };
    Object.defineProperty(AbstractIndexedGameEntityBuilder.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (_id) {
            this._id = _id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractIndexedGameEntityBuilder, "staticId", {
        get: function () {
            return AbstractIndexedGameEntityBuilder._staticId;
        },
        set: function (_staticId) {
            AbstractIndexedGameEntityBuilder._staticId = _staticId;
        },
        enumerable: true,
        configurable: true
    });
    AbstractIndexedGameEntityBuilder._staticId = 0;
    return AbstractIndexedGameEntityBuilder;
}(AbstractGameEntityBuilder_class_1.AbstractGameEntityBuilder));
exports.AbstractIndexedGameEntityBuilder = AbstractIndexedGameEntityBuilder;
//# sourceMappingURL=AbstractIndexedGameEntityBuilder.class.js.map