'use strict';
/**
 * Created by Mor on 15/08/2016.
 */

import { IRoll } from 'IRoll.interface';

export interface IRollSet extends IRoll {
    init(): IRollSet;
    validate(): IRollSet;
    resolve(): IRollSet;
    add(roll: IRoll): boolean;
    get(roll: number): IRoll;
    remove(roll: IRoll | number): boolean;
}