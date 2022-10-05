var fistName; // Valor undefined
fistName = 'Alan'; // asignación
console.log(fistName);

var lastName = 'Castillo'; // declarar y asignar
lastName = 'García'; // reasignar
console.log(lastName);

var secondName = 'Omar'; // declarando y asignando
var secondName = 'Dayan'; // redeclarando y reasignando
console.log(secondName);

//! LET / no se puede redeclarar las variables let
let fruit = 'apple'; // declarar y asignar
fruit = 'orange';
console.log(fruit);

//: CONST no se pueden reasignar o redeclarar
const animal = 'dog'; //declarar y asignar
console.log(animal);

const vehicles = [];
vehicles.push('toyota');
console.log(vehicles);
vehicles.pop('toyota');
console.log(vehicles);