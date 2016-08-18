'use strict';
import {IndexedGameEntity} from "./IndexedGameEntity.class";
import {IEntityCreator} from "../../builder/interfaces/IEntityCreator.interface";
import {IGameEntity} from "../interfaces/IGameEntity.interface";
import {IUser} from "../interfaces/IUser.interface";
import {EntityCreatorImpl} from "../../builder/classes/EntityCreatorImpl.class";
import {AbstractEntityCreator} from "../../builder/classes/AbstractEntityCreator";
/**
 * Created by Mor on 17/08/2016.
 */
export abstract class AbstractUser extends IndexedGameEntity implements IUser {
    _inherits: IEntityCreator;

    constructor(obj?: AbstractUser) {
        super(obj);
        this.inherits = obj && obj.inherits || new EntityCreatorImpl();
    }

    get inherits(): IEntityCreator {
        return this._inherits;
    }
    set inherits(_inherits: IEntityCreator) {
        this._inherits = _inherits;
    }

    create(_entity: IGameEntity): boolean {
        return (<AbstractEntityCreator> this.inherits).create(_entity);
    }
    remove(_entity: IGameEntity): boolean {
        return (<AbstractEntityCreator> this.inherits).remove(_entity);
    }
    find(_entity: IGameEntity): IGameEntity {
        return (<AbstractEntityCreator> this.inherits).find(_entity);
    }
    update(_entity: IGameEntity): boolean {
        return (<AbstractEntityCreator> this.inherits).update(_entity);
    }
}