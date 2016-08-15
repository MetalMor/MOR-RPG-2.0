'use strict';
import {IIndexedGameEntity} from "../../entities/interfaces/IIndexedGameEntity.interface";
import {IRoll} from "./IRoll.interface";
/**
 * Created by Mor on 15/08/2016.
 */
export interface IAction extends IIndexedGameEntity {
    _desc: string;
    _time: Date;
    _rolls: IRoll[];
    resolve(): void;
}