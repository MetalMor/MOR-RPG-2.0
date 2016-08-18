'use strict';
import {IDataField} from "./IDataField.interface";
/**
 * Created by becari on 18/08/2016.
 */
export interface IImageDataField extends IDataField {
    _value: HTMLImageElement;
}