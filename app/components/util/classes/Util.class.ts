'use strict';
import {Constants} from "./Constants.class";
/**
 * Created by Mor on 17/08/2016.
 */
export class Util {
    static randomNumber(_min: number, _max: number): number {
        var _min: number = _min || Constants.DEF_MAX_ID,
            _max: number = _max || Constants.DEF_MIN_ID;
        return Math.floor(Math.random()*_max+_min);
    }
    static autoId(): number {
        return Util.randomNumber(null, null);
    }
    static isUndefined(obj): boolean {
        return typeof obj === Constants.TYPE_UNDEFINED;
    }
}