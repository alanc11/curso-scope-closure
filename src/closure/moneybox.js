
// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`Moneybox: $${saveCoins}`);
// }
// moneyBox(5);
// moneyBox(4);

function moneyBox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`Moneybox: $${saveCoins}`);
    }
    return countCoins;
}
const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(11);
myMoneyBox(2);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(1);
moneyBoxAna(40);

function hola() {
    return function saluda(nombre) {
          console.log("Hola " + nombre);
    }
} 
  
console.log(hola); // ⇒ Esta es una función

let saludador = hola();
console.log(saludador); // ¿Qué te sale acá?
saludador("Platzi"); 