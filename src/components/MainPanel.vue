<template>
  <div class="mainPanel">
    <div class="topPanel">
      <GuessPanel
        :tobeGuessSentence="tobeGuessSentence"
        :tobeGuessAuthor="tobeGuessAuthor"
      ></GuessPanel>

      <LifePanel
        :healthBar="healthBar"
        :resultString="resultString"
        :colorResultString="colorResultString"
      ></LifePanel>
    </div>

    <div class="subPanel">
      <InputPanel
        @guessBtn="guessBtn"
        @resetBtn="resetBtn"
        v-model="inputValue"
        :disableGuessBtn="disableGuessBtn"
        :disableResetBtn="disableResetBtn"
      ></InputPanel>
      {{ inputValue }}
    </div>
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
      tobeGuessSentence: "",
      tobeGuessAuthor: "",
      chosenSentence: "",
      completed: false,
      alreadyInput: false,
      inputLetter: [],
      resultString: "",
      disableGuessBtn: false,
      disableResetBtn: true,
      colorResultStringArray: ["red", "green", "blue"],
      colorResultString: "",
      api_url: "https://quotes-api-self.vercel.app/quote",
    };
  },

  // commit  HEAD: adding local storage
  methods: {
    guessBtn(value) {
      this.changeLetter(value, this.chosenSentence, this.tobeGuessSentence);
    },

    chooseGuess(sentence) {
      const regex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\’”1234567890]/;

      this.chosenSentence = sentence.quote;
      this.tobeGuessAuthor = sentence.author;
      for (let index = 0; index < this.chosenSentence.length; index++) {
        if (regex.test(this.chosenSentence[index])) {
          this.tobeGuessSentence += this.chosenSentence[index];
        } else if (this.chosenSentence[index] === " ") {
          this.tobeGuessSentence += " ";
        } else {
          this.tobeGuessSentence += "_";
        }
      }

      return this.tobeGuessSentence;
    },
    changeLetter(letter, chosenSent, sentToComplete) {
      this.alreadyInput = false;
      if (letter.length === 0) {
        this.resultString = "Please enter a letter";
        this.colorResultString = this.colorResultStringArray[0];
        return;
      }
      if (letter.length > 1) {
        this.resultString = "Only one letter is accepted";
        this.colorResultString = this.colorResultStringArray[0];
        return;
      }
      if (this.completed) {
        this.disableGuessBtn = true;
        this.disableResetBtn = false;
        this.resultString = "You already got it. Contratulations!!";
        this.colorResultString = this.colorResultStringArray[2];

        return;
      }
      if (this.healthBar === 0) {
        this.disableResetBtn = false;
        this.disableGuessBtn = true;
        this.resultString =
          "You don't have life anymore. The result was revealed";
        this.colorResultString = this.colorResultStringArray[0];

        return;
      } else {
        for (let i = 0; i < this.inputLetter.length; i++) {
          if (letter === this.inputLetter[i]) {
            this.alreadyInput = true;
          }
        }
      }
      if (this.alreadyInput) {
        this.resultString = `The letter " ${letter} " is already inputted`;
        this.colorResultString = this.colorResultStringArray[0];

        return;
      }

      this.resultString = `You input : ${letter}`;
      this.colorResultString = this.colorResultStringArray[1];
      this.inputLetter.push(letter);

      let isFlag = true;

      if (this.healthBar > 0) {
        for (let index = 0; index < chosenSent.length; index++) {
          if (chosenSent[index] == letter.toUpperCase()) {
            sentToComplete = sentToComplete.split("");
            sentToComplete.splice(index, 1, letter.toUpperCase());
            sentToComplete = sentToComplete.join("");
            this.tobeGuessSentence = sentToComplete;
            isFlag = false;
          } else if (chosenSent[index] === letter) {
            sentToComplete = sentToComplete.split("");
            sentToComplete.splice(index, 1, letter);
            sentToComplete = sentToComplete.join("");
            this.tobeGuessSentence = sentToComplete;

            isFlag = false;
          }
        }
        if (isFlag) {
          this.healthBar--;
          if (this.healthBar === 0) {
            this.disableGuessBtn = true;
            this.disableResetBtn = false;
          }
          this.resultString = `The letter you input does't not match anything`;
          this.colorResultString = this.colorResultStringArray[0];
        }
      } else {
        this.resultString =
          "You don't have life anymore. The result was revealed";
        this.colorResultString = this.colorResultStringArray[0];
      }

      if (this.healthBar === 0) {
        this.disableResetBtn = false;

        this.resultString =
          "You don't have life anymore. The result was revealed";
        this.colorResultString = this.colorResultStringArray[0];
        this.tobeGuessSentence = this.chosenSentence;
      }

      if (chosenSent === sentToComplete) {
        this.inputLetter = [];
        this.completed = true;
        this.disableGuessBtn = true;
        this.disableResetBtn = false;
        this.resultString = "You already got it. Contratulations!!";
        this.colorResultString = this.colorResultStringArray[2];
        chosenSent = "";
        sentToComplete = "";
      }
    },

    async fetchQuotes() {
      this.tobeGuessSentence = "";
      this.tobeGuessAuthor = "";
      try {
        const res = await fetch(this.api_url);
        const data = await res.json();
        console.log(data);
        this.fetchData = data;
        this.chooseGuess(this.fetchData);
      } catch (err) {
        console.log(err);
      }
    },
    resetBtn() {
      this.colorResultString = "";
      this.tobeGuessSentence = "";
      this.tobeGuessAuthor = "";
      this.inputLetter = [];
      this.healthBar = 3;
      this.resultString = "";
      this.fetchQuotes();
      this.disableResetBtn = true;
      this.disableGuessBtn = false;
      this.resultString = "";
      this.completed = false;
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
  flex-direction: column;
  justify-content: space-center;
  align-items: center;
  height: 590px;
}
.topPanel {
  padding: 15px 35px 15px 35px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.subPanel {
  width: 100%;
  height: 150px;
}
@media (min-width: 768px) {
  .mainPanel {
    margin-top: 30px;
  }
  .topPanel {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
}
@media (min-width: 1024px) {
  .topPanel {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
</style>
