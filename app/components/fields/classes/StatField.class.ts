import {IStat} from "../interfaces/IStat.interface";
import {AbstractField} from "./AbstractField.class";
import {IStatModificator} from "../interfaces/IStatModificator.interface";
import {Arrays} from "../../util/classes/Arrays.class";
/**
 * Created by becari on 17/08/2016.
 */
export class StatField extends AbstractField implements IStat {
    _mods: IStatModificator[];
    _level: number;
    _limit: number;
    _min: number;

    constructor(obj?: IStat) {
        super(obj);
        var cast = <StatField> obj;
        this.mods = cast && cast.mods || new Array<IStatModificator>();
        this.level = cast && cast.level || 0;
        this.limit = cast && cast.limit || 10;
        this.min = cast && cast.min || 0;
    }

    get mods(): IStatModificator[] {
        return this._mods;
    }
    set mods(_mods: IStatModificator[]) {
        this._mods = _mods;
    }
    get level(): number {
        return this._level;
    }
    set level(_level: number) {
        if(_level >= this.min) this._level = _level;
    }
    get limit(): number {
        return this._limit;
    }
    set limit(_limit: number) {
        if(_limit >= this.min) this._limit = _limit;
    }
    get min(): number {
        return this._min;
    }
    set min(_min: number) {
        this._min = _min;
    }

    grow(): StatField {
        if(this.level < this.limit) this.level++;
        return this;
    }
    addMod(_mod: IStatModificator): boolean {
        return Arrays.add(this.mods, _mod);
    }
    removeMod(_mod: IStatModificator): boolean {
        return Arrays.remove(this.mods, _mod);
    }
    getMod(_mod: IStatModificator): IStatModificator {
        return <IStatModificator> Arrays.get(this.mods, _mod);
    }
}