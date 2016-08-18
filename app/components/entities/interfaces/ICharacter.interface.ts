import {IFieldSet} from "../../fields/interfaces/IFieldSet.interface";
import {IStatFieldSet} from "../../fields/interfaces/IStatFieldSet.interface";
import {IIndexedGameEntity} from "./IIndexedGameEntity.interface";
/**
 * Created by becari on 18/08/2016.
 */
export interface ICharacter extends IFieldSet, IStatFieldSet {
    _inherits: IIndexedGameEntity;
}