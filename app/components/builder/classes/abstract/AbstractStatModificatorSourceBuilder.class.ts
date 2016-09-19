'use strict';
import {AbstractStatModificatorSource} from "../../../modificators/classes/abstract/AbstractStatModificatorSource.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {AbstractGameEntityBuilder} from "./AbstractGameEntityBuilder.class";
import {AbstractStatModificator} from "../../../modificators/classes/abstract/AbstractStatModificator.class";
import {IStatModificatorSource} from "../../../modificators/interfaces/IStatModificatorSource.interface";
import {StatModificatorSourceImpl} from "../../../modificators/classes/implementation/StatModificatorSourceImpl.class";
import {IStatModificator} from "../../../modificators/interfaces/IStatModificator.interface";
import {IGrantedStatModificator} from "../../../modificators/interfaces/IGrantedStatModificator.interface";
/**
 * Created by becari on 13/09/2016.
 */
export abstract class AbstractStatModificatorSourceBuilder extends AbstractGameEntityBuilder implements IBuilder<AbstractStatModificatorSource> {
    _grants: IGrantedStatModificator[];
    _owner: IStatModificatorSource;

    constructor(obj?: AbstractStatModificatorSourceBuilder) {
        super(obj);
        this.grants = obj && obj.grants || new Array<IGrantedStatModificator>();
        this.owner = obj && obj.owner || new StatModificatorSourceImpl();
    }

    setGrants(_grants: IGrantedStatModificator[]): AbstractStatModificatorSourceBuilder {
        this.grants = _grants;
        return this;
    }
    setOwner(_owner: IStatModificatorSource): AbstractStatModificatorSourceBuilder {
        if(!(_owner instanceof AbstractStatModificatorSource)) this.owner = _owner;
        return this;
    }
    build(): AbstractStatModificatorSource {
        var ret: AbstractStatModificatorSource = new StatModificatorSourceImpl(<AbstractStatModificatorSource> super.build());
        ret.grants = this.grants;
        ret.owner = this.owner;
        return ret;
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