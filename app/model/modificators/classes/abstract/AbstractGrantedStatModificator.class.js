'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractStatModificator_class_1 = require("./AbstractStatModificator.class");
var DataFieldImpl_class_1 = require("../../../fields/classes/implementation/DataFieldImpl.class");
var StatModificatorSourceImpl_class_1 = require("../implementation/StatModificatorSourceImpl.class");
/**
 * Created by Mor on 17/09/2016.
 */
var AbstractGrantedStatModificator = (function (_super) {
    __extends(AbstractGrantedStatModificator, _super);
    function AbstractGrantedStatModificator(obj) {
        _super.call(this, obj);
        var source = new StatModificatorSourceImpl_class_1.StatModificatorSourceImpl(), field = new DataFieldImpl_class_1.DataFieldImpl();
        field.name = "environment";
        field.grants = source;
        source.owner = field;
        this.source = obj && obj.source || source;
    }
    AbstractGrantedStatModificator.prototype.getSourceStat = function () {
        return this.source.owner;
    };
    Object.defineProperty(AbstractGrantedStatModificator.prototype, "source", {
        get: function () {
            return this._source;
        },
        set: function (_source) {
            this._source = _source;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractGrantedStatModificator;
}(AbstractStatModificator_class_1.AbstractStatModificator));
exports.AbstractGrantedStatModificator = AbstractGrantedStatModificator;
//# sourceMappingURL=AbstractGrantedStatModificator.class.js.map