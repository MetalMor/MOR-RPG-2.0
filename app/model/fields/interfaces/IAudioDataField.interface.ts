'use strict';
import {IDataField} from "./IDataField.interface";
/**
 * Created by becari on 18/08/2016.
 */
export interface IAudioDataField extends IDataField {
    _value: HTMLAudioElement;
    _time: number;
    _playing: boolean;
    _paused: boolean;
    play(): void;
    pause(): void;
    stop(): void;
}