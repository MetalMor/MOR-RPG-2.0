import {IStat} from "../../interfaces/IStat.interface";
import {AbstractField} from "./AbstractField.class";
import {IStatModificator} from "../../../modificators/interfaces/IStatModificator.interface";
import {StatModificatorType} from "../../../modificators/enumerations/StatModificatorType.enum";
import {IStatField} from "../../interfaces/IStatField.class";
import {ModificableImpl} from "../../../modificators/classes/implementation/ModificableImpl.class";
import {AbstractStatFieldSet} from "./AbstractStatFieldSet.class";
import {IModificable} from "../../../modificators/interfaces/IModificable.interface";
import {AbstractModificable} from "../../../modificators/classes/abstract/AbstractModificable.class";
/**
 * Created by becari on 17/08/2016.
 */
export abstract class AbstractStatField extends AbstractField implements IStatField {
    _mods: IModificable;
    _level: number;
    _limit: number;
    _min: number;

    constructor(obj?: IStat) {
        super(obj);
        var cast: AbstractStatField = <AbstractStatField> obj;
        this.min = cast && cast.min || 1;
        this.level = cast && cast.level || this.min;
        this.limit = cast && cast.limit || 10;
        this.mods = cast && cast.mods || new ModificableImpl();
    }

    getModsByType(_type: StatModificatorType): IStatModificator[] {
        return this.mods.getModsByType(_type);
    }
    getValue(): number {
        return (<AbstractModificable> this.mods).getValue(this);
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

    get mods(): IModificable {
        return this._mods;
    }
    set mods(_mods: IModificable) {
        (<AbstractModificable> _mods).owner = this;
        this._mods = _mods;
    }
    get level(): number {
        return this._level;
    }
    set level(_level: number) {
        if(_level >= (this.min || 0)) this._level = _level;
        else console.log(_level + " < " + this.min)
    }
    get limit(): number {
        return this._limit;
    }
    set limit(_limit: number) {
        if(_limit >= (this.min || 0)) this._limit = _limit;
        else console.log(_limit + " < " + this.min)
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