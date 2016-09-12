'use strict';
import {AbstractIndexedGameEntity} from "./AbstractIndexedGameEntity.class";
import {IEntityCreator} from "../../builder/interfaces/IEntityCreator.interface";
import {IGameEntity} from "../interfaces/IGameEntity.interface";
import {IUser} from "../interfaces/IUser.interface";
import {EntityCreatorImpl} from "../../builder/classes/EntityCreatorImpl.class";
import {AbstractEntityCreator} from "../../builder/classes/AbstractEntityCreator";
import {IUserCharacterList} from "../../properties/interfaces/IUserCharacterList.interface";
import {ICharacter} from "../interfaces/ICharacter.interface";
import {UserCharacterList} from "../../properties/classes/UserCharacterList.class";
/**
 * Created by Mor on 17/08/2016.
 */
export abstract class AbstractUser extends AbstractIndexedGameEntity implements IUser {
    _inherits: IEntityCreator;
    _charList: IUserCharacterList;
    _passwd: string;

    constructor(obj?: AbstractUser) {
        super(obj);
        this.inherits = obj && obj.inherits || new EntityCreatorImpl();
        this.charList = obj && obj.charList || new UserCharacterList();
        this.passwd = obj && obj.passwd || "";
    }

    get inherits(): IEntityCreator {
        return this._inherits;
    }
    set inherits(_inherits: IEntityCreator) {
        this._inherits = _inherits;
    }
    get charList(): IUserCharacterList {
        return this._charList;
    }
    set charList(_charList: IUserCharacterList) {
        this._charList = _charList;
    }
    get passwd(): string {
        return this._passwd;
    }
    set passwd(_passwd: string) {
        this._passwd = _passwd;
    }

    create(_entity: IGameEntity): boolean {
        return (<AbstractEntityCreator> this.inherits).create(_entity);
    }
    remove(_entity: IGameEntity): boolean {
        return (<AbstractEntityCreator> this.inherits).remove(_entity);
    }
    find(_entity: IGameEntity): IGameEntity {
        return (<AbstractEntityCreator> this.inherits).find(_entity);
    }
    update(_entity: IGameEntity): boolean {
        return (<AbstractEntityCreator> this.inherits).update(_entity);
    }

    /**
     * Añade un personaje especificado por parámetro a la lista de personajes del usuario.
     * @param _pc Personaje a añadir.
     * @returns {boolean}
     */
    addPc(_pc: ICharacter): boolean {
        return this.charList.addPc(_pc);
    }

    /**
     * Elimina un personaje especificado por parámetro de la lista de personajes del usuario.
     * @param _pc Personaje a eliminar.
     * @returns {boolean}
     */
    removePc(_pc: ICharacter): boolean {
        return this.charList.removePc(_pc);
    }

    /**
     * Retorna un personaje especificado por parámetro de la lista de personajes del usuario.
     * @param _pc Personaje requerido.
     * @returns {ICharacter}
     */
    getPc(_pc: ICharacter): ICharacter {
        return this.charList.getPc(_pc);
    }

    /**
     * Actualiza un personaje especificado por parámetro de la lista de personajes del usuario.
     * @param _pc
     * @returns {boolean}
     */
    setPc(_pc: ICharacter): boolean {
        return this.charList.setPc(_pc);
    }
}