'use strict';
import {AbstractWrapperFieldBuilder} from "./AbstractWrapperFieldBuilder.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {AbstractWrapperStatField} from "../../../fields/classes/AbstractWrapperStatField.class";
import {IWrapperField} from "../../../fields/interfaces/IWrapperField.interface";
import {WrapperFieldImpl} from "../../../fields/classes/WrapperFieldImpl.class";
import {IField} from "../../../fields/interfaces/IField.interface";
import {AbstractWrapperField} from "../../../fields/classes/AbstractWrapperField.class";
/**
 * Created by becari on 13/09/2016.
 */
export abstract class AbstractWrapperStatFieldBuilder extends AbstractWrapperFieldBuilder implements IBuilder<AbstractWrapperStatField> {
    _inherits: IWrapperField;

    constructor(obj?: AbstractWrapperStatFieldBuilder) {
        super(obj);
        this.inherits = obj && obj.inherits || new WrapperFieldImpl();
    }

    setInherits(_inherits: IWrapperField): AbstractWrapperStatFieldBuilder {
        this.inherits = _inherits;
        return this;
    }
    setFields(_fields: IField[]): AbstractWrapperStatFieldBuilder {
        this.fields = _fields;
        return this;
    }
    build(): AbstractWrapperStatField {
        var ret: AbstractWrapperStatField = <AbstractWrapperStatField> super.build();
        ret.inherits = this.inherits;
        return ret;
    }

    get inherits(): IWrapperField {
        return this._inherits;
    }
    set inherits(_inherits: IWrapperField) {
        this._inherits = _inherits;
    }
    get fields(): IField[] {
        return (<AbstractWrapperField> this.inherits).fields;
    }
    set fields(_fields: IField[]) {
        (<AbstractWrapperField> this.inherits).fields = _fields;
    }
}