'use strict';
import {RegularDataField} from "../../../model/fields/classes/implementation/RegularDataField.class";
import {Optional, SkipSelf, Component, Input} from "@angular/core";
/**
 * Created by Mor on 01/10/2016.
 */
@Component({
    selector: "test-datafield",
    templateUrl: "app/components/testing/templates/TestDataField.component.html"
})
export class TestDataField extends RegularDataField {
    constructor(@SkipSelf() @Input('this') obj?: TestDataField) {
        super(obj);
    }
}