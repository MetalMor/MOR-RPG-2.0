'use strict';
import {UserProperty} from "./IUserProperty.interface";
/**
 * Created by Mor on 15/08/2016.
 */
export interface SharedUserProperty extends UserProperty {
    getCurrentUser(): User;
}