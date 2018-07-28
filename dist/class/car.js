"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(model) {
        if (model === void 0) { model = "Model of car"; }
        this.model = model;
    }
    Car.prototype.getModel = function () {
        return this.model;
    };
    return Car;
}());
exports.Car = Car;
