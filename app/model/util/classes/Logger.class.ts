'use strict';
import {Util} from "./Util.class";
import {AbstractGameEntity} from "../../entities/classes/abstract/AbstractGameEntity.class";
/**
 * Created by Mor on 15/09/2016.
 */
export class Logger extends AbstractGameEntity {
    static _enabled: boolean = false;
    _source: string;

    constructor(obj?: Logger) {
        super(obj);
    }

    static on() {
        var message: string = "Logger enabled";
        console.log(Logger.message(Util.getCurrentDate(), message));
        Logger.enabled = true;
    }
    static off() {
        var message: string = "Logger disabled";
        console.log(Logger.message(Util.getCurrentDate(), message));
        Logger.enabled = false;
    }
    private static message(_dateString: string, _message: string, _source?: string): string {
        return _dateString + " [" + (_source || "logger") + "] -> " + _message;
    }
    log(_message: string) {
        console.log(Logger.message(Util.getCurrentDate(), _message, this.name));
    }

    private static get enabled(): boolean {
        return Logger._enabled;
    }
    private static set enabled(_enabled: boolean) {
        Logger._enabled = _enabled;
    }
}