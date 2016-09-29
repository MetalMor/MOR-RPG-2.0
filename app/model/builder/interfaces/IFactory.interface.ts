'use strict';
import {IBuilder} from "./IBuilder.interface";
import {AbstractGameEntityBuilder} from "../classes/abstract/AbstractGameEntityBuilder.class";
/**
 * Created by becari on 29/09/2016.
 */

export interface IFactory<B extends AbstractGameEntityBuilder> {
    create(): B;
}