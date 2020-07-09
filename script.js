// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables for check boxes
var numbers = document.querySelector("#numbers");
var upperCase = document.querySelector("#upper");
var lowerCase = document.querySelector("#lower");
var symbols = document.querySelector("#symbol");

// strings of password parameters
var numbersStr = '123456789';
// console.log(numbersStr);
var upperCaseStr = 'ABCDEFGHIJKLMNOPQRSTUV';
// console.log(upperCaseStr); 
var lowerCaseStr = 'abcdefghijklmnopqrstuv'; 
// console.log(lowerCaseStr); 
var symbolsStr = '!@#$%^&*()_+-=<>?,./:";[]{}';
// console.log(symbolsStr); 

//strings of parameters into split arrays
var numbersArray = numbersStr.split(" ");
// console.log(numbersArray);
var upperArray = upperCaseStr.split(" ");
// console.log(upperArray);
var lowerArray = lowerCaseStr.split(" ");
// console.log(lowerArray);
var symbolArray = symbolsStr.split(" ");
// console.log(symbolArray);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//sources used

// variables for check boxes
// https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/
//strings of parameters into split into arrays
// https://www.tutorialrepublic.com/faq/how-to-explode-a-string-in-javascript.php#:~:text=Answer%3A%20Use%20the%20JavaScript%20split,array%2C%20containing%20the%20splitted%20values.