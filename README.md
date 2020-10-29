# passwordgenerator

This page will, upon clicking the "Generate Password" button, generate a password for the user based on responses to a series of questions concerning the password's character type and length. The user will be asked whether they would like their password to include lowercase and uppercase letters, special characters, and numbers in addition to the length they would like their password to be (in terms of character number). The user will have to choose a password with a character length of at least 8 and it may not exceed 128 charaters. The user's desired password characteristics will be placed into the textarea for their use. The following is what the user will view upon navigating to the website:




You can find the website here:
https://jesscru.github.io/password-generator/


WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
<!-- onclick for the button that runs through a series of prompts -->
<!-- user responses are stored in variables within the loop -->
WHEN prompted for password criteria
THEN I select which criteria to include in the password
<!-- use booleans to run a flow through if statements; stored in variables from prev step -->
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
<!-- acceptable numerical values of password length are to be ≥ 8 and ≤ 128 -->
<!-- if statement -->
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
<!-- 4 global variables: lc, up, #, @-->
<!-- if statement for prompt -->
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
<!-- huh? think this just means it should work? -->
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
<!-- should do final else as if they so no to everything: it should alert that they must allow at least one set of characters in order to generate a password -->
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
<!-- display the password in tthe provided box -->


<!-- DONE set global character values -->
<!-- DONE make prompts for each value -->
<!-- to include the array values in the password: (when user says yes i.e. if statement) inside an if statement, put a loop. if user says yes, loop through the appropriate array and randomly choose values from it.  
    When user says yes -> push the appropriate array to a previously empty array that will be used to draw the password characters from 
    Could randomly select an index value and then return that value to a varaible??-->
<!-- store the values of each of the loops(array values) to a variable -->
<!-- need to add an additional if statement for the confirmlength prompt to set limits for characters max/min -->
<!-- figure out a way to scramble the contents of the variable -->
<!-- display the scrambled variable within the textarea on html file using the given writePassword function-->