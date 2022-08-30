var prompt = require('prompt-sync')();

let yr = prompt("Enter any Year : ");

let n = yr % 4;
        if(n==0)
        console.log(yr + " is a leap year");
    else
    console.log(yr + " is not a leap year");
