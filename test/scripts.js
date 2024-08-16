const sentences = "as it moves";

let guess = 3;

let star = 0;

let result = "";

for (i = 0; i < sentences.length; i++) {
  if (sentences[i] === " ") {
    result += " ";
  } else {
    result += "_";
  }
}

function changeLetter(letter) {
  console.log("------");
  if (guess === 0) {
    console.log("you cant play the game anymore");
    return;
  } else {
  }
  console.log(`you guess letters is: ${letter}`);

  let isFlag = true;
  if (guess > 0) {
    for (let i = 0; i < sentences.length; i++) {
      if (sentences[i] === letter) {
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
    console.log("You got it");
  }
}

changeLetter("s");
changeLetter("a");
changeLetter("t");
changeLetter("m");
changeLetter("o");
changeLetter("v");
changeLetter("e");
changeLetter("i");
