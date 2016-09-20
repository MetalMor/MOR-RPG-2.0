"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractGameEntity_class_1 = require("../../../entities/classes/abstract/AbstractGameEntity.class");
/**
 * Created by becari on 17/08/2016.
 */
var AbstractField = (function (_super) {
    __extends(AbstractField, _super);
    function AbstractField(obj) {
        _super.call(this, obj);
        var cast = obj;
        this.desc = cast && cast.desc || 'default';
        this.enabled = cast && cast.enabled || true;
        this.parent = cast && cast.parent || null;
    }
    AbstractField.prototype.onAppend = function (_parent) {
        this.parent = _parent;
    };
    AbstractField.prototype.onRemove = function (_parent) { };
    Object.defineProperty(AbstractField.prototype, "desc", {
        get: function () {
            return this._desc;
        },
        set: function (_desc) {
            this._desc = _desc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractField.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (_parent) {
            this._parent = _parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractField.prototype, "enabled", {
        get: function () {
            return this._enabled;
        },
        set: function (_enabled) {
            this._enabled = _enabled;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractField;
}(AbstractGameEntity_class_1.AbstractGameEntity));
exports.AbstractField = AbstractField;
//# sourceMappingURL=AbstractField.class.js.map