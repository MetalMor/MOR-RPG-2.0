'use strict';
import {SharedUserProperty} from "./ISharedUserProperty.interface";
/**
 * Created by Mor on 15/08/2016.
 */
export interface CharacterProperty extends SharedUserProperty {
    getCharacter(): Character;
}
