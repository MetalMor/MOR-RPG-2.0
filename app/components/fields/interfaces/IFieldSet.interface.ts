'use strict';
import {AbstractField} from "../classes/AbstractField.class";
import {IField} from "./IField";
/**
 * Created by Mor on 15/08/2016.
 */
export interface IFieldSet extends IField {
    get(_field: IField): IField;
    set(_field: IField): boolean;
    add(_field: IField): boolean;
    remove(_field: IField): boolean;
}