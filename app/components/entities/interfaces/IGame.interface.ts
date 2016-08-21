'use strict';
import {IIndexedGameEntity} from "./IIndexedGameEntity.interface";
import {ICharacter} from "./ICharacter.interface";
/**
 * Created by Mor on 21/08/2016.
 */
export interface IGame extends IIndexedGameEntity {
    addPc(_pc: ICharacter): boolean;
    removePc(_pc: ICharacter): boolean;
    getPc(_pc: ICharacter): ICharacter;
    addNpc(_npc: ICharacter): boolean;
    removeNpc(_npc: ICharacter): boolean;
    getNpc(_npc: ICharacter): ICharacter;
}