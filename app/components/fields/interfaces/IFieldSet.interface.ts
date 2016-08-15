'use strict';
/**
 * Created by Mor on 15/08/2016.
 */
export interface IFieldSet {
    get(field: string): Field;
    set(field: Field): boolean;
    add(field: Field): boolean;
    remove(field: Field | string): boolean;
}