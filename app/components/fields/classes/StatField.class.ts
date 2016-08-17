import {IStat} from "../interfaces/IStat.interface";
import {AbstractField} from "./AbstractField.class";
import {IStatModificator} from "../interfaces/IStatModificator.interface";
import {Arrays} from "../../util/classes/Arrays.class";
/**
 * Created by becari on 17/08/2016.
 */
export class StatField extends AbstractField implements IStat {
    _mods: IStatModificator[];

    constructor(obj?: IStat) {
        super(obj);
        var cast = <StatField> obj;
        this.mods = cast && cast.mods || new Array<IStatModificator>();
    }

    get mods(): IStatModificator[] {
        return this._mods;
    }
    set mods(_mods: IStatModificator[]) {
        this._mods = _mods;
    }

    addMod(_mod: IStatModificator): boolean {
        return Arrays.add(this.mods, _mod);
    }

    removeMod(_mod: IStatModificator) {
        return Arrays.remove(this.mods, _mod);
    }

    getMod(_mod: IStatModificator) {
        return Arrays.get(this.mods, _mod);
    }
}