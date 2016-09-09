'use strict';
import {IStatModificatorSource} from "./IStatModificatorSource.interface";
import {IStat} from "../../fields/interfaces/IStat.interface";
import {IGameEntity} from "../../entities/interfaces/IGameEntity.interface";
import {StatModificatorType} from "../enumerations/StatModificatorType.enum";
/**
 * Created by Mor on 15/08/2016.
 */
export interface IStatModificator extends IGameEntity {
    //_modifies: IStat[];
    isType(_type: StatModificatorType): boolean;
}