let linguagem:string = 'Typescript';
let texto:string = `Olá ${ linguagem}`;
let idade:number = 28;
console.log(texto,idade);

let getPerfil = function(nome:string,idade:number,email:string):void{
    console.log(nome,idade,email);
}

function getIdade(idade):string{
    return idade + " anos";
}

getPerfil("Italo Costa",27,"italo.costa.ce@gmail.com");

let idadeAnos:string = getIdade(27);

//Arrow Functions sample 1
let retornaPerfil = (nome:string,idade:number,email:string):void => console.log(nome,idade,email);
//Arrow Functions sample 2
let retornaPerfil2 = (nome:string,idade:number,email:string):void =>{
    nome = nome.toUpperCase();
    console.log(nome,idade,email);
} 

//Types in typescript
let nome:string = "Ana";
let idade2:number = 27;
let isMajor:boolean;
if(idade > 17){
    isMajor = true;
}else{
    isMajor = false;
}
let list:string[] = ["green","blue"];
let listNumber:Array<number> = [10,11];

enum Color {red,blue,orange=12};

let c:Color = Color.blue;

console.log(c);
console.log(Color[1]);
console.log(Color[1]);
console.log(Color[12]);


let aux:any;
aux = 5;
aux = "Name";
aux = [2,4];

let arrayAny:Array<any> = [2,"text",[3,4,"test"],{name: "italo",age: 27},function(){console.log("test")}];


import { Car} from './class/car'
import { Car4X4} from './class/car4x4'
import { Vehicle} from './interface/vehicle'

let camaro:Car = new Car("Camaro");
let troller:Vehicle = new Car4X4();

document.getElementById('vehicle').innerHTML = camaro.getModel();

console.log(camaro.getModel());
console.log(troller.getModel());
