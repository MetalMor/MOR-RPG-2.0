'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractCharacterListBuilder_class_1 = require("../abstract/AbstractCharacterListBuilder.class");
var UserCharacterList_class_1 = require("../../../properties/classes/implementation/UserCharacterList.class");
/**
 * Created by becari on 14/09/2016.
 */
var UserCharacterListBuilder = (function (_super) {
    __extends(UserCharacterListBuilder, _super);
    function UserCharacterListBuilder(obj) {
        _super.call(this, obj);
    }
    UserCharacterListBuilder.prototype.build = function () {
        return new UserCharacterList_class_1.UserCharacterList(_super.prototype.build.call(this));
    };
    return UserCharacterListBuilder;
}(AbstractCharacterListBuilder_class_1.AbstractCharacterListBuilder));
exports.UserCharacterListBuilder = UserCharacterListBuilder;
//# sourceMappingURL=UserCharacterListBuilder.class.js.map