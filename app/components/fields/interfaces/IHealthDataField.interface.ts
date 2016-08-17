'use strict';
import {IDataField} from "./IDataField.interface";
/**
 * Created by Mor on 18/08/2016.
 */
export interface IHealthDataField extends IDataField {
    _labels: Array<string>;
    toString(): string;
}