'use strict';
/**
 * Created by Mor on 15/08/2016.
 */

import {IGameEntity} from "../../entities/interfaces/IGameEntity.interface";

export interface IEntityCreator {
    create(entity: IGameEntity): boolean;
    remove(entity: IGameEntity | number): boolean;
    find(entity: number): IGameEntity;
    update(entity: IGameEntity): boolean;
}