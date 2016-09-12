'use strict';
import {IFieldSet} from "../../fields/interfaces/IFieldSet.interface";
import {IIndexedGameEntity} from "../../entities/interfaces/IIndexedGameEntity.interface";
import {IStatModificatorSource} from "../../modificators/interfaces/IStatModificatorSource.interface";
import {IBuilt} from "../../builder/interfaces/IBuilt.interface";
/**
 * Created by Mor on 17/08/2016.
 */
export interface IItem extends IFieldSet, IBuilt {
    _inherits: IIndexedGameEntity;
    addMods(): boolean;
    equals(obj: IIndexedGameEntity): boolean;
}