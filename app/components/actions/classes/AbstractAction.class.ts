'use strict';
import {IndexedGameEntity} from "../../entities/classes/IndexedGameEntity.class";
import {IAction} from "../interfaces/IAction.interface";
import {IRoll} from "../interfaces/IRoll.interface";
/**
 * Created by Mor on 15/08/2016.
 */
export abstract class AbstractAction extends IndexedGameEntity implements IAction {
    _desc: string;
    _time: Date;
    _rolls: IRoll[];

    resolve(): void {

    }

    public get desc(): string {
        return this._desc;
    }
    public set desc(_desc: string) {
        this._desc = _desc;
    }

    public get time(): Date {
        return this._time;
    }
    public set time(_time: Date) {
        this._time = _time;
    }

    public get rolls(): IRoll[] {
        return this._rolls;
    }
    public set rolls(_rolls: IRoll[]) {
        this._rolls = _rolls;
    }
}