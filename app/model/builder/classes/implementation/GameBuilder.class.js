'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractGameBuilder_1 = require("../abstract/AbstractGameBuilder");
/**
 * Created by becari on 14/09/2016.
 */
var GameBuilder = (function (_super) {
    __extends(GameBuilder, _super);
    function GameBuilder(obj) {
        _super.call(this, obj);
    }
    return GameBuilder;
}(AbstractGameBuilder_1.AbstractGameBuilder));
exports.GameBuilder = GameBuilder;
//# sourceMappingURL=GameBuilder.class.js.map