'use strict';
import {AbstractRollSetBuilder} from "../abstract/AbstractRollSetBuilder.class";
import {RollSetImpl} from "../../../actions/classes/implementation/RollSetImpl.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
/**
 * Created by becari on 14/09/2016.
 */
export class RollSetBuilder extends AbstractRollSetBuilder implements IBuilder<RollSetImpl> {
    constructor(obj?: RollSetBuilder) {
        super(obj);
    }

    build(): RollSetImpl {
        return new RollSetImpl(<RollSetImpl> super.build());
    }
}