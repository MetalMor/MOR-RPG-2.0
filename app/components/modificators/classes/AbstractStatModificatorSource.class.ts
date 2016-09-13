'use strict';
import {IStatModificatorSource} from "../interfaces/IStatModificatorSource.interface";
import {AbstractStatModificator} from "./AbstractStatModificator.class";
import {AbstractCharacter} from "../../entities/classes/AbstractCharacter.class";
import {IModificable} from "../interfaces/IModificable.interface";
import {SingletonCharacter} from "../../entities/classes/SingletonCharacter.class";
import {IStatModificator} from "../interfaces/IStatModificator.interface";
import {Arrays} from "../../util/classes/Arrays.class";
import {RegularDataField} from "../../fields/classes/RegularDataField.class";
import {Util} from "../../util/classes/Util.class";
import {AbstractGameEntity} from "../../entities/classes/AbstractGameEntity.class";
import {IField} from "../../fields/interfaces/IField.interface";
/**
 * Created by Mor on 09/09/2016.
 */
export abstract class AbstractStatModificatorSource extends AbstractGameEntity implements IStatModificatorSource {
    _grants: IStatModificator[];
    _owner: IStatModificatorSource;

    constructor(obj?: AbstractStatModificatorSource) {
        super(obj);
        this.grants = obj && obj.grants || new Array<IStatModificator>();
        this.owner = obj && obj.owner || new RegularDataField();
    }

    modify(_char: AbstractCharacter) {
        var mods = this.grants,
            modificable: IModificable;
        mods.forEach(function(m) {
            modificable = <IModificable> _char.get(m.modifies);
            if(!Util.isUndefined(modificable)) {
                m.source = this.owner;
                modificable.addMod(m);
            }
        });
    }
    unleash() {
        var mods = this.grants,
            char = SingletonCharacter.instance,
            modificable: IModificable;
        mods.forEach(function(m) {
            modificable = <IModificable> char.get(m.modifies);
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

    get grants(): IStatModificator[] {
        return this._grants;
    }
    set grants(_grants: IStatModificator[]) {
        this._grants = _grants;
    }
    get owner(): IStatModificatorSource {
        return this._owner;
    }
    set owner(_owner: IStatModificatorSource) {
        this._owner = _owner;
    }
}