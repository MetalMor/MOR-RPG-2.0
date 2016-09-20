'use strict';
import {IField} from "./IField.interface";
import {IStatModificatorSource} from "../../modificators/interfaces/IStatModificatorSource.interface";
/**
 * Created by Mor on 15/08/2016.
 */
export interface IDataField extends IField, IStatModificatorSource {  }