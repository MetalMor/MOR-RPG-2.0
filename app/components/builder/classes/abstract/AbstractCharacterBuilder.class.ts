'use strict';
import {AbstractStatFieldSetBuilder} from "./AbstractStatFieldSetBuilder.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {AbstractCharacter} from "../../../entities/classes/AbstractCharacter.class";
import {IIndexedGameEntity} from "../../../entities/interfaces/IIndexedGameEntity.interface";
import {AbstractIndexedGameEntity} from "../../../entities/classes/AbstractIndexedGameEntity.class";
import {IndexedGameEntityImpl} from "../../../entities/classes/IndexedGameEntityImpl.class";
import {Util} from "../../../util/classes/Util.class";
/**
 * Created by becari on 13/09/2016.
 */
export abstract class AbstractCharacterBuilder extends AbstractStatFieldSetBuilder implements IBuilder<AbstractCharacter> {
    _inherits: IIndexedGameEntity;
    _ownerId: number;

    constructor(obj?: AbstractCharacterBuilder) {
        super(obj);
        this.inherits = obj && obj.inherits || new IndexedGameEntityImpl();
        this.ownerId = obj && obj.ownerId || Util.autoId();
    }

    setId(_id: number): AbstractCharacterBuilder {
        this.id = _id;
        return this;
    }
    setInherits(_inherits: IIndexedGameEntity): AbstractCharacterBuilder {
        this.inherits = _inherits;
        return this;
    }
    setOwnerId(_ownerId: number): AbstractCharacterBuilder {
        this.ownerId = _ownerId;
        return this;
    }
    build(): AbstractCharacter {
        var ret: AbstractCharacter = <AbstractCharacter> super.build();
        ret.inherits = this.inherits;
        ret.ownerId = this.ownerId;
        return ret;
    }

    get id(): number {
        return (<AbstractIndexedGameEntity> this.inherits).id;
    }
    set id(_id: number) {
        (<AbstractIndexedGameEntity> this.inherits).id = _id;
    }
    get inherits(): IIndexedGameEntity {
        return this._inherits;
    }
    set inherits(_inherits: IIndexedGameEntity) {
        this._inherits = _inherits;
    }
    get ownerId(): number {
        return this._ownerId;
    }
    set ownerId(_ownerId: number) {
        this._ownerId = _ownerId;
    }
}