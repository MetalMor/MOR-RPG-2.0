import {AbstractIndexedGameEntity} from "./AbstractIndexedGameEntity.class";
import {ICharacter} from "../interfaces/ICharacter.interface";
import {IIndexedGameEntity} from "../interfaces/IIndexedGameEntity.interface";
import {IndexedGameEntityImpl} from "./IndexedGameEntityImpl.class";
import {IField} from "../../fields/interfaces/IField.interface";
import {Timer} from "../../util/classes/Timer.class";
import {SingletonUser} from "./SingletonUser.class";
import {AbstractStatFieldSet} from "../../fields/classes/AbstractStatFieldSet.class";
/**
 * Created by becari on 18/08/2016.
 */
export abstract class AbstractCharacter extends AbstractStatFieldSet implements ICharacter {
    _inherits: IIndexedGameEntity;
    _ownerId: number;

    constructor(obj?: AbstractCharacter) {
        super(obj);
        this.inherits = obj && obj.inherits || new IndexedGameEntityImpl();
        this.ownerId = obj && obj.ownerId || SingletonUser.instance.id;
    }

    /**
     * Retorna el campo especificado por parámetro perteneciente a este objeto.
     * @param _field Campo requerido.
     * @returns {IField}
     */
    get(_field: IField): IField {
        var timer: Timer = new Timer(),
            ret: IField;
        timer.play();
        ret = super.get(_field);
        timer.stop(true);
        return ret;
    }

    /**
     * Actualiza el campo especificado por parámetro perteneciente a este objeto.
     * @param _field Campo a actualizar.
     * @returns {boolean}
     */
    set(_field: IField): boolean {
        var timer: Timer = new Timer(),
            ret: boolean;
        timer.play();
        ret = super.set(_field);
        timer.stop(true);
        return ret;
    }

    /**
     * Añade un campo especificado por parámetro a la lista de campos del personaje
     * @param _field Campo a añadir.
     * @returns {boolean}
     */
    add(_field: IField): boolean {
        var timer: Timer = new Timer(),
            ret: boolean;
        timer.play();
        ret = super.add(_field);
        timer.stop(true);
        return ret;
    }

    /**
     * Elimina un campo especificado por parámetro de la lista de campos de este objeto.
     * @param _field Campo a eliminar.
     * @returns {boolean}
     */
    remove(_field: IField): boolean {
        var timer: Timer = new Timer(),
            ret: boolean;
        timer.play();
        ret = super.remove(_field);
        timer.stop(true);
        return ret;
    }

    /**
     * Retorna una cadena de caracteres identificativa para el objeto.
     * @returns {string}
     */
    toString(): string {
        return this.inherits.toString();
    }

    /**
     * Comprueba si este objeto coincide con otro especificado por parámetro.
     * @param obj Objeto a validar.
     * @returns {boolean}
     */
    equals(obj: AbstractCharacter): boolean {
        return this.inherits.equals(obj);
    }

    get id(): number {
        return (<AbstractIndexedGameEntity> this.inherits).id;
    }
    set id(_id: number) {
        (<AbstractIndexedGameEntity> this.inherits).id = _id;
    }
    get inherits(): IIndexedGameEntity {
        return this._inherits;
    }
    set inherits(_inherits: IIndexedGameEntity) {
        this._inherits = _inherits;
    }
    get ownerId(): number {
        return this._ownerId;
    }
    set ownerId(_ownerId: number) {
        this._ownerId = _ownerId;
    }
}