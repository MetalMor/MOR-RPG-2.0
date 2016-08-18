import {IRoll} from "../interfaces/IRoll.interface";
import {Util} from "../../util/classes/Util.class";
import {AbstractRollOperation} from "./AbstractRollOperation.class";
import {IThrowableRollOperation} from "../interfaces/IThrowableRollOperation.interface";
/**
 * Created by becari on 18/08/2016.
 */
export abstract class AbstractRoll extends AbstractRollOperation implements IRoll {
    _res: number;

    constructor(obj?: AbstractRoll) {
        super(obj);
        this.res = obj && obj.res || 0;
    }

    get res(): number {
        return this._res;
    }
    set res(_res: number) {
        this._res = _res;
    }

    throwDices(): IThrowableRollOperation {
        this.res = Util.randomNumber(1, 10);
        console.log("Threw "+this.label+", result: "+this.res);
        return this;
    }
    isWin(): boolean {
        var ret: boolean = this.res >= this.dif;
        console.log(this.label+": "+ret?"Success":"Failure");
        return ret;
    }
    isBlunder(): boolean {
        var ret: boolean = this.res === 0;
        console.log(this.label+": "+ret?"Blunder":"Not blunder");
        return ret;
    }
}