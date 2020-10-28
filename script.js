// Assignment Code
var generateBtn = document.querySelector("#generate");
// acceptable characters (what will be allowed in future prompt responses)
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharArray = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/','\\', ':', ';', '<', '=', '>', '?', '@', '[', '\'', ']','^', '_', '`', '{', '|', '}', '~'];
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function startPrompts() {
  var confirmNumbers = confirm('Would you like your password to include numbers?');
  var confirmLowercase = confirm('Would you like your password to include lowercase characters?');
  var confirmUppercase = confirm('Would you like your password to include uppercase characters?');
  var confirmSpecialChar = confirm('Would you like your password to include special characters (such as @#$%!)');
}

generateBtn.addEventListener("click", startPrompts);

// if (confirmLowercase) {
//   for (var i = 0; i < lowercaseArray.length; i++) {

//   }
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");




  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
