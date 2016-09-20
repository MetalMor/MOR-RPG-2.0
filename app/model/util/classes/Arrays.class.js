'use strict';
var Util_class_1 = require("./Util.class");
var AbstractFieldSet_class_1 = require("../../fields/classes/abstract/AbstractFieldSet.class");
/**
 * Clase de utilidad para trabajar con arrays de forma recursiva.
 * Created by Mor on 17/08/2016.
 */
var Arrays = (function () {
    function Arrays() {
    }
    /**
     * Añade un objeto que implementa <code>IGameEntity</code> a un array especificado por parámetro. Retorna true
     * en caso de éxito, false en caso contrario.
     * @param _array Array al que añadir el elemento.
     * @param _element Objeto <code>IGameEntity</code> a añadir.
     * @returns {boolean}
     */
    Arrays.add = function (_array, _element) {
        var prevLength = _array.length;
        return _array.push(_element) > prevLength;
    };
    /**
     * Retorna el elemento <code>IGameEntity</code> especificado por parámetro contenido en el array. Mediante la
     * recursividad, la función continuará descendiendo por los elementos hasta encontrar el requerido. Retorna true
     * en caso de éxito, false en caso contrario.
     * @param _array Lista que contiene el elemento buscado.
     * @param _element Elemento <code>IGameEntity</code> a encontrar.
     * @returns {IGameEntity}
     */
    Arrays.get = function (_array, _element) {
        var ret;
        _array.forEach(function (e) {
            if (Util_class_1.Util.isUndefined(ret)) {
                if (_element.equals(e))
                    ret = e;
                else if (e instanceof AbstractFieldSet_class_1.AbstractFieldSet)
                    ret = e.get(_element);
            }
        });
        return ret;
    };
    /**
     * Elimina de un array el objeto <code>IGameEntity</code> especificado por parámetro. Mediante la recursividad, la
     * función continuará descendiendo por los elementos hasta encontrar el requerido. Retorna true en caso de éxito,
     * false en caso contrario.
     * @param _array Array del que eliminar un elemento.
     * @param _element Elemento <code>IGameEntity</code> a eliminar.
     * @returns {boolean}
     */
    Arrays.remove = function (_array, _element) {
        var index, counter, len = _array.length, current;
        for (counter = 0; counter < len; counter++) {
            current = _array[counter];
            if (current.equals(_element)) {
                index = counter;
                _array.splice(index, 1);
                return true;
            }
            else if (current instanceof AbstractFieldSet_class_1.AbstractFieldSet)
                return current.remove(_element);
        }
    };
    /**
     * Actualiza un elemento <code>IGameEntity</code> de un array con el objeto especificado por parámetro. Mediante la
     * recursividad, la función continuará descendiendo por los elementos hasta encontrar el requerido. Retorna true
     * en caso de éxito, false en caso contrario.
     * @param _array Lista en la que actualizar el elemento.
     * @param _element Elemento a actualizar.
     * @returns {boolean}
     */
    Arrays.set = function (_array, _element) {
        var updated = false;
        _array.forEach(function (e) {
            if (!updated) {
                if (_element.equals(e)) {
                    e = _element;
                    updated = true;
                }
                else if (e instanceof AbstractFieldSet_class_1.AbstractFieldSet)
                    updated = e.set(_element);
            }
        });
        return updated;
    };
    /**
     * Extrae del array especificado un nuevo array a partir del valor en cada elemento de la propiedad especificada.
     * @param _array Array de objetos.
     * @param _prop Propiedad de la cual extraer el array.
     * @returns {any[]}
     */
    Arrays.fromProperty = function (_array, _prop) {
        return _array.map(function (element) {
            return element[_prop];
        });
    };
    /**
     * Suma todos los números dentro de un array de números.
     * @param _array Array de números
     * @returns {number}
     */
    Arrays.summation = function (_array) {
        var sum = function (a, b) { return a + b; };
        return _array.reduce(sum, 0);
    };
    return Arrays;
}());
exports.Arrays = Arrays;
//# sourceMappingURL=Arrays.class.js.map