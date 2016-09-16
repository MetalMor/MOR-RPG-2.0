'use strict';
import {Component, SkipSelf, Optional} from '@angular/core';
import {AbstractFieldSet} from "../../../fields/classes/abstract/AbstractFieldSet.class";
import {AbstractFieldSetBuilder} from "../../../builder/classes/abstract/AbstractFieldSetBuilder.class";
import {FieldSetBuilder} from "../../../builder/classes/implementation/FieldSetBuilder.class";
import {AbstractDataFieldBuilder} from "../../../builder/classes/abstract/AbstractDataFieldBuilder.class";
import {RegularDataFieldBuilder} from "../../../builder/classes/implementation/RegularDataFieldBuilder.class";
import {RegularDataField} from "../../../fields/classes/implementation/RegularDataField.class";
import {AbstractDataField} from "../../../fields/classes/abstract/AbstractDataField.class";
import {Util} from "../../../util/classes/Util.class";
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
export class TestFieldSet extends AbstractTest implements ITest<AbstractFieldSet> {
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

    get enabledLabel(): string {
        return this.testing.enabled ? "YUP" : "NOPE";
    }
    get testing(): AbstractFieldSet {
        return this._testing;
    }
    set testing(_testing: AbstractFieldSet) {
        this._testing = _testing;
    }
}