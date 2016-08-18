'use strict';
/**
 * Created by Mor on 15/08/2016.
 */

import {IGameEntity} from "../../entities/interfaces/IGameEntity.interface";

export interface IEntityCreator {
    create(_entity: IGameEntity): boolean;
    remove(_entity: IGameEntity): boolean;
    find(_entity: IGameEntity): IGameEntity;
    update(_entity: IGameEntity): boolean;
}