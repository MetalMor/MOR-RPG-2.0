"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractDataField_class_1 = require("../abstract/AbstractDataField.class");
/**
 * Created by becari on 18/08/2016.
 */
var AudioDataField = (function (_super) {
    __extends(AudioDataField, _super);
    function AudioDataField(obj) {
        var _this = this;
        _super.call(this, obj);
        this.value = obj && obj.value || new Audio();
        this.time = obj && obj.time || 0;
        this.playing = obj && obj.playing || false;
        this.paused = obj && obj.paused || true;
        this.value.addEventListener('ended', function (ev) { return _this.time = 0; });
    }
    Object.defineProperty(AudioDataField.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (_value) {
            this._value = _value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioDataField.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (_time) {
            this._time = _time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioDataField.prototype, "playing", {
        get: function () {
            return this._playing;
        },
        set: function (_playing) {
            this._playing = _playing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioDataField.prototype, "paused", {
        get: function () {
            return this._paused;
        },
        set: function (_paused) {
            this._paused = _paused;
        },
        enumerable: true,
        configurable: true
    });
    AudioDataField.prototype.play = function () {
        if (!this.playing || (this.paused && this.playing)) {
            this.value.currentTime = this.time;
            this.value.play();
            this.playing = true;
            this.paused = false;
        }
    };
    AudioDataField.prototype.pause = function () {
        if (this.playing && !this.paused) {
            this.time = this.value.currentTime;
            this.value.pause();
            this.paused = true;
        }
    };
    AudioDataField.prototype.stop = function () {
        if (this.playing) {
            this.value.load();
            this.time = this.value.currentTime = 0;
            this.value.pause();
            this.playing = false;
        }
    };
    return AudioDataField;
}(AbstractDataField_class_1.AbstractDataField));
exports.AudioDataField = AudioDataField;
//# sourceMappingURL=AudioDataField.class.js.map