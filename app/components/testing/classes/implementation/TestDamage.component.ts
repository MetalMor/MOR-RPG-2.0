'use strict';
import {AbstractDamage} from "../../../../model/items/classes/abstract/AbstractDamage.class";
import {ITest} from "../../interfaces/ITest.interface";
import {AbstractTest} from "../abstract/AbstractTest.class";
import {Optional, SkipSelf, Component, Input} from "@angular/core";
/**
 * Created by becari on 22/09/2016.
 */
@Component({
    selector: 'test-damage',
    templateUrl: "app/templates/testing/TestDamage.component.html"
})
export class TestDamage extends AbstractTest implements ITest<AbstractDamage> {
    @Input('testing') _testing: AbstractDamage;

    constructor(@SkipSelf() @Optional() obj?: TestDamage) {
        super(obj);
        this.logger.source = "test_damage";
    }

    test() {
        super.test();
    }

    get testing(): AbstractDamage {
        return this._testing;
    }
    set testing(_testing: AbstractDamage) {
        this._testing = _testing;
    }
}