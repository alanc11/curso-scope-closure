
function greetings(){
    let userName = 'Alanc11';

    function displayUserName(){
        return `Hello ${userName}`;
    }
    return displayUserName;
}
greetings();

const g = greetings();
console.log(g);
console.log(g());