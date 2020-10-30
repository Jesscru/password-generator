// Assignment Code
var generateBtn = document.querySelector("#generate");
// acceptable characters (what will be allowed in future prompt responses)
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharArray = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/','\\', ':', ';', '<', '=', '>', '?', '@', '[', '\'', ']','^', '_', '`', '{', '|', '}', '~'];
var selected = [];
var randomValuesArray = [];


// when user presses generate password button, the prompts will start
function startPrompts() {
  var confirmNumbers = confirm('Would you like your password to include numbers?');
  var confirmLowercase = confirm('Would you like your password to include lowercase characters?');
  var confirmUppercase = confirm('Would you like your password to include uppercase characters?');
  var confirmSpecialChar = confirm('Would you like your password to include special characters (such as @#$%!)');
  var confirmLength = prompt('How many characters would you like your password to be?');
  
// if the user clicks ok on the confirm, the corresponding array is pushed to 'selected' array

  if (confirmNumbers === false && confirmLowercase === false && confirmUppercase === false && confirmSpecialChar === false) {
    alert('Please choose at least one character set for your password. Click \'generate password\' again!');
    location.reload();
  }

  if (confirmNumbers !== false) {
    selected.concat(numbersArray);
    
  }
  
  if (confirmLowercase !== false) {
    selected.concat(lowercaseArray);
  }
  
  if (confirmUppercase !== false) {
    selected.concat(uppercaseArray);
  }
  
  if (confirmSpecialChar !== false) {
    selected.concat(specialCharArray);
    
  }

    // generatePassword(confirmLength);
    console.log(selected);
  }   


// function generatePassword(confirmLength){
//   if (confirmLength < 8) {
//     alert('Please choose a password length of at least 8 characters. Click \'generate password\' again!');
//     location.reload();
//   }
  
//   if (confirmLength > 128) {
//     alert('Please enter a password length with no more than 128 characters. Click \'generate password\' again!');
//     location.reload();
  
//     } else {
//       confirmLength = parseInt(confirmLength);
//         for (var i = 0; i < selected.length; i++) { 
//         var randomValues = selected[Math.floor(Math.random() * confirmLength)];
//         randomValuesArray.push(randomValues);
//         console.log(randomValuesArray);
//         }
//       }
//   }


generateBtn.addEventListener("click", startPrompts);


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword(randomValuesArray);
//   var passwordText = document.querySelector("#password");



//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
