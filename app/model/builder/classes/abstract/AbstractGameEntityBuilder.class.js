'use strict';
var GameEntityImpl_class_1 = require("../../../entities/classes/implementation/GameEntityImpl.class");
/**
 * Created by becari on 12/09/2016.
 */
var AbstractGameEntityBuilder = (function () {
    function AbstractGameEntityBuilder(obj) {
        this.name = obj && obj.name || "unnamed";
    }
    AbstractGameEntityBuilder.prototype.build = function () {
        var ret = new GameEntityImpl_class_1.GameEntityImpl();
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
}());
exports.AbstractGameEntityBuilder = AbstractGameEntityBuilder;
//# sourceMappingURL=AbstractGameEntityBuilder.class.js.map