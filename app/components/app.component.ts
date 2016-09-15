'use strict';
import {Component} from '@angular/core';
import {AbstractGameEntity} from "./entities/classes/abstract/AbstractGameEntity.class";
import {LoggerBuilder} from "./builder/classes/implementation/LoggerBuilder.class";
import {Logger} from "./util/classes/Logger.class";
import {AbstractIndexedGameEntityBuilder} from "./builder/classes/abstract/AbstractIndexedGameEntityBuilder.class";
import {IndexedGameEntityBuilder} from "./builder/classes/implementation/IndexedGameEntityBuilder.class";
import {AbstractIndexedGameEntity} from "./entities/classes/abstract/AbstractIndexedGameEntity.class";
/**
 * Prueba componente de Angular 2
 * Created by becari on 18/07/2016.
 */


@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html'
})
export class AppComponent {
    private _title: string;
    private _show: boolean = false;
    private _testing: AbstractIndexedGameEntity;
    private _logger: Logger;

    public constructor() {
        this.title = "Prueba MOR - RPG";
        this.logger = (<LoggerBuilder> (new LoggerBuilder()).setName("test")).build();
    }

    public test() {
        var builder: AbstractIndexedGameEntityBuilder = new IndexedGameEntityBuilder();
        builder.setName("test");
        this.testing = builder.build();
        this.show = true;
        this.logger.log("Name: " + this.testing.name);
    }

    public get title(): string {
        return this._title;
    }
    public set title(_title: string) {
        this._title = _title;
    }
    public get testing(): AbstractIndexedGameEntity {
        return this._testing;
    }
    public set testing(_testing: AbstractIndexedGameEntity) {
        this._testing = _testing;
    }
    public get show(): boolean {
        return this._show;
    }
    public set show(_show: boolean) {
        this._show = _show;
    }
    public get logger(): Logger {
        return this._logger;
    }
    public set logger(_logger: Logger) {
        this._logger = _logger;
    }
}