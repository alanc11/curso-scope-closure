//// VARIABLES

var a; //: declarando variable 
var b = b; //: declarando y asignando
b = 'bb' //: reasignando valor de la variable b
var a = 'aa'; //: redeclaración

//! GLOBAL SCOPE
var fruit = 'Cucumber'; // global

function bestFruit(){
    console.log(fruit);
}
bestFruit(fruit);

function countries(){
    country = 'Canada';
    console.log(country);
}

countries();