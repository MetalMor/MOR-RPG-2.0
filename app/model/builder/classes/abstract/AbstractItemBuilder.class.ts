'use strict';
import {AbstractFieldSetBuilder} from "./AbstractFieldSetBuilder.class";
import {AbstractItem} from "../../../items/classes/abstract/AbstractItem.class";
import {IBuilder} from "../../interfaces/IBuilder.interface";
import {IIndexedGameEntity} from "../../../entities/interfaces/IIndexedGameEntity.interface";
import {Hiding} from "../../../items/enumerations/Hiding.enumeration";
import {AbstractIndexedGameEntity} from "../../../entities/classes/abstract/AbstractIndexedGameEntity.class";
import {ItemImpl} from "../../../items/classes/implementation/ItemImpl.class";
import {IndexedGameEntityImpl} from "../../../entities/classes/implementation/IndexedGameEntityImpl.class";
import {IndexedGameEntityBuilder} from "../implementation/IndexedGameEntityBuilder.class";
import {NumericDataFieldBuilder} from "../implementation/NumericDataFieldBuilder.class";
import {NumericDataField} from "../../../fields/classes/implementation/NumericDataField.class";
import {Builders} from "../../../util/classes/Builders.class";
/**
 * Created by becari on 14/09/2016.
 */
export abstract class AbstractItemBuilder extends AbstractFieldSetBuilder implements IBuilder<AbstractItem> {
    _inherits: IIndexedGameEntity;
    _hiding: Hiding;
    _numericDataFieldBuilder: NumericDataFieldBuilder;

    constructor(obj?: AbstractItemBuilder) {
        super(obj);
        this.numericDataFieldBuilder = obj && obj.numericDataFieldBuilder || new NumericDataFieldBuilder();
        this.inherits = obj && obj.inherits || (new IndexedGameEntityBuilder()).build();
        this.hiding = obj && obj.hiding || 3;
    }

    setId(_id: number): AbstractItemBuilder {
        this.id = _id;
        return this;
    }
    setInherits(_inherits: IIndexedGameEntity): AbstractItemBuilder {
        this.inherits = _inherits;
        return this;
    }
    setHiding(_hiding: Hiding): AbstractItemBuilder {
        this.hiding = _hiding;
        return this;
    }
    protected createNumericDataField(_name: string, _value: number): NumericDataField {
        return Builders.create<NumericDataField>
        (NumericDataFieldBuilder,
            {
                name: _name,
                value: _value
            });
    }
    build(): AbstractItem {
        var ret: AbstractItem = new ItemImpl(<AbstractItem> super.build());
        ret.inherits = this.inherits;
        ret.hiding = this.hiding;
        return ret;
    }

    get id(): number {
        return (<AbstractIndexedGameEntity> this.inherits).id;
    }
    set id(_id: number) {
        (<AbstractIndexedGameEntity> this.inherits).id = _id;
    }
    get numericDataFieldBuilder(): NumericDataFieldBuilder {
        return this._numericDataFieldBuilder;
    }
    set numericDataFieldBuilder(_numericDataFieldBuilder: NumericDataFieldBuilder) {
        this._numericDataFieldBuilder = _numericDataFieldBuilder;
    }
    get inherits(): IIndexedGameEntity {
        return this._inherits;
    }
    set inherits(_inherits: IIndexedGameEntity) {
        this._inherits = _inherits;
    }
    get hiding(): Hiding {
        return this._hiding;
    }
    set hiding(_hiding: Hiding) {
        this._hiding = _hiding;
    }
}