'use strict';
import {AbstractRollOperationBuilder} from "./AbstractRollOperationBuilder.class";
import {AbstractRoll} from "../../../actions/classes/abstract/AbstractRoll.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {RollImpl} from "../../../actions/classes/implementation/RollImpl.class";
/**
 * Created by becari on 14/09/2016.
 */
export abstract class AbstractRollBuilder extends AbstractRollOperationBuilder implements IBuilder<AbstractRoll> {
    _res: number;

    constructor(obj?: AbstractRollBuilder) {
        super(obj);
        this.res = obj && obj.res || 0;
    }

    setRes(_res: number): AbstractRollBuilder {
        this.res = _res;
        return this;
    }
    build(): AbstractRoll {
        var ret: AbstractRoll = new RollImpl(<AbstractRoll> super.build());
        ret.res = this.res;
        return ret;
    }

    get res(): number {
        return this._res;
    }
    set res(_res: number) {
        this._res = _res;
    }
}