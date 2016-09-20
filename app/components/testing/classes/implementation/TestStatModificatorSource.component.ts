'use strict';
import {ITest} from "../../interfaces/ITest.interface";
import {AbstractTest} from "../abstract/AbstractTest.class";
import {Optional, SkipSelf, Component, Input} from "@angular/core";
import {AbstractStatModificatorSource} from "../../../../model/modificators/classes/abstract/AbstractStatModificatorSource.class";
import {StatModificatorType} from "../../../../model/modificators/enumerations/StatModificatorType.enum";
import {Util} from "../../../../model/util/classes/Util.class";
import {TestStatModificator} from "./TestStatModificator.class";
import {GrantedStatModificatorBuilder} from "../../../../model/builder/classes/implementation/GrantedStatModificatorBuilder.class";
import {AbstractGrantedStatModificatorBuilder} from "../../../../model/builder/classes/abstract/AbstractGrantedStatModificatorBuilder.class";
import {AbstractGrantedStatModificator} from "../../../../model/modificators/classes/abstract/AbstractGrantedStatModificator.class";
/**
 * Created by becari on 16/09/2016.
 */
@Component({
    selector: 'test-statmodificatorsource',
    templateUrl: 'app/templates/TestStatModificatorSource.component.html',
    directives: [TestStatModificator]
})
export class TestStatModificatorSource extends AbstractTest implements ITest<AbstractStatModificatorSource> {
    @Input('testing') _testing: AbstractStatModificatorSource;

    constructor(@SkipSelf() @Optional() obj?: TestStatModificatorSource) {
        super(obj);
        this.logger.name = "test_statmodificatorsource";
        this.title = "Prueba MOR - RPG";
    }

    test() {
        super.test();
        var modificatorBuilder: AbstractGrantedStatModificatorBuilder = new GrantedStatModificatorBuilder(),
            counter: number, length: number = Util.randomNumber(1, 4);
        modificatorBuilder.setSource(this.testing).setType(StatModificatorType.Level);
        for(counter = 0; counter < length; counter++)
            this.testing.addMod(this.createMod(modificatorBuilder, counter));
    }
    ngOnInit() {
        super.ngOnInit();
        this.test();
    }
    createMod(_builder: AbstractGrantedStatModificatorBuilder, _index: number): AbstractGrantedStatModificator {
        this.log("Creating mod number "+_index);
        return (<AbstractGrantedStatModificatorBuilder> _builder.setValue(Util.randomNumber(-2, 2))
            .setName("Modificator#"+Util.numberPad(_index, 2))).build();
    }

    get testing(): AbstractStatModificatorSource {
        return this._testing;
    }
    set testing(_testing: AbstractStatModificatorSource) {
        this._testing = _testing;
    }
}