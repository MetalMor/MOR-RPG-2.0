'use strict';
import {IStatModificatorSource} from "./IStatModificatorSource.interface";
import {IStat} from "./IStat.interface";
import {IGameEntity} from "../../entities/interfaces/IGameEntity.interface";
/**
 * Created by Mor on 15/08/2016.
 */
export interface IStatModificator extends IGameEntity {
    _id: number;
    _desc: string;
    _value: number;
    _source: IStatModificatorSource[];
    _modifies: IStat[];
}