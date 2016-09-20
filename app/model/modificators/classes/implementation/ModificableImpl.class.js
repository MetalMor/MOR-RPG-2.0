'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractModificable_class_1 = require("../abstract/AbstractModificable.class");
/**
 * Created by Mor on 09/09/2016.
 */
var ModificableImpl = (function (_super) {
    __extends(ModificableImpl, _super);
    function ModificableImpl(obj) {
        _super.call(this, obj);
    }
    return ModificableImpl;
}(AbstractModificable_class_1.AbstractModificable));
exports.ModificableImpl = ModificableImpl;
//# sourceMappingURL=ModificableImpl.class.js.map