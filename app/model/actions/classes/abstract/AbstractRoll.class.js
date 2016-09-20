'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Util_class_1 = require("../../../util/classes/Util.class");
var AbstractRollOperation_class_1 = require("./AbstractRollOperation.class");
/**
 * Clase abstracta que representa un dado de 10.
 * Created by becari on 18/08/2016.
 */
var AbstractRoll = (function (_super) {
    __extends(AbstractRoll, _super);
    function AbstractRoll(obj) {
        _super.call(this, obj);
        this.res = obj && obj.res || 0;
    }
    /**
     * Tira el dado (entre 0 y 10) y retorna una referencia a este objeto.
     * @returns {AbstractRoll}
     */
    AbstractRoll.prototype.throwDices = function () {
        this.res = Util_class_1.Util.randomNumber(1, 10);
        console.log("Threw " + this.label + ", result: " + this.res);
        return this;
    };
    /**
     * Retorna true si el resultado de este dado ha sido exitoso, false en caso contrario.
     * @returns {boolean}
     */
    AbstractRoll.prototype.isWin = function () {
        var ret = this.res >= this.dif;
        console.log(this.label + ": " + ret ? "Success" : "Failure");
        return ret;
    };
    /**
     * Retorna true si el resultado de este dado ha sido una pifia, false en caso contrario.
     * @returns {boolean}
     */
    AbstractRoll.prototype.isBlunder = function () {
        var ret = this.res === 1;
        console.log(this.label + ": " + ret ? "Blunder" : "Not blunder");
        return ret;
    };
    Object.defineProperty(AbstractRoll.prototype, "res", {
        get: function () {
            return this._res;
        },
        set: function (_res) {
            this._res = _res;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractRoll;
}(AbstractRollOperation_class_1.AbstractRollOperation));
exports.AbstractRoll = AbstractRoll;
//# sourceMappingURL=AbstractRoll.class.js.map