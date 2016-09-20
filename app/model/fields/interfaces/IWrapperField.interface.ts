'use strict';
import {IStat} from "./IStat.interface";
import {IFieldSet} from "./IFieldSet.interface";
/**
 * Created by Mor on 17/08/2016.
 */
export interface IWrapperField extends IFieldSet {
    _inherits: IFieldSet;
}