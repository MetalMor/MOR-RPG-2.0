'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractGameEntity_class_1 = require('./AbstractGameEntity.class');
/**
 * Created by Mor on 15/08/2016.
 */
var AbstractIndexedGameEntity = (function (_super) {
    __extends(AbstractIndexedGameEntity, _super);
    function AbstractIndexedGameEntity(obj) {
        _super.call(this, obj);
        var cast = obj;
        if (cast && cast.id)
            this.id = cast.id;
    }
    Object.defineProperty(AbstractIndexedGameEntity.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (_id) {
            this._id = _id;
        },
        enumerable: true,
        configurable: true
    });
    AbstractIndexedGameEntity.prototype.toString = function () {
        return _super.prototype.toString.call(this);
    };
    AbstractIndexedGameEntity.prototype.equals = function (obj) {
        if (!obj)
            return false;
        var other = obj;
        if (!other.id)
            return false;
        return this.id === other.id;
    };
    return AbstractIndexedGameEntity;
}(AbstractGameEntity_class_1.AbstractGameEntity));
exports.AbstractIndexedGameEntity = AbstractIndexedGameEntity;
//# sourceMappingURL=AbstractIndexedGameEntity.class.js.map