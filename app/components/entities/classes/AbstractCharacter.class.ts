import {IndexedGameEntity} from "./IndexedGameEntity.class";
import {ICharacter} from "../interfaces/ICharacter.interface";
import {IIndexedGameEntity} from "../interfaces/IIndexedGameEntity.interface";
import {StatFieldSet} from "../../fields/classes/StatFieldSet.class";
import {IndexedGameEntityImpl} from "./IndexedGameEntityImpl.class";
import {IField} from "../../fields/interfaces/IField.interface";
import {Timer} from "../../util/classes/Timer.class";
/**
 * Created by becari on 18/08/2016.
 */
export abstract class AbstractCharacter extends StatFieldSet implements ICharacter {
    _inherits: IIndexedGameEntity;

    constructor(obj?: AbstractCharacter) {
        super(obj);
        this.inherits = obj && obj.inherits || new IndexedGameEntityImpl();
    }

    get id(): number {
        return (<IndexedGameEntity> this.inherits).id;
    }
    set id(_id: number) {
        (<IndexedGameEntity> this.inherits).id = _id;
    }
    get inherits(): IIndexedGameEntity {
        return this._inherits;
    }
    set inherits(_inherits: IIndexedGameEntity) {
        this._inherits = _inherits;
    }

    get(_field: IField) {
        var timer: Timer = new Timer(),
            ret: IField;
        timer.play();
        ret = super.get(_field);
        timer.stop(true);
        return ret;
    }
    set(_field: IField): boolean {
        var timer: Timer = new Timer(),
            ret: boolean;
        timer.play();
        ret = super.set(_field);
        timer.stop(true);
        return ret;
    }
    add(_field: IField): boolean {
        var timer: Timer = new Timer(),
            ret: boolean;
        timer.play();
        ret = super.add(_field);
        timer.stop(true);
        return ret;
    }
    remove(_field: IField): boolean {
        var timer: Timer = new Timer(),
            ret: boolean;
        timer.play();
        ret = super.remove(_field);
        timer.stop(true);
        return ret;
    }

    toString(): string {
        return this.inherits.toString();
    }
    equals(obj: AbstractCharacter): boolean {
        return this.inherits.equals(obj);
    }
}