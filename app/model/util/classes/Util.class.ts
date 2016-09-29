'use strict';
import {Constants} from "../modules/Constants.module";
/**
 * Clase de utilidades varias y generales.
 * Created by Mor on 17/08/2016.
 */
export class Util {
    /**
     * Formatea un número para que tenga tantas cifras como se especifica en el parámetro, rellenando con ceros a la
     * izquierda.
     * @param _number Número a formatear.
     * @param _pad Cantidad de cifras que se espera.
     *
     * @returns {string}
     */
    static numberPad(_number: number, _pad: number): string {
        var number: string = _number.toString(),
            pad: number = _pad - number.length;
        if(pad < 0) throw new Error(Constants.Errors.ERR_UNDERZERO);
        while(pad-- > 0) number = '0' + number;
        return number;
    }
    /**
     * Genera un número aleatorio entre el mínimo y el máximo especificados por parámetro. En caso de ser omitidos,
     * la función llama a los valores por defecto de la clase <code>Constants</code>.
     * @param _min Límite inferior.
     * @param _max Límite superior
     * @returns {number}
     */
    static randomNumber(_min?: number, _max?: number): number {
        var _min: number = _min || Constants.Numbers.DEF_MAX_ID,
            _max: number = _max || Constants.Numbers.DEF_MIN_ID;
        if(_min > _max) throw new Error(Constants.Errors.ERR_NUMBERS);
        return Math.floor(Math.random()*(_max-_min+1)+_min);
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
        return typeof obj === Constants.Types.TYPE_UNDEFINED;
    }
}