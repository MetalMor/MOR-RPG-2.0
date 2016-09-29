'use strict';
import {AbstractBuilder} from "../../builder/classes/abstract/AbstractBuilder.class";
import {Constants} from "../modules/Constants.module";
import {Util} from "./Util.class";
/**
 * Created by Mor on 28/09/2016.
 */
export class Builders {
    static create(_builder: AbstractBuilder, _props: Object): Object {
        var setter: string;
        for(name in _props) {
            setter = 'set'+Util.capitalizeFirst(name);
            if (_builder[setter] != null) _builder[setter](_props[name]);
            else throw new Error(Constants.Errors.ERR_UNDEFINED_PROPERTY(name));
        }
        return _builder.build();
    }
}