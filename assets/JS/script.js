// Assignment code here

//Added variables for what's needed to in a general password
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "~!@#$%^&*()_-+={[}]|;'<,>.?/";

function generatePassword() {
  //This is for the Password to be created
  var createdPassword = "";
  var selectedCases = "";

  var passwordLength = window.prompt("Password must have 8 too 128 characters");
  passwordLength = parseInt(passwordLength);

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must contain 8 too 128 keys!");
    return;
  }

  var lowerCaseLetters = window.confirm("Would you like a lower case letter in the password?");
  var upperCaseLetters = window.confirm("Would you like a upper case letter in the password?");
  var numberset = window.confirm("Would yoy like a number in the password?");
  var symbolset = window.confirm("Would you like symbols in the password?");

  if (!lowerCaseLetters && !upperCaseLetters && !numberset && !symbolset) {
    window.alert("Password isn't valid");
    // JAN13 THIS IS WHERE I LEFT OFF AND SHOULD START HERE WHEN I COME BACK 
  } else if (lowerCaseLetters && upperCaseLetters && numberset && symbolset) {
    selectedCases = lowerCase + upperCase + numbers + symbols;
  } else if (lowerCaseLetters && upperCaseLetters && numberset) {
    selectedCases = lowerCase + upperCase + numbers;
  } else if (lowerCaseLetters && upperCaseLetters && symbolset) {
    selectedCases = lowerCase + upperCase + symbols;
  } else if (lowerCaseLetters && numberset && symbolset) {
    selectedCases = lowerCase + numbers + symbols;
  } else if (upperCaseLetters && numberset && symbolset) {
    selectedCases = !upperCase + numbers + symbols;
  } else if (lowerCaseLetters && upperCaseLetters) {
    selectedCases = lowerCase + upperCase;
  } else if (lowerCaseLetters && numberset) {
    selectedCases = lowerCase + numbers;
  } else if (lowerCaseLetters && symbolset) {
    selectedCases = lowerCase + symbols;
  } else if (upperCaseLetters && numberset) {
    selectedCases = !upperCase + numbers;
  } else if (upperCaseLetters && symbolset) {
    selectedCases = upperCase + symbols;
  } else if (numberset && symbolset) {
    selectedCases =numbers + symbols;
  } else if (lowerCaseLetters) {
    selectedCases = lowerCase;
  } else if (upperCaseLetters) {
    selectedCases = upperCase;
  } else if (numberset) {
    selectedCases = numbers;
  } else if (symbolset) {
    selectedCases = symbols;
  }

  for (i = 0; i < passwordLength; i++) {
    var randomPassword = Math.floor(Math.random() * selectedCases.length);
    createdPassword += selectedCases.substring(randomPassword, randomPassword + 1);
  }
  
  return createdPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
