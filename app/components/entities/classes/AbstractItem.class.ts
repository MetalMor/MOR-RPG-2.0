'use strict';
import {IFieldSet} from "../../fields/interfaces/IFieldSet.interface";
import {IItem} from "../interfaces/IItem.interface";
import {IField} from "../../fields/interfaces/IField";
import {Util} from "../../util/classes/Util.class";
import {RegularFieldSet} from "../../fields/classes/RegularFieldSet.class";
import {IIndexedGameEntity} from "../interfaces/IIndexedGameEntity.interface";
import {IndexedGameEntity} from "./IndexedGameEntity.class";
/**
 * Created by Mor on 17/08/2016.
 */
export abstract class AbstractItem extends IndexedGameEntity implements IItem {
    _id: number;
    _name: string;
    _inherits: IFieldSet;
    _desc: string;
    _enabled: boolean;

    constructor(obj?: IItem) {
        super(obj);
        var cast = <AbstractItem> obj;
        this.id = cast && cast.id || Util.autoId();
        this.name = cast && cast.name || "unnamed";
        this.inherits = cast && cast.inherits || new RegularFieldSet();
    }

    get id(): number {
        return this._id;
    }

    set id(_id: number) {
        this._id = _id;
    }

    get name(): string {
        return this._name;
    }

    set name(_name: string) {
        this._name = _name;
    }

    get desc(): string {
        return this._desc;
    }

    set desc(_desc: string) {
        this._desc = _desc;
    }

    get enabled(): boolean {
        return this._enabled;
    }

    set enabled(_enabled: boolean) {
        this._enabled = _enabled;
    }

    get inherits(): IFieldSet {
        return this._inherits;
    }

    set inherits(_inherits: IFieldSet) {
        this._inherits = _inherits;
    }

    get(_field: IField): IField {
        return this.inherits.get(_field);
    }

    set(_field: IField): boolean {
        return this.inherits.set(_field);
    }

    add(_field: IField): boolean {
        return this.inherits.add(_field);
    }

    remove(_field: IField): boolean {
        return this.inherits.remove(_field);
    }

    equals(obj: IIndexedGameEntity): boolean {
        if(!obj) return false;
        var other = <AbstractItem> obj;
        return this.equals(obj) && super.equals(obj);
    }
}