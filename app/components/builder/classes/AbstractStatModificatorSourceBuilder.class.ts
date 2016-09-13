'use strict';
import {AbstractStatModificatorSource} from "../../modificators/classes/AbstractStatModificatorSource.class";
import {IBuilder} from "../interfaces/IBuilder.interface";
import {AbstractBuilder} from "./AbstractBuilder.class";
import {AbstractStatModificator} from "../../modificators/classes/AbstractStatModificator.class";
import {IStatModificatorSource} from "../../modificators/interfaces/IStatModificatorSource.interface";
import {StatModificatorSourceImpl} from "../../modificators/classes/StatModificatorSourceImpl.class";
import {IStatModificator} from "../../modificators/interfaces/IStatModificator.interface";
/**
 * Created by becari on 13/09/2016.
 */
export abstract class AbstractStatModificatorSourceBuilder extends AbstractBuilder implements IBuilder<AbstractStatModificatorSource> {
    _grants: IStatModificator[];
    _owner: IStatModificatorSource;

    constructor(obj?: AbstractStatModificatorSourceBuilder) {
        super(obj);
        this.grants = obj && obj.grants || new Array<IStatModificator>();
        this.owner = obj && obj.owner || new StatModificatorSourceImpl();
    }

    setGrants(_grants: IStatModificator[]): AbstractStatModificatorSourceBuilder {
        this.grants = _grants;
        return this;
    }
    setOwner(_owner: IStatModificatorSource): AbstractStatModificatorSourceBuilder {
        this.owner = _owner;
        return this;
    }
    build(): AbstractStatModificatorSource {
        var ret: AbstractStatModificatorSource = <AbstractStatModificatorSource> super.build();
        ret.grants = this.grants;
        ret.owner = this.owner;
        return ret;
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