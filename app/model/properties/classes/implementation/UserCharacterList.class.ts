'use strict';
import {AbstractCharacterList} from "../abstract/AbstractCharacterList.class";
import {IUserCharacterList} from "../../interfaces/IUserCharacterList.interface";
/**
 * Created by Mor on 20/08/2016.
 */
export class UserCharacterList extends AbstractCharacterList implements IUserCharacterList {
    constructor(obj?: UserCharacterList) {
        super(obj);
    }
}