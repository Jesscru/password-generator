// Assignment Code
var generateBtn = document.querySelector("#generate");

// acceptable characters (what will be allowed in future prompt responses)

var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharArray = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/','\\', ':', ';', '<', '=', '>', '?', '@', '[', '\'', ']','^', '_', '`', '{', '|', '}', '~'];

// arrays for values that user chooses and the random values picked from those

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

  if (confirmNumbers) {
    selected.push(numbersArray);
  }

  if (confirmLowercase) {
    selected.push(lowercaseArray);
  }
  
  if (confirmUppercase) {
    selected.push(uppercaseArray);
  }
  
  if (confirmSpecialChar) {
    selected.push(specialCharArray);
  }

// if the user clicks cancel on every confirm, they are instructed to choose at least one character set and the page reloads

  if (confirmNumbers === false && confirmLowercase === false && confirmUppercase === false && confirmSpecialChar === false) {
    alert('Please choose at least one character set for your password. Click \'generate password\' again!');
    location.reload();
  }

  // concatonating all of the arrays the user selected into one merged array
    var merged = [].concat.apply([], selected);
    generatePassword(confirmLength, merged);
  }   

// set max and min limits to password length and choose random characters from merged array 

function generatePassword(confirmLength, merged){

    if (typeof confirmLength !== 'number') {
      alert('Please only enter numbers.');
        location.reload();
    }

    if (confirmLength < 8) {
      alert('Please choose a password length of at least 8 characters. Click \'generate password\' again!');
      location.reload();
    }
    
    if (confirmLength > 128) {
      alert('Please enter a password length with no more than 128 characters. Click \'generate password\' again!');
      location.reload();
    
    } else {
        confirmLength = parseInt(confirmLength);
        for (var i = 0; i < confirmLength; i++) { 
          var randomValues = merged[Math.floor(Math.random() * merged.length)];
          randomValuesArray.push(randomValues);
        }
      }
      writePassword(randomValuesArray);
    }


generateBtn.addEventListener("click", startPrompts);


// // Write password to the #password input

function writePassword(randomValuesArray) {
  var password = document.getElementById('password');
  var finalPassword = randomValuesArray.join('');
  password.textContent = finalPassword;

  anotherPassword(randomValuesArray);
}

// clears the stored values from the previous password if the user wants to create another one

function anotherPassword(randomValuesArray) {
    randomValuesArray.length = 0;
  }



