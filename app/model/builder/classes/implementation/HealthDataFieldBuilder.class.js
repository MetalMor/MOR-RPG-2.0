'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HealthDataField_class_1 = require("../../../fields/classes/implementation/HealthDataField.class");
var NumericDataFieldBuilder_class_1 = require("./NumericDataFieldBuilder.class");
/**
 * Created by becari on 14/09/2016.
 */
var HealthDataFieldBuilder = (function (_super) {
    __extends(HealthDataFieldBuilder, _super);
    function HealthDataFieldBuilder(obj) {
        _super.call(this, obj);
        this.labels = obj && obj.labels ||
            [
                "OK",
                "Magullado",
                "Lastimado",
                "Herido",
                "Malherido",
                "Tullido"
            ];
    }
    HealthDataFieldBuilder.prototype.setLabels = function (_labels) {
        this.labels = _labels;
        return this;
    };
    HealthDataFieldBuilder.prototype.build = function () {
        var ret = new HealthDataField_class_1.HealthDataField(_super.prototype.build.call(this));
        ret.labels = this.labels;
        return ret;
    };
    Object.defineProperty(HealthDataFieldBuilder.prototype, "labels", {
        get: function () {
            return this._labels;
        },
        set: function (_labels) {
            this._labels = _labels;
        },
        enumerable: true,
        configurable: true
    });
    return HealthDataFieldBuilder;
}(NumericDataFieldBuilder_class_1.NumericDataFieldBuilder));
exports.HealthDataFieldBuilder = HealthDataFieldBuilder;
//# sourceMappingURL=HealthDataFieldBuilder.class.js.map