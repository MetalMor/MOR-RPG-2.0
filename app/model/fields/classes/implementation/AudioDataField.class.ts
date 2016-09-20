import {AbstractDataField} from "../abstract/AbstractDataField.class";
import {IAudioDataField} from "../../interfaces/IAudioDataField.interface";
/**
 * Created by becari on 18/08/2016.
 */
export class AudioDataField extends AbstractDataField implements IAudioDataField {
    _value: HTMLAudioElement;
    _time: number;
    _playing: boolean;
    _paused: boolean;

    constructor(obj?: AudioDataField) {
        super(obj);
        this.value = obj && obj.value || new Audio();
        this.time = obj && obj.time || 0;
        this.playing = obj && obj.playing || false;
        this.paused = obj && obj.paused || true;
        this.value.addEventListener('ended', (ev: UIEvent) => this.time = 0);
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

    play(): void {
        if(!this.playing || (this.paused && this.playing)) {
            this.value.currentTime = this.time;
            this.value.play();
            this.playing = true;
            this.paused = false;
        }
    }
    pause(): void {
        if(this.playing && !this.paused) {
            this.time = this.value.currentTime;
            this.value.pause();
            this.paused = true;
        }
    }
    stop(): void {
        if(this.playing) {
            this.value.load();
            this.time = this.value.currentTime = 0;
            this.value.pause();
            this.playing = false;
        }
    }
}