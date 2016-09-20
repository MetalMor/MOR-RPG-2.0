'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractFieldBuilder_class_1 = require("./AbstractFieldBuilder.class");
var StatModificatorSourceImpl_class_1 = require("../../../modificators/classes/implementation/StatModificatorSourceImpl.class");
var DataFieldImpl_class_1 = require("../../../fields/classes/implementation/DataFieldImpl.class");
/**
 * Created by becari on 12/09/2016.
 */
var AbstractDataFieldBuilder = (function (_super) {
    __extends(AbstractDataFieldBuilder, _super);
    function AbstractDataFieldBuilder(obj) {
        _super.call(this, obj);
        this.grants = obj && obj.grants || new StatModificatorSourceImpl_class_1.StatModificatorSourceImpl();
    }
    AbstractDataFieldBuilder.prototype.setGrants = function (_grants) {
        this.grants = _grants;
        return this;
    };
    AbstractDataFieldBuilder.prototype.build = function () {
        var ret = new DataFieldImpl_class_1.DataFieldImpl(_super.prototype.build.call(this));
        ret.grants = this.grants;
        return ret;
    };
    Object.defineProperty(AbstractDataFieldBuilder.prototype, "grants", {
        get: function () {
            return this._grants;
        },
        set: function (_grants) {
            this._grants = _grants;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractDataFieldBuilder;
}(AbstractFieldBuilder_class_1.AbstractFieldBuilder));
exports.AbstractDataFieldBuilder = AbstractDataFieldBuilder;
//# sourceMappingURL=AbstractDataFieldBuilder.class.js.map