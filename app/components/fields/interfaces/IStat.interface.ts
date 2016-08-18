'use strict';
import {IStatModificator} from "./IStatModificator.interface";
import {IField} from "./IField.interface";
/**
 * Created by Mor on 15/08/2016.
 */
export interface IStat extends IField {
    addMod(_mod: IStatModificator): void
    removeMod(_mod: IStatModificator);
    getMod(_mod: IStatModificator);
}