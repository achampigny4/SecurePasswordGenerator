// Assignment Code
var generateBtn = document.querySelector("#generate");

// check boxes to select password criteria
var numbers = document.querySelector("#numbers");
// console.log(numbers.value);
var upperCase = document.querySelector("#upper");
// console.log(upperCase.value);
var lowerCase = document.querySelector("#lower");
// console.log(lowerCase.value);
var symbols = document.querySelector("#symbol");
// console.log(symbols.value);

//select number of characters between 8 and 128
var characters = document.querySelector("#characters")
// console.log(characters.value);


// define generate password
function genPassword(event) {
  event.preventDefault();

  var total = document.querySelector("#characters").textContent;
  var characters = document.querySelector("#generate").value;

  var charTotal = (total / numPeople).toFixed(2);
  document.querySelector("#characters").textContent = charTotal;
}

function generatePassword() {
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
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//sources used

// check boxes to select password criteria
// https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/
// https://www.w3schools.com/jsref/prop_checkbox_checked.asp
//strings of parameters into split into arrays
// https://www.tutorialrepublic.com/faq/how-to-explode-a-string-in-javascript.php#:~:text=Answer%3A%20Use%20the%20JavaScript%20split,array%2C%20containing%20the%20splitted%20values.
// generate random
// https://stackoverflow.com/questions/5836833/create-an-array-with-random-values


