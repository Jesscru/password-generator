// Assignment Code
var generateBtn = document.querySelector("#generate");
// acceptable characters (what will be allowed in future prompt responses)
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharArray = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/','\\', ':', ';', '<', '=', '>', '?', '@', '[', '\'', ']','^', '_', '`', '{', '|', '}', '~'];
var selected = [];

// when user presses generate password button, the prompts will start
function startPrompts() {
  var confirmNumbers = confirm('Would you like your password to include numbers?');
  var confirmLowercase = confirm('Would you like your password to include lowercase characters?');
  var confirmUppercase = confirm('Would you like your password to include uppercase characters?');
  var confirmSpecialChar = confirm('Would you like your password to include special characters (such as @#$%!)');
  var confirmLength = prompt('How many characters would you like your password to be?');
  
// if the user clicks ok on the confirm, the corresponding array is pushed to 'selected' array

  if (confirmNumbers !== false) {
    selected.push(numbersArray);
  }
  
  if (confirmLowercase !== false) {
    selected.push(lowercaseArray);
  }
  
  if (confirmUppercase !== false) {
    selected.push(uppercaseArray);
  }
  
  if (confirmSpecialChar !== false) {
    selected.push(specialCharArray);
  }

  if (confirmLength < 8) {
    alert('Please choose a password length of at least 8 characters. Click \'generate password\' again!');
    location.reload();
  }
  
  if (confirmLength > 128) {
    alert('Please enter a password length with no more than 128 characters. Click \'generate password\' again!');
    location.reload();
  } 
  
  if (confirmNumbers === false && confirmLowercase === false && confirmUppercase === false && confirmSpecialChar === false) {
    alert('Please choose at least one character set for your password. Click \'generate password\' again!');
    location.reload();
  }
}

function pullSelected(){
  for (var i = 0; i < selected.length; i++) {
    var randomIndeces = selected[Math.floor(Math.random() * confirmLength)];
    return randomIndeces;
    console.log(randomIndeces);
  }
}

console.log(selected);

generateBtn.addEventListener("click", startPrompts);








// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");




//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
