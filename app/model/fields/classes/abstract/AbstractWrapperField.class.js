'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FieldSetImpl_class_1 = require("../implementation/FieldSetImpl.class");
var AbstractField_class_1 = require("./AbstractField.class");
/**
 * Created by Mor on 17/08/2016.
 */
var AbstractWrapperField = (function (_super) {
    __extends(AbstractWrapperField, _super);
    function AbstractWrapperField(obj) {
        _super.call(this, obj);
        var cast = obj;
        this.inherits = cast && cast.inherits || new FieldSetImpl_class_1.FieldSetImpl();
    }
    Object.defineProperty(AbstractWrapperField.prototype, "inherits", {
        get: function () {
            return this._inherits;
        },
        set: function (_inherits) {
            this._inherits = _inherits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractWrapperField.prototype, "fields", {
        get: function () {
            return this.inherits.fields;
        },
        set: function (_fields) {
            this.inherits.fields = _fields;
        },
        enumerable: true,
        configurable: true
    });
    /* comentado pq ya hereda estos atributos sin necesidad de cogerlos de inherits
    get name(): string {
        return (<AbstractFieldSet> this.inherits).name;
    }
    set name(_name: string) {
        (<AbstractFieldSet> this.inherits).name = _name;
    }
    get fields(): IField[] {
        return (<AbstractFieldSet> this.inherits).fields;
    }
    set fields(_fields: IField[]) {
        (<AbstractFieldSet> this.inherits).fields = _fields;
    }
    get desc(): string {
        return (<AbstractFieldSet> this.inherits).desc;
    }
    set desc(_desc: string) {
        (<AbstractFieldSet> this.inherits).desc = _desc;
    }
    get enabled(): boolean {
        return (<AbstractFieldSet> this.inherits).enabled;
    }
    set enabled(_enabled: boolean) {
        (<AbstractFieldSet> this.inherits).enabled = _enabled;
    }*/
    AbstractWrapperField.prototype.get = function (field) {
        return this.inherits.get(field);
    };
    AbstractWrapperField.prototype.set = function (field) {
        return this.inherits.set(field);
    };
    AbstractWrapperField.prototype.add = function (field) {
        return this.inherits.add(field);
    };
    AbstractWrapperField.prototype.remove = function (field) {
        return this.inherits.remove(field);
    };
    return AbstractWrapperField;
}(AbstractField_class_1.AbstractField));
exports.AbstractWrapperField = AbstractWrapperField;
//# sourceMappingURL=AbstractWrapperField.class.js.map