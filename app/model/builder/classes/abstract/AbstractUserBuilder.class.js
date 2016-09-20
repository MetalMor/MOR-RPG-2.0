'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractIndexedGameEntityBuilder_class_1 = require("./AbstractIndexedGameEntityBuilder.class");
var UserImpl_class_1 = require("../../../entities/classes/implementation/UserImpl.class");
/**
 * Created by becari on 12/09/2016.
 */
var AbstractUserBuilder = (function (_super) {
    __extends(AbstractUserBuilder, _super);
    function AbstractUserBuilder(obj) {
        _super.call(this, obj);
        this.passwd = obj && obj.passwd || "";
    }
    AbstractUserBuilder.prototype.build = function () {
        var ret = new UserImpl_class_1.UserImpl(_super.prototype.build.call(this));
        ret.passwd = this.passwd;
        return ret;
    };
    AbstractUserBuilder.prototype.setPasswd = function (_passwd) {
        this.passwd = _passwd;
        return this;
    };
    Object.defineProperty(AbstractUserBuilder.prototype, "passwd", {
        get: function () {
            return this._passwd;
        },
        set: function (_passwd) {
            this._passwd = _passwd;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractUserBuilder;
}(AbstractIndexedGameEntityBuilder_class_1.AbstractIndexedGameEntityBuilder));
exports.AbstractUserBuilder = AbstractUserBuilder;
//# sourceMappingURL=AbstractUserBuilder.class.js.map