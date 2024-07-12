
// function getRandomNumber2(){
//     return Math.floor(Math.random() * 100) + 1;
// }

// function getRandomNumber3(){
//     return Math.floor(Math.random() * 1000) + 1; 
// }




let guess_number = 0;
let guess;
let found = false;

let difficultyLevel = prompt("Enter the difficulty level you want: easy(1) or hard(2)");

function getRandomNumber(){
    if (difficultyLevel == 1){
        return Math.floor(Math.random() * 10) + 1;
    } else{
        return Math.floor(Math.random() * 100) + 1;
    }
    
}

let num = getRandomNumber();

function guessing(){
    // guess = prompt("Try guessing the number");
     if(difficultyLevel == 1){
        // guess = prompt("Try guessing the number");
        while(guess_number<5){
            guess = prompt("Try guessing the number");
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
    }else{
        // guess = prompt("Try guessing the number");
        while(guess_number<10){
            guess = prompt("Try guessing the number");
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
        
    //     num = getRandomNumber();
    //     while(guess_number<2){
    //         guess = prompt("Try guessing the number");
    //         if(guess>num){
    //             alert("The number you guessed is larger than the given number");
    //         }else if(guess<num){
    //             alert("The number is less than the given number, try again");
    //         }else if(guess == num){
    //             found = true;
    //             break;
    //         }
    //         guess_number++
    //     }
    //     if(found == false){
    //         alert("Sorry, you have run out of chances, the number is " + num);
    //     }else{
    //         alert("You guessed right, YAYYYYY!!!");
    //     }
        
    // }else if(difficultyLevel == 2){
    //     num = getRandomNumber2();
    //    guess =  prompt("Try guessing the number");
    //     while(guess_number<7){
    //         if(guess>num){
    //             alert("The number you guessed is larger than the given number");
    //         }else if(guess<num){
    //             alert("The number is less than the given number, try again");
    //         }else if(guess == num){
    //             found = true;
    //             break;
    //         }
    //         guess_number++
    //     }
    //     if(found == false){
    //         alert("Sorry, you have run out of chances, the number is " + num);
    //     }else{
    //         alert("You guessed right, YAYYYYY!!!");
    //     }
    // }else if(difficultyLevel == 3){
    //     num = getRandomNumber3();
    //     guess =prompt("Try guessing the number");
    //     while(guess_number<15){
    //         if(guess>num){
    //             alert("The number you guessed is larger than the given number");
    //         }else if(guess<num){
    //             alert("The number is less than the given number, try again");
    //         }else if(guess == num){
    //             found = true;
    //             break;
    //         }
    //         guess_number++
    //     }
    //     if(found == false){
    //         alert("Sorry, you have run out of chances, the number is " + num);
    //     }else{
    //         alert("You guessed right, YAYYYYY!!!");
    //     }
    // }
}

guessing();

