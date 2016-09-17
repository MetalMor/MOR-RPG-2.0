'use strict';
import {IField} from "./IField.interface";
import {IModificable} from "../../modificators/interfaces/IModificable.interface";
/**
 * Created by Mor on 15/08/2016.
 */
export interface IStat extends IField, IModificable {
    getValue(): number;
}