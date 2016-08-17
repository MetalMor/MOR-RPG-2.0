'use strict';
import {AbstractWrapperStatField} from "./AbstractWrapperStatField.class";
import {IWrapperStatField} from "../interfaces/IWrapperStatField.interface";
/**
 * Created by Mor on 17/08/2016.
 */
export class PowerStat extends AbstractWrapperStatField {
    constructor(obj?: AbstractWrapperStatField) {
        super(<IWrapperStatField>obj);
    }
}