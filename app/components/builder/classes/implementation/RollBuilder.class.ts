'use strict';
import {AbstractRollBuilder} from "../abstract/AbstractRollBuilder.class";
import {RollImpl} from "../../../actions/classes/implementation/RollImpl.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
/**
 * Created by becari on 14/09/2016.
 */
export class RollBuilder extends AbstractRollBuilder implements IBuilder<RollImpl> {
    constructor(obj?: RollBuilder) {
        super(obj);
    }

    build(): RollImpl {
        return new RollImpl(<RollImpl> super.build());
    }
}