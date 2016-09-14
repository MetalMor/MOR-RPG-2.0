'use strict';
import {AbstractGame} from "../../../entities/classes/AbstractGame.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {AbstractIndexedBuilder} from "./AbstractIndexedBuilder.class";
import {RegularDataField} from "../../../fields/classes/RegularDataField.class";
import {ImageDataField} from "../../../fields/classes/ImageDataField.class";
import {IGameCharacterList} from "../../../properties/interfaces/IGameCharacterList.interface";
import {GameCharacterList} from "../../../properties/classes/GameCharacterList.class";
/**
 * Created by becari on 12/09/2016.
 */
export abstract class AbstractGameBuilder extends AbstractIndexedBuilder implements IBuilder<AbstractGame> {
    _charList: IGameCharacterList;
    _image: ImageDataField;
    _story: RegularDataField;

    constructor(obj?: AbstractGameBuilder) {
        super(obj);
        this.charList = obj && obj.charList || new GameCharacterList();
        this.story = obj && obj.story || new RegularDataField();
        this.image = obj && obj.image  || new ImageDataField();
    }

    setCharList(_charList: IGameCharacterList): AbstractGameBuilder {
        this.charList = _charList;
        return this;
    }
    setImage(_image: ImageDataField): AbstractGameBuilder {
        this.image = _image;
        return this;
    }
    setStory(_story: RegularDataField): AbstractGameBuilder {
        this.story = _story;
        return this;
    }
    build(): AbstractGame {
        var ret: AbstractGame = <AbstractGame> super.build();
        ret.charList = this.charList;
        ret.image = this.image;
        ret.story = this.story;
        return ret;
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
}