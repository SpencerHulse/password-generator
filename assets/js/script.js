// Assignment code here
let generatePassword = function () {
  let password = "";

  //function for getting the length of the password
  let length = passwordLength();
  console.log("The length of the password is " + length + " characters.");
}

let passwordLength = function() {
  let characters = "";
  
  //a validation loop to ensure a proper character length is entered
  while (!characters || characters < 8 || characters > 128) {
    //prompt the user to enter how many characters they want their password to be
    characters = window.prompt("How many characters do you want your password to be? You can choose anywhere between 8 and 128 characters!");

    //converting the string from the prompt into an integer
    characters = parseInt(characters);
    console.log(characters.length);
    console.log(!characters)

    //check for valid character length and either recursively enter the function or return the characters
    if (!characters || characters < 8 || characters > 128) {
      window.alert("You have entered an invalid character length. Please try again!");
      generatePassword();
    } else {
      return characters;
    }
  }
}

let characterTypeObj = [
  {
    name: "lowercase",
    array: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  },
  {
    name: "uppercase",
    array: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  },
  {
    name: "numeric",
    array: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  },
  {
    name: "special",
    array: [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
  }
];

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
