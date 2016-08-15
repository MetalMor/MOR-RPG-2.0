'use strict';
import {IStatModificator} from "IStatModificator.interface";
/**
 * Created by Mor on 15/08/2016.
 */
export interface IStat {
    mods: IStatModificator[];
    addMod(mod: IStatModificator): void
    removeMod(mod: IStatModificator | number);
    getMod(id: number);
}