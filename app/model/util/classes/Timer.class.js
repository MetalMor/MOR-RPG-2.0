'use strict';
var Log_module_1 = require("../modules/Log.module");
var LoggerBuilder = Log_module_1.Log.LoggerBuilder;
/**
 * Clase que representa un temporizador para controlar los tiempos al debugar.
 * Created by Mor on 25/08/2016.
 */
var Timer = (function () {
    function Timer(obj) {
        this.logger = obj && obj.logger || (new LoggerBuilder()).setSource("timer").build();
        this.time = obj && obj.time || 0;
        this.startTime = obj && obj.startTime || 0;
        this.endTime = obj && obj.endTime || -1;
        this.on = obj && obj.on || false;
    }
    /**
     * Pone en marcha el temporizador.
     */
    Timer.prototype.play = function () {
        if (!this.on) {
            this.on = true;
            this.startTime = Timer.currentTimeInMillis();
            this.endTime = -1;
        }
    };
    /**
     * Detiene el temporizador y retorna el tiempo en milisegundos que ha transcurrido desde que se puso en marcha.
     * Si el parámetro <code>log</code> vale true, el mensaje del tiempo transcurrido aparecerá en la consola.
     * @param log
     * @returns {number}
     */
    Timer.prototype.stop = function (log) {
        if (this.on) {
            this.on = false;
            this.startTime = 0;
            this.endTime = Timer.currentTimeInMillis();
            if (log)
                this.logger.log("Time elapsed: " + this.endTime);
            return this.endTime;
        }
        else if (log)
            this.logger.log("Timer off");
        return -1;
    };
    /**
     * Retorna la fecha actual en milisegundos.
     * @returns {number}
     */
    Timer.currentTimeInMillis = function () {
        return (new Date()).getTime();
    };
    Object.defineProperty(Timer.prototype, "logger", {
        get: function () {
            return this._logger;
        },
        set: function (_logger) {
            this._logger = _logger;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (_time) {
            this._time = _time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "startTime", {
        get: function () {
            return this._startTime;
        },
        set: function (_startTime) {
            this._startTime = _startTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "endTime", {
        get: function () {
            return this._endTime;
        },
        set: function (_endTime) {
            this._endTime = _endTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "on", {
        get: function () {
            return this._on;
        },
        set: function (_on) {
            this._on = _on;
        },
        enumerable: true,
        configurable: true
    });
    return Timer;
}());
exports.Timer = Timer;
//# sourceMappingURL=Timer.class.js.map