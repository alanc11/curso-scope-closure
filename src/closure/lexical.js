const myGlobal = 0;

function myFunction(){
    const number = 1;
    console.log(number);

    function parent(){ // funcion interna
        const inner = 2;
        console.log(number, myGlobal);

        function child(){
            console.log(inner, number, myGlobal);
        }
        return child();
    }
    return parent();
}
myFunction();