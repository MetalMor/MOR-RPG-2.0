'use strict';
import {IGameEntity} from "./IGameEntity.interface";
/**
 * Created by Mor on 15/08/2016.
 */
export interface IIndexedGameEntity extends IGameEntity {
    toString(): string;
    equals(obj: IIndexedGameEntity): boolean;
}