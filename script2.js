function getRandomNumber(){
    return Math.floor(Math.random() * 10) + 1;
}

function getRandomNumber2(){
    return Math.floor(Math.random() * 100) + 1;
}

function getRandomNumber3(){
    return Math.floor(Math.random() * 1000) + 1; 
}

let num;


let guess_number = 0;
let guess;
let found = false;

let difficultyLevel = prompt("Enter the difficulty level you want: easy(1), medium(2) or hard(3)");

function guessing(){
    if(difficultyLevel == 1){
        num = getRandomNumber();
        while(guess_number<2){
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
        
    }else if(difficultyLevel == 2){
        num = getRandomNumber2();
        prompt("Try guessing the number");
        while(guess_number<7){
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
    }else if(difficultyLevel == 3){
        num = getRandomNumber3();
        prompt("Try guessing the number");
        while(guess_number<15){
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
}

guessing();

