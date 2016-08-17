'use strict';
import {IDataField} from "../interfaces/IDataField.interface";
import {StatField} from "./StatField.class";
import {IStat} from "../interfaces/IStat.interface";
import {RegularDataField} from "./RegularDataField.class";
/**
 * Created by Mor on 15/08/2016.
 */
export abstract class StatDataField extends StatField implements IDataField {
    _inherits: IDataField;

    constructor(obj?: IDataField) {
        super(<IStat>obj);
        var cast = <StatDataField> obj;
        this.inherits = cast && cast.inherits || new RegularDataField();
    }

    get inherits(): IDataField {
        return this._inherits;
    }
    set inherits(_inherits: IDataField) {
        this._inherits = _inherits;
    }
}