'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractGame_class_1 = require("../abstract/AbstractGame.class");
/**
 * Created by Mor on 16/09/2016.
 */
var GameImpl = (function (_super) {
    __extends(GameImpl, _super);
    function GameImpl(obj) {
        _super.call(this, obj);
    }
    return GameImpl;
}(AbstractGame_class_1.AbstractGame));
exports.GameImpl = GameImpl;
//# sourceMappingURL=GameImpl.class.js.map