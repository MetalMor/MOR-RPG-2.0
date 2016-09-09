'use strict';
import {AbstractIndexedGameEntity} from "./AbstractIndexedGameEntity.class";
import {IGameCharacterList} from "../../properties/interfaces/IGameCharacterList.interface";
import {GameCharacterList} from "../../properties/classes/GameCharacterList.class";
import {IGame} from "../interfaces/IGame.interface";
import {ICharacter} from "../interfaces/ICharacter.interface";
import {ImageDataField} from "../../fields/classes/ImageDataField.class";
import {RegularDataField} from "../../fields/classes/RegularDataField.class";
/**
 * Created by Mor on 17/08/2016.
 */
export abstract class AbstractGame extends AbstractIndexedGameEntity implements IGame {
    _charList: IGameCharacterList;
    _image: ImageDataField;
    _story: RegularDataField;

    constructor(obj?: AbstractGame) {
        super(obj);
        this.charList = obj && obj.charList || new GameCharacterList();
        this.story = obj && obj.story || new RegularDataField();
        this.image = obj && obj.image  || new ImageDataField();
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
    get image(): ImageDataField {
        return this._image;
    }
    set image(_image: ImageDataField) {
        this._image = _image;
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
    setPc(_pc: ICharacter): boolean {
        return this.charList.setPc(_pc);
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
    setNpc(_npc: ICharacter): boolean {
        return this.charList.setNpc(_npc);
    }
}