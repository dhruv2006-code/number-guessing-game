let num = 11;
let attempts = 0;
let guess;
while(num !== guess && attempts < 5){
    guess = +prompt("guess the number");    

    if(guess<num){
        console.log("too low")
    }
    if(guess>num){
        console.log("too high")
    }
    attempts++;
    if(num === guess){
    console.log("Congratulations You Get It");
    break;
}
}
