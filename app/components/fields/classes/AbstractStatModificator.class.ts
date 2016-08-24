'use strict';
import {IStatModificator} from "../interfaces/IStatModificator.interface";
import {IndexedGameEntity} from "../../entities/classes/IndexedGameEntity.class";
import {IStat} from "../interfaces/IStat.interface";
import {StatField} from "./StatField.class";
/**
 * Created by Mor on 24/08/2016.
 */
export abstract class AbstractStatModificator extends IndexedGameEntity implements IStatModificator {
    _modifies: IStat[];

    constructor(obj?: AbstractStatModificator) {
        super(obj);
        this.modifies = obj && obj.modifies || new Array<StatField>();
    }

    get modifies(): IStat[] {
        return this._modifies;
    }
    set modifies(_modifies: IStat[]) {
        this._modifies = _modifies;
    }
}