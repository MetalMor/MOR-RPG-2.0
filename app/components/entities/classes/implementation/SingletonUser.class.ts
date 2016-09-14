'use strict';
import {AbstractUser} from "../abstract/AbstractUser.class";
import {Constants} from "../../../util/classes/Constants.class";
/**
 * Created by becari on 31/08/2016.
 */
export class SingletonUser extends AbstractUser {
    static _instance: SingletonUser; // <-- esto hace que sea un singleton

    constructor(obj?: SingletonUser) {
        super(obj);
        if(SingletonUser.instance)
            throw new Error(Constants.ERR_SINGLETON);
        SingletonUser.instance = this; // <-- auto-referencia del singleton aquí
    }

    static get instance(): SingletonUser {
        return SingletonUser._instance;
    }
    static set instance(_instance: SingletonUser) {
        SingletonUser._instance = _instance;
    }
}