'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Logger_class_1 = require("../../../util/classes/Logger.class");
var AbstractGameEntityBuilder_class_1 = require("./AbstractGameEntityBuilder.class");
/**
 * Created by Mor on 15/09/2016.
 */
var AbstractLoggerBuilder = (function (_super) {
    __extends(AbstractLoggerBuilder, _super);
    function AbstractLoggerBuilder(obj) {
        _super.call(this, obj);
    }
    AbstractLoggerBuilder.prototype.build = function () {
        return new Logger_class_1.Logger(_super.prototype.build.call(this));
    };
    return AbstractLoggerBuilder;
}(AbstractGameEntityBuilder_class_1.AbstractGameEntityBuilder));
exports.AbstractLoggerBuilder = AbstractLoggerBuilder;
//# sourceMappingURL=AbstractLoggerBuilder.class.js.map