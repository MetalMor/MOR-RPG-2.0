'use strict';
/**
 * Created by Mor on 15/08/2016.
 */

export interface IRoll {
    throwDice(): IRoll;
    isWin(): boolean;
    isBlunder(): boolean;
}