'use strict';
import {AbstractCharacterListBuilder} from "../abstract/AbstractCharacterListBuilder.class";
import {GameCharacterList} from "../../../properties/classes/GameCharacterList.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {ICharacter} from "../../../entities/interfaces/ICharacter.interface";
/**
 * Created by becari on 14/09/2016.
 */
export class GameCharacterListBuilder extends AbstractCharacterListBuilder implements IBuilder<GameCharacterList> {
    _npcs: ICharacter[];

    constructor(obj?: GameCharacterListBuilder) {
        super(obj);
        this.npcs = obj && obj.npcs || new Array<ICharacter>();
    }

    setNpcs(_npcs: ICharacter[]): GameCharacterListBuilder {
        this.npcs = _npcs;
        return this;
    }
    build(): GameCharacterList {
        var ret: GameCharacterList = <GameCharacterList> super.build();
        ret.npcs = this.npcs;
        return ret;
    }

    get npcs(): ICharacter[] {
        return this._npcs;
    }
    set npcs(_npcs: ICharacter[]) {
        this._npcs = _npcs;
    }
}