'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractStatModificatorBuilder_class_1 = require("./AbstractStatModificatorBuilder.class");
var DataFieldImpl_class_1 = require("../../../fields/classes/implementation/DataFieldImpl.class");
var GrantedStatModificatorImpl_class_1 = require("../../../modificators/classes/implementation/GrantedStatModificatorImpl.class");
var StatModificatorSourceImpl_class_1 = require("../../../modificators/classes/implementation/StatModificatorSourceImpl.class");
/**
 * Created by Mor on 17/09/2016.
 */
var AbstractGrantedStatModificatorBuilder = (function (_super) {
    __extends(AbstractGrantedStatModificatorBuilder, _super);
    function AbstractGrantedStatModificatorBuilder(obj) {
        _super.call(this, obj);
        var source = new StatModificatorSourceImpl_class_1.StatModificatorSourceImpl(), field = new DataFieldImpl_class_1.DataFieldImpl();
        field.name = "environment";
        source.owner = field;
        field.grants = source;
        this.source = obj && obj.source || source;
    }
    AbstractGrantedStatModificatorBuilder.prototype.setSource = function (_source) {
        this.source = _source;
        return this;
    };
    AbstractGrantedStatModificatorBuilder.prototype.build = function () {
        var ret = new GrantedStatModificatorImpl_class_1.GrantedStatModificatorImpl(_super.prototype.build.call(this));
        ret.source = this.source;
        return ret;
    };
    Object.defineProperty(AbstractGrantedStatModificatorBuilder.prototype, "source", {
        get: function () {
            return this._source;
        },
        set: function (_source) {
            this._source = _source;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractGrantedStatModificatorBuilder;
}(AbstractStatModificatorBuilder_class_1.AbstractStatModificatorBuilder));
exports.AbstractGrantedStatModificatorBuilder = AbstractGrantedStatModificatorBuilder;
//# sourceMappingURL=AbstractGrantedStatModificatorBuilder.class.js.map