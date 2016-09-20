'use strict';
import {AbstractCharacterListBuilder} from "../abstract/AbstractCharacterListBuilder.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {UserCharacterList} from "../../../properties/classes/implementation/UserCharacterList.class";
/**
 * Created by becari on 14/09/2016.
 */
export class UserCharacterListBuilder extends AbstractCharacterListBuilder implements IBuilder<UserCharacterList> {
    constructor(obj?: UserCharacterListBuilder) {
        super(obj);
    }

    build(): UserCharacterList {
        return new UserCharacterList(<UserCharacterList> super.build());
    }
}