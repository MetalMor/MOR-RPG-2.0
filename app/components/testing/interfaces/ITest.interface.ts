'use strict';
/**
 * Interfaz para definir las propiedades básicas de una prueba unitaria.
 * Created by becari on 16/09/2016.
 */
export interface ITest<T> {
    _testing: T;
    test();
}