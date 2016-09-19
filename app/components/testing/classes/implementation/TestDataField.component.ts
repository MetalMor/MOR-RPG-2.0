'use strict';
import {ITest} from "../../interfaces/ITest.interface";
import {AbstractTest} from "../abstract/AbstractTest.class";
import {Input, Component, SkipSelf, Optional} from "@angular/core";
import {AbstractDataField} from "../../../fields/classes/abstract/AbstractDataField.class";
import {TestStatModificatorSource} from "./TestStatModificatorSource.component";
import {StatModificatorSourceBuilder} from "../../../builder/classes/implementation/StatModificatorSourceBuilder.class"
/**
 * Created by becari on 16/09/2016.
 */
@Component({
    selector: 'test-datafield',
    templateUrl: 'app/templates/TestDataField.component.html',
    directives: [TestStatModificatorSource]
})
export class TestDataField extends AbstractTest implements ITest<AbstractDataField> {
    @Input('testing') _testing: AbstractDataField;

    constructor(@SkipSelf() @Optional() obj?: TestDataField) {
        super(obj);
        this.logger.name = "test_modificatorsource";
    }

    test() {
        super.test();
    }
    ngOnInit() {
        super.ngOnInit();
        this.testing.grants = (new StatModificatorSourceBuilder()).setOwner(this.testing).build();
        this.logger.log("Built modificator source");
    }

    get testing(): AbstractDataField {
        return this._testing;
    }
    set testing(_testing: AbstractDataField) {
        this._testing = _testing;
    }
}