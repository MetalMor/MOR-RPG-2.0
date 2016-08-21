'use strict';
import {AbstractCharacterList} from "./AbstractCharacterList.class";
import {ICharacter} from "../../entities/interfaces/ICharacter.interface";
import {IGameCharacterList} from "../interfaces/IGameCharacterList.interface";
import {Arrays} from "../../util/classes/Arrays.class";
/**
 * Created by Mor on 20/08/2016.
 */
export class GameCharacterList extends AbstractCharacterList implements IGameCharacterList {
    _npcs: ICharacter[];

    constructor(obj?: GameCharacterList) {
        super(obj);
        this.npcs = obj && obj.npcs || new Array<ICharacter>();
    }

    get npcs(): ICharacter[] {
        return this._npcs;
    }
    set npcs(_npcs: ICharacter[]) {
        this._npcs = _npcs;
    }

    addNpc(_npc: ICharacter): boolean {
        return Arrays.add(this.npcs, _npc);
    }
    removeNpc(_npc: ICharacter): boolean {
        return Arrays.remove(this.npcs, _npc);
    }
    getNpc(_npc: ICharacter): ICharacter {
        return <ICharacter> Arrays.get(this.npcs, _npc);
    }
}