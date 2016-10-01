'use strict';
import {Constants} from "../modules/Constants.module";
import {Util} from "./Util.class";
import {IBuilder} from "../../builder/interfaces/IBuilder.interface";
/**
 * Created by Mor on 28/09/2016.
 */
export class Builders {
    static create<T>(_builderType: {new (obj?: IBuilder<T>): IBuilder<T>}, _props: Object): T {
        var _builder: IBuilder<T> = new _builderType(),
            setter: string;
        for(name in _props) {
            setter = 'set'+Util.capitalizeFirst(name);
            if (_builder[setter] != null) _builder[setter](_props[name]);
            else throw new Error(Constants.Errors.ERR_UNDEFINED_PROPERTY(name));
        }
        return _builder.build();
    }
}