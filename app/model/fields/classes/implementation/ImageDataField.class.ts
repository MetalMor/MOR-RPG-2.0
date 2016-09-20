import {AbstractDataField} from "../abstract/AbstractDataField.class";
import {IImageDataField} from "../../interfaces/IImageDataField.interface";
/**
 * Created by becari on 18/08/2016.
 */
export class ImageDataField extends AbstractDataField implements IImageDataField {
    _value: HTMLImageElement;

    constructor(obj?: ImageDataField) {
        super(obj);
        this.value = obj && obj.value || new Image();
    }

    get value(): HTMLImageElement {
        return this._value;
    }
    set value(_value: HTMLImageElement) {
        this._value = _value;
    }
}