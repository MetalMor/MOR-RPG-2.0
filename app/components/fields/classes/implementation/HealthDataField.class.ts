'use strict';
import {NumericDataField} from "./NumericDataField.class";
/**
 * Created by Mor on 17/08/2016.
 */
export class HealthDataField extends NumericDataField {
    _labels: Array<string>;

    constructor(obj?: HealthDataField) {
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

    get labels(): Array<string> {
        return this._labels;
    }
    set labels(_labels: Array<string>) {
        this._labels = _labels;
    }

    toString(): string {
        return this.labels[this.value];
    }

}