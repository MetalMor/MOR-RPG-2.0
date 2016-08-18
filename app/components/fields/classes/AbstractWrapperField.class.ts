'use strict';
import {IFieldSet} from "../interfaces/IFieldSet.interface";
import {RegularFieldSet} from "./RegularFieldSet.class";
import {IWrapperField} from "../interfaces/IWrapperField.interface";
import {AbstractField} from "./AbstractField.class";
import {IField} from "../interfaces/IField.interface";
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
    get name(): string {
        return (<RegularFieldSet> this.inherits).name;
    }
    set name(_name: string) {
        (<RegularFieldSet> this.inherits).name = _name;
    }
    get fields(): IField[] {
        return (<RegularFieldSet> this.inherits).fields;
    }
    set fields(_fields: IField[]) {
        (<RegularFieldSet> this.inherits).fields = _fields;
    }
    get desc(): string {
        return (<RegularFieldSet> this.inherits).desc;
    }
    set desc(_desc: string) {
        (<RegularFieldSet> this.inherits).desc = _desc;
    }
    get enabled(): boolean {
        return (<RegularFieldSet> this.inherits).enabled;
    }
    set enabled(_enabled: boolean) {
        (<RegularFieldSet> this.inherits).enabled = _enabled;
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
