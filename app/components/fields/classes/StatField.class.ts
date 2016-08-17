import {IStat} from "../interfaces/IStat.interface";
import {AbstractField} from "./AbstractField.class";
import {IStatModificator} from "../interfaces/IStatModificator.interface";
/**
 * Created by becari on 17/08/2016.
 */
export class StatField extends AbstractField implements IStat {
    mods: IStatModificator[];

    addMod(mod: IStatModificator): void {
    }

    removeMod(mod: IStatModificator|number) {
    }

    getMod(id: number) {
    }

}