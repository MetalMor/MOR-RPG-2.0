'use strict';
import {IStatModificator} from "./IStatModificator.interface";
import {StatModificatorType} from "../enumerations/StatModificatorType.enum";
import {IModificators} from "./IModificators.interface";
/**
 * Created by Mor on 09/09/2016.
 */
export interface IModificable extends IModificators {
    getModsByType(_type: StatModificatorType): IStatModificator[];
}