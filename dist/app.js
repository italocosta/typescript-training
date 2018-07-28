"use strict";
exports.__esModule = true;
var linguagem = 'Typescript';
var texto = "Ol\u00E1 " + linguagem;
var idade = 28;
console.log(texto, idade);
var getPerfil = function (nome, idade, email) {
    console.log(nome, idade, email);
};
function getIdade(idade) {
    return idade + " anos";
}
getPerfil("Italo Costa", 27, "italo.costa.ce@gmail.com");
var idadeAnos = getIdade(27);
//Arrow Functions sample 1
var retornaPerfil = function (nome, idade, email) { return console.log(nome, idade, email); };
//Arrow Functions sample 2
var retornaPerfil2 = function (nome, idade, email) {
    nome = nome.toUpperCase();
    console.log(nome, idade, email);
};
//Types in typescript
var nome = "Ana";
var idade2 = 27;
var isMajor;
if (idade > 17) {
    isMajor = true;
}
else {
    isMajor = false;
}
var list = ["green", "blue"];
var listNumber = [10, 11];
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["orange"] = 12] = "orange";
})(Color || (Color = {}));
;
var c = Color.blue;
console.log(c);
console.log(Color[1]);
console.log(Color[1]);
console.log(Color[12]);
var aux;
aux = 5;
aux = "Name";
aux = [2, 4];
var arrayAny = [2, "text", [3, 4, "test"], { name: "italo", age: 27 }, function () { console.log("test"); }];
var car_1 = require("./class/car");
var car4x4_1 = require("./class/car4x4");
var camaro = new car_1.Car("Camaro");
var troller = new car4x4_1.Car4X4();
console.log(camaro.getModel());
console.log(troller.getModel());
