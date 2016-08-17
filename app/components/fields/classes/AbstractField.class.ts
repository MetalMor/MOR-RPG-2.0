import {GameEntity} from "../../entities/classes/GameEntity.class";
import {IField} from "../interfaces/IField";
/**
 * Created by becari on 17/08/2016.
 */
export abstract class AbstractField extends GameEntity implements IField {
    _desc: string;
    _enabled: boolean;

    constructor(obj?: IField) {
        super(obj);
        var cast = <AbstractField> obj;
        this.desc = cast && cast.desc || 'default';
        this.enabled = cast && cast.enabled || true;
    }

    get desc(): string {
        return this._desc;
    }
    set desc(_desc: string) {
        this._desc = _desc;
    }

    get enabled(): boolean {
        return this._enabled;
    }
    set enabled(_enabled: boolean) {
        this._enabled = _enabled;
    }
}