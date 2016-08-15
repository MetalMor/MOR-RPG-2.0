'use strict';
import {IStatModificator} from 'IStatModificator.interface';
/**
 * Created by Mor on 15/08/2016.
 */
export interface IStatModificatorSource {
    _grants: IStatModificator[];
    addMod(mod: IStatModificator | number): boolean;
    removeMod(mod: IStatModificator | number): boolean;
    addAllMods(): boolean;
    removeAllMods(): boolean;
}