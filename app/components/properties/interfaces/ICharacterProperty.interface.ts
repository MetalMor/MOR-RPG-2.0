'use strict';
import {ISharedUserProperty} from "./ISharedUserProperty.interface";
import {AbstractCharacter} from "../../entities/classes/AbstractCharacter.class";
/**
 * Created by Mor on 15/08/2016.
 */
export interface ICharacterProperty extends ISharedUserProperty {
    getCharacter(): AbstractCharacter;
}
