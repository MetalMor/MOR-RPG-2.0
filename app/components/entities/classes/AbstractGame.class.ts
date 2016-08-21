'use strict';
import {IndexedGameEntity} from "./IndexedGameEntity.class";
import {IGameCharacterList} from "../../properties/interfaces/IGameCharacterList.interface";
import {GameCharacterList} from "../../properties/classes/GameCharacterList.class";
import {IGame} from "../interfaces/IGame.interface";
import {ICharacter} from "../interfaces/ICharacter.interface";
import {ImageDataField} from "../../fields/classes/ImageDataField.class";
import {RegularDataField} from "../../fields/classes/RegularDataField.class";
/**
 * Created by Mor on 17/08/2016.
 */
export abstract class AbstractGame extends IndexedGameEntity implements IGame {
    _charList: IGameCharacterList;
    _image: ImageDataField;
    _story: RegularDataField;

    constructor(obj?: AbstractGame) {
        super(obj);
        this.charList = obj && obj.charList || new GameCharacterList();
    }

    get charList(): IGameCharacterList {
        return this._charList;
    }
    set charList(_charList: IGameCharacterList) {
        this._charList = _charList;
    }
    get story(): RegularDataField {
        return this._story;
    }
    set story(_story: RegularDataField) {
        this._story = _story;
    }

    addPc(_pc: ICharacter): boolean {
        return this.charList.addPc(_pc);
    }
    removePc(_pc: ICharacter): boolean {
        return this.charList.removePc(_pc);
    }
    getPc(_pc: ICharacter): ICharacter {
        return this.charList.getPc(_pc);
    }

    addNpc(_npc: ICharacter): boolean {
        return this.charList.addNpc(_npc);
    }
    removeNpc(_npc: ICharacter): boolean {
        return this.charList.removeNpc(_npc);
    }
    getNpc(_npc: ICharacter): ICharacter {
        return this.charList.getNpc(_npc);
    }
}