'use strict';
import {AbstractDataFieldBuilder} from "../abstract/AbstractDataFieldBuilder.class";
import {HealthDataField} from "../../../fields/classes/implementation/HealthDataField.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {NumericDataFieldBuilder} from "./NumericDataFieldBuilder.class";
/**
 * Created by becari on 14/09/2016.
 */
export class HealthDataFieldBuilder extends NumericDataFieldBuilder implements IBuilder<HealthDataField> {
    _labels: string[];

    constructor(obj?: HealthDataFieldBuilder) {
        super(obj);
        this.labels = obj && obj.labels ||
            [
                "OK",
                "Magullado",
                "Lastimado",
                "Herido",
                "Malherido",
                "Tullido"
            ];
    }

    setLabels(_labels: string[]) {
        this.labels = _labels;
        return this;
    }
    build(): HealthDataField {
        var ret: HealthDataField = new HealthDataField(<HealthDataField> super.build());
        ret.labels = this.labels;
        return ret;
    }

    get labels(): string[] {
        return this._labels;
    }
    set labels(_labels: string[]) {
        this._labels = _labels;
    }
}