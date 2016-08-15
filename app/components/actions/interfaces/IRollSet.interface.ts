'use strict';
/**
 * Created by Mor on 15/08/2016.
 */

import { Roll } from 'IRoll.interface';

export interface RollSet extends Roll {
    init(): RollSet;
    validate(): RollSet;
    resolve(): RollSet;
    add(roll: Roll): boolean;
    get(roll: number): Roll;
    remove(roll: Roll | number): boolean;
}