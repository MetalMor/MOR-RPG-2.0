'use strict';
import {IField} from "./IField.interface";
/**
 * Created by Mor on 15/08/2016.
 */
export interface IFieldSet extends IField {
    get(_field: IField): IField;
    set(_field: IField): boolean;
    add(_field: IField): boolean;
    remove(_field: IField): boolean;
}