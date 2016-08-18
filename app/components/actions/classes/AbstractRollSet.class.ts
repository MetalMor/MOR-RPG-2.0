import {IRollSet} from "../interfaces/IRollSet.interface";
import {IRoll} from "../interfaces/IRoll.interface";
import {AbstractRoll} from "./AbstractRoll.class";
import {AbstractRollOperation} from "./AbstractRollOperation.class";
import {Arrays} from "../../util/classes/Arrays.class";
import {IThrowableRollOperation} from "../interfaces/IThrowableRollOperation.interface";
/**
 * Created by becari on 18/08/2016.
 */
export abstract class AbstractRollSet extends AbstractRollOperation implements IRollSet {
    _rolls: IRoll[];

    constructor(obj?: AbstractRollSet) {
        super(obj);
        this.rolls = obj && obj.rolls || new Array<AbstractRoll>();
    }

    get rolls(): IRoll[] {
        return this._rolls;
    }
    set rolls(_rolls: IRoll[]) {
        this._rolls = _rolls;
    }

    add(_roll: IRoll): boolean {
        return Arrays.add(this.rolls, _roll);
    }
    remove(_roll: IRoll): boolean {
        return Arrays.remove(this.rolls, _roll);
    }
    get(_roll: IRoll): IRoll {
        return <IRoll> Arrays.get(this.rolls, _roll);
    }

    isWin(): boolean {
        var ret: boolean = false,
            rolls: IRoll[] = this.rolls;
        rolls.forEach(function(r) {
            if(!ret && r.isWin()) ret = true;
        });
        return ret;
    }
    isBlunder(): boolean {
        var rolls: IRoll[] = this.rolls,
            wins: number = 0,
            blunders: number = 0;
        rolls.forEach(function(r) {
            if(r.isWin()) wins++;
            else if(r.isBlunder()) blunders++;
        });
        return blunders > wins;
    }
    throwDices(): IThrowableRollOperation {
        var rolls: IRoll[] = this.rolls;
        rolls.forEach(function(r) {
            r.throwDices();
        });
        return this;
    }
    resolve(): IRollSet {
        return (<AbstractRollSet> this.init().throwDices()).validate();
    }
    init(): IRollSet {
        return this;
    }
    validate(): IRollSet {
        return this;
    }
}