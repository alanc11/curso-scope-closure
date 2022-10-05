
function fruits(){
    if(true){
        var fruit1 = 'apple'; //* FUNCTION SCOPE
        let fruit2 = 'peach'; //* BLOCK SCOPE
        const fruit3 = 'orange';//* BLOCK SCOPE
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
    
}
fruits();