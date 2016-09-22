'use strict';
import {Component, SkipSelf, Optional, OnInit} from '@angular/core';
import {AbstractFieldSet} from "../../../../model/fields/classes/abstract/AbstractFieldSet.class";
import {AbstractFieldSetBuilder} from "../../../../model/builder/classes/abstract/AbstractFieldSetBuilder.class";
import {FieldSetBuilder} from "../../../../model/builder/classes/implementation/FieldSetBuilder.class";
import {AbstractDataFieldBuilder} from "../../../../model/builder/classes/abstract/AbstractDataFieldBuilder.class";
import {RegularDataFieldBuilder} from "../../../../model/builder/classes/implementation/RegularDataFieldBuilder.class";
import {RegularDataField} from "../../../../model/fields/classes/implementation/RegularDataField.class";
import {AbstractDataField} from "../../../../model/fields/classes/abstract/AbstractDataField.class";
import {Util} from "../../../../model/util/classes/Util.class";
import {Constants} from "../../../../model/util/classes/Constants.class";
import {AbstractTest} from "../abstract/AbstractTest.class";
import {ITest} from "../../interfaces/ITest.interface";
import {TestDataField} from "./TestDataField.component";
/**
 * Prueba unitaria FieldSet
 * Created by becari on 18/07/2016.
 */
@Component({
    selector: 'test-fieldset',
    templateUrl: 'app/templates/TestFieldSet.component.html',
    directives: [TestDataField]
})
export class TestFieldSet extends AbstractTest implements OnInit, ITest<AbstractFieldSet> {
    _testing: AbstractFieldSet;

    constructor(@SkipSelf() @Optional() obj?: TestFieldSet) {
        super(obj);
        this.title = "Prueba MOR - RPG";
        this.logger.name = "test_fieldset";
    }

    test() {
        super.test();
        var fieldSetBuilder: AbstractFieldSetBuilder = new FieldSetBuilder(),
            fieldBuilder: AbstractDataFieldBuilder = new RegularDataFieldBuilder(),
            fields: AbstractDataField[] = new Array<RegularDataField>(),
            field: AbstractDataField, numberPad: string, counter: number;
        for(counter = 0; counter < 10; counter++) {
            numberPad = Util.numberPad(counter, 2);
            fieldBuilder.setEnabled(true)
                .setDesc("Campo número #" + counter + "de la tabla.")
                .setName("Field#" + numberPad);
            fields.push(fieldBuilder.build());
            this.logger.log("Built field #"+numberPad);
        }
        fieldSetBuilder.setFields(fields)
            .setEnabled(true)
            .setDesc("Tabla de campos de prueba")
            .setName("FieldSet");
        this.testing = fieldSetBuilder.build();
        this.logger.log("Name: " + this.testing.name);
    }
    ngOnInit() {
        super.ngOnInit();
        this.test();
    }

    get enabledLabel(): string {
        return this.testing.enabled ? Constants.Labels.ENABLED : Constants.Labels.DISABLED;
    }
    get testing(): AbstractFieldSet {
        return this._testing;
    }
    set testing(_testing: AbstractFieldSet) {
        this._testing = _testing;
    }
}