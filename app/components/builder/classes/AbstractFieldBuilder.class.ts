'use strict';
import {AbstractField} from "../../fields/classes/AbstractField.class";
import {IBuilder} from "../interfaces/IBuilder.interface";
import {AbstractBuilder} from "./AbstractBuilder.class";
import {AbstractFieldSet} from "../../fields/classes/AbstractFieldSet.class";
/**
 * Created by becari on 12/09/2016.
 */
export abstract class AbstractFieldBuilder extends AbstractBuilder implements IBuilder<AbstractField> {
    _desc: string;
    _enabled: boolean;
    _parent: AbstractFieldSet;

    constructor(obj?: AbstractFieldBuilder) {
        super(obj);
    }

    setDesc(_desc: string): AbstractFieldBuilder {
        this.desc = _desc;
        return this;
    }
    setEnabled(_enabled: boolean): AbstractFieldBuilder {
        this.enabled = _enabled;
        return this;
    }
    setParent(_parent: AbstractFieldSet): AbstractFieldBuilder {
        this.parent = _parent;
        return this;
    }
    build(): AbstractField {
        var ret: AbstractField = <AbstractField> super.build();
        ret.desc = this.desc;
        ret.enabled = this.enabled;
        ret.parent = this.parent;
        return ret;
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
    get parent(): AbstractFieldSet {
        return this._parent;
    }
    set parent(_parent: AbstractFieldSet) {
        this._parent = _parent;
    }
}