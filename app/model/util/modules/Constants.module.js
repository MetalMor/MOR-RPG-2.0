"use strict";
/**
 * Created by becari on 18/08/2016.
 */
var Constants;
(function (Constants) {
    var Errors = (function () {
        function Errors() {
        }
        Errors.ERR_SINGLETON = "Mendrugo, el Singleton se coge con el método accesor.";
        Errors.ERR_BUILDER = "Objeto construido sin usar el builder correspondiente.";
        Errors.ERR_NUMBERS = "Los números introducidos son erróneos.";
        Errors.ERR_MODTYPE = "El tipo del modificador no se reconoce.";
        Errors.ERR_HIDTYPE = "El nivel de ocultación no se reconoce.";
        Errors.ERR_DMGTYPE = "El tipo de daño no se reconoce.";
        Errors.ERR_UNDERZERO = "No se permite una cifra negativa.";
        return Errors;
    }());
    Constants.Errors = Errors;
    var Numbers = (function () {
        function Numbers() {
        }
        Numbers.DEF_MAX_ID = 10000;
        Numbers.DEF_MIN_ID = 1;
        return Numbers;
    }());
    Constants.Numbers = Numbers;
    var Types = (function () {
        function Types() {
        }
        Types.TYPE_UNDEFINED = 'undefined';
        Types.TYPE_MOD_LEVEL = "Nivel";
        Types.TYPE_MOD_DIFFICULTY = "Dificultad";
        Types.TYPE_DMG_LETHAL = "Letal";
        Types.TYPE_DMG_BASHING = "Contundente";
        Types.TYPE_DMG_AGGRAVATED = "Agravado";
        Types.TYPE_HID_POCKET = "Bolsillo";
        Types.TYPE_HID_JACKET = "Chaqueta";
        Types.TYPE_HID_TRENCHCOAT = "Gabardina";
        Types.TYPE_HID_NONE = "Inocultable";
        return Types;
    }());
    Constants.Types = Types;
    var Labels = (function () {
        function Labels() {
        }
        Labels.ENABLED = "Activado";
        Labels.DISABLED = "Desactivado";
        return Labels;
    }());
    Constants.Labels = Labels;
})(Constants = exports.Constants || (exports.Constants = {}));
//# sourceMappingURL=Constants.module.js.map