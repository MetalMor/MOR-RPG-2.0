'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractStatModificatorSource_class_1 = require("../../../modificators/classes/abstract/AbstractStatModificatorSource.class");
var AbstractGameEntityBuilder_class_1 = require("./AbstractGameEntityBuilder.class");
var StatModificatorSourceImpl_class_1 = require("../../../modificators/classes/implementation/StatModificatorSourceImpl.class");
/**
 * Created by becari on 13/09/2016.
 */
var AbstractStatModificatorSourceBuilder = (function (_super) {
    __extends(AbstractStatModificatorSourceBuilder, _super);
    function AbstractStatModificatorSourceBuilder(obj) {
        _super.call(this, obj);
        this.grants = obj && obj.grants || new Array();
        this.owner = obj && obj.owner || new StatModificatorSourceImpl_class_1.StatModificatorSourceImpl();
    }
    AbstractStatModificatorSourceBuilder.prototype.setGrants = function (_grants) {
        this.grants = _grants;
        return this;
    };
    AbstractStatModificatorSourceBuilder.prototype.setOwner = function (_owner) {
        if (!(_owner instanceof AbstractStatModificatorSource_class_1.AbstractStatModificatorSource))
            this.owner = _owner;
        return this;
    };
    AbstractStatModificatorSourceBuilder.prototype.build = function () {
        var ret = new StatModificatorSourceImpl_class_1.StatModificatorSourceImpl(_super.prototype.build.call(this));
        ret.grants = this.grants;
        ret.owner = this.owner;
        return ret;
    };
    Object.defineProperty(AbstractStatModificatorSourceBuilder.prototype, "grants", {
        get: function () {
            return this._grants;
        },
        set: function (_grants) {
            this._grants = _grants;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractStatModificatorSourceBuilder.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (_owner) {
            this._owner = _owner;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractStatModificatorSourceBuilder;
}(AbstractGameEntityBuilder_class_1.AbstractGameEntityBuilder));
exports.AbstractStatModificatorSourceBuilder = AbstractStatModificatorSourceBuilder;
//# sourceMappingURL=AbstractStatModificatorSourceBuilder.class.js.map