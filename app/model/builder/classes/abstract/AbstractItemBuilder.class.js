'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractFieldSetBuilder_class_1 = require("./AbstractFieldSetBuilder.class");
var ItemImpl_class_1 = require("../../../items/classes/implementation/ItemImpl.class");
var IndexedGameEntityBuilder_class_1 = require("../implementation/IndexedGameEntityBuilder.class");
var NumericDataFieldBuilder_class_1 = require("../implementation/NumericDataFieldBuilder.class");
var Builders_class_1 = require("../../../util/classes/Builders.class");
/**
 * Created by becari on 14/09/2016.
 */
var AbstractItemBuilder = (function (_super) {
    __extends(AbstractItemBuilder, _super);
    function AbstractItemBuilder(obj) {
        _super.call(this, obj);
        this.numericDataFieldBuilder = obj && obj.numericDataFieldBuilder || new NumericDataFieldBuilder_class_1.NumericDataFieldBuilder();
        this.inherits = obj && obj.inherits || (new IndexedGameEntityBuilder_class_1.IndexedGameEntityBuilder()).build();
        this.hiding = obj && obj.hiding || 3;
    }
    AbstractItemBuilder.prototype.setId = function (_id) {
        this.id = _id;
        return this;
    };
    AbstractItemBuilder.prototype.setInherits = function (_inherits) {
        this.inherits = _inherits;
        return this;
    };
    AbstractItemBuilder.prototype.setHiding = function (_hiding) {
        this.hiding = _hiding;
        return this;
    };
    AbstractItemBuilder.prototype.createNumericDataField = function (_name, _value) {
        return Builders_class_1.Builders.create(NumericDataFieldBuilder_class_1.NumericDataFieldBuilder, {
            name: _name,
            value: _value
        });
    };
    AbstractItemBuilder.prototype.build = function () {
        var ret = new ItemImpl_class_1.ItemImpl(_super.prototype.build.call(this));
        ret.inherits = this.inherits;
        ret.hiding = this.hiding;
        return ret;
    };
    Object.defineProperty(AbstractItemBuilder.prototype, "id", {
        get: function () {
            return this.inherits.id;
        },
        set: function (_id) {
            this.inherits.id = _id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractItemBuilder.prototype, "numericDataFieldBuilder", {
        get: function () {
            return this._numericDataFieldBuilder;
        },
        set: function (_numericDataFieldBuilder) {
            this._numericDataFieldBuilder = _numericDataFieldBuilder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractItemBuilder.prototype, "inherits", {
        get: function () {
            return this._inherits;
        },
        set: function (_inherits) {
            this._inherits = _inherits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractItemBuilder.prototype, "hiding", {
        get: function () {
            return this._hiding;
        },
        set: function (_hiding) {
            this._hiding = _hiding;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractItemBuilder;
}(AbstractFieldSetBuilder_class_1.AbstractFieldSetBuilder));
exports.AbstractItemBuilder = AbstractItemBuilder;
//# sourceMappingURL=AbstractItemBuilder.class.js.map