'use strict';
/**
 * Created by Mor on 15/08/2016.
 */

import { IRoll } from './IRoll.interface';

export interface IRollSet extends IRoll {
    init(): IRollSet;
    validate(): IRollSet;
    resolve(): IRollSet;
    add(_roll: IRoll): boolean;
    get(_roll: IRoll): IRoll;
    remove(_roll: IRoll): boolean;
}