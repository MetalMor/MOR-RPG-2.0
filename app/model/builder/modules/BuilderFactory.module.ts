'use strict';
import {IBuilder} from "../interfaces/IBuilder.interface";
import {IFactory} from "../interfaces/IFactory.interface";
import {VehicleItemBuilder} from "../classes/implementation/VehicleItemBuilder.class";
import {AbstractItem} from "../../items/classes/abstract/AbstractItem.class";
import {AbstractGameEntity} from "../../entities/classes/abstract/AbstractGameEntity.class";
import {RangedWeaponItemBuilder} from "../classes/implementation/RangedWeaponItemBuilder.class";
import {ArmorItemBuilder} from "../classes/implementation/ArmorItemBuilder.class";
/**
 * Created by becari on 29/09/2016.
 */
export module BuilderFactory {
    abstract class AbstractFactory<T extends AbstractGameEntity> {
        constructor(obj?: AbstractFactory<T>) { }

        protected getBuilder<B extends IBuilder<T>>(_type: {new(): B}): B {
            return new _type();
        }
    }

    export class GenericFactory<T extends AbstractGameEntity> extends AbstractFactory<T> {
        create(_type: {new(): IBuilder<T>}): IBuilder<T> {
            return this.getBuilder(_type)
        }
    }

    export class VehicleItemFactory extends AbstractFactory<AbstractItem> implements IFactory<VehicleItemBuilder> {
        constructor(obj?: VehicleItemFactory) {
            super(obj);
        }

        create(): VehicleItemBuilder {
            return this.getBuilder(VehicleItemBuilder);
        }
    }

    export class RangedWeaponItemFactory extends AbstractFactory<AbstractItem> implements IFactory<RangedWeaponItemBuilder> {
        constructor(obj?: RangedWeaponItemFactory) {
            super(obj);
        }

        create(): RangedWeaponItemBuilder {
            return this.getBuilder(RangedWeaponItemBuilder);
        }
    }

    export class ArmorItemFactory extends AbstractFactory<AbstractItem> implements IFactory<ArmorItemBuilder> {
        constructor(obj?: ArmorItemFactory) {
            super(obj);
        }

        create(): ArmorItemBuilder {
            return this.getBuilder(ArmorItemBuilder);
        }
    }
}