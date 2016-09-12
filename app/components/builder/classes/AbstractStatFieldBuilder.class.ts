'use strict';
import {AbstractStatField} from "../../fields/classes/AbstractStatField.class";
import {IBuilder} from "../interfaces/IBuilder.interface";
import {AbstractFieldBuilder} from "./AbstractFieldBuilder.class";
import {IModificable} from "../../modificators/interfaces/IModificable.interface";
import {ModificableImpl} from "../../modificators/classes/ModificableImpl.class";
/**
 * Created by becari on 12/09/2016.
 */
export abstract class AbstractStatFieldBuilder extends AbstractFieldBuilder implements IBuilder<AbstractStatField> {
    _mods: IModificable;
    _level: number;
    _limit: number;
    _min: number;

    constructor(obj?: AbstractStatFieldBuilder) {
        super(obj);
        this.mods = obj && obj.mods || new ModificableImpl();
        this.min = obj && obj.min || 1;
        this.level = obj && obj.level || this.min;
        this.limit = obj && obj.limit || 10;
    }

    setMods(_mods: IModificable): AbstractStatFieldBuilder {
        this.mods = _mods;
        return this;
    }
    setLevel(_level: number): AbstractStatFieldBuilder {
        this.level = _level;
        return this;
    }
    setLimit(_limit: number): AbstractStatFieldBuilder {
        this.limit = _limit;
        return this;
    }
    setMin(_min: number): AbstractStatFieldBuilder {
        this.min = _min;
        return this
    }
    build(): AbstractStatField {
        var ret: AbstractStatField = <AbstractStatField> super.build();
        ret.mods = this.mods;
        ret.level = this.level;
        ret.limit = this.limit;
        ret.min = this.min;
        return ret;
    }

    get mods(): IModificable {
        return this._mods;
    }
    set mods(_mods: IModificable) {
        this._mods = _mods;
    }
    get level(): number {
        return this._level;
    }
    set level(_level: number) {
        this._level = _level;
    }
    get limit(): number {
        return this._limit;
    }
    set limit(_limit: number) {
        this._limit = _limit;
    }
    get min(): number {
        return this._min;
    }
    set min(_min: number) {
        this._min = _min;
    }
}