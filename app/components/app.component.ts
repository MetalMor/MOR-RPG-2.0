'use strict';
import {PruebaInterface} from "./prueba.interface";
import {Component} from '@angular/core';
/**
 * Prueba componente de Angular 2
 * Created by becari on 18/07/2016.
 */


@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html'
})
export class AppComponent implements PruebaInterface {
    private _title: string;
    private _visible: boolean;
    private _buttonText: string[];

    public constructor() {
        var buttonText: string[] = [];
        this.title = "Prueba Angular 2";
        this.visible = false;
        buttonText[true] = "Hide";
        buttonText[false] = "Show";
        this.buttonText = buttonText;
    }

    public switchText(): void {
        this.visible = !this.visible;
    }

    public getButtonText(): string {
        return this.buttonText[this.visible]
    }

    public get title(): string {
        return this._title;
    }
    public set title(title: string) {
        this._title = title;
    }

    public get visible(): boolean {
        return this._visible;
    }
    public set visible(visible: boolean) {
        this._visible = visible;
    }

    public get buttonText(): string[] {
        return this._buttonText;
    }
    public set buttonText(buttonText: string[]) {
        this._buttonText = buttonText;
    }
}