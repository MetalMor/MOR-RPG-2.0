'use strict';
import {AbstractWrapperFieldBuilder} from "../abstract/AbstractWrapperFieldBuilder.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {WrapperFieldImpl} from "../../../fields/classes/implementation/WrapperFieldImpl.class";
/**
 * Created by becari on 14/09/2016.
 */
export class WrapperFieldBuilder extends AbstractWrapperFieldBuilder {
    constructor(obj?: WrapperFieldBuilder) {
        super(obj);
    }
}