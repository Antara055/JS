//Random no
{
let randomNumber = Math.floor( Math.random() * 10 );
console.log("Random Number between 0 to 9 is: " + randomNumber);
}
//Random dice no
{
let randomDiceNumber = Math.floor(( Math.random() * 6 ) + 1);
console.log("Dice Number(1 to 6): " + randomDiceNumber);
}
//add random dice number
{
let num1 =  Math.floor((Math.random() * 6 ) + 1);
let num2 =  Math.floor((Math.random() * 6 ) + 1);
let sum = num1 + num2;
console.log("Sum of dice1("+num1+") and dice2("+num2+") is " + sum);
}
//sum and avg of 5 num
{
let sum=0;
for(let i = 0; i < 5; i++){
    let twoDigitNum = Math.floor((Math.random() * 90 ) + 10);
     sum=sum + twoDigitNum;
}
console.log("Sum is: " +sum);
let avg = sum / 5;
console.log("Average is: " +avg);
}