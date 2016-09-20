'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractDataFieldBuilder_class_1 = require("../abstract/AbstractDataFieldBuilder.class");
var AudioDataField_class_1 = require("../../../fields/classes/implementation/AudioDataField.class");
/**
 * Created by becari on 14/09/2016.
 */
var AudioDataFieldBuilder = (function (_super) {
    __extends(AudioDataFieldBuilder, _super);
    function AudioDataFieldBuilder(obj) {
        var _this = this;
        _super.call(this, obj);
        this.value = obj && obj.value || new Audio();
        this.time = obj && obj.time || 0;
        this.playing = obj && obj.playing || false;
        this.paused = obj && obj.paused || true;
        this.value.addEventListener('ended', function (ev) { return _this.time = 0; });
    }
    AudioDataFieldBuilder.prototype.setValue = function (_value) {
        this.value = _value;
        return this;
    };
    AudioDataFieldBuilder.prototype.setTime = function (_time) {
        this.time = _time;
        return this;
    };
    AudioDataFieldBuilder.prototype.setPlaying = function (_playing) {
        this.playing = _playing;
        return this;
    };
    AudioDataFieldBuilder.prototype.setPaused = function (_paused) {
        this.paused = _paused;
        return this;
    };
    AudioDataFieldBuilder.prototype.build = function () {
        var ret = new AudioDataField_class_1.AudioDataField(_super.prototype.build.call(this));
        ret.value = this.value;
        ret.time = this.time;
        ret.playing = this.playing;
        ret.paused = this.paused;
        return ret;
    };
    Object.defineProperty(AudioDataFieldBuilder.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (_value) {
            this._value = _value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioDataFieldBuilder.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (_time) {
            this._time = _time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioDataFieldBuilder.prototype, "playing", {
        get: function () {
            return this._playing;
        },
        set: function (_playing) {
            this._playing = _playing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioDataFieldBuilder.prototype, "paused", {
        get: function () {
            return this._paused;
        },
        set: function (_paused) {
            this._paused = _paused;
        },
        enumerable: true,
        configurable: true
    });
    return AudioDataFieldBuilder;
}(AbstractDataFieldBuilder_class_1.AbstractDataFieldBuilder));
exports.AudioDataFieldBuilder = AudioDataFieldBuilder;
//# sourceMappingURL=AudioDataFieldBuilder.class.js.map