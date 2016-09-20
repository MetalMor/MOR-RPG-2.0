'use strict';
import {Logger} from "../../../../model/util/classes/Logger.class";
import {OnDestroy, OnInit} from "@angular/core";
/**
 * Representa una prueba unitaria.
 * Created by becari on 16/09/2016.
 */
export abstract class AbstractTest implements OnInit, OnDestroy {
    _title: string;
    _logger: Logger;

    constructor(obj?: AbstractTest) {
        this.title = obj && obj.title || "Untitled Test";
        this.logger = obj && obj.logger || new Logger();
    }

    test() {
        this.logger.log("Running test...");
    }
    ngOnInit() {
        this.log("Initializing component");
    }
    ngOnDestroy() {
        this.log("Destroying component");
    }
    log(_msg: string) {
        this.logger.log(_msg);
    }

    get title(): string {
        return this._title;
    }
    set title(_title: string) {
        this._title = _title;
    }
    get logger(): Logger {
        return this._logger;
    }
    set logger(_logger: Logger) {
        this._logger = _logger;
    }
}