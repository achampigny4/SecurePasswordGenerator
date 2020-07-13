// // Assignment Code
var generateBtn = document.querySelector("#generate");
// // check boxes to select password criteria
var numbersEl = document.querySelector("#numbers");
var upperCaseEl = document.querySelector("#upper");
var lowerCaseEl = document.querySelector("#lower");
var symbolsEl = document.querySelector("#symbol");
var CharactersEl = document.getElementById("characters");
var passwordEl = document.getElementById("password");

// //select number of characters between 8 and 128
// var characters = document.querySelector("#characters");
// // console.log(characters.value);

// //length

// // var password = "";
// // for (var i = 0; i < arrayLength; i++) {
// //   password = password + characters.charAt(Math.floor(Math.random() = Math.floor(characters)));

//   // start with no password length
//   // var arrayLength = [];
//   // length = characters;
//   // console.log(characters.value)
//   // // loop over criteria
//   // for (var i = 0; i < arrayLength; i++) {
//   //   function arrayLength() {
//   //     characters = document.querySelector("characters").value;
//   //     document.querySelector("characters").innerHTML = "" + characters;
//   // }
//   //password length
//   // var characters = document.querySelector("writePassword").value;
//   // /// if and else 
//   // if (length < 8)

//   // define generate password
// function genPassword(event) {
//   event.preventDefault();

//   var total = document.querySelector("#characters").textContent;
//   var characters = document.querySelector("#generate").value;

//   var charTotal = (total / numPeople).toFixed(2);
//   document.querySelector("#characters").textContent = charTotal;
// }

// criteria selected in checkbox
generate.addEventListener('click', () => {
  var Characters = CharactersEl.value;
  console.log(Characters);
  var checkNumbers = numbersEl.checked === true;
  console.log(checkNumbers);
  var checkUpper = upperCaseEl.checked === true;
  console.log(checkUpper);
  var checkLower = lowerCaseEl.checked === true;
  console.log(checkLower);
  var checkSymbol = symbolsEl.checked === true;
  console.log(checkSymbol);
});

// consolidated strings and generate random characters
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
  // console.log(getRandomSymbols());


  // if (numbers.checked === true) {
  //   // numbers show in password

  //   console.log(numbersArray) //??
  // } else {
  //   numbers === false
  //   // no numbers in password
  // }





  // // Write password to the #password input
  // function writePassword() {
  //   var password = generatePassword();
  //   var passwordText = document.querySelector("#password");

  //   passwordText.value = password;

  // }

  // // // Add event listener to generate button
  // generateBtn.addEventListener("click", writePassword);





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
// https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation 