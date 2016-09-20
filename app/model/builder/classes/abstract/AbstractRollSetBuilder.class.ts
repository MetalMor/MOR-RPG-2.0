'use strict';
import {AbstractRollOperationBuilder} from "./AbstractRollOperationBuilder.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {AbstractRollSet} from "../../../actions/classes/abstract/AbstractRollSet.class";
import {IRoll} from "../../../actions/interfaces/IRoll.interface";
import {AbstractRoll} from "../../../actions/classes/abstract/AbstractRoll.class";
import {RollSetImpl} from "../../../actions/classes/implementation/RollSetImpl.class";
/**
 * Created by becari on 14/09/2016.
 */
export abstract class AbstractRollSetBuilder extends AbstractRollOperationBuilder implements IBuilder<AbstractRollSet> {
    _rolls: IRoll[];

    constructor(obj?: AbstractRollSetBuilder) {
        super(obj);
        this.rolls = obj && obj.rolls || new Array<AbstractRoll>();
    }

    setRolls(_rolls: IRoll[]): AbstractRollSetBuilder {
        this.rolls = _rolls;
        return this;
    }
    build(): AbstractRollSet {
        var ret: AbstractRollSet = new RollSetImpl(<AbstractRollSet> super.build());
        ret.rolls = this.rolls;
        return ret;
    }

    get rolls(): IRoll[] {
        return this._rolls;
    }
    set rolls(_rolls: IRoll[]) {
        this._rolls = _rolls;
    }
}