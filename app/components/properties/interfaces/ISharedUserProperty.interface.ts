'use strict';
import {IUserProperty} from "./IUserProperty.interface";
import {AbstractUser} from "../../entities/classes/AbstractUser.class";
/**
 * Created by Mor on 15/08/2016.
 */
export interface ISharedUserProperty extends IUserProperty {
    getCurrentUser(): AbstractUser;
}