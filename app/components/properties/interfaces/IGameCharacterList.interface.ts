'use strict';
import {ICharacter} from "../../entities/interfaces/ICharacter.interface";
import {ICharacterList} from "./ICharacterList.interface";
/**
 * Created by Mor on 20/08/2016.
 */
export interface IGameCharacterList extends ICharacterList {
    addNpc(_npc: ICharacter);
    removeNpc(_npc: ICharacter);
    getNpc(_npc: ICharacter);
}