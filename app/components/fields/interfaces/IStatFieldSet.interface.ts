'use strict';
import {IStatModificator} from "./IStatModificator.interface";
import {IFieldSet} from "./IFieldSet.interface";
import {IStat} from "./IStat.interface";
/**
 * Created by Mor on 17/08/2016.
 */
export interface IStatFieldSet extends IFieldSet, IStat {
    _mods: IStatModificator[];
}