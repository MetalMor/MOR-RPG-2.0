'use strict';
import {AbstractBuilder} from "../../builder/classes/abstract/AbstractBuilder.class";
import {Constants} from "../modules/Constants.module";
import {Util} from "./Util.class";
import {IBuilder} from "../../builder/interfaces/IBuilder.interface";
import {AbstractGameEntity} from "../../entities/classes/abstract/AbstractGameEntity.class";
import {AbstractIndexedGameEntity} from "../../entities/classes/abstract/AbstractIndexedGameEntity.class";
import * as PublicBuilders from "../../builder/modules/PublicBuilders.namespace";
/**
 * Created by Mor on 28/09/2016.
 */
export class Builders {
    static create<T extends AbstractGameEntity>(_builderType: IConstructor<T>, _props: any): T {
        var _builder: IBuilder<T>;
        //_builder = Util.getBuilderType(_builderType).call(_builderType, _props);
        _builderType = PublicBuilders[_builderType.name];
        _builder = _builderType.call(_builderType, _props);
        /*for(name in _props) {
            setter = 'set'+Util.capitalizeFirst(name);
            if (_builder[setter] != null) _builder[setter](_props[name]);
            else throw new Error(Constants.Errors.ERR_UNDEFINED_PROPERTY(name));
        }*/
        return _builder.build();
    }
}