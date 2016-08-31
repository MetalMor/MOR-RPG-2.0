'use strict';
import {ICharacterList} from "../interfaces/ICharacterList.interface";
import {ICharacter} from "../../entities/interfaces/ICharacter.interface";
import {IndexedGameEntity} from "../../entities/classes/IndexedGameEntity.class";
import {Arrays} from "../../util/classes/Arrays.class";
import {AbstractUser} from "../../entities/classes/AbstractUser.class";
import {SingletonUser} from "../../entities/classes/SingletonUser.class";
/**
 * Created by Mor on 20/08/2016.
 */
export abstract class AbstractCharacterList extends IndexedGameEntity implements ICharacterList {
    _pcs: ICharacter[];
    _ownerId: number;

    constructor(obj?: AbstractCharacterList) {
        super(obj);
        this.pcs = obj && obj.pcs || new Array<ICharacter>();
    }

    get pcs(): ICharacter[] {
        return this._pcs;
    }
    set pcs(_pcs: ICharacter[]) {
        this._pcs = _pcs;
    }

    addPc(_pc: ICharacter): boolean {
        return Arrays.add(this.pcs, _pc);
    }
    removePc(_pc: ICharacter): boolean {
        return Arrays.remove(this.pcs, _pc);
    }
    getPc(_pc: ICharacter): ICharacter {
        return <ICharacter> Arrays.get(this.pcs, _pc);
    }
    setPc(_pc: ICharacter): boolean {
        return Arrays.set(this.pcs, _pc);
    }

    getOwner(): AbstractUser {
        // TODO impl
        return null;
    }
    getCurrentUser(): AbstractUser {
        return SingletonUser.instance;
    }
}