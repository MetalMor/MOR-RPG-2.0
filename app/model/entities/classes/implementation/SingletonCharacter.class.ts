'use strict';
import {AbstractCharacter} from "../abstract/AbstractCharacter.class";
import {Constants} from "../../../util/modules/Constants.module";
/**
 * Created by Mor on 20/08/2016.
 */
export class SingletonCharacter extends AbstractCharacter {
    static _instance: SingletonCharacter; // <-- esto hace que sea un singleton

    constructor(obj?: SingletonCharacter) {
        super(obj);
        if(SingletonCharacter.instance)
            throw new Error(Constants.Errors.ERR_SINGLETON);
        SingletonCharacter.instance = this; // <-- auto-referencia del singleton aquí
    }

    static get instance(): SingletonCharacter {
        return SingletonCharacter._instance;
    }
    static set instance(_instance: SingletonCharacter) {
        SingletonCharacter._instance = _instance;
    }
}