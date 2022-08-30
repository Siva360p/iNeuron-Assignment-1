var prompt = require('prompt-sync')();

let input = prompt("Enter any number to find out its factorial : ");

let i=input, n=input;

while(i>1){
    n=n*(i-1);
    i--;
}

console.log("Factorial of "+ input + " is "+n);
