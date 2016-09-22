'use strict';
import {IFieldSet} from "../../fields/interfaces/IFieldSet.interface";
import {IIndexedGameEntity} from "../../entities/interfaces/IIndexedGameEntity.interface";
/**
 * Created by Mor on 17/08/2016.
 */
export interface IItem extends IFieldSet {
    _inherits: IIndexedGameEntity;
    addMods(): boolean;
    getHidingAsString(): string;
    equals(obj: IIndexedGameEntity): boolean;
}