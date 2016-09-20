'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractRollOperation_class_1 = require("./AbstractRollOperation.class");
var Arrays_class_1 = require("../../../util/classes/Arrays.class");
var RollBuilder_class_1 = require("../../../builder/classes/implementation/RollBuilder.class");
/**
 * Clase abstracta que representa una tirada de dados de 10.
 * Created by becari on 18/08/2016.
 */
var AbstractRollSet = (function (_super) {
    __extends(AbstractRollSet, _super);
    function AbstractRollSet(obj) {
        _super.call(this, obj);
        this.rolls = obj && obj.rolls || new Array();
    }
    /**
     * Añade un objeto de dado especificado por parámetro a la lista de dados de la tirada.
     * @param _roll Objeto dado a añadir.
     * @returns {boolean}
     */
    AbstractRollSet.prototype.add = function (_roll) {
        return Arrays_class_1.Arrays.add(this.rolls, _roll);
    };
    /**
     * Elimina un dado especificado por parámetro de la lista de dados de la tirada.
     * @param _roll Objeto dado a eliminar.
     * @returns {boolean}
     */
    AbstractRollSet.prototype.remove = function (_roll) {
        return Arrays_class_1.Arrays.remove(this.rolls, _roll);
    };
    /**
     * Retorna un dado especificado por parámetro de la lista de dados de la tirada.
     * @param _roll Objeto dado a actualizar.
     * @returns {IRoll}
     */
    AbstractRollSet.prototype.get = function (_roll) {
        return Arrays_class_1.Arrays.get(this.rolls, _roll);
    };
    /**
     * Función de prueba así para hacer un poco el tontico con los builders. Debería funcionar (?)
     * @returns {RollImpl}
     */
    AbstractRollSet.prototype.createRoll = function () {
        var builder = new RollBuilder_class_1.RollBuilder();
        builder.setDif(this.dif)
            .setLabel(this.label)
            .setImplies(this.implies)
            .setName(this.name + "_roll");
        return builder.build();
    };
    /**
     * Retorna true si la tirada de dados ha sido exitosa, es decir, si al menos un resultado de los dados restantes
     * iguala o supera el valor de la dificultad establecida para la tirada; false en caso contrario.
     * @returns {boolean}
     */
    AbstractRollSet.prototype.isWin = function () {
        var ret = false, rolls = this.rolls;
        rolls.forEach(function (r) {
            if (!ret && r.isWin())
                ret = true;
        });
        return ret;
    };
    /**
     * Retorna true si la tirada de dados ha sido una pifia, es decir, si la cantidad de pifias supera la de éxitos.
     * @returns {boolean}
     */
    AbstractRollSet.prototype.isBlunder = function () {
        var rolls = this.rolls, wins = 0, blunders = 0;
        rolls.forEach(function (r) {
            if (r.isWin())
                wins++;
            else if (r.isBlunder())
                blunders++;
        });
        return blunders > wins;
    };
    /**
     * Tira todos los dados guardados en la lista de dados de este objeto tirada de dados.
     * @returns {AbstractRollSet}
     */
    AbstractRollSet.prototype.throwDices = function () {
        var rolls = this.rolls;
        rolls.forEach(function (r) {
            r.throwDices();
        });
        return this;
    };
    /**
     * Realiza todas las operaciones de la tirada de dados: inicialización, tirada y validación.
     * @returns {IRollSet}
     */
    AbstractRollSet.prototype.resolve = function () {
        return this.init().throwDices().validate();
    };
    AbstractRollSet.prototype.init = function () {
        // TODO impl
        return this;
    };
    AbstractRollSet.prototype.validate = function () {
        return this;
    };
    Object.defineProperty(AbstractRollSet.prototype, "rolls", {
        get: function () {
            return this._rolls;
        },
        set: function (_rolls) {
            this._rolls = _rolls;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractRollSet;
}(AbstractRollOperation_class_1.AbstractRollOperation));
exports.AbstractRollSet = AbstractRollSet;
//# sourceMappingURL=AbstractRollSet.class.js.map