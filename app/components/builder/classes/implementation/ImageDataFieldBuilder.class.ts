'use strict';
import {AbstractDataFieldBuilder} from "../abstract/AbstractDataFieldBuilder.class";
import {ImageDataField} from "../../../fields/classes/implementation/ImageDataField.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
/**
 * Created by becari on 14/09/2016.
 */
export class ImageDataFieldBuilder extends AbstractDataFieldBuilder implements IBuilder<ImageDataField> {
    _value: HTMLImageElement;

    constructor(obj?: ImageDataFieldBuilder) {
        super(obj);
        this.value = obj && obj.value || new Image();
    }

    setValue(_value: HTMLImageElement): ImageDataFieldBuilder {
        this.value = _value;
        return this;
    }
    build(): ImageDataField {
        var ret: ImageDataField = new ImageDataField(<ImageDataField> super.build());
        ret.value = this.value;
        return ret;
    }

    get value(): HTMLImageElement {
        return this._value;
    }
    set value(_value: HTMLImageElement) {
        this._value = _value;
    }
}