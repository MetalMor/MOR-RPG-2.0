'use strict';
import {AbstractField} from "./AbstractField.class";
import {IFieldSet} from "../../interfaces/IFieldSet.interface";
import {IField} from "../../interfaces/IField.interface";
import {Arrays} from "../../../util/classes/Arrays.class";
import {FieldImpl} from "../implementation/FieldImpl.class";
/**
 * Created by Mor on 17/08/2016.
 */
export abstract class AbstractFieldSet extends AbstractField implements IFieldSet {
    _fields: IField[];

    constructor(obj?: IFieldSet) {
        super(obj);
        var cast = <AbstractFieldSet> obj;
        this.fields = cast && cast.fields || new Array<IField>();
    }

    get fields(): IField[] {
        return this._fields;
    }
    set fields(_fields: IField[]) {
        this._fields = _fields;
    }

    addAll(_fields: IField[]): boolean {
        var self: AbstractFieldSet = this;
        return _fields.every(self.add.bind(self));
    }
    get(_field: IField): IField {
        return <IField> Arrays.get(this.fields, _field);
    }
    add(_field: IField): boolean {
        var cast: AbstractField = <AbstractField> _field;
        cast.onAppend(this);
        return Arrays.add(this.fields, cast);
    }
    remove(_field: IField): boolean {
        return Arrays.remove(this.fields, _field);
    }
    set(_field: IField): boolean {
        return Arrays.set(this.fields, _field);
    }
}