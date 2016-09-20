'use strict';
import {AbstractWrapperStatFieldBuilder} from "../abstract/AbstractWrapperStatFieldBuilder.class";
import {PowerStat} from "../../../fields/classes/implementation/PowerStat.class";
/**
 * Created by becari on 14/09/2016.
 */
export class PowerStatBuilder extends AbstractWrapperStatFieldBuilder {
    constructor(obj?: PowerStatBuilder) {
        super(obj);
    }

    build(): PowerStat {
        return new PowerStat(<PowerStat> super.build());
    }
}