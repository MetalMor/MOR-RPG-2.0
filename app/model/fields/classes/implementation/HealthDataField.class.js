'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NumericDataField_class_1 = require("./NumericDataField.class");
/**
 * Created by Mor on 17/08/2016.
 */
var HealthDataField = (function (_super) {
    __extends(HealthDataField, _super);
    function HealthDataField(obj) {
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
    Object.defineProperty(HealthDataField.prototype, "labels", {
        get: function () {
            return this._labels;
        },
        set: function (_labels) {
            this._labels = _labels;
        },
        enumerable: true,
        configurable: true
    });
    HealthDataField.prototype.toString = function () {
        return this.labels[this.value];
    };
    return HealthDataField;
}(NumericDataField_class_1.NumericDataField));
exports.HealthDataField = HealthDataField;
//# sourceMappingURL=HealthDataField.class.js.map