'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractCharacter_class_1 = require("../abstract/AbstractCharacter.class");
var Constants_class_1 = require("../../../util/classes/Constants.class");
/**
 * Created by Mor on 20/08/2016.
 */
var SingletonCharacter = (function (_super) {
    __extends(SingletonCharacter, _super);
    function SingletonCharacter(obj) {
        _super.call(this, obj);
        if (SingletonCharacter.instance)
            throw new Error(Constants_class_1.Constants.Errors.ERR_SINGLETON);
        SingletonCharacter.instance = this; // <-- auto-referencia del singleton aquí
    }
    Object.defineProperty(SingletonCharacter, "instance", {
        get: function () {
            return SingletonCharacter._instance;
        },
        set: function (_instance) {
            SingletonCharacter._instance = _instance;
        },
        enumerable: true,
        configurable: true
    });
    return SingletonCharacter;
}(AbstractCharacter_class_1.AbstractCharacter));
exports.SingletonCharacter = SingletonCharacter;
//# sourceMappingURL=SingletonCharacter.class.js.map