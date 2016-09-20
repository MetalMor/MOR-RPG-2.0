'use strict';
import {IStatModificatorSource} from "../../interfaces/IStatModificatorSource.interface";
import {AbstractStatModificator} from "./AbstractStatModificator.class";
import {AbstractCharacter} from "../../../entities/classes/abstract/AbstractCharacter.class";
import {IModificable} from "../../interfaces/IModificable.interface";
import {SingletonCharacter} from "../../../entities/classes/implementation/SingletonCharacter.class";
import {IStatModificator} from "../../interfaces/IStatModificator.interface";
import {Arrays} from "../../../util/classes/Arrays.class";
import {RegularDataField} from "../../../fields/classes/implementation/RegularDataField.class";
import {Util} from "../../../util/classes/Util.class";
import {AbstractGameEntity} from "../../../entities/classes/abstract/AbstractGameEntity.class";
import {IField} from "../../../fields/interfaces/IField.interface";
import {AbstractGrantedStatModificator} from "./AbstractGrantedStatModificator.class";
import {IGrantedStatModificator} from "../../interfaces/IGrantedStatModificator.interface";
/**
 * Created by Mor on 09/09/2016.
 */
export abstract class AbstractStatModificatorSource extends AbstractGameEntity implements IStatModificatorSource {
    _grants: IGrantedStatModificator[];
    _owner: IStatModificatorSource;

    constructor(obj?: AbstractStatModificatorSource) {
        super(obj);
        this.grants = obj && obj.grants || new Array<IGrantedStatModificator>();
        this.owner = obj && obj.owner || null;
    }

    modify(_char: AbstractCharacter) {
        var mods: IGrantedStatModificator[] = this.grants,
            modificable: IModificable;
        mods.forEach(function(m) {
            modificable = <IModificable> _char.get((<AbstractGrantedStatModificator> m).modifies);
            if(!Util.isUndefined(modificable)) {
                (<AbstractGrantedStatModificator> m).source = this.owner;
                modificable.addMod(m);
            }
        });
    }
    unleash() {
        var mods = this.grants,
            char = SingletonCharacter.instance,
            modificable: IModificable;
        mods.forEach(function(m) {
            modificable = <IModificable> char.get((<AbstractGrantedStatModificator> m).modifies);
            modificable.removeMod(m);
        });
    }
    onAppend(_parent: IField) {
        this.owner = <IStatModificatorSource> _parent;
    }
    onRemove(_parent: IField) {
        this.unleash();
    }
    addMod(_mod: IStatModificator) {
        return Arrays.add(this.grants, _mod);
    }
    removeMod(_mod: IStatModificator) {
        return Arrays.remove(this.grants, _mod);
    }
    getMod(_mod: IStatModificator) {
        return <IStatModificator> Arrays.get(this.grants, _mod);
    }

    get grants(): IGrantedStatModificator[] {
        return this._grants;
    }
    set grants(_grants: IGrantedStatModificator[]) {
        this._grants = _grants;
    }
    get owner(): IStatModificatorSource {
        return this._owner;
    }
    set owner(_owner: IStatModificatorSource) {
        this._owner = _owner;
    }
}