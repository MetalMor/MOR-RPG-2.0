'use strict';
import {IGameEntity} from "../../entities/interfaces/IGameEntity.interface";
/**
 * Created by becari on 18/08/2016.
 */
export interface IRollOperation extends IGameEntity {
    _label: string;
    _dif: number;
}