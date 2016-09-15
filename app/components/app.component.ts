'use strict';
import {Component} from '@angular/core';
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
    private _visible: number;
    private _buttonText: string[];

    public constructor() {
        var buttonText: string[] = [];
        this.title = "Prueba Angular 2";
        this.visible = 0;
        buttonText[0] = "Show";
        buttonText[1] = "Hide";
        this.buttonText = buttonText;
    }

    public switchText(): void {
        this.visible = this.visible === 0 ? 1 : 0;
    }

    public getButtonText(): string {
        return this.buttonText[this.visible];
    }

    public get title(): string {
        return this._title;
    }
    public set title(title: string) {
        this._title = title;
    }

    public get visible(): number {
        return this._visible;
    }
    public set visible(visible: number) {
        this._visible = visible;
    }

    public get buttonText(): string[] {
        return this._buttonText;
    }
    public set buttonText(buttonText: string[]) {
        this._buttonText = buttonText;
    }
}