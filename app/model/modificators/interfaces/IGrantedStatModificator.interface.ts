'use strict';
import {IStatModificator} from "./IStatModificator.interface";
import {IStatModificatorSource} from "./IStatModificatorSource.interface";
/**
 * Created by Mor on 17/09/2016.
 */
export interface IGrantedStatModificator extends IStatModificator {
    getSourceStat(): IStatModificatorSource;
}