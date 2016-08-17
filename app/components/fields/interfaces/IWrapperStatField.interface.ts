'use strict';
import {IWrapperField} from "./IWrapperField.interface";
import {IStat} from "./IStat.interface";
/**
 * Created by Mor on 17/08/2016.
 */
export interface IWrapperStatField extends IWrapperField, IStat {
    _inherits: IWrapperField;
}