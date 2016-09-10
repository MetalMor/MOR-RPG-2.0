'use strict';
import {IGameEntity} from "../../entities/interfaces/IGameEntity.interface";
import {Util} from "./Util.class";
import {IField} from "../../fields/interfaces/IField.interface";
import {AbstractFieldSet} from "../../fields/classes/AbstractFieldSet.class";
/**
 * Clase de utilidad para trabajar con arrays de forma recursiva.
 * Created by Mor on 17/08/2016.
 */
export class Arrays {

    /**
     * Añade un objeto que implementa <code>IGameEntity</code> a un array especificado por parámetro. Retorna true
     * en caso de éxito, false en caso contrario.
     * @param _array Array al que añadir el elemento.
     * @param _element Objeto <code>IGameEntity</code> a añadir.
     * @returns {boolean}
     */
    static add(_array: Array<IGameEntity>, _element: IGameEntity): boolean {
        var prevLength: number = _array.length;
        return _array.push(_element) > prevLength;
    }

    /**
     * Retorna el elemento <code>IGameEntity</code> especificado por parámetro contenido en el array. Mediante la
     * recursividad, la función continuará descendiendo por los elementos hasta encontrar el requerido. Retorna true
     * en caso de éxito, false en caso contrario.
     * @param _array Lista que contiene el elemento buscado.
     * @param _element Elemento <code>IGameEntity</code> a encontrar.
     * @returns {IGameEntity}
     */
    static get(_array: Array<IGameEntity>, _element: IGameEntity): IGameEntity {
        var ret: IGameEntity;
        _array.forEach(function(e) {
            if(Util.isUndefined(ret)){
                if(_element.equals(e)) ret = e;
                else if(e instanceof AbstractFieldSet) ret = e.get(<IField> _element);
            }
        });
        return ret;
    }

    /**
     * Elimina de un array el objeto <code>IGameEntity</code> especificado por parámetro. Mediante la recursividad, la
     * función continuará descendiendo por los elementos hasta encontrar el requerido. Retorna true en caso de éxito,
     * false en caso contrario.
     * @param _array Array del que eliminar un elemento.
     * @param _element Elemento <code>IGameEntity</code> a eliminar.
     * @returns {boolean}
     */
    static remove(_array: Array<IGameEntity>, _element: IGameEntity): boolean {
        var index: number, counter: number, len = _array.length, current: IGameEntity;
        for(counter = 0; counter < len; counter++) {
            current = _array[counter];
            if(current.equals(_element)) {
                index = counter;
                _array.splice(index, 1);
                return true;
            }
            else if(current instanceof AbstractFieldSet) return current.remove(<IField> _element);
        }
    }

    /**
     * Actualiza un elemento <code>IGameEntity</code> de un array con el objeto especificado por parámetro. Mediante la
     * recursividad, la función continuará descendiendo por los elementos hasta encontrar el requerido. Retorna true
     * en caso de éxito, false en caso contrario.
     * @param _array Lista en la que actualizar el elemento.
     * @param _element Elemento a actualizar.
     * @returns {boolean}
     */
    static set(_array: Array<IGameEntity>, _element: IGameEntity): boolean {
        var updated: boolean = false;
        _array.forEach(function(e) {
            if (!updated) {
                if (_element.equals(e)) {
                    e = _element;
                    updated = true;
                }
                else if(e instanceof AbstractFieldSet) updated = e.set(<IField> _element);
            }
        });
        return updated;
    }

    /**
     * Extrae del array especificado un nuevo array a partir del valor en cada elemento de la propiedad especificada.
     * @param _array Array de objetos.
     * @param _prop Propiedad de la cual extraer el array.
     * @returns {any[]}
     */
    static fromProperty(_array: Object[], _prop: string) {
        return _array.map(function(element) {
            return element[_prop];
        });
    }
    /**
     * Suma todos los números dentro de un array de números.
     * @param _array Array de números
     * @returns {number}
     */
    static summation(_array: number[]): number {
        var sum: (firstTerm: number, lastTerm: number) => number = function(a, b) { return a + b; };
        return _array.reduce(sum, 0);
    }
}