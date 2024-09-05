<template>
  <div class="mainPanel">
    <GuessPanel :task="task" :guessedResult="guessedResult"></GuessPanel>
    <LifePanel :healthBar="healthBar"></LifePanel>
  </div>
  <div class="subPanel">
    <InputPanel @guessBtn="guessBtn" v-model="inputValue"></InputPanel>
    {{ inputValue }}
  </div>
</template>
<script>
import GuessPanel from "./GuessPanel.vue";
import LifePanel from "./LifePanel.vue";
import InputPanel from "./InputPanel.vue";

export default {
  name: "MainPanel",
  components: {
    GuessPanel,
    LifePanel,
    InputPanel,
  },
  data() {
    return {
      healthBar: 3,
      inputValue: "",
      guessedResult: "",
      chosenSentence: "",
      completed: false,
      alreadyInput: false,
      inputLetter: [],
    };
  },
  created() {
    this.task = [
      "The1 glacier came alive as the climbers hiked closer.",
      "The2 three-year-old girl ran down the beach as the kite flew behind her.",
      "She3 found it strange that people use their cellphones to actually talk to one another.",
      "Last4 Friday I saw a spotted striped blue worm shake hands with a legless lizard.",
      "The5 best part of marriage is animal crackers with peanut butter.",
    ];
    this.guessedResult = this.chooseGuess();
  },
  methods: {
    guessBtn(value) {
      this.changeLetter(value, this.chosenSentence, this.guessedResult);
    },

    chooseGuess() {
      const regex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
      // this.result = this.task[Math.floor(Math.random() * this.task.length)];
      this.guessedResult = "";
      this.chosenSentence = this.task[0];
      for (let index = 0; index < this.chosenSentence.length; index++) {
        if (regex.test(this.chosenSentence[index])) {
          this.guessedResult += this.chosenSentence[index];
        } else if (this.chosenSentence[index] === " ") {
          this.guessedResult += " ";
        } else {
          this.guessedResult += "_";
        }
      }
      console.log(this.chosenSentence);
      console.log(this.guessedResult);
      return this.guessedResult;
    },
    changeLetter(letter, chosenSent, sentToComplete) {
      this.alreadyInput = false;
      if (letter.length > 1) {
        return console.log("Only one letter is accepted");
      }
      if (this.completed) {
        return console.log("You already got it");
      }
      if (this.healthBar === 0) {
        console.log("you can't play the game anymore");
        return;
      } else {
        for (let i = 0; i < this.inputLetter.length; i++) {
          if (letter === this.inputLetter[i]) {
            console.log("You already input this letter");
            this.alreadyInput = true;
          }
        }
      }
      if (this.alreadyInput) {
        return console.log("already guess");
      }
      console.log("-------");
      console.log(`you guess letters is: ${letter}`);
      this.inputLetter.push(letter);
      console.log(this.inputLetter);

      let isFlag = true;

      if (this.healthBar > 0) {
        for (let index = 0; index < chosenSent.length; index++) {
          if (chosenSent[index] == letter.toUpperCase()) {
            sentToComplete = sentToComplete.split("");
            sentToComplete.splice(index, 1, letter.toUpperCase());
            sentToComplete = sentToComplete.join("");
            this.guessedResult = sentToComplete;
            isFlag = false;
          } else if (chosenSent[index] === letter) {
            sentToComplete = sentToComplete.split("");
            sentToComplete.splice(index, 1, letter);
            sentToComplete = sentToComplete.join("");
            this.guessedResult = sentToComplete;

            isFlag = false;
          }
        }
        if (isFlag) {
          this.healthBar--;
          console.log("does not match anything");
        }
      } else {
        console.log("you don't have any life");
      }
      console.log(`Guess left:${this.healthBar}`);

      console.log(chosenSent);
      console.log(sentToComplete);

      if (chosenSent === sentToComplete) {
        this.inputLetter = [];
        console.log("you got it");
        this.completed = true;
      }
    },
  },
};
</script>
<style>
.mainPanel {
  display: flex;
  width: 100%;
  margin-top: 25px;

  height: 600px;
  width: 100%;
  padding: 25px;
}
.subPanel {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
