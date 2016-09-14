'use strict';
import {IRoll} from "../interfaces/IRoll.interface";
import {Util} from "../../util/classes/Util.class";
import {AbstractRollOperation} from "./AbstractRollOperation.class";
import {IThrowableRollOperation} from "../interfaces/IThrowableRollOperation.interface";
/**
 * Clase abstracta que representa un dado de 10.
 * Created by becari on 18/08/2016.
 */
export abstract class AbstractRoll extends AbstractRollOperation implements IRoll {
    _res: number;

    constructor(obj?: AbstractRoll) {
        super(obj);
        this.res = obj && obj.res || 0;
    }


    /**
     * Tira el dado (entre 0 y 10) y retorna una referencia a este objeto.
     * @returns {AbstractRoll}
     */
    throwDices(): IThrowableRollOperation {
        this.res = Util.randomNumber(1, 10);
        console.log("Threw "+this.label+", result: "+this.res);
        return this;
    }

    /**
     * Retorna true si el resultado de este dado ha sido exitoso, false en caso contrario.
     * @returns {boolean}
     */
    isWin(): boolean {
        var ret: boolean = this.res >= this.dif;
        console.log(this.label+": "+ret?"Success":"Failure");
        return ret;
    }

    /**
     * Retorna true si el resultado de este dado ha sido una pifia, false en caso contrario.
     * @returns {boolean}
     */
    isBlunder(): boolean {
        var ret: boolean = this.res === 1;
        console.log(this.label+": "+ret?"Blunder":"Not blunder");
        return ret;
    }

    get res(): number {
        return this._res;
    }
    set res(_res: number) {
        this._res = _res;
    }
}
