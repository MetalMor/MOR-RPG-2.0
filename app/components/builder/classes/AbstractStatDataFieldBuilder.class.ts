'use strict';
import {IBuilder} from "../interfaces/IBuilder.interface";
import {AbstractStatFieldBuilder} from "./AbstractStatFieldBuilder.class";
import {IDataField} from "../../fields/interfaces/IDataField.interface";
import {RegularDataField} from "../../fields/classes/RegularDataField.class";
import {AbstractStatDataField} from "../../fields/classes/AbstractStatDataField.class";
import {AbstractDataField} from "../../fields/classes/AbstractDataField.class";
import {IStatModificatorSource} from "../../modificators/interfaces/IStatModificatorSource.interface";
/**
 * Created by becari on 13/09/2016.
 */
export abstract class AbstractStatDataFieldBuilder extends AbstractStatFieldBuilder implements IBuilder<AbstractStatDataField> {
    _inherits: IDataField;

    constructor(obj?: AbstractStatDataFieldBuilder) {
        super(obj);
        this.inherits = obj && obj.inherits || new RegularDataField();
    }

    setInherits(_inherits: IDataField): AbstractStatDataFieldBuilder {
        this.inherits = _inherits;
        return this;
    }
    setGrants(_grants: IStatModificatorSource) {
        this.grants = _grants;
        return this;
    }
    build(): AbstractStatDataField {
        var ret: AbstractStatDataField = <AbstractStatDataField> super.build();
        ret.inherits = this.inherits;
        return ret;
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
}