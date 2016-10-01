'use strict';
import {Log} from "../modules/Log.module";
import Logger = Log.Logger;
import LoggerBuilder = Log.LoggerBuilder;
/**
 * Clase que representa un temporizador para controlar los tiempos al debugar.
 * Created by Mor on 25/08/2016.
 */
export class Timer {
    _logger: Logger;
    _time: number;
    _startTime: number;
    _endTime: number;
    _on: boolean;

    constructor(obj?: Timer) {
        this.logger = obj && obj.logger || (new LoggerBuilder()).setSource("timer").build();
        this.time = obj && obj.time || 0;
        this.startTime = obj && obj.startTime || 0;
        this.endTime = obj && obj.endTime || -1;
        this.on = obj && obj.on || false;
    }

    /**
     * Pone en marcha el temporizador.
     */
    play() {
        if(!this.on) {
            this.on = true;
            this.startTime = Timer.currentTimeInMillis();
            this.endTime = -1;
        }
    }

    /**
     * Detiene el temporizador y retorna el tiempo en milisegundos que ha transcurrido desde que se puso en marcha.
     * Si el parámetro <code>log</code> vale true, el mensaje del tiempo transcurrido aparecerá en la consola.
     * @param log
     * @returns {number}
     */
    stop(log?: boolean): number {
        if(this.on) {
            this.endTime = Timer.currentTimeInMillis();
            if(log) this.logger.log("Time elapsed: " + (this.endTime - this.startTime)/1000);
            this.on = false;
            this.startTime = 0;
            return this.endTime;
        } else if(log) this.logger.log("Timer off");
        return -1;
    }

    /**
     * Retorna la fecha actual en milisegundos.
     * @returns {number}
     */
    static currentTimeInMillis(): number {
        return (new Date()).getTime();
    }

    get logger(): Logger {
        return this._logger;
    }
    set logger(_logger: Logger) {
        this._logger = _logger;
    }
    get time(): number {
        return this._time;
    }
    set time(_time: number) {
        this._time = _time;
    }
    get startTime(): number {
        return this._startTime;
    }
    set startTime(_startTime: number) {
        this._startTime = _startTime;
    }
    get endTime(): number {
        return this._endTime;
    }
    set endTime(_endTime: number) {
        this._endTime = _endTime;
    }
    get on(): boolean {
        return this._on;
    }
    set on(_on: boolean) {
        this._on = _on;
    }
}