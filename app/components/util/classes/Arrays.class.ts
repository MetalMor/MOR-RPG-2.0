'use strict';
import {IGameEntity} from "../../entities/interfaces/IGameEntity.interface";
import {Util} from "./Util.class";
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
            if(Util.isUndefined(ret) && _element.equals(e)) ret = e;
        });
        return ret;
    }
    static remove(_array: Array<IGameEntity>, _element: IGameEntity): boolean {
        var index: number, counter: number, len = _array.length,
            found: boolean;
        for(counter = 0; counter < len; counter++) {
            if(Util.isUndefined(index) && _array[counter].equals(_element))
                index = counter;
        }
        found = !Util.isUndefined(index);
        _array.splice(index, 1);
        return found;
    }
    static set(_array: Array<IGameEntity>, _element: IGameEntity): boolean {
        var updated: boolean = false;
        _array.forEach(function(e) {
            if (!updated && _element.equals(e)) {
                e = _element;
                updated = true;
            }
        });
        return updated;
    }
}