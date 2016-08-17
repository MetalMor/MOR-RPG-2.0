'use strict';
import {IFieldSet} from "../interfaces/IFieldSet.interface";
import {RegularFieldSet} from "./RegularFieldSet.class";
import {IWrapperField} from "../interfaces/IWrapperField.interface";
import {AbstractField} from "./AbstractField.class";
import {IField} from "../interfaces/IField";
/**
 * Created by Mor on 17/08/2016.
 */
export abstract class AbstractWrapperField extends AbstractField implements IWrapperField {
    _inherits: IFieldSet;

    constructor(obj?: IWrapperField) {
        super(obj);
        var cast = <AbstractWrapperField> obj;
        this.inherits = cast && cast.inherits || new RegularFieldSet();
    }

    get inherits(): IFieldSet {
        return this._inherits;
    }
    set inherits(_inherits: IFieldSet) {
        this._inherits = _inherits;
    }

    get(field: IField): IField {
        return <IField> this.inherits.get(field);
    }
    set(field: IField): boolean {
        return this.inherits.set(field);
    }
    add(field: IField): boolean {
        return this.inherits.add(field);
    }
    remove(field: IField): boolean {
        return this.inherits.remove(field);
    }
}
