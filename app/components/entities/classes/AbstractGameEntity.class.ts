'use strict';
import {IGameEntity} from "../interfaces/IGameEntity.interface";
/**
 * Created by Mor on 15/08/2016.
 */
export abstract class AbstractGameEntity implements IGameEntity {
    _name: string;

    constructor(obj?: IGameEntity) {
        var cast = <AbstractGameEntity> obj;
        this.name = cast && cast.name || "unnamed_"+(new Date()).getTime();
    }

    get name(): string {
        return this._name;
    }
    set name(_name: string) {
        this._name = _name;
    }

    toString(): string {
        return this.name;
    }
    equals(obj: IGameEntity): boolean {
        if(!obj) return false;
        return (<AbstractGameEntity> obj).name === this.name;
    }
}