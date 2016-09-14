'use strict';
import {IStatFieldSet} from "../../interfaces/IStatFieldSet.interface";
import {IStatModificator} from "../../../modificators/interfaces/IStatModificator.interface";
import {AbstractFieldSet} from "./AbstractFieldSet.class";
import {Arrays} from "../../../util/classes/Arrays.class";
import {AbstractField} from "./AbstractField.class";
import {StatModificatorType} from "../../../modificators/enumerations/StatModificatorType.enum";
import {AbstractModificable} from "../../../modificators/classes/abstract/AbstractModificable.class";
import {ModificableImpl} from "../../../modificators/classes/implementation/ModificableImpl.class";
import {IModificable} from "../../../modificators/interfaces/IModificable.interface";
/**
 * Created by Mor on 17/08/2016.
 */
export abstract class AbstractStatFieldSet extends AbstractFieldSet implements IStatFieldSet {
    _mods: IModificable;
    _initPoints: number;

    constructor(obj: AbstractStatFieldSet) {
        super(obj);
        this.mods = obj && obj.mods || new ModificableImpl();
        this.initPoints = obj && obj.initPoints || 0;
    }

    getValue(): number {
        return (<AbstractModificable> this.mods).getValue(this);
    }
    getModsByType(_type: StatModificatorType): IStatModificator[] {
        return this.mods.getModsByType(_type);
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
        this._mods = _mods;
    }
    get initPoints(): number {
        return this._initPoints;
    }
    set initPoints(_initPoints: number) {
        this._initPoints = _initPoints;
    }
}