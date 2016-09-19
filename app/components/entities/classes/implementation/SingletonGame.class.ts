'use strict';
import {Constants} from "../../../util/classes/Constants.class";
import {AbstractGame} from "../abstract/AbstractGame.class";
/**
 * Created by becari on 31/08/2016.
 */
export class SingletonGame extends AbstractGame {
    static _instance: SingletonGame; // <-- esto hace que sea un singleton

    constructor(obj?: SingletonGame) {
        super(obj);
        if(SingletonGame.instance)
            throw new Error(Constants.Errors.ERR_SINGLETON);
        SingletonGame.instance = this; // <-- auto-referencia del singleton aquí
    }

    static get instance(): SingletonGame {
        return SingletonGame._instance;
    }
    static set instance(_instance: SingletonGame) {
        SingletonGame._instance = _instance;
    }
}