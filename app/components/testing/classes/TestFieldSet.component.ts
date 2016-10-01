'use strict';
import {FieldSetImpl} from "../../../model/fields/classes/implementation/FieldSetImpl.class";
import {SkipSelf, Optional, Component, OnInit} from "@angular/core";
import {TestDataField} from "./TestDataField.component";
import {Util} from "../../../model/util/classes/Util.class";
/**
 * Created by Mor on 01/10/2016.
 */
@Component({
    selector: "test-fieldset",
    templateUrl: "app/components/testing/templates/TestFieldSet.component.html",
    directives: [TestDataField]
})
export class TestFieldSet extends FieldSetImpl implements OnInit {
    constructor(@Optional() @SkipSelf() obj?: TestFieldSet) {
        super(obj);
        this.name = "FieldSet";
    }

    ngOnInit() {
        let fields: TestDataField[] = new Array<TestDataField>();
        for(let x = 0; x < 5; x++) {
            let field: TestDataField = new TestDataField(),
                number: string = Util.numberPad(x, 2);
            field.name = "Field_"+number;
            field.desc = "This is field number "+number;
            fields.push(field)
        }
        this.addAll.call(this, fields);
    }
}