'use strict';
import {SharedUserProperty} from "./ISharedUserProperty.interface";
import {AbstractCharacter} from "../../entities/classes/AbstractCharacter.class";
/**
 * Created by Mor on 15/08/2016.
 */
export interface CharacterProperty extends SharedUserProperty {
    getCharacter(): AbstractCharacter;
}
