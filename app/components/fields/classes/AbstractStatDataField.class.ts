'use strict';
import {IDataField} from "../interfaces/IDataField.interface";
import {RegularDataField} from "./RegularDataField.class";
import {IStatModificator} from "../../modificators/interfaces/IStatModificator.interface";
import {AbstractDataField} from "./AbstractDataField.class";
import {StatFieldImpl} from "./StatFieldImpl.class";
import {IStatModificatorSource} from "../../modificators/interfaces/IStatModificatorSource.interface";
import {SingletonCharacter} from "../../entities/classes/SingletonCharacter.class";
/**
 * Created by Mor on 15/08/2016.
 */
export abstract class StatDataField extends StatFieldImpl implements IDataField {
    _inherits: IDataField;

    constructor(obj?: StatDataField) {
        super(obj);
        this.inherits = obj && obj.inherits || new RegularDataField();
    }

    get inherits(): IDataField {
        return this._inherits;
    }
    set inherits(_inherits: IDataField) {
        this._inherits = _inherits;
    }
    get grants(): IStatModificatorSource {
        return (<AbstractDataField> this.inherits).grants;
    }
    set grants(_grants: IStatModificatorSource) {
        (<AbstractDataField> this.inherits).grants = _grants;
    }

    modify() {
        this.inherits.modify(SingletonCharacter.instance);
    }
    unleash() {
        this.inherits.unleash();
    }
    addMod(_mod: IStatModificator): boolean {
        return (<AbstractDataField> this.inherits).addMod(_mod);
    }
    removeMod(_mod: IStatModificator): boolean {
        return (<AbstractDataField> this.inherits).removeMod(_mod);
    }
    getMod(_mod: IStatModificator): IStatModificator {
        return (<AbstractDataField> this.inherits).getMod(_mod);
    }
}