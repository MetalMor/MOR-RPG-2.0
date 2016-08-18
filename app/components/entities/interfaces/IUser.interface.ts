'use strict';
import {IEntityCreator} from "../../builder/interfaces/IEntityCreator.interface";
import {IIndexedGameEntity} from "./IIndexedGameEntity.interface";
/**
 * Created by becari on 18/08/2016.
 */
export interface IUser extends IEntityCreator, IIndexedGameEntity {
    _inherits: IEntityCreator;
}