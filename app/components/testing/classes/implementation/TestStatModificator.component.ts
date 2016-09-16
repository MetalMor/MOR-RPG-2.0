'use strict';
import {ITest} from "../../interfaces/ITest.interface";
import {AbstractTest} from "../abstract/AbstractTest.class";
import {AbstractStatModificator} from "../../../modificators/classes/abstract/AbstractStatModificator.class";
import {Optional, SkipSelf, Component, Input} from "@angular/core";
/**
 * Created by becari on 16/09/2016.
 */
@Component({
    selector: 'test-statmodificator',
    templateUrl: 'app/templates/TestStatModificator.component.html'
})
export class TestStatModificator extends AbstractTest implements ITest<AbstractStatModificator> {
    @Input('testing') _testing; AbstractStatModificator;

    constructor(@SkipSelf() @Optional() obj?: AbstractTest) {
        super(obj);
        this.logger.name = "test_statmodificator";
    }

    test() {
        super.test();
    }

    get testing(): AbstractStatModificator {
        return this._testing;
    }
    set testing(_testing: AbstractStatModificator) {
        this._testing = _testing;
    }
}