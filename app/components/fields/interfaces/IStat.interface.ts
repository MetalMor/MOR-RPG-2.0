'use strict';
import {IStatModificator} from "../../modificators/interfaces/IStatModificator.interface";
import {IField} from "./IField.interface";
/**
 * Created by Mor on 15/08/2016.
 */
export interface IStat extends IField {
    getValue(): number;
}