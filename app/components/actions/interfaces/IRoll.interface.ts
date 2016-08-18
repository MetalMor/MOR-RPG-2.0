'use strict';
import {IThrowableRollOperation} from "./IThrowableRollOperation.interface";
/**
 * Created by Mor on 15/08/2016.
 */

export interface IRoll extends IThrowableRollOperation {
    isWin(): boolean;
    isBlunder(): boolean;
}