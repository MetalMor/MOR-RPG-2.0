import {IEntityCreator} from "../../interfaces/IEntityCreator.interface";
import {IGameEntity} from "../../../entities/interfaces/IGameEntity.interface";
/**
 * Created by becari on 18/08/2016.
 */
export abstract class AbstractEntityCreator implements IEntityCreator {
    constructor(obj?: AbstractEntityCreator) { }
    create(_entity: IGameEntity): boolean {
        // TODO impl
        return false;
    }
    remove(_entity: IGameEntity): boolean {
        // TODO impl
        return false;
    }
    find(_entity: IGameEntity): IGameEntity {
        // TODO impl
        return null;
    }
    update(_entity: IGameEntity): boolean {
        // TODO impl
        return false;
    }
}