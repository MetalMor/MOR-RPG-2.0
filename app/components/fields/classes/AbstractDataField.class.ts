'use strict';
import {IDataField} from "../interfaces/IDataField.interface";
import {AbstractField} from "./AbstractField.class";
import {IStatModificator} from "../../modificators/interfaces/IStatModificator.interface";
import {IStatModificatorSource} from "../../modificators/interfaces/IStatModificatorSource.interface";
import {StatModificatorSourceImpl} from "../../modificators/classes/StatModificatorSourceImpl.class";
import {AbstractStatModificatorSource} from "../../modificators/classes/AbstractStatModificatorSource.class";
import {SingletonCharacter} from "../../entities/classes/SingletonCharacter.class";
/**
 * Created by Mor on 15/08/2016.
 */
export abstract class AbstractDataField extends AbstractField implements IDataField {
    _grants: IStatModificatorSource;

    constructor(obj?: AbstractDataField) {
        super(obj);
        var grants: AbstractStatModificatorSource = new StatModificatorSourceImpl();
        grants.owner = this;
        this.grants = obj && obj.grants || grants;
    }

    addMod(_mod: IStatModificator): boolean {
        return this.grants.addMod(_mod);
    }
    removeMod(_mod: IStatModificator): boolean {
        return this.grants.removeMod(_mod);
    }
    getMod(_mod: IStatModificator): IStatModificator {
        return <IStatModificator> this.grants.getMod(_mod);
    }
    modify() {
        this.grants.modify(SingletonCharacter.instance);
    }
    unleash() {
        this.grants.unleash();
    }

    get grants(): IStatModificatorSource {
        return this._grants;
    }
    set grants(_grants: IStatModificatorSource) {
        this._grants = _grants;
    }
}