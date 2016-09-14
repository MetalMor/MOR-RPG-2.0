'use strict';
import {AbstractIndexedBuilder} from "./AbstractIndexedBuilder.class";
import {IBuilder} from "../interfaces/IBuilder.interface";
import {AbstractAction} from "../../actions/classes/AbstractAction.class";
import {IRollSet} from "../../actions/interfaces/IRollSet.interface";
/**
 * Created by becari on 14/09/2016.
 */
export abstract class AbstractActionBuilder extends AbstractIndexedBuilder implements IBuilder<AbstractAction> {
    _desc: string;
    _time: Date;
    _rolls: IRollSet[];

    constructor(obj?: AbstractActionBuilder) {
        super(obj);
        this.desc = obj && obj.desc || "void desc";
        this.time = obj && obj.time || new Date();
        this.rolls = obj && obj.rolls || new Array<IRollSet>();
    }

    setDesc(_desc: string): AbstractActionBuilder {
        this.desc = _desc;
        return this;
    }
    setTime(_time: Date): AbstractActionBuilder {
        this.time = _time;
        return this;
    }
    setRolls(_rolls: IRollSet[]): AbstractActionBuilder {
        this.rolls = _rolls;
        return this;
    }
    build(): AbstractAction {
        var ret: AbstractAction = <AbstractAction> super.build();
        ret.desc = this.desc;
        ret.time = this.time;
        ret.rolls = this.rolls;
        return ret;
    }

    get desc(): string {
        return this._desc;
    }
    set desc(_desc: string) {
        this._desc = _desc;
    }
    get time(): Date {
        return this._time;
    }
    set time(_time: Date) {
        this._time = _time;
    }
    get rolls(): IRollSet[] {
        return this._rolls;
    }
    set rolls(_rolls: IRollSet[]) {
        this._rolls = _rolls;
    }
}