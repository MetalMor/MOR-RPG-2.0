'use strict';
import {IStatModificatorSource} from "IStatModificatorSource.interface";
import {IStat} from "IStat.interface";
/**
 * Created by Mor on 15/08/2016.
 */
export interface IStatModificator {
    _id: number;
    _desc: string;
    _value: number;
    _source: IStatModificatorSource[];
    _modifies: IStat[];
}