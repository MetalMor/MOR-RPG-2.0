'use strict';
import {IndexedGameEntity} from "../../entities/classes/IndexedGameEntity.class";
import {IAction} from "../interfaces/IAction.interface";
import {IRollSet} from "../interfaces/IRollSet.interface";
/**
 * Created by Mor on 15/08/2016.
 */
export abstract class AbstractAction extends IndexedGameEntity implements IAction {
    _desc: string;
    _time: Date;
    _rolls: IRollSet[];

    resolve(): void {
        var rolls: IRollSet[] = this.rolls;
        rolls.forEach(function(r) {
            r.resolve();
        });
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

    public get rolls(): IRollSet[] {
        return this._rolls;
    }
    public set rolls(_rolls: IRollSet[]) {
        this._rolls = _rolls;
    }
}