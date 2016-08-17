'use strict';
import {IDataField} from "../interfaces/IDataField.interface";
import {AbstractField} from "./AbstractField.class";
import {IStatModificatorSource} from "../interfaces/IStatModificatorSource.interface";
import {IStatModificator} from "../interfaces/IStatModificator.interface";
import {Arrays} from "../../util/classes/Arrays.class";
/**
 * Created by Mor on 15/08/2016.
 */
export abstract class DataField extends AbstractField implements IDataField, IStatModificatorSource {
    _grants: IStatModificator[];

    constructor(obj?: IDataField) {
        super(obj);
    }

    get grants(): IStatModificator[] {
        return this._grants;
    }
    set grants(_grants: IStatModificator[]) {
        this._grants = _grants;
    }

    addMod(_mod: IStatModificator): boolean {
        return Arrays.add(this.grants, _mod);
    }
    removeMod(_mod: IStatModificator): boolean {
        return Arrays.remove(this.grants, _mod);
    }
    getMod(_mod: IStatModificator): IStatModificator {
        return <IStatModificator> Arrays.get(this.grants, _mod);
    }
}