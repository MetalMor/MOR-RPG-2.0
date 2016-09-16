'use strict';
import {IDataField} from "../../interfaces/IDataField.interface";
import {AbstractField} from "./AbstractField.class";
import {IStatModificator} from "../../../modificators/interfaces/IStatModificator.interface";
import {IStatModificatorSource} from "../../../modificators/interfaces/IStatModificatorSource.interface";
import {StatModificatorSourceImpl} from "../../../modificators/classes/implementation/StatModificatorSourceImpl.class";
import {AbstractStatModificatorSource} from "../../../modificators/classes/abstract/AbstractStatModificatorSource.class";
import {SingletonCharacter} from "../../../entities/classes/implementation/SingletonCharacter.class";
/**
 * Created by Mor on 15/08/2016.
 */
export abstract class AbstractDataField extends AbstractField implements IDataField {
    _grants: IStatModificatorSource;

    constructor(obj?: AbstractDataField) {
        super(obj);
        this.grants = obj && obj.grants || new StatModificatorSourceImpl();
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
        (<AbstractStatModificatorSource> _grants).owner = this;
        this._grants = _grants;
    }
}