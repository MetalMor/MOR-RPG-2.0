import {IStat} from "../interfaces/IStat.interface";
import {AbstractField} from "./AbstractField.class";
import {IStatModificator} from "../../modificators/interfaces/IStatModificator.interface";
import {StatModificatorType} from "../../modificators/enumerations/StatModificatorType.enum";
import {IStatField} from "../interfaces/IStatField.class";
import {AbstractModificable} from "../../modificators/classes/AbstractModificable.class";
import {ModificableImpl} from "../../modificators/classes/ModificableImpl.class";
import {AbstractStatFieldSet} from "./AbstractStatFieldSet.class";
/**
 * Created by becari on 17/08/2016.
 */
export abstract class AbstractStatField extends AbstractField implements IStatField {
    _mods: AbstractModificable;
    _level: number;
    _limit: number;
    _min: number;

    constructor(obj?: IStat) {
        super(obj);
        var cast = <AbstractStatField> obj;
        this.mods = cast && cast.mods || new ModificableImpl();
        this.level = cast && cast.level || 0;
        this.limit = cast && cast.limit || 10;
        this.min = cast && cast.min || 0;
    }

    getModsByType(_type: StatModificatorType): IStatModificator[] {
        return this.mods.getModsByType(_type);
    }
    getValue(): number {
        return this.mods.getValue(this);
    }
    grow(): AbstractStatField {
        if(this.level < this.limit) this.level++;
        return this;
    }
    addMod(_mod: IStatModificator): boolean {
        return this.mods.addMod(_mod);
    }
    removeMod(_mod: IStatModificator): boolean {
        return this.mods.removeMod(_mod);
    }
    getMod(_mod: IStatModificator): IStatModificator {
        return <IStatModificator> this.mods.getMod(_mod);
    }

    get mods(): AbstractModificable {
        return this._mods;
    }
    set mods(_mods: AbstractModificable) {
        this._mods = _mods;
    }
    get level(): number {
        return this._level;
    }
    set level(_level: number) {
        if(_level >= this.min) this._level = _level;
    }
    get limit(): number {
        return this._limit;
    }
    set limit(_limit: number) {
        if(_limit >= this.min) this._limit = _limit;
    }
    get min(): number {
        return this._min;
    }
    set min(_min: number) {
        this._min = _min;
    }
    get parent(): AbstractStatFieldSet {
        return <AbstractStatFieldSet> this._parent;
    }
    set parent(_parent: AbstractStatFieldSet) {
        this._parent = _parent;
    }
}