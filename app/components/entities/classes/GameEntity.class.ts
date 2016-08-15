'use strict';
import {IGameEntity} from "../interfaces/IGameEntity.interface";
/**
 * Created by Mor on 15/08/2016.
 */
export abstract class GameEntity implements IGameEntity {
    _name: string;

    constructor(obj?: IGameEntity) {
        var cast = <GameEntity> obj;
        this.name = cast && cast.name || "unnamed";
    }

    public get name(): string {
        return this._name;
    }
    public set name(_name: string) {
        this._name = _name;
    }

    public toString(): string {
        return this.name;
    }
}