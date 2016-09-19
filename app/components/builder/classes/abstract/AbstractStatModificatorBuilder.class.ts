'use strict';
import {AbstractStatModificator} from "../../../modificators/classes/abstract/AbstractStatModificator.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {AbstractGameEntityBuilder} from "./AbstractGameEntityBuilder.class";
import {StatModificatorType} from "../../../modificators/enumerations/StatModificatorType.enum";
import {IStatModificatorSource} from "../../../modificators/interfaces/IStatModificatorSource.interface";
import {IModificable} from "../../../modificators/interfaces/IModificable.interface";
import {ModificableImpl} from "../../../modificators/classes/implementation/ModificableImpl.class";
import {StatModificatorSourceImpl} from "../../../modificators/classes/implementation/StatModificatorSourceImpl.class";
import {StatModificatorImpl} from "../../../modificators/classes/implementation/StatModificatorImpl.class";
/**
 * Created by becari on 13/09/2016.
 */
export abstract class AbstractStatModificatorBuilder extends AbstractGameEntityBuilder implements IBuilder<AbstractStatModificator> {
    _modifies: IModificable;
    //_source: IStatModificatorSource;
    _type: StatModificatorType;
    _value: number;

    constructor(obj?: AbstractStatModificatorBuilder) {
        super(obj);
        this.modifies = obj && obj.modifies || null;
        //this.source = obj && obj.source || new StatModificatorSourceImpl();
        this.type = obj && obj.type || StatModificatorType.Level;
        this.value = obj && obj.value || 0;
    }

    setModifies(_modifies: IModificable): AbstractStatModificatorBuilder {
        this.modifies = _modifies;
        return this;
    }
    /*setSource(_source: IStatModificatorSource): AbstractStatModificatorBuilder {
        this.source = _source;
        return this;
    }*/
    setType(_type: StatModificatorType): AbstractStatModificatorBuilder {
        this.type = _type;
        return this;
    }
    setValue(_value: number): AbstractStatModificatorBuilder {
        this.value = _value;
        return this;
    }
    build(): AbstractStatModificator {
        var ret: AbstractStatModificator = new StatModificatorImpl(<AbstractStatModificator> super.build());
        ret.modifies = this.modifies;
        //ret.source = this.source;
        ret.type = this.type;
        ret.value = this.value;
        return ret;
    }

    get modifies(): IModificable {
        return this._modifies;
    }
    set modifies(_modifies: IModificable) {
        this._modifies = _modifies;
    }
    get type(): StatModificatorType {
        return this._type;
    }
    set type(_type: StatModificatorType) {
        this._type = _type;
    }
    get value(): number {
        return this._value;
    }
    set value(_value: number) {
        this._value = _value;
    }
    /*get source(): IStatModificatorSource {
        return this._source;
    }
    set source(_source: IStatModificatorSource) {
        this._source = _source;
    }*/
}