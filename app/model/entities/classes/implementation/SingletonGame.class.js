'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Constants_module_1 = require("../../../util/modules/Constants.module");
var AbstractGame_class_1 = require("../abstract/AbstractGame.class");
/**
 * Created by becari on 31/08/2016.
 */
var SingletonGame = (function (_super) {
    __extends(SingletonGame, _super);
    function SingletonGame(obj) {
        _super.call(this, obj);
        if (SingletonGame.instance)
            throw new Error(Constants_module_1.Constants.Errors.ERR_SINGLETON);
        SingletonGame.instance = this; // <-- auto-referencia del singleton aquí
    }
    Object.defineProperty(SingletonGame, "instance", {
        get: function () {
            return SingletonGame._instance;
        },
        set: function (_instance) {
            SingletonGame._instance = _instance;
        },
        enumerable: true,
        configurable: true
    });
    return SingletonGame;
}(AbstractGame_class_1.AbstractGame));
exports.SingletonGame = SingletonGame;
//# sourceMappingURL=SingletonGame.class.js.map