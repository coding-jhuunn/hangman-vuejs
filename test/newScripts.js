const sentences = "as";

let guess = 3;

let star = 0;
let guessedLetters = [];
let already = false;
let result = [];
let completed = false;
const regex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;

for (i = 0; i < sentences.length; i++) {
  if (regex.test(sentences[i])) {
    result += sentences[i];
  } else if (sentences[i] === " ") {
    result += " ";
  } else {
    result += "_";
  }
}

function changeLetter(letter) {
  if (letter.length > 1) {
    return console.log("Only one letter is accepted");
  }
  if (completed) {
    return console.log("You already got it");
  }
  if (guess === 0) {
    console.log("you cant play the game anymore");
    return;
  } else {
    for (let i = 0; i < guessedLetters.length; i++) {
      if (letter === guessedLetters[i]) {
        console.log("You already input this letter");
        already = true;
      }
    }

    if (already) {
      return "already guessed";
    }
    console.log("------");
  }
  console.log(`you guess letters is: ${letter}`);
  guessedLetters.push(letter);

  let isFlag = true;
  if (guess > 0) {
    for (let i = 0; i < sentences.length; i++) {
      if (sentences[i] == letter.toUpperCase()) {
        result = result.split("");
        result.splice(i, 1, letter.toUpperCase());
        result = result.join("");
        isFlag = false;
      } else if (sentences[i] === letter) {
        result = result.split("");
        result.splice(i, 1, letter);
        result = result.join("");
        isFlag = false;
      }
    }
    if (isFlag) {
      guess--;
      console.log("does not match anything");
    }
  } else {
    console.log("you dont have any life");
  }
  console.log(`Guess left: ${guess}`);

  console.log(sentences);
  console.log(result);
  if (sentences === result) {
    guessedLetters = [];
    console.log("You got it");
    completed = true;
  }
}

changeLetter("s");
changeLetter("a");

console.log(guessedLetters);
