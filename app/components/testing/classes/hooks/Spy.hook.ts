'use strict';
import {OnDestroy, OnInit, Optional, SkipSelf, Directive} from "@angular/core";
import {Logger} from "../../../util/classes/Logger.class";
/**
 * Created by becari on 19/09/2016.
 */
@Directive({
    selector: '[spy]'
})
export class SpyDirective implements OnInit, OnDestroy {
    _logger: Logger;

    constructor(@SkipSelf() @Optional() obj?: SpyDirective) {
        this.logger = obj && obj.logger || new Logger();
    }

    ngOnInit() {
        this.log("Calling onInit");
    }
    ngOnDestroy() {
        this.log("Calling onDestroy");
    }
    log(_msg: string) {
        this.logger.log(_msg);
    }

    get logger(): Logger {
        return this._logger;
    }
    set logger(_logger: Logger) {
        this._logger = _logger;
    }
}
