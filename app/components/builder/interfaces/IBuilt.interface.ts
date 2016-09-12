'use strict';
import {IBuilder} from "./IBuilder.interface";
/**
 * Created by becari on 12/09/2016.
 */
export interface IBuilt {
    constructor(obj?: IBuilder<IBuilt>);
}