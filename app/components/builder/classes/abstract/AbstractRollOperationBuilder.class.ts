'use strict';
import {AbstractRollOperation} from "../../../actions/classes/abstract/AbstractRollOperation.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {AbstractGameEntityBuilder} from "./AbstractGameEntityBuilder.class";
import {IStat} from "../../../fields/interfaces/IStat.interface";
import {RollOperationImpl} from "../../../actions/classes/implementation/RollOperationImpl.class";
/**
 * Created by becari on 14/09/2016.
 */
export abstract class AbstractRollOperationBuilder extends AbstractGameEntityBuilder implements IBuilder<AbstractRollOperation> {
    _label: string;
    _implies: IStat[];
    _dif: number;

    constructor(obj?: AbstractRollOperationBuilder) {
        super(obj);
        this.dif = obj && obj.dif || 6;
        this.label = obj && obj.label || "unnamed";
        this.implies = obj && obj.implies || new Array<IStat>();
    }
    setDif(_dif: number): AbstractRollOperationBuilder {
        this.dif = _dif;
        return this;
    }
    setLabel(_label: string): AbstractRollOperationBuilder {
        this.label = _label;
        return this;
    }
    setImplies(_implies: IStat[]): AbstractRollOperationBuilder {
        this.implies = _implies;
        return this;
    }
    build(): AbstractRollOperation {
        var ret: AbstractRollOperation = new RollOperationImpl(<AbstractRollOperation> super.build());
        ret.dif = this.dif;
        ret.label = this.label;
        ret.implies = this.implies;
        return ret;
    }

    get dif(): number {
        return this._dif;
    }
    set dif(_dif: number) {
        this._dif = _dif;
    }
    get label(): string {
        return this._label;
    }
    set label(_label: string) {
        this._label = _label;
    }
    get implies(): IStat[] {
        return this._implies;
    }
    set implies(_implies: IStat[]) {
        this._implies = _implies;
    }
}