'use strict';
import {ITest} from "../../interfaces/ITest.interface";
import {AbstractTest} from "../abstract/AbstractTest.class";
import {Input, Component, SkipSelf, Optional} from "@angular/core";
import {LoggerBuilder} from "../../../builder/classes/implementation/LoggerBuilder.class";
import {AbstractDataField} from "../../../fields/classes/abstract/AbstractDataField.class";
import {TestStatModificator} from "./TestStatModificator.component";
/**
 * Created by becari on 16/09/2016.
 */
@Component({
    selector: 'test-datafield',
    templateUrl: 'app/templates/TestDataField.component.html',
    directives: [TestStatModificator]
})
export class TestDataField extends AbstractTest implements ITest<AbstractDataField> {
    @Input('testing') _testing: AbstractDataField;

    constructor(@SkipSelf() @Optional() obj?: TestDataField) {
        super(obj);
        this.logger.name = "test_datafield";
    }

    test() {
        super.test();
    }

    get testing(): AbstractDataField {
        return this._testing;
    }
    set testing(_testing: AbstractDataField) {
        this._testing = _testing;
    }
}