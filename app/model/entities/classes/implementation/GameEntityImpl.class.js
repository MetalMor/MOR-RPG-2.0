"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractGameEntity_class_1 = require("../abstract/AbstractGameEntity.class");
/**
 * Created by becari on 18/08/2016.
 */
var GameEntityImpl = (function (_super) {
    __extends(GameEntityImpl, _super);
    function GameEntityImpl(obj) {
        _super.call(this, obj);
    }
    return GameEntityImpl;
}(AbstractGameEntity_class_1.AbstractGameEntity));
exports.GameEntityImpl = GameEntityImpl;
//# sourceMappingURL=GameEntityImpl.class.js.map