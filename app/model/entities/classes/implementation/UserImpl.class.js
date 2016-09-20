'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractUser_class_1 = require("../abstract/AbstractUser.class");
/**
 * Created by Mor on 16/09/2016.
 */
var UserImpl = (function (_super) {
    __extends(UserImpl, _super);
    function UserImpl(obj) {
        _super.call(this, obj);
    }
    return UserImpl;
}(AbstractUser_class_1.AbstractUser));
exports.UserImpl = UserImpl;
//# sourceMappingURL=UserImpl.class.js.map