'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameEntityImpl_class_1 = require("../../../entities/classes/implementation/GameEntityImpl.class");
var AbstractBuilder_class_1 = require("./AbstractBuilder.class");
/**
 * Created by becari on 12/09/2016.
 */
var AbstractGameEntityBuilder = (function (_super) {
    __extends(AbstractGameEntityBuilder, _super);
    function AbstractGameEntityBuilder(obj) {
        _super.call(this, obj);
        this.name = obj && obj.name || "unnamed";
    }
    AbstractGameEntityBuilder.prototype.build = function () {
        var ret = new GameEntityImpl_class_1.GameEntityImpl(_super.prototype.build.call(this));
        ret.name = this.name;
        return ret;
    };
    AbstractGameEntityBuilder.prototype.setName = function (_name) {
        this.name = _name;
        return this;
    };
    Object.defineProperty(AbstractGameEntityBuilder.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (_name) {
            this._name = _name;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractGameEntityBuilder;
}(AbstractBuilder_class_1.AbstractBuilder));
exports.AbstractGameEntityBuilder = AbstractGameEntityBuilder;
//# sourceMappingURL=AbstractGameEntityBuilder.class.js.map