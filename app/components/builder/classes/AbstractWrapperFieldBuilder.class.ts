'use strict';
import {AbstractWrapperField} from "../../fields/classes/AbstractWrapperField.class";
import {IBuilder} from "../interfaces/IBuilder.interface";
import {IFieldSet} from "../../fields/interfaces/IFieldSet.interface";
import {AbstractFieldBuilder} from "./AbstractFieldBuilder.class";
import {IField} from "../../fields/interfaces/IField.interface";
import {AbstractFieldSet} from "../../fields/classes/AbstractFieldSet.class";
/**
 * Created by becari on 13/09/2016.
 */
export abstract class AbstractWrapperFieldBuilder extends AbstractFieldBuilder implements IBuilder<AbstractWrapperField> {
    _inherits: IFieldSet;

    constructor(obj?: AbstractWrapperFieldBuilder) {
        super(obj);
    }

    setInherits(_inherits: IFieldSet): AbstractWrapperFieldBuilder {
        this.inherits = _inherits;
        return this;
    }
    setFields(_fields: IField[]): AbstractWrapperFieldBuilder {
        this.fields = _fields;
        return this;
    }
    build(): AbstractWrapperField {
        var ret: AbstractWrapperField = <AbstractWrapperField> super.build();
        ret.inherits = this.inherits;
        return ret;
    }

    get inherits(): IFieldSet {
        return this._inherits;
    }
    set inherits(_inherits: IFieldSet) {
        this._inherits = _inherits;
    }
    get fields(): IField[] {
        return (<AbstractFieldSet> this.inherits).fields;
    }
    set fields(_fields: IField[]) {
        (<AbstractFieldSet> this.inherits).fields = _fields;
    }
}