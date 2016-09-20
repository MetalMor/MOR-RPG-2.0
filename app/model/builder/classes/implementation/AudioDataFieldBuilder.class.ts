'use strict';
import {AbstractDataFieldBuilder} from "../abstract/AbstractDataFieldBuilder.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {AudioDataField} from "../../../fields/classes/implementation/AudioDataField.class";
/**
 * Created by becari on 14/09/2016.
 */
export class AudioDataFieldBuilder extends AbstractDataFieldBuilder implements IBuilder<AudioDataField> {
    _value: HTMLAudioElement;
    _time: number;
    _playing: boolean;
    _paused: boolean;

    constructor(obj?: AudioDataFieldBuilder) {
        super(obj);
        this.value = obj && obj.value || new Audio();
        this.time = obj && obj.time || 0;
        this.playing = obj && obj.playing || false;
        this.paused = obj && obj.paused || true;
        this.value.addEventListener('ended', (ev: UIEvent) => this.time = 0);
    }

    setValue(_value: HTMLAudioElement): AudioDataFieldBuilder {
        this.value = _value;
        return this;
    }
    setTime(_time: number): AudioDataFieldBuilder {
        this.time = _time;
        return this;
    }
    setPlaying(_playing: boolean): AudioDataFieldBuilder {
        this.playing = _playing;
        return this;
    }
    setPaused(_paused: boolean): AudioDataFieldBuilder {
        this.paused = _paused;
        return this;
    }
    build(): AudioDataField {
        var ret: AudioDataField = new AudioDataField(<AudioDataField> super.build());
        ret.value = this.value;
        ret.time = this.time;
        ret.playing = this.playing;
        ret.paused = this.paused;
        return ret;
    }

    get value(): HTMLAudioElement {
        return this._value;
    }
    set value(_value: HTMLAudioElement) {
        this._value = _value;
    }
    get time(): number {
        return this._time;
    }
    set time(_time: number) {
        this._time = _time;
    }
    get playing(): boolean {
        return this._playing;
    }
    set playing(_playing: boolean) {
        this._playing = _playing;
    }
    get paused(): boolean {
        return this._paused;
    }
    set paused(_paused: boolean) {
        this._paused = _paused;
    }
}