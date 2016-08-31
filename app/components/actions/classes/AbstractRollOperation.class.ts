'use strict';
import {GameEntity} from "../../entities/classes/GameEntity.class";
import {IRollOperation} from "../interfaces/IRollOperation.interface";
/**
 * Clase abstracta que representa una operación de dados.
 * Created by becari on 18/08/2016.
 */
export abstract class AbstractRollOperation extends GameEntity implements IRollOperation {
    _label: string;
    _dif: number;

    constructor(obj?: AbstractRollOperation) {
        super(obj);
        this.dif = obj && obj.dif || 6;
        this.label = obj && obj.label || "unnamed";
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

}