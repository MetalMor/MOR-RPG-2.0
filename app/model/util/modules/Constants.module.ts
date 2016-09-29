/**
 * Created by becari on 18/08/2016.
 */
export module Constants {
    export class Errors {
        static ERR_SINGLETON: string = "Mendrugo, el Singleton se coge con el método accesor.";
        static ERR_BUILDER: string = "Objeto construido sin usar el builder correspondiente.";
        static ERR_NUMBERS: string = "Los números introducidos son erróneos.";
        static ERR_MODTYPE: string = "El tipo del modificador no se reconoce.";
        static ERR_HIDTYPE: string = "El nivel de ocultación no se reconoce.";
        static ERR_DMGTYPE: string = "El tipo de daño no se reconoce.";
        static ERR_UNDERZERO: string = "No se permite una cifra negativa.";
    }

    export class Numbers {
        static DEF_MAX_ID: number = 10000;
        static DEF_MIN_ID: number = 1;
    }

    export class Types {
        static TYPE_UNDEFINED: string = 'undefined';
        static TYPE_MOD_LEVEL: string = "Nivel";
        static TYPE_MOD_DIFFICULTY: string = "Dificultad";
        static TYPE_DMG_LETHAL: string = "Letal";
        static TYPE_DMG_BASHING: string = "Contundente";
        static TYPE_DMG_AGGRAVATED: string = "Agravado";
        static TYPE_HID_POCKET: string = "Bolsillo";
        static TYPE_HID_JACKET: string = "Chaqueta";
        static TYPE_HID_TRENCHCOAT: string = "Gabardina";
        static TYPE_HID_NONE: string = "Inocultable";
    }

    export class Labels {
        static ENABLED: string = "Activado";
        static DISABLED: string = "Desactivado";
    }
}