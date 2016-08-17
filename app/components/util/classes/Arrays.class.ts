'use strict';
import {IGameEntity} from "../../entities/interfaces/IGameEntity.interface";
/**
 * Created by Mor on 17/08/2016.
 */
export class Arrays {
    static add(array: Array<IGameEntity>, element: IGameEntity): boolean {
        var prevLength: number = array.length;
        return array.push(element) > prevLength;
    }
    static get(array: Array<IGameEntity>, element: IGameEntity): IGameEntity {
        // TODO impl
        return element;
    }
    static remove(array: Array<IGameEntity>, element: IGameEntity): boolean {
        // TODO impl
        return false;
    }
    static set(array: Array<IGameEntity>, element: IGameEntity): boolean {
        // TODO impl
        return false;
    }
}