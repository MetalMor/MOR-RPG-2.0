'use strict';
import {AbstractGame} from "../../entities/classes/AbstractGame.class";
import {IBuilder} from "../interfaces/IBuilder.interface";
import {AbstractIndexedBuilder} from "./AbstractIndexedBuilder.class";
/**
 * Created by becari on 12/09/2016.
 */
export abstract class AbstractGameBuilder extends AbstractIndexedBuilder implements IBuilder<AbstractGame> {

}