'use strict';
import {IStatModificator} from "./IStatModificator.interface";
import {IField} from "../../fields/interfaces/IField.interface";
/**
 * Created by Mor on 09/09/2016.
 */
export interface IModificators extends IField {
    addMod(_mod: IStatModificator): boolean;
    removeMod(_mod: IStatModificator): boolean;
    getMod(_mod: IStatModificator): IStatModificator;
}