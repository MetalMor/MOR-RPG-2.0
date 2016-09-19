'use strict';
import {AbstractGrantedStatModificator} from "../../../modificators/classes/abstract/AbstractGrantedStatModificator.class";
import {ITest} from "../../interfaces/ITest.interface";
import {AbstractTest} from "../abstract/AbstractTest.class";
import {Input, Optional, SkipSelf, Component} from "@angular/core";
/**
 * Created by becari on 19/09/2016.
 */
@Component({
    selector: 'test-statmodificator',
    templateUrl: 'app/templates/TestStatModificator.component.html'
})
export class TestStatModificator extends AbstractTest implements ITest<AbstractGrantedStatModificator> {
    @Input('testing') _testing: AbstractGrantedStatModificator;

    constructor(@SkipSelf() @Optional() obj?: TestStatModificator) {
        super(obj);
        this.logger.name = "test_statmodificator"
    }

    test() {
        this.log("Testing stat modificators.");
    }
    ngOnInit() {
        super.ngOnInit();
        this.test();
    }

    get testing(): AbstractGrantedStatModificator {
        return this._testing;
    }
    set testing(_testing: AbstractGrantedStatModificator) {
        this._testing = _testing;
    }
}