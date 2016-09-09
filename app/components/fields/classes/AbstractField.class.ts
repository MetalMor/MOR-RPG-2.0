import {AbstractGameEntity} from "../../entities/classes/AbstractGameEntity.class";
import {IField} from "../interfaces/IField.interface";
import {IFieldSet} from "../interfaces/IFieldSet.interface";
import {AbstractFieldSet} from "./AbstractFieldSet.class";
/**
 * Created by becari on 17/08/2016.
 */
export abstract class AbstractField extends AbstractGameEntity implements IField {
    _desc: string;
    _parent: AbstractFieldSet;
    _enabled: boolean;

    constructor(obj?: IField) {
        super(obj);
        var cast = <AbstractField> obj;
        this.desc = cast && cast.desc || 'default';
        this.enabled = cast && cast.enabled || true;
    }

    onAppend(_parent: IFieldSet) {
        this.parent = <AbstractFieldSet> _parent;
    }
    onRemove(_parent: IFieldSet) { }
    get desc(): string {
        return this._desc;
    }
    set desc(_desc: string) {
        this._desc = _desc;
    }
    get parent(): AbstractFieldSet {
        return this._parent;
    }
    set parent(_parent: AbstractFieldSet) {
        this._parent = _parent;
    }
    get enabled(): boolean {
        return this._enabled;
    }
    set enabled(_enabled: boolean) {
        this._enabled = _enabled;
    }
}