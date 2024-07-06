function getRandomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

let num = getRandomNumber();

let guess_number = 0;
let guess;
let found = false;

function guessing(){
while(guess_number<5){
    prompt("Try guessing the number");

    if(guess>num){
        alert("The number you guessed is larger than the given number");
    }else if(guess<num){
        alert("The number is less than the given number, try again");
    }else if(guess == num){
        found = true;
        break;
    }
    guess_number++
}
if(found == false){
    alert("Sorry, you have run out of chances, the number is " + num);
}else{
    alert("You guessed right, YAYYYYY!!!");
}
}

guessing();

