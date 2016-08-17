'use strict';
import {IGameEntity} from "../../entities/interfaces/IGameEntity.interface";
/**
 * Created by Mor on 17/08/2016.
 */
export interface IField extends IGameEntity {
    _desc: string;
    _enabled: boolean;
}