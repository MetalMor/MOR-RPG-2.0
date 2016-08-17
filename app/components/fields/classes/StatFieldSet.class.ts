'use strict';
import {IStatFieldSet} from "../interfaces/IStatFieldSet.interface";
import {IStatModificator} from "../interfaces/IStatModificator.interface";
import {RegularFieldSet} from "./RegularFieldSet.class";
import {Arrays} from "../../util/classes/Arrays.class";
/**
 * Created by Mor on 17/08/2016.
 */
export class StatFieldSet extends RegularFieldSet implements IStatFieldSet {
    _mods: IStatModificator[];
    _initPoints: number;

    get mods(): IStatModificator[] {
        return this._mods;
    }
    set mods(_mods: IStatModificator[]) {
        this._mods = _mods;
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