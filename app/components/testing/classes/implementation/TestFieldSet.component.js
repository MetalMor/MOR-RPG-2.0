'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var FieldSetBuilder_class_1 = require("../../../builder/classes/implementation/FieldSetBuilder.class");
var RegularDataFieldBuilder_class_1 = require("../../../builder/classes/implementation/RegularDataFieldBuilder.class");
var Util_class_1 = require("../../../util/classes/Util.class");
var AbstractTest_class_1 = require("../abstract/AbstractTest.class");
var TestDataField_component_1 = require("./TestDataField.component");
/**
 * Prueba unitaria FieldSet
 * Created by becari on 18/07/2016.
 */
var TestFieldSet = (function (_super) {
    __extends(TestFieldSet, _super);
    function TestFieldSet(obj) {
        _super.call(this, obj);
        this.title = "Prueba MOR - RPG";
        this.logger.name = "test_fieldset";
    }
    TestFieldSet.prototype.test = function () {
        _super.prototype.test.call(this);
        var fieldSetBuilder = new FieldSetBuilder_class_1.FieldSetBuilder(), fieldBuilder = new RegularDataFieldBuilder_class_1.RegularDataFieldBuilder(), fields = new Array(), field, numberPad, counter;
        for (counter = 0; counter < 10; counter++) {
            numberPad = Util_class_1.Util.numberPad(counter, 2);
            fieldBuilder.setEnabled(true)
                .setDesc("Campo número #" + counter + "de la tabla.")
                .setName("Field#" + numberPad);
            fields.push(fieldBuilder.build());
            this.logger.log("Built field #" + numberPad);
        }
        fieldSetBuilder.setFields(fields)
            .setEnabled(true)
            .setDesc("Tabla de campos de prueba")
            .setName("FieldSet");
        this.testing = fieldSetBuilder.build();
        this.logger.log("Name: " + this.testing.name);
    };
    Object.defineProperty(TestFieldSet.prototype, "enabledLabel", {
        get: function () {
            return this.testing.enabled ? "YUP" : "NOPE";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestFieldSet.prototype, "testing", {
        get: function () {
            return this._testing;
        },
        set: function (_testing) {
            this._testing = _testing;
        },
        enumerable: true,
        configurable: true
    });
    TestFieldSet = __decorate([
        core_1.Component({
            selector: 'test-fieldset',
            templateUrl: 'app/templates/TestFieldSet.component.html',
            directives: [TestDataField_component_1.TestDataField]
        }),
        __param(0, core_1.SkipSelf()),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [TestFieldSet])
    ], TestFieldSet);
    return TestFieldSet;
}(AbstractTest_class_1.AbstractTest));
exports.TestFieldSet = TestFieldSet;
//# sourceMappingURL=TestFieldSet.component.js.map