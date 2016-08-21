'use strict';
import {AbstractCharacter} from "./AbstractCharacter.class";
import {Constants} from "../../util/classes/Constants.class";
/**
 * Created by Mor on 20/08/2016.
 */
export class SingletonCharacter extends AbstractCharacter {
    static _instance: SingletonCharacter; // <-- esto hace que sea un singleton

    constructor(obj?: SingletonCharacter) {
        super(obj);
        if(SingletonCharacter.instance)
            throw new Error(Constants.ERR_SINGLETON);
        SingletonCharacter.instance = this; // <-- auto-referencia del singleton aquí
    }

    static get instance(): SingletonCharacter {
        return SingletonCharacter._instance;
    }
    static set instance(_instance: SingletonCharacter) {
        SingletonCharacter._instance = _instance;
    }
}