'use strict';
import {AbstractUser} from "../../../entities/classes/AbstractUser.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {AbstractIndexedBuilder} from "./AbstractIndexedBuilder.class";
/**
 * Created by becari on 12/09/2016.
 */
export abstract class AbstractUserBuilder extends AbstractIndexedBuilder implements IBuilder<AbstractUser> {
    _passwd: string;

    constructor(obj?: AbstractUserBuilder) {
        super(obj);
        this.passwd = obj && obj.passwd || "";
    }

    build(): AbstractUser {
        var ret: AbstractUser = <AbstractUser> super.build();
        ret.passwd = this.passwd;
        return ret;
    }
    setPasswd(_passwd: string): AbstractUserBuilder {
        this.passwd = _passwd;
        return this;
    }

    get passwd(): string {
        return this._passwd;
    }
    set passwd(_passwd: string) {
        this._passwd = _passwd;
    }
}