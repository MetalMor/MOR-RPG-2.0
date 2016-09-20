'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractGameEntityBuilder_class_1 = require("./AbstractGameEntityBuilder.class");
var FieldImpl_class_1 = require("../../../fields/classes/implementation/FieldImpl.class");
/**
 * Created by becari on 12/09/2016.
 */
var AbstractFieldBuilder = (function (_super) {
    __extends(AbstractFieldBuilder, _super);
    function AbstractFieldBuilder(obj) {
        _super.call(this, obj);
        this.desc = obj && obj.desc || "void desc";
        this.enabled = obj && obj.enabled || true;
        this.parent = obj && obj.parent || null;
    }
    AbstractFieldBuilder.prototype.setDesc = function (_desc) {
        this.desc = _desc;
        return this;
    };
    AbstractFieldBuilder.prototype.setEnabled = function (_enabled) {
        this.enabled = _enabled;
        return this;
    };
    AbstractFieldBuilder.prototype.setParent = function (_parent) {
        this.parent = _parent;
        return this;
    };
    AbstractFieldBuilder.prototype.build = function () {
        var ret = new FieldImpl_class_1.FieldImpl(_super.prototype.build.call(this));
        ret.desc = this.desc;
        ret.enabled = this.enabled;
        ret.parent = this.parent;
        return ret;
    };
    Object.defineProperty(AbstractFieldBuilder.prototype, "desc", {
        get: function () {
            return this._desc;
        },
        set: function (_desc) {
            this._desc = _desc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFieldBuilder.prototype, "enabled", {
        get: function () {
            return this._enabled;
        },
        set: function (_enabled) {
            this._enabled = _enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFieldBuilder.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (_parent) {
            this._parent = _parent;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractFieldBuilder;
}(AbstractGameEntityBuilder_class_1.AbstractGameEntityBuilder));
exports.AbstractFieldBuilder = AbstractFieldBuilder;
//# sourceMappingURL=AbstractFieldBuilder.class.js.map