'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractWrapperStatFieldBuilder_class_1 = require("../abstract/AbstractWrapperStatFieldBuilder.class");
var PowerStat_class_1 = require("../../../fields/classes/implementation/PowerStat.class");
/**
 * Created by becari on 14/09/2016.
 */
var PowerStatBuilder = (function (_super) {
    __extends(PowerStatBuilder, _super);
    function PowerStatBuilder(obj) {
        _super.call(this, obj);
    }
    PowerStatBuilder.prototype.build = function () {
        return new PowerStat_class_1.PowerStat(_super.prototype.build.call(this));
    };
    return PowerStatBuilder;
}(AbstractWrapperStatFieldBuilder_class_1.AbstractWrapperStatFieldBuilder));
exports.PowerStatBuilder = PowerStatBuilder;
//# sourceMappingURL=PowerStatBuilder.class.js.map