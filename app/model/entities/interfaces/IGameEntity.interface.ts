'use strict';
/**
 * Created by Mor on 15/08/2016.
 */
export interface IGameEntity {
    _name: string;
    toString(): string;
    equals(obj: IGameEntity): boolean;
}