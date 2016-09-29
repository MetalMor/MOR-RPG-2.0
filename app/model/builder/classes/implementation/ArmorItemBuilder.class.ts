'use strict';
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {AbstractItemBuilder} from "../abstract/AbstractItemBuilder.class";
import {NumericDataField} from "../../../fields/classes/implementation/NumericDataField.class";
import {AbstractItem} from "../../../items/classes/abstract/AbstractItem.class";
/**
 * Created by becari on 14/09/2016.
 */
export class ArmorItemBuilder extends AbstractItemBuilder implements IBuilder<AbstractItem> {
    _value: NumericDataField;
    _penalty: NumericDataField;

    constructor(obj?: ArmorItemBuilder) {
        super(obj);
        this.value = obj && obj.value || this.numericDataFieldBuilder.build();
        this.penalty = obj && obj.penalty || this.numericDataFieldBuilder.build();
    }

    setValue(_value: number): ArmorItemBuilder {
        this.value = this.createNumericDataField("Valor de armadura", _value);
        return this;
    }
    setPenalty(_penalty: number): ArmorItemBuilder {
        this.penalty = this.createNumericDataField("Penalización", _penalty);
        return this;
    }
    build(): AbstractItem {
        var ret: AbstractItem = super.build();
        ret.add(this.value);
        ret.add(this.penalty);
        return ret;
    }

    get value(): NumericDataField {
        return this._value;
    }
    set value(_value: NumericDataField) {
        this._value = _value;
    }
    get penalty(): NumericDataField {
        return this._penalty;
    }
    set penalty(_penalty: NumericDataField) {
        this._penalty = _penalty;
    }
}