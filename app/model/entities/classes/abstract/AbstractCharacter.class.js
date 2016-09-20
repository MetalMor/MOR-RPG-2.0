"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IndexedGameEntityImpl_class_1 = require("../implementation/IndexedGameEntityImpl.class");
var Timer_class_1 = require("../../../util/classes/Timer.class");
var SingletonUser_class_1 = require("../implementation/SingletonUser.class");
var AbstractStatFieldSet_class_1 = require("../../../fields/classes/abstract/AbstractStatFieldSet.class");
/**
 * Created by becari on 18/08/2016.
 */
var AbstractCharacter = (function (_super) {
    __extends(AbstractCharacter, _super);
    function AbstractCharacter(obj) {
        _super.call(this, obj);
        this.inherits = obj && obj.inherits || new IndexedGameEntityImpl_class_1.IndexedGameEntityImpl();
        this.ownerId = obj && obj.ownerId || SingletonUser_class_1.SingletonUser.instance.id;
    }
    /**
     * Retorna el campo especificado por parámetro perteneciente a este objeto.
     * @param _field Campo requerido.
     * @returns {IField}
     */
    AbstractCharacter.prototype.get = function (_field) {
        var timer = new Timer_class_1.Timer(), ret;
        timer.play();
        ret = _super.prototype.get.call(this, _field);
        timer.stop(true);
        return ret;
    };
    /**
     * Actualiza el campo especificado por parámetro perteneciente a este objeto.
     * @param _field Campo a actualizar.
     * @returns {boolean}
     */
    AbstractCharacter.prototype.set = function (_field) {
        var timer = new Timer_class_1.Timer(), ret;
        timer.play();
        ret = _super.prototype.set.call(this, _field);
        timer.stop(true);
        return ret;
    };
    /**
     * Añade un campo especificado por parámetro a la lista de campos del personaje
     * @param _field Campo a añadir.
     * @returns {boolean}
     */
    AbstractCharacter.prototype.add = function (_field) {
        var timer = new Timer_class_1.Timer(), ret;
        timer.play();
        ret = _super.prototype.add.call(this, _field);
        timer.stop(true);
        return ret;
    };
    /**
     * Elimina un campo especificado por parámetro de la lista de campos de este objeto.
     * @param _field Campo a eliminar.
     * @returns {boolean}
     */
    AbstractCharacter.prototype.remove = function (_field) {
        var timer = new Timer_class_1.Timer(), ret;
        timer.play();
        ret = _super.prototype.remove.call(this, _field);
        timer.stop(true);
        return ret;
    };
    /**
     * Retorna una cadena de caracteres identificativa para el objeto.
     * @returns {string}
     */
    AbstractCharacter.prototype.toString = function () {
        return this.inherits.toString();
    };
    /**
     * Comprueba si este objeto coincide con otro especificado por parámetro.
     * @param obj Objeto a validar.
     * @returns {boolean}
     */
    AbstractCharacter.prototype.equals = function (obj) {
        return this.inherits.equals(obj);
    };
    Object.defineProperty(AbstractCharacter.prototype, "id", {
        get: function () {
            return this.inherits.id;
        },
        set: function (_id) {
            this.inherits.id = _id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractCharacter.prototype, "inherits", {
        get: function () {
            return this._inherits;
        },
        set: function (_inherits) {
            this._inherits = _inherits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractCharacter.prototype, "ownerId", {
        get: function () {
            return this._ownerId;
        },
        set: function (_ownerId) {
            this._ownerId = _ownerId;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractCharacter;
}(AbstractStatFieldSet_class_1.AbstractStatFieldSet));
exports.AbstractCharacter = AbstractCharacter;
//# sourceMappingURL=AbstractCharacter.class.js.map