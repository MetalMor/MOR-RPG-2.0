'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractGameEntityBuilder_class_1 = require("./AbstractGameEntityBuilder.class");
var StatModificatorType_enum_1 = require("../../../modificators/enumerations/StatModificatorType.enum");
var StatModificatorImpl_class_1 = require("../../../modificators/classes/implementation/StatModificatorImpl.class");
/**
 * Created by becari on 13/09/2016.
 */
var AbstractStatModificatorBuilder = (function (_super) {
    __extends(AbstractStatModificatorBuilder, _super);
    function AbstractStatModificatorBuilder(obj) {
        _super.call(this, obj);
        this.modifies = obj && obj.modifies || null;
        //this.source = obj && obj.source || new StatModificatorSourceImpl();
        this.type = obj && obj.type || StatModificatorType_enum_1.StatModificatorType.Level;
        this.value = obj && obj.value || 0;
    }
    AbstractStatModificatorBuilder.prototype.setModifies = function (_modifies) {
        this.modifies = _modifies;
        return this;
    };
    /*setSource(_source: IStatModificatorSource): AbstractStatModificatorBuilder {
        this.source = _source;
        return this;
    }*/
    AbstractStatModificatorBuilder.prototype.setType = function (_type) {
        this.type = _type;
        return this;
    };
    AbstractStatModificatorBuilder.prototype.setValue = function (_value) {
        this.value = _value;
        return this;
    };
    AbstractStatModificatorBuilder.prototype.build = function () {
        var ret = new StatModificatorImpl_class_1.StatModificatorImpl(_super.prototype.build.call(this));
        ret.modifies = this.modifies;
        //ret.source = this.source;
        ret.type = this.type;
        ret.value = this.value;
        return ret;
    };
    Object.defineProperty(AbstractStatModificatorBuilder.prototype, "modifies", {
        get: function () {
            return this._modifies;
        },
        set: function (_modifies) {
            this._modifies = _modifies;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractStatModificatorBuilder.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (_type) {
            this._type = _type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractStatModificatorBuilder.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (_value) {
            this._value = _value;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractStatModificatorBuilder;
}(AbstractGameEntityBuilder_class_1.AbstractGameEntityBuilder));
exports.AbstractStatModificatorBuilder = AbstractStatModificatorBuilder;
//# sourceMappingURL=AbstractStatModificatorBuilder.class.js.map