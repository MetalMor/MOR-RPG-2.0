'use strict';
/**
 * Created by Mor on 17/08/2016.
 */
export class Util {
    static DEF_MAX_ID: number = 10000;
    static DEF_MIN_ID: number = 1;
    static randomNumber(_min: number, _max: number): number {
        var _min: number = _min || Util.DEF_MAX_ID,
            _max: number = _max || Util.DEF_MIN_ID;
        return Math.floor(Math.random()*_max+_min);
    }
    static autoId(): number {
        return Util.randomNumber(null, null);
    }
}