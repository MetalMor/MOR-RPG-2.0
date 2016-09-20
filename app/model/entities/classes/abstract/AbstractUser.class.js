'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractIndexedGameEntity_class_1 = require("./AbstractIndexedGameEntity.class");
var UserCharacterList_class_1 = require("../../../properties/classes/implementation/UserCharacterList.class");
/**
 * Created by Mor on 17/08/2016.
 */
var AbstractUser = (function (_super) {
    __extends(AbstractUser, _super);
    function AbstractUser(obj) {
        _super.call(this, obj);
        this.charList = obj && obj.charList || new UserCharacterList_class_1.UserCharacterList();
        this.passwd = obj && obj.passwd || "";
    }
    /**
     * Añade un personaje especificado por parámetro a la lista de personajes del usuario.
     * @param _pc Personaje a añadir.
     * @returns {boolean}
     */
    AbstractUser.prototype.addPc = function (_pc) {
        return this.charList.addPc(_pc);
    };
    /**
     * Elimina un personaje especificado por parámetro de la lista de personajes del usuario.
     * @param _pc Personaje a eliminar.
     * @returns {boolean}
     */
    AbstractUser.prototype.removePc = function (_pc) {
        return this.charList.removePc(_pc);
    };
    /**
     * Retorna un personaje especificado por parámetro de la lista de personajes del usuario.
     * @param _pc Personaje requerido.
     * @returns {ICharacter}
     */
    AbstractUser.prototype.getPc = function (_pc) {
        return this.charList.getPc(_pc);
    };
    /**
     * Actualiza un personaje especificado por parámetro de la lista de personajes del usuario.
     * @param _pc
     * @returns {boolean}
     */
    AbstractUser.prototype.setPc = function (_pc) {
        return this.charList.setPc(_pc);
    };
    Object.defineProperty(AbstractUser.prototype, "charList", {
        get: function () {
            return this._charList;
        },
        set: function (_charList) {
            this._charList = _charList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractUser.prototype, "passwd", {
        get: function () {
            return this._passwd;
        },
        set: function (_passwd) {
            this._passwd = _passwd;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractUser;
}(AbstractIndexedGameEntity_class_1.AbstractIndexedGameEntity));
exports.AbstractUser = AbstractUser;
//# sourceMappingURL=AbstractUser.class.js.map