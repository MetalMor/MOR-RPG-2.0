'use strict';
import {Logger} from "../../../util/classes/Logger.class";
/**
 * Representa una prueba unitaria.
 * Created by becari on 16/09/2016.
 */
export abstract class AbstractTest {
    _title: string;
    _logger: Logger;

    constructor(obj?: AbstractTest) {
        this.title = obj && obj.title || "Untitled Test";
        this.logger = obj && obj.logger || new Logger();
    }

    test() {
        this.logger.log("Running test...");
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