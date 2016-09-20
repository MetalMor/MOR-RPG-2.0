'use strict';
import {IGameEntity} from "../../entities/interfaces/IGameEntity.interface";
import {IFieldSet} from "./IFieldSet.interface";
/**
 * Created by Mor on 17/08/2016.
 */
export interface IField extends IGameEntity {
    onAppend(_parent: IFieldSet);
    onRemove(_parent: IFieldSet);
}