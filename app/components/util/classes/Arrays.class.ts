'use strict';
import {IGameEntity} from "../../entities/interfaces/IGameEntity.interface";
import {Util} from "./Util.class";
import {IField} from "../../fields/interfaces/IField.interface";
import {AbstractFieldSet} from "../../fields/classes/AbstractFieldSet.class";
/**
 * Created by Mor on 17/08/2016.
 */
export class Arrays {
    static add(_array: Array<IGameEntity>, _element: IGameEntity): boolean {
        var prevLength: number = _array.length;
        return _array.push(_element) > prevLength;
    }
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
}