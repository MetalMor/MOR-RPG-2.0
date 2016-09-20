'use strict';
import {RangedWeaponItem} from "../../../../model/items/classes/implementation/RangedWeaponItem.class";
import {ITest} from "../../interfaces/ITest.interface";
import {AbstractTest} from "../abstract/AbstractTest.class";
import {Component, Optional, SkipSelf} from "@angular/core";
import {SpyDirective} from "../hooks/Spy.hook";
import {RangedWeaponItemBuilder} from "../../../../model/builder/classes/implementation/RangedWeaponItemBuilder.class";
import {DamageBuilder} from "../../../../model/builder/classes/implementation/DamageBuilder.class";
import {DamageType} from "../../../../model/items/enumerations/DamageType.enumeration";
import {Hiding} from "../../../../model/items/enumerations/Hiding.enumeration";
/**
 * Created by becari on 20/09/2016.
 */
@Component({
    selector: 'test-rangedweaponitem',
    templateUrl: 'app/templates/TestRangedWeaponItem.component.html',
    directives: [SpyDirective]
})
export class TestRangedWeaponItem extends AbstractTest implements ITest<RangedWeaponItem> {
    _testing: RangedWeaponItem;

    constructor(@SkipSelf() @Optional() obj?: TestRangedWeaponItem) {
        super(obj);
        this.logger.name = "test_rangedweaponitem";
    }

    test() {
        var rangedWeaponItemBuilder: RangedWeaponItemBuilder = new RangedWeaponItemBuilder();
        rangedWeaponItemBuilder.setDif(6)
            .setDamage((new DamageBuilder()).setType(DamageType.Bashing).setValue(3).build())
            .setHiding(Hiding.Pocket)
            .setDesc("Testing ranged weapon item")
            .setName("Test RWI");
        this.testing = rangedWeaponItemBuilder.build();
    }

    get testing(): RangedWeaponItem {
        return this._testing;
    }
    set testing(_testing: RangedWeaponItem) {
        this._testing = _testing;
    }
}