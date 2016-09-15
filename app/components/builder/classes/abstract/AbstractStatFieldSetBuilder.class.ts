'use strict';
import {AbstractFieldSetBuilder} from "./AbstractFieldSetBuilder.class";
import {AbstractStatFieldSet} from "../../../fields/classes/abstract/AbstractStatFieldSet.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {IModificable} from "../../../modificators/interfaces/IModificable.interface";
import {ModificableImpl} from "../../../modificators/classes/implementation/ModificableImpl.class";
import {StatFieldSetImpl} from "../../../fields/classes/implementation/StatFieldSetImpl.class";
/**
 * Created by becari on 12/09/2016.
 */
export abstract class AbstractStatFieldSetBuilder extends AbstractFieldSetBuilder implements IBuilder<AbstractStatFieldSet> {
    _mods: IModificable;
    _initPoints: number;

    constructor(obj?: AbstractStatFieldSetBuilder) {
        super(obj);
        this.mods = obj && obj.mods || new ModificableImpl();
        this.initPoints = obj && obj.initPoints || 0;
    }

    setMods(_mods: IModificable): AbstractStatFieldSetBuilder {
        this.mods = _mods;
        return this;
    }
    setInitPoints(_initPoints: number): AbstractStatFieldSetBuilder {
        this.initPoints = _initPoints;
        return this;
    }
    build(): AbstractStatFieldSet {
        var ret: AbstractStatFieldSet = new StatFieldSetImpl(<AbstractStatFieldSet> super.build());
        ret.mods = this.mods;
        ret.initPoints = this.initPoints;
        return ret;
    }

    get mods(): IModificable {
        return this._mods;
    }
    set mods(_mods: IModificable) {
        this._mods = _mods;
    }
    get initPoints(): number {
        return this._initPoints;
    }
    set initPoints(_initPoints: number) {
        this._initPoints = _initPoints;
    }
}