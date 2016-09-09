'use strict';
import {IStat} from "./IStat.interface";
import {IModificable} from "../../modificators/interfaces/IModificable.interface";
/**
 * Created by Mor on 09/09/2016.
 */
export interface IStatField extends IStat, IModificable {
    getValue(): number;
}