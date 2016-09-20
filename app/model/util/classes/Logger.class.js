'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Util_class_1 = require("./Util.class");
var AbstractGameEntity_class_1 = require("../../entities/classes/abstract/AbstractGameEntity.class");
/**
 * Created by Mor on 15/09/2016.
 */
var Logger = (function (_super) {
    __extends(Logger, _super);
    function Logger(obj) {
        _super.call(this, obj);
    }
    Logger.on = function () {
        var message = "Logger enabled";
        console.log(Logger.message(Util_class_1.Util.getCurrentDate(), message));
        Logger.enabled = true;
    };
    Logger.off = function () {
        var message = "Logger disabled";
        console.log(Logger.message(Util_class_1.Util.getCurrentDate(), message));
        Logger.enabled = false;
    };
    Logger.message = function (_dateString, _message, _source) {
        return _dateString + " [" + (_source || "logger") + "] -> " + _message;
    };
    Logger.prototype.log = function (_message) {
        console.log(Logger.message(Util_class_1.Util.getCurrentDate(), _message, this.name));
    };
    Object.defineProperty(Logger, "enabled", {
        get: function () {
            return Logger._enabled;
        },
        set: function (_enabled) {
            Logger._enabled = _enabled;
        },
        enumerable: true,
        configurable: true
    });
    Logger._enabled = false;
    return Logger;
}(AbstractGameEntity_class_1.AbstractGameEntity));
exports.Logger = Logger;
//# sourceMappingURL=Logger.class.js.map