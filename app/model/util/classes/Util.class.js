'use strict';
var Constants_module_1 = require("../modules/Constants.module");
/**
 * Clase de utilidades varias y generales.
 * Created by Mor on 17/08/2016.
 */
var Util = (function () {
    function Util() {
    }
    /**
     * Formatea un número para que tenga tantas cifras como se especifica en el parámetro, rellenando con ceros a la
     * izquierda.
     * @param _number Número a formatear.
     * @param _pad Cantidad de cifras que se espera.
     *
     * @returns {string}
     */
    Util.numberPad = function (_number, _pad) {
        var number = _number.toString(), pad = _pad - number.length;
        if (pad < 0)
            throw new Error(Constants_module_1.Constants.Errors.ERR_UNDERZERO);
        while (pad-- > 0)
            number = '0' + number;
        return number;
    };
    /**
     * Genera un número aleatorio entre el mínimo y el máximo especificados por parámetro. En caso de ser omitidos,
     * la función llama a los valores por defecto de la clase <code>Constants</code>.
     * @param _min Límite inferior.
     * @param _max Límite superior
     * @returns {number}
     */
    Util.randomNumber = function (_min, _max) {
        var _min = _min || Constants_module_1.Constants.Numbers.DEF_MAX_ID, _max = _max || Constants_module_1.Constants.Numbers.DEF_MIN_ID;
        if (_min > _max)
            throw new Error(Constants_module_1.Constants.Errors.ERR_NUMBERS);
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    };
    /**
     * A partir de un parámetro constructor de objeto, retorna el constructor de su clase Builder correspondiente.
     * @param _type Clase de la cual necesitamos el builder.
     * @returns {IConstructor<IBuilder<T>>}
     */
    Util.getBuilderType = function (_type) {
        var typeName = _type.name, index;
        if ((index = typeName.indexOf("Impl")) > 0)
            typeName.substring(index, typeName.length);
        typeName += "Builder";
        return eval(typeName);
    };
    /**
     * Retorna el string especificado por parámetro con la primera letra vuelta mayúscula.
     * @param _string
     */
    Util.capitalizeFirst = function (_string) {
        return _string.charAt(0).toUpperCase() + _string.slice(1);
    };
    /**
     * Obtiene la fecha actual en formato String.
     * @returns {string}
     */
    Util.getCurrentDate = function () {
        return (new Date()).toDateString();
    };
    /**
     * Genera un nuevo valor de <code>id</code> entre los números por defecto.
     * @returns {number}
     */
    Util.autoId = function () {
        return Util.randomNumber();
    };
    /**
     * Comprueba si el objeto especificado por parámetro es indefinido.
     * @param obj Objeto a validar.
     * @returns {boolean}
     */
    Util.isUndefined = function (obj) {
        return typeof obj === Constants_module_1.Constants.Types.TYPE_UNDEFINED;
    };
    return Util;
}());
exports.Util = Util;
//# sourceMappingURL=Util.class.js.map