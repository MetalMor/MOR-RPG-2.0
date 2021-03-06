'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractFieldSet_class_1 = require("../../../fields/classes/abstract/AbstractFieldSet.class");
var IndexedGameEntityImpl_class_1 = require("../../../entities/classes/implementation/IndexedGameEntityImpl.class");
var Hiding_enumeration_1 = require("../../enumerations/Hiding.enumeration");
var Constants_module_1 = require("../../../util/modules/Constants.module");
/**
 * Created by Mor on 17/08/2016.
 */
var AbstractItem = (function (_super) {
    __extends(AbstractItem, _super);
    function AbstractItem(obj) {
        _super.call(this, obj);
        var cast = obj;
        this.inherits = cast && cast.inherits || new IndexedGameEntityImpl_class_1.IndexedGameEntityImpl();
        this.hiding = cast && cast.hiding || Hiding_enumeration_1.Hiding.Pocket;
    }
    AbstractItem.prototype.addMods = function () {
        var fields = this.fields;
        // TODO impl
        return !fields;
    };
    AbstractItem.prototype.getHidingAsString = function () {
        var ret;
        switch (this.hiding) {
            case Hiding_enumeration_1.Hiding.Pocket:
                ret = Constants_module_1.Constants.Types.TYPE_HID_POCKET;
                break;
            case Hiding_enumeration_1.Hiding.Jacket:
                ret = Constants_module_1.Constants.Types.TYPE_HID_JACKET;
                break;
            case Hiding_enumeration_1.Hiding.Trenchcoat:
                ret = Constants_module_1.Constants.Types.TYPE_HID_TRENCHCOAT;
                break;
            case Hiding_enumeration_1.Hiding.None:
                ret = Constants_module_1.Constants.Types.TYPE_HID_NONE;
                break;
            default:
                throw new Error(Constants_module_1.Constants.Errors.ERR_HIDTYPE);
        }
        return ret;
    };
    Object.defineProperty(AbstractItem.prototype, "id", {
        get: function () {
            return this.inherits.id;
        },
        set: function (_id) {
            this.inherits.id = _id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractItem.prototype, "inherits", {
        get: function () {
            return this._inherits;
        },
        set: function (_inherits) {
            this._inherits = _inherits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractItem.prototype, "hiding", {
        get: function () {
            return this._hiding;
        },
        set: function (_hiding) {
            this._hiding = _hiding;
        },
        enumerable: true,
        configurable: true
    });
    AbstractItem.prototype.equals = function (obj) {
        return obj && this.inherits.equals(obj);
    };
    AbstractItem.prototype.toString = function () {
        return this.inherits.toString();
    };
    return AbstractItem;
}(AbstractFieldSet_class_1.AbstractFieldSet));
exports.AbstractItem = AbstractItem;
//# sourceMappingURL=AbstractItem.class.js.map