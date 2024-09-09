<template>
  <div class="mainPanel">
    <GuessPanel :guessedResult="guessedResult"></GuessPanel>
    <div v-if="fetchData">
      <p>{{ fetchData.quote }}</p>
      <p>{{ fetchData.author }}</p>
    </div>
    <LifePanel :healthBar="healthBar" :resultString="resultString"></LifePanel>
  </div>
  <div class="subPanel">
    <InputPanel
      @guessBtn="guessBtn"
      v-model="inputValue"
      :hideGuessBtn="hideGuessBtn"
    ></InputPanel>
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
      fetchData: null,
      healthBar: 3,
      inputValue: "",
      guessedResult: "",
      chosenSentence: "",
      completed: false,
      alreadyInput: false,
      inputLetter: [],
      resultString: "",
      hideGuessBtn: false,
      api_url: "https://quotes-api-self.vercel.app/quote",
    };
  },
  methods: {
    guessBtn(value) {
      this.changeLetter(value, this.chosenSentence, this.guessedResult);
    },

    chooseGuess(sentence) {
      const regex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
      // this.result = this.task[Math.floor(Math.random() * this.task.length)];

      this.chosenSentence = sentence.quote;
      for (let index = 0; index < this.chosenSentence.length; index++) {
        if (regex.test(this.chosenSentence[index])) {
          this.guessedResult += this.chosenSentence[index];
        } else if (this.chosenSentence[index] === " ") {
          this.guessedResult += " ";
        } else {
          this.guessedResult += "_";
        }
      }

      return this.guessedResult;
    },
    changeLetter(letter, chosenSent, sentToComplete) {
      this.alreadyInput = false;
      if (letter.length === 0) {
        this.resultString = "You didn't enter anything";
        return;
      }
      if (letter.length > 1) {
        this.resultString = "Only one letter is accepted";
        return;
      }
      if (this.completed) {
        this.resultString = "You already got it. Contratulations!!";

        return;
      }
      if (this.healthBar === 0) {
        this.hideGuessBtn = true;
        this.resultString = "You don't have life anymore";

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
        this.resultString = `The letter " ${letter} " is already inputted`;

        return;
      }

      this.resultString = `You input : ${letter}`;

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
          if (this.healthBar === 0) {
            this.hideGuessBtn = true;
          }
          this.resultString = `The letter you input does't not match anything`;

          console.log("does not match anything");
        }
      } else {
        this.resultString = "You don't have life anymore";

        console.log("you don't have any life");
      }

      console.log(chosenSent);
      console.log(sentToComplete);

      if (this.healthBar === 0) {
        this.resultString = "You don't have life anymore";
      }
      if (chosenSent === sentToComplete) {
        this.inputLetter = [];
        this.resultString = "You already got it. Contratulations!!";
        this.completed = true;
      }
    },

    async fetchQuotes() {
      try {
        const res = await fetch(this.api_url);
        const data = await res.json();
        console.log("complete");

        this.fetchData = data;
        this.chooseGuess(this.fetchData);
      } catch (err) {
        console.log("faild to catch");
      }
    },
  },
  created() {
    this.fetchQuotes();
  },
};
</script>
<style>
.mainPanel {
  display: flex;
  width: 100%;
  margin-top: 25px;
  justify-content: center;
  align-items: center;
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
