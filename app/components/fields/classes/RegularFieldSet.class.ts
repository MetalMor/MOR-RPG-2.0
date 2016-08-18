'use strict';
import {AbstractField} from "./AbstractField.class";
import {IFieldSet} from "../interfaces/IFieldSet.interface";
import {IField} from "../interfaces/IField.interface";
import {Arrays} from "../../util/classes/Arrays.class";
/**
 * Created by Mor on 17/08/2016.
 */
export class RegularFieldSet extends AbstractField implements IFieldSet {
    _fields: IField[];

    constructor(obj?: IFieldSet) {
        super(obj);
        var cast = <RegularFieldSet> obj;
        this.fields = cast && cast.fields || new Array<IField>();
    }

    get fields(): IField[] {
        return this._fields;
    }
    set fields(_fields: IField[]) {
        this._fields = _fields;
    }

    get(_field: IField): IField {
        return <IField> Arrays.get(this.fields, _field);
    }
    add(_field: IField): boolean {
        return Arrays.add(this.fields, _field);
    }
    remove(_field: IField): boolean {
        return Arrays.remove(this.fields, _field);
    }
    set(_field: IField): boolean {
        return Arrays.set(this.fields, _field);
    }
}