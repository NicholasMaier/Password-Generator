// Gets references to the #generate element
var generateBtn = document.querySelector("#generate");

// Establishes a function that creates the password
function writePassword() {

  // Create variables equal to the users decided outcome of the password
  var passwordLength = prompt("How many characters would you like?");
  var passwordUpperCase = confirm("Would you like to use Upper Case Letters?");
  var passwordLowerCase = confirm("Would you like to use Lower Case Letters?");
  var passwordNumbers = confirm("Would you like to use Numbers?");
  var passwordSpecialCharacter = confirm("Would you like to use Special Characters?");

  // Establishes that the function named "generatePassword" with the parameters being variables that are decided by the user is stored into a string variable named "password" when the function is complete
  var password = generatePassword(passwordLength,
                                  passwordUpperCase,
                                  passwordLowerCase,
                                  passwordNumbers,
                                  passwordSpecialCharacter);

  // Establishes a variable to the #password id
  var passwordText = document.querySelector("#password");

  // Says that the variable "password" is equal to the password textbox
  passwordText.value = password;
  return;
}

// Adds a event listener that waits for a click on the generate button then activates the function "writePassword()"
generateBtn.addEventListener("click", writePassword);

// Says what the function "generatePassword" does and the parameters of said function
function generatePassword (passwordLength,
                           passwordUpperCase,
                           passwordLowerCase,
                           passwordNumbers,
                           passwordSpecialCharacter) {

 // Establishes a variable named "allowedCharacters" with a empty string as its value
 var allowedCharacters = "";

 // Says that if the parameter is true then it will add a string of text to the already established blank string  variable named "allowedCharacters"
 if (passwordUpperCase){
  allowedCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 }

  // Says that if the parameter is true then it will add a string of text to the already established blank string variable named "allowedCharacters"
 if (passwordLowerCase){
  allowedCharacters += "abcdefghijklmnopqrstuvwxyz";
 }

  // Says that if the parameter is true then it will add a string of text to the already established blank string variable named "allowedCharacters"
 if (passwordNumbers){
  allowedCharacters += "1234567890";
 }

  // Says that if the parameter is true then it will add a string of text to the already established blank string variable named "allowedCharacters"
 if (passwordSpecialCharacter){
  allowedCharacters += "<>?:{}[';/.,^]!@#$%^&*()";
 }

 // Says that the already declared string variable "allowedCharacters" will become an array with every character in the string becoming its own array item then making that array equal to a new string variable named "passwordCharacters"
  var passwordCharacters = allowedCharacters.split("");

  // Establishes a variable named "finalPassword" that is equal to an empty string
  var finalPassword = "";

  // Creates a for loop that starts at 0 and will increase by 1 for every time it goes through the loop as long X is less then the variable "passwordLength" that is decided by the user
  for (let x = 0; x < passwordLength; x++) {

    // Returns a random integer from 0 through the length of the array "passwordsCharacters" and puts that integer into a variable named "randomNumber"
    var randomNumber = Math.floor(Math.random() * passwordCharacters.length);

    // Says that the variable "randomNumber" will select an array item out of the array "passwordCharacters" and assign it to a new variable named "randomCharacter"
    var randomCharacter = passwordCharacters[randomNumber];

    // Adds the "randomCharacter" variable to the string variable named "finalPassword"
    finalPassword += randomCharacter;
  }

  // Returns the  string variable named "finalPassword" and assigns it to the string variable named "password"
  return finalPassword;
}