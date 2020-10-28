# passwordgenerator


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