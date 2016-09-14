'use strict';
import {IBuilder} from "../interfaces/IBuilder.interface";
import {ArmorItem} from "../../items/classes/ArmorItem.class";
import {AbstractItemBuilder} from "./AbstractItemBuilder.class";
/**
 * Created by becari on 14/09/2016.
 */
export class ArmorItemBuilder extends AbstractItemBuilder implements IBuilder<ArmorItem> {
    _value: number;
    _penalty: number;

    constructor(obj?: ArmorItemBuilder) {
        super(obj);
        this.value = obj && obj.value || 1;
        this.penalty = obj && obj.penalty || 0;
    }

    setValue(_value: number): ArmorItemBuilder {
        this.value = _value;
        return this;
    }
    setPenalty(_penalty: number): ArmorItemBuilder {
        this.penalty = _penalty;
        return this;
    }
    build(): ArmorItem {
        var ret: ArmorItem = <ArmorItem> super.build();
        ret.value = this.value;
        ret.penalty = this.penalty;
        return ret;
    }

    get value(): number {
        return this._value;
    }
    set value(_value: number) {
        this._value = _value;
    }
    get penalty(): number {
        return this._penalty;
    }
    set penalty(_penalty: number) {
        this._penalty = _penalty;
    }
}