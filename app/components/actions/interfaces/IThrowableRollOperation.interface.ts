'use strict';
import {IRollOperation} from "./IRollOperation.interface";
/**
 * Created by becari on 18/08/2016.
 */
export interface IThrowableRollOperation extends IRollOperation {
    throwDices(): IThrowableRollOperation;
}