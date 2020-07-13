//  DELETE CONOSOL.LOGS WHEN COMPLETE BEFORE FINAL SUBMIT


// Assignment Code
var generateBtn = document.querySelector("#generate");
// check boxes to select password criteria
var numbersEl = document.querySelector("#numbers");
var upperCaseEl = document.querySelector("#upper");
var lowerCaseEl = document.querySelector("#lower");
var symbolsEl = document.querySelector("#symbol");
var CharactersEl = document.querySelector("#characters");
var passwordEl = document.querySelector("#password");

// objects to access random string characters from random functions to create password length
var random = {
  number: getRandomNumber,
  upper: getRandomUpperCase,
  lower: getRandomLowerCase,
  symbol: getRandomSymbols,
};

// function genPassword(event) {
//   event.preventDefault();

// criteria selected in checkboxs
generate.addEventListener('click', () => {
  var Characters = CharactersEl.value;
  // console.log(Characters);
  var checkNumbers = numbersEl.checked === true;
  // console.log(checkNumbers);
  var checkUpper = upperCaseEl.checked === true;
  // console.log(checkUpper);
  var checkLower = lowerCaseEl.checked === true;
  // console.log(checkLower);
  var checkSymbol = symbolsEl.checked === true;
  // console.log(checkSymbol);

  // assigns true checked criteria to passwordEl
  passwordEl.innerText = generatePassword(Characters, checkNumbers, checkUpper, checkLower, checkSymbol);
});

// define generatePassword
function generatePassword(number, upper, lower, symbol) {
  // start with no password
  var password = "";
  // number of types of criteria selected
    var numberOfCriteria = lower + upper + number + symbol;
    // console.log(numberOfCriteria) //...should show a number of how many criteria checkboxes are checked but it's not


};  

// strings of characters
function getRandomNumber() {
  var numbers = '123456789';
  return numbers[Math.floor(Math.random() * numbers.length)];
}
// console.log(getRandomNumber());

function getRandomUpperCase() {
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUV';
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}
// console.log(getRandomUpperCase());

function getRandomLowerCase() {
  var lowerCase = 'abcdefghijklmnopqrstuv';
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}
// console.log(getRandomLowerCase());

function getRandomSymbols() {
  const symbols = '!@#$%^&*()_+-=<>?,./:";[]{}';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);



//sources used
// check boxes to select password criteria
// https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/
// https://www.w3schools.com/jsref/prop_checkbox_checked.asp
// https://stackoverflow.com/questions/59340866/random-password-generator-javascript-not-working
//strings of parameters into split into arrays
// https://www.tutorialrepublic.com/faq/how-to-explode-a-string-in-javascript.php#:~:text=Answer%3A%20Use%20the%20JavaScript%20split,array%2C%20containing%20the%20splitted%20values.
// generate random
// https://stackoverflow.com/questions/5836833/create-an-array-with-random-values
// password length
// https://codepen.io/FlorinPop17/pen/BaBePej
// https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation 