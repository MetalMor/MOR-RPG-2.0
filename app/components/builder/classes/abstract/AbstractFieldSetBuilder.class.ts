'use strict';
import {AbstractFieldSet} from "../../../fields/classes/abstract/AbstractFieldSet.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {AbstractFieldBuilder} from "./AbstractFieldBuilder.class";
import {IField} from "../../../fields/interfaces/IField.interface";
/**
 * Created by becari on 12/09/2016.
 */
export abstract class AbstractFieldSetBuilder extends AbstractFieldBuilder implements IBuilder<AbstractFieldSet> {
    _fields: IField[];

    constructor(obj?: AbstractFieldSetBuilder) {
        super(obj);
        this.fields = obj && obj.fields || new Array<IField>();
    }

    setFields(_fields: IField[]): AbstractFieldSetBuilder {
        this.fields = _fields;
        return this;
    }
    build(): AbstractFieldSet {
        var ret: AbstractFieldSet = <AbstractFieldSet> super.build();
        ret.fields = this.fields;
        return ret;
    }

    get fields(): IField[] {
        return this._fields;
    }
    set fields(_fields: IField[]) {
        this._fields = _fields;
    }
}