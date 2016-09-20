'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractIndexedGameEntity_class_1 = require("../../../entities/classes/abstract/AbstractIndexedGameEntity.class");
/**
 * Created by Mor on 15/08/2016.
 */
var AbstractAction = (function (_super) {
    __extends(AbstractAction, _super);
    function AbstractAction(obj) {
        _super.call(this, obj);
        this.desc = obj && obj.desc || "void desc";
        this.time = obj && obj.time || new Date();
        this.rolls = obj && obj.rolls || new Array();
    }
    /**
     * Resuelve todas las tiradas de dados englobadas en la acción.
     */
    AbstractAction.prototype.resolve = function () {
        var rolls = this.rolls;
        rolls.forEach(function (r) {
            r.resolve();
        });
    };
    Object.defineProperty(AbstractAction.prototype, "desc", {
        get: function () {
            return this._desc;
        },
        set: function (_desc) {
            this._desc = _desc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractAction.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (_time) {
            this._time = _time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractAction.prototype, "rolls", {
        get: function () {
            return this._rolls;
        },
        set: function (_rolls) {
            this._rolls = _rolls;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractAction;
}(AbstractIndexedGameEntity_class_1.AbstractIndexedGameEntity));
exports.AbstractAction = AbstractAction;
//# sourceMappingURL=AbstractAction.class.js.map