'use strict';
import {IModificators} from "./IModificators.interface";
import {AbstractCharacter} from "../../entities/classes/AbstractCharacter.class";
/**
 * Created by Mor on 09/09/2016.
 */
export interface IStatModificatorSource extends IModificators {
    modify(_char: AbstractCharacter);
    unleash();
}