'use strict';
import {IIndexedGameEntity} from "./IIndexedGameEntity.interface";
import {IUserCharacterList} from "../../properties/interfaces/IUserCharacterList.interface";
/**
 * Created by becari on 18/08/2016.
 */
export interface IUser extends IIndexedGameEntity {
    _charList: IUserCharacterList;
}