var prompt = require('prompt-sync')();

let c='y';

while(c == 'y' || c == 'Y'){


console.log("1. Degree Centigrade to Degree Fahrenheit.");
console.log("2. Degree Fahrenheit to Degree Centigrade.");

let n = prompt("Enter Which type of Conversion - 1 or 2 ? ");

if(n==1){

    let input = prompt("Enter Degree Centigrade : ");
    output = (9*input/5)+32;
    console.log(input + " C = "+ output + " F");
}
else{
    let input = prompt("Enter Degree Fahrenheit : ");
    output = (input-32)*5/9;
    console.log(input + " F = "+ output + " C");
}

 c = prompt("Do you want to continue - y or n ?: ");

}