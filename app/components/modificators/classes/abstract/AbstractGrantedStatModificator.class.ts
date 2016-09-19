'use strict';
import {AbstractStatModificator} from "./AbstractStatModificator.class";
import {IStatModificatorSource} from "../../interfaces/IStatModificatorSource.interface";
import {DataFieldImpl} from "../../../fields/classes/implementation/DataFieldImpl.class";
import {AbstractDataField} from "../../../fields/classes/abstract/AbstractDataField.class";
import {IStat} from "../../../fields/interfaces/IStat.interface";
import {AbstractStatModificatorSource} from "./AbstractStatModificatorSource.class";
import {StatModificatorSourceImpl} from "../implementation/StatModificatorSourceImpl.class";
/**
 * Created by Mor on 17/09/2016.
 */
export abstract class AbstractGrantedStatModificator extends AbstractStatModificator {
    _source: AbstractStatModificatorSource;

    constructor(obj?: AbstractGrantedStatModificator) {
        super(obj);
        var source: AbstractStatModificatorSource = new StatModificatorSourceImpl(),
            field: AbstractDataField = new DataFieldImpl();
        field.name = "environment";
        field.grants = source;
        source.owner = field;
        this.source = obj && obj.source || source;
    }

    getSourceStat(): IStatModificatorSource {
        return this.source.owner;
    }

    get source(): AbstractStatModificatorSource {
        return this._source;
    }
    set source(_source: AbstractStatModificatorSource) {
        this._source = _source;
    }
}