'use strict';
import {IWrapperField} from "./IWrapperField.interface";
import {IStat} from "./IStat.interface";
import {IStatField} from "./IStatField.class";
/**
 * Created by Mor on 17/08/2016.
 */
export interface IWrapperStatField extends IWrapperField, IStatField {
    _inherits: IWrapperField;
}