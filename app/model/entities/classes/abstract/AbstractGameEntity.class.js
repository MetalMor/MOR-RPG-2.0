'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
/**
 * Created by Mor on 15/08/2016.
 */
var AbstractGameEntity = (function (_super) {
    __extends(AbstractGameEntity, _super);
    function AbstractGameEntity(obj) {
        _super.call(this, obj);
        var cast = obj;
        this.name = cast && cast.name || "unnamed_" + (new Date()).getTime();
    }
    Object.defineProperty(AbstractGameEntity.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (_name) {
            this._name = _name;
        },
        enumerable: true,
        configurable: true
    });
    AbstractGameEntity.prototype.toString = function () {
        return this.name;
    };
    AbstractGameEntity.prototype.equals = function (obj) {
        if (!obj)
            return false;
        var other = obj;
        if (!other.name)
            return false;
        return other.name === this.name;
    };
    AbstractGameEntity = __decorate([
        core_1.Component({
            selector: 'game-entity',
            templateUrl: 'app/templates/GameEntity.component.html'
        }), 
        __metadata('design:paramtypes', [Object])
    ], AbstractGameEntity);
    return AbstractGameEntity;
}(Object));
exports.AbstractGameEntity = AbstractGameEntity;
//# sourceMappingURL=AbstractGameEntity.class.js.map