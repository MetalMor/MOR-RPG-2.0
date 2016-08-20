'use strict';
import {ISharedUserProperty} from "./ISharedUserProperty.interface";
import {ICharacter} from "../../entities/interfaces/ICharacter.interface";
/**
 * Created by Mor on 20/08/2016.
 */
export interface ICharacterList extends ISharedUserProperty {
    addPc(_npc: ICharacter);
    removePc(_npc: ICharacter);
    getPc(_npc: ICharacter);
}