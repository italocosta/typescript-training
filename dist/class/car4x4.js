"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var car_1 = require("./car");
var Car4X4 = /** @class */ (function (_super) {
    __extends(Car4X4, _super);
    function Car4X4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Car4X4;
}(car_1.Car));
exports.Car4X4 = Car4X4;
