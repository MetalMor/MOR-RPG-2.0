'use strict';
import {IModificable} from "../../interfaces/IModificable.interface";
import {AbstractStatModificator} from "./AbstractStatModificator.class";
import {Arrays} from "../../../util/classes/Arrays.class";
import {IStatModificator} from "../../interfaces/IStatModificator.interface";
import {AbstractStatField} from "../../../fields/classes/abstract/AbstractStatField.class";
import {StatModificatorType} from "../../enumerations/StatModificatorType.enum";
import {Util} from "../../../util/classes/Util.class";
import {AbstractField} from "../../../fields/classes/abstract/AbstractField.class";
import {StatModificatorImpl} from "../implementation/StatModificatorImpl.class";
import {AbstractGameEntity} from "../../../entities/classes/abstract/AbstractGameEntity.class";
import {IFieldSet} from "../../../fields/interfaces/IFieldSet.interface";
import {StatFieldImpl} from "../../../fields/classes/implementation/StatFieldImpl.class";
import {AbstractStatFieldSet} from "../../../fields/classes/abstract/AbstractStatFieldSet.class";
import {RegularFieldSet} from "../../../fields/classes/implementation/RegularFieldSet.class";
import {AbstractFieldSet} from "../../../fields/classes/abstract/AbstractFieldSet.class";
/**
 * Created by Mor on 09/09/2016.
 */
export abstract class AbstractModificable extends AbstractGameEntity implements IModificable {
    _mods: AbstractStatModificator[];
    _owner: IModificable;
    _idCounter: number;

    constructor(obj?: AbstractModificable) {
        super(obj);
        this.mods = obj && obj.mods || new Array<StatModificatorImpl>();
        this.idCounter = obj && obj.idCounter || 0;
        this.owner = obj && obj.owner || new StatFieldImpl();
    }

    onAppend(_owner: IFieldSet) {
        this.owner = <AbstractStatFieldSet> _owner;
    }
    onRemove(_owner: IFieldSet) { }
    addMod(_mod: IStatModificator): boolean {
        var mod: AbstractStatModificator = <AbstractStatModificator> _mod;
        mod.name = mod && mod.name || this.name+"_mods"+this.idCounter++;
        return Arrays.add(this.mods, mod);
    }
    removeMod(_mod: IStatModificator): boolean {
        return Arrays.remove(this.mods, _mod);
    }
    getMod(_mod: IStatModificator): IStatModificator {
        return <IStatModificator> Arrays.get(this.mods, _mod);
    }
    getModsByType(_type: StatModificatorType): IStatModificator[] {
        return this.mods.filter(function(m) { return m.isType(_type); });
    }
    getValue(_owner: AbstractField): number {
        if(!Util.isUndefined(this.mods)) {
            var mods: AbstractStatModificator[] = <AbstractStatModificator[]> this.getModsByType(StatModificatorType.Level);
            return (<AbstractStatField> _owner).parent.getValue() + Arrays.summation(Arrays.fromProperty(mods, 'value'));
        }
        return 0;
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