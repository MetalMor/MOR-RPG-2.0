'use strict';
import {AbstractCharacterList} from "../../../properties/classes/abstract/AbstractCharacterList.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {AbstractIndexedGameEntityBuilder} from "./AbstractIndexedGameEntityBuilder.class";
import {ICharacter} from "../../../entities/interfaces/ICharacter.interface";
import {CharacterListImpl} from "../../../properties/classes/implementation/CharacterListImpl.class";
/**
 * Created by becari on 14/09/2016.
 */
export abstract class AbstractCharacterListBuilder extends AbstractIndexedGameEntityBuilder implements IBuilder<AbstractCharacterList> {
    _pcs: ICharacter[];
    _ownerId: number;

    constructor(obj?: AbstractCharacterListBuilder) {
        super(obj);
        this.pcs = obj && obj.pcs || new Array<ICharacter>();
        this.ownerId = obj && obj.ownerId || 0;
    }

    setPcs(_pcs: ICharacter[]): AbstractCharacterListBuilder {
        this.pcs = _pcs;
        return this;
    }
    setOwnerId(_ownerId: number): AbstractCharacterListBuilder {
        this.ownerId = _ownerId;
        return this;
    }
    build(): AbstractCharacterList {
        var ret: AbstractCharacterList = new CharacterListImpl(<AbstractCharacterList> super.build());
        ret.pcs = this.pcs;
        ret.ownerId = this.ownerId;
        return ret;
    }

    get pcs(): ICharacter[] {
        return this._pcs;
    }
    set pcs(_pcs: ICharacter[]) {
        this._pcs = _pcs;
    }
    get ownerId(): number {
        return this._ownerId;
    }
    set ownerId(_ownerId: number) {
        this._ownerId = _ownerId;
    }
}