'use strict';
import {AbstractGameEntity} from "../../entities/classes/AbstractGameEntity.class";
import {IRollOperation} from "../interfaces/IRollOperation.interface";
import {IStat} from "../../fields/interfaces/IStat.interface";
/**
 * Clase abstracta que representa una operación de dados.
 * Created by becari on 18/08/2016.
 */
export abstract class AbstractRollOperation extends AbstractGameEntity implements IRollOperation {
    _label: string;
    _implies: IStat[];
    _dif: number;

    constructor(obj?: AbstractRollOperation) {
        super(obj);
        this.dif = obj && obj.dif || 6;
        this.label = obj && obj.label || "unnamed";
        this.implies = obj && obj.implies || new Array<IStat>();
    }

    get dif(): number {
        return this._dif;
    }
    set dif(_dif: number) {
        this._dif = _dif;
    }
    get label(): string {
        return this._label;
    }
    set label(_label: string) {
        this._label = _label;
    }
    get implies(): IStat[] {
        return this._implies;
    }
    set implies(_implies: IStat[]) {
        this._implies = _implies;
    }

}