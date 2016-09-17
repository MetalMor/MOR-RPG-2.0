'use strict';
import {AbstractStatModificatorBuilder} from "./AbstractStatModificatorBuilder.class";
import {AbstractGrantedStatModificator} from "../../../modificators/classes/abstract/AbstractGrantedStatModificator.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {DataFieldImpl} from "../../../fields/classes/implementation/DataFieldImpl.class";
import {AbstractDataField} from "../../../fields/classes/abstract/AbstractDataField.class";
import {IStatModificatorSource} from "../../../modificators/interfaces/IStatModificatorSource.interface";
import {GrantedStatModificatorImpl} from "../../../modificators/classes/implementation/GrantedStatModificatorImpl.class";
/**
 * Created by Mor on 17/09/2016.
 */
export abstract class AbstractGrantedStatModificatorBuilder extends AbstractStatModificatorBuilder implements IBuilder<AbstractGrantedStatModificator> {
    _source: IStatModificatorSource;

    constructor(obj?: AbstractGrantedStatModificatorBuilder) {
        super(obj);
        var source: AbstractDataField = new DataFieldImpl();
        source.name = "environment";
        this.source = obj && obj.source || source;
    }

    setSource(_source: IStatModificatorSource): AbstractGrantedStatModificatorBuilder {
        this.source = _source;
        return this;
    }
    build(): AbstractGrantedStatModificator {
        var ret: AbstractGrantedStatModificator = new GrantedStatModificatorImpl(<AbstractGrantedStatModificator> super.build());
        ret.source = this.source;
        return ret;
    }

    get source(): IStatModificatorSource {
        return this._source;
    }
    set source(_source: IStatModificatorSource) {
        this._source = _source;
    }
}