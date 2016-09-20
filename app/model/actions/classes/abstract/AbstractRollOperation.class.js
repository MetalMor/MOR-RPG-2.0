'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractGameEntity_class_1 = require("../../../entities/classes/abstract/AbstractGameEntity.class");
/**
 * Clase abstracta que representa una operación de dados.
 * Created by becari on 18/08/2016.
 */
var AbstractRollOperation = (function (_super) {
    __extends(AbstractRollOperation, _super);
    function AbstractRollOperation(obj) {
        _super.call(this, obj);
        this.dif = obj && obj.dif || 6;
        this.label = obj && obj.label || "unnamed";
        this.implies = obj && obj.implies || new Array();
    }
    Object.defineProperty(AbstractRollOperation.prototype, "dif", {
        get: function () {
            return this._dif;
        },
        set: function (_dif) {
            this._dif = _dif;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractRollOperation.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (_label) {
            this._label = _label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractRollOperation.prototype, "implies", {
        get: function () {
            return this._implies;
        },
        set: function (_implies) {
            this._implies = _implies;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractRollOperation;
}(AbstractGameEntity_class_1.AbstractGameEntity));
exports.AbstractRollOperation = AbstractRollOperation;
//# sourceMappingURL=AbstractRollOperation.class.js.map