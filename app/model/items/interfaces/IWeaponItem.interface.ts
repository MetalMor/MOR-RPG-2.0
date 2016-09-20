'use strict';
import {IItem} from "./IItem.interface";
/**
 * Created by Mor on 24/08/2016.
 */
export interface IWeaponItem extends IItem {
    getDamageRolls(): number;
}