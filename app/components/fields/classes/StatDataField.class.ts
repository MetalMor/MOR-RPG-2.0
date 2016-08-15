'use strict';
import {IDataField} from "../interfaces/IDataField.interface";
/**
 * Created by Mor on 15/08/2016.
 */
export abstract class StatDataField extends StatField implements IDataField {
    private _inherits: IDataField;

    constructor(obj?: IDataField) {
        super();
        // TODO set inherits
    }

    public get inherits(): IDataField {
        return this._inherits;
    }
    public set inherits(_inherits: IDataField) {
        this._inherits = _inherits;
    }
}