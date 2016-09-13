'use strict';
import {AbstractModificable} from "../../modificators/classes/AbstractModificable.class";
import {IBuilder} from "../interfaces/IBuilder.interface";
import {AbstractBuilder} from "./AbstractBuilder.class";
import {AbstractStatModificator} from "../../modificators/classes/AbstractStatModificator.class";
import {IModificable} from "../../modificators/interfaces/IModificable.interface";
import {StatFieldImpl} from "../../fields/classes/StatFieldImpl.class";
import {StatModificatorImpl} from "../../modificators/classes/StatModificatorImpl.class";
/**
 * Created by becari on 13/09/2016.
 */
export abstract class AbstractModificableBuilder extends AbstractBuilder implements IBuilder<AbstractModificable> {
    _mods: AbstractStatModificator[];
    _owner: IModificable;
    _idCounter: number;

    constructor(obj?: AbstractModificableBuilder) {
        super(obj);
        this.mods = obj && obj.mods || new Array<StatModificatorImpl>();
        this.idCounter = obj && obj.idCounter || 0;
        this.owner = obj && obj.owner || new StatFieldImpl();
    }

    setMods(_mods: AbstractStatModificator[]): AbstractModificableBuilder {
        this.mods = _mods;
        return this;
    }
    setOwner(_owner: IModificable): AbstractModificableBuilder {
        this.owner = _owner;
        return this;
    }
    setIdCounter(_idCounter: number): AbstractModificableBuilder {
        this.idCounter = _idCounter;
        return this;
    }
    build(): AbstractModificable {
        var ret: AbstractModificable = <AbstractModificable> super.build();
        ret.mods = this.mods;
        ret.owner = this.owner;
        ret.idCounter = this.idCounter;
        return ret;
    }

    get mods(): AbstractStatModificator[] {
        return this._mods;
    }
    set mods(_mods: AbstractStatModificator[]) {
        this._mods = _mods;
    }
    get idCounter(): number {
        return this._idCounter;
    }
    set idCounter(_idCounter: number) {
        this._idCounter = _idCounter;
    }
    get owner(): IModificable {
        return this._owner;
    }
    set owner(_owner: IModificable) {
        this._owner = _owner;
    }
}