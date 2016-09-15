'use strict';
import {Logger} from "../../../util/classes/Logger.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {AbstractGameEntityBuilder} from "./AbstractGameEntityBuilder.class";
/**
 * Created by Mor on 15/09/2016.
 */
export abstract class AbstractLoggerBuilder extends AbstractGameEntityBuilder implements IBuilder<Logger> {

    constructor(obj?: AbstractLoggerBuilder) {
        super(obj);
    }

    build(): Logger {
        return new Logger(<Logger> super.build());
    }
}