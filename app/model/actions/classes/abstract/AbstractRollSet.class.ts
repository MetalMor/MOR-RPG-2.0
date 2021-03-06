'use strict';
import {IRollSet} from "../../interfaces/IRollSet.interface";
import {IRoll} from "../../interfaces/IRoll.interface";
import {AbstractRoll} from "./AbstractRoll.class";
import {AbstractRollOperation} from "./AbstractRollOperation.class";
import {Arrays} from "../../../util/classes/Arrays.class";
import {IThrowableRollOperation} from "../../interfaces/IThrowableRollOperation.interface";
import {SingletonCharacter} from "../../../entities/classes/implementation/SingletonCharacter.class";
import {IStat} from "../../../fields/interfaces/IStat.interface";
import {AbstractStatField} from "../../../fields/classes/abstract/AbstractStatField.class";
import {RollBuilder} from "../../../builder/classes/implementation/RollBuilder.class";
import {RollImpl} from "../implementation/RollImpl.class";
import {IBuilder} from "../../../builder/interfaces/IBuilder.interface";
/**
 * Clase abstracta que representa una tirada de dados de 10.
 * Created by becari on 18/08/2016.
 */
export abstract class AbstractRollSet extends AbstractRollOperation implements IRollSet {
    _rolls: IRoll[];

    constructor(obj?: AbstractRollSet) {
        super(obj);
        this.rolls = obj && obj.rolls || new Array<AbstractRoll>();
    }


    /**
     * Añade un objeto de dado especificado por parámetro a la lista de dados de la tirada.
     * @param _roll Objeto dado a añadir.
     * @returns {boolean}
     */
    add(_roll: IRoll): boolean {
        return Arrays.add(this.rolls, _roll);
    }

    /**
     * Elimina un dado especificado por parámetro de la lista de dados de la tirada.
     * @param _roll Objeto dado a eliminar.
     * @returns {boolean}
     */
    remove(_roll: IRoll): boolean {
        return Arrays.remove(this.rolls, _roll);
    }

    /**
     * Retorna un dado especificado por parámetro de la lista de dados de la tirada.
     * @param _roll Objeto dado a actualizar.
     * @returns {IRoll}
     */
    get(_roll: IRoll): IRoll {
        return <IRoll> Arrays.get(this.rolls, _roll);
    }

    /**
     * Función de prueba así para hacer un poco el tontico con los builders. Debería funcionar (?)
     * @returns {RollImpl}
     */
    createRoll(): RollImpl {
        var builder: RollBuilder = new RollBuilder();
        builder.setDif(this.dif)
            .setLabel(this.label)
            .setImplies(this.implies)
            .setName(this.name+"_roll");
        return builder.build();
    }

    /**
     * Retorna true si la tirada de dados ha sido exitosa, es decir, si al menos un resultado de los dados restantes
     * iguala o supera el valor de la dificultad establecida para la tirada; false en caso contrario.
     * @returns {boolean}
     */
    isWin(): boolean {
        var ret: boolean = false,
            rolls: IRoll[] = this.rolls;
        rolls.forEach(function(r) {
            if(!ret && r.isWin()) ret = true;
        });
        return ret;
    }

    /**
     * Retorna true si la tirada de dados ha sido una pifia, es decir, si la cantidad de pifias supera la de éxitos.
     * @returns {boolean}
     */
    isBlunder(): boolean {
        var rolls: IRoll[] = this.rolls,
            wins: number = 0,
            blunders: number = 0;
        rolls.forEach(function(r) {
            if(r.isWin()) wins++;
            else if(r.isBlunder()) blunders++;
        });
        return blunders > wins;
    }

    /**
     * Tira todos los dados guardados en la lista de dados de este objeto tirada de dados.
     * @returns {AbstractRollSet}
     */
    throwDices(): IThrowableRollOperation {
        var rolls: IRoll[] = this.rolls;
        rolls.forEach(function(r) {
            r.throwDices();
        });
        return this;
    }

    /**
     * Realiza todas las operaciones de la tirada de dados: inicialización, tirada y validación.
     * @returns {IRollSet}
     */
    resolve(): IRollSet {
        return (<AbstractRollSet> this.init().throwDices()).validate();
    }
    init(): IRollSet {
        // TODO impl
        return this;
    }
    validate(): IRollSet {
        return this;
    }

    get rolls(): IRoll[] {
        return this._rolls;
    }
    set rolls(_rolls: IRoll[]) {
        this._rolls = _rolls;
    }
}
