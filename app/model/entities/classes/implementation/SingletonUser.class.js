'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractUser_class_1 = require("../abstract/AbstractUser.class");
var Constants_module_1 = require("../../../util/modules/Constants.module");
/**
 * Created by becari on 31/08/2016.
 */
var SingletonUser = (function (_super) {
    __extends(SingletonUser, _super);
    function SingletonUser(obj) {
        _super.call(this, obj);
        if (SingletonUser.instance)
            throw new Error(Constants_module_1.Constants.Errors.ERR_SINGLETON);
        SingletonUser.instance = this; // <-- auto-referencia del singleton aquí
    }
    Object.defineProperty(SingletonUser, "instance", {
        get: function () {
            return SingletonUser._instance;
        },
        set: function (_instance) {
            SingletonUser._instance = _instance;
        },
        enumerable: true,
        configurable: true
    });
    return SingletonUser;
}(AbstractUser_class_1.AbstractUser));
exports.SingletonUser = SingletonUser;
//# sourceMappingURL=SingletonUser.class.js.map