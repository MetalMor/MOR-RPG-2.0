'use strict';
import {IStatModificator} from './IStatModificator.interface';
/**
 * Created by Mor on 15/08/2016.
 */
export interface IStatModificatorSource {
    _grants: IStatModificator[];
    addMod(_mod: IStatModificator): boolean;
    removeMod(_mod: IStatModificator): boolean;
    getMod(_mod: IStatModificator): IStatModificator;
}