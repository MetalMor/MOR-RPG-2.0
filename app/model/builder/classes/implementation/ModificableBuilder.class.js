'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractModificableBuilder_class_1 = require("../abstract/AbstractModificableBuilder.class");
/**
 * Created by becari on 14/09/2016.
 */
var ModificableBuilder = (function (_super) {
    __extends(ModificableBuilder, _super);
    function ModificableBuilder(obj) {
        _super.call(this, obj);
    }
    return ModificableBuilder;
}(AbstractModificableBuilder_class_1.AbstractModificableBuilder));
exports.ModificableBuilder = ModificableBuilder;
//# sourceMappingURL=ModificableBuilder.class.js.map