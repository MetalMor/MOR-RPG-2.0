'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractStatFieldBuilder_class_1 = require("./AbstractStatFieldBuilder.class");
var RegularDataField_class_1 = require("../../../fields/classes/implementation/RegularDataField.class");
var StatDataFieldImpl_class_1 = require("../../../fields/classes/implementation/StatDataFieldImpl.class");
/**
 * Created by becari on 13/09/2016.
 */
var AbstractStatDataFieldBuilder = (function (_super) {
    __extends(AbstractStatDataFieldBuilder, _super);
    function AbstractStatDataFieldBuilder(obj) {
        _super.call(this, obj);
        this.inherits = obj && obj.inherits || new RegularDataField_class_1.RegularDataField();
    }
    AbstractStatDataFieldBuilder.prototype.setInherits = function (_inherits) {
        this.inherits = _inherits;
        return this;
    };
    AbstractStatDataFieldBuilder.prototype.setGrants = function (_grants) {
        this.grants = _grants;
        return this;
    };
    AbstractStatDataFieldBuilder.prototype.build = function () {
        var ret = new StatDataFieldImpl_class_1.StatDataFieldImpl(_super.prototype.build.call(this));
        ret.inherits = this.inherits;
        return ret;
    };
    Object.defineProperty(AbstractStatDataFieldBuilder.prototype, "inherits", {
        get: function () {
            return this._inherits;
        },
        set: function (_inherits) {
            this._inherits = _inherits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractStatDataFieldBuilder.prototype, "grants", {
        get: function () {
            return this.inherits.grants;
        },
        set: function (_grants) {
            this.inherits.grants = _grants;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractStatDataFieldBuilder;
}(AbstractStatFieldBuilder_class_1.AbstractStatFieldBuilder));
exports.AbstractStatDataFieldBuilder = AbstractStatDataFieldBuilder;
//# sourceMappingURL=AbstractStatDataFieldBuilder.class.js.map