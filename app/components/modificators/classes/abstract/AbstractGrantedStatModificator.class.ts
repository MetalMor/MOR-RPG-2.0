'use strict';
import {AbstractStatModificator} from "./AbstractStatModificator.class";
import {IStatModificatorSource} from "../../interfaces/IStatModificatorSource.interface";
import {DataFieldImpl} from "../../../fields/classes/implementation/DataFieldImpl.class";
import {AbstractDataField} from "../../../fields/classes/abstract/AbstractDataField.class";
import {IStat} from "../../../fields/interfaces/IStat.interface";
import {AbstractStatModificatorSource} from "./AbstractStatModificatorSource.class";
/**
 * Created by Mor on 17/09/2016.
 */
export abstract class AbstractGrantedStatModificator extends AbstractStatModificator {
    _source: IStatModificatorSource;

    constructor(obj?: AbstractGrantedStatModificator) {
        super(obj);
        var source: AbstractDataField = new DataFieldImpl();
        source.name = "environment";
        this.source = obj && obj.source || source;
    }

    getSourceStat(): IStatModificatorSource {
        return (<AbstractStatModificatorSource> this.source).owner;
    }

    get source(): IStatModificatorSource {
        return this._source;
    }
    set source(_source: IStatModificatorSource) {
        this._source = _source;
    }
}