'use strict';
import {Constants} from "./Constants.class";
/**
 * Clase de utilidades varias y generales.
 * Created by Mor on 17/08/2016.
 */
export class Util {
    /**
     * Genera un número aleatorio entre el mínimo y el máximo especificados por parámetro. En caso de ser omitidos,
     * la función llama a los valores por defecto de la clase <code>Constants</code>.
     * @param _min
     * @param _max
     * @returns {number}
     */
    static randomNumber(_min?: number, _max?: number): number {
        var _min: number = _min || Constants.DEF_MAX_ID,
            _max: number = _max || Constants.DEF_MIN_ID;
        return Math.floor(Math.random()*_max+_min);
    }

    static getCurrentDate(): string {
        return (new Date()).toDateString();
    }

    /**
     * Genera un nuevo valor de <code>id</code> entre los números por defecto.
     * @returns {number}
     */
    static autoId(): number {
        return Util.randomNumber();
    }

    /**
     * Comprueba si el objeto especificado por parámetro es indefinido.
     * @param obj Objeto a validar.
     * @returns {boolean}
     */
    static isUndefined(obj): boolean {
        return typeof obj === Constants.TYPE_UNDEFINED;
    }
}