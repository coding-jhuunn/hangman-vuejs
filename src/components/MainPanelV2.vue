<template>
  <div class="mainPanel">
    <div class="topPanel">
      <GuessPanel
        :tobeGuessSentence="userStatus.tobeGuessSentence"
        :tobeGuessAuthor="userStatus.tobeGuessAuthor"
      ></GuessPanel>

      <LifePanel
        :healthBar="userStatus.healthBar"
        :resultString="userStatus.resultString"
        :colorResultString="userStatus.colorResultString"
      ></LifePanel>
    </div>

    <div class="subPanel">
      <InputPanel
        @guessBtn="guessBtn"
        @resetBtn="resetBtn"
        v-model="this.inputValue"
        :disableGuessBtn="userStatus.disableGuessBtn"
        :disableResetBtn="userStatus.disableResetBtn"
      ></InputPanel>
      {{ inputValue }}
    </div>
  </div>
</template>
<script>
import GuessPanel from "./GuessPanel.vue";
import LifePanel from "./LifePanel.vue";
import InputPanel from "./InputPanel.vue";
import { onMounted, ref, useAttrs, watch } from "vue";

export default {
  name: "MainPanelV2",
  components: {
    GuessPanel,
    LifePanel,
    InputPanel,
  },

  // setup() {
  //   const userStatus = ref({
  //     healthBar: 3,
  //     tobeGuessSentence: "",
  //     tobeGuessAuthor: "",
  //     chosenSentence: "",
  //     completed: false,
  //     alreadyInput: false,
  //     inputLetter: [],
  //     resultString: "",
  //     disableGuessBtn: false,
  //     disableResetBtn: true,
  //     colorResultString: "",
  //   });
  // },

  data() {
    return {
      api_url: "https://quotes-api-self.vercel.app/quote",
      userStatus: ref({
        healthBar: 3,
        tobeGuessSentence: "",
        tobeGuessAuthor: "",
        chosenSentence: "",
        completed: false,
        alreadyInput: false,
        inputLetter: [],
        resultString: "",
        disableGuessBtn: false,
        disableResetBtn: true,
        colorResultString: "",
      }),
      inputValue: "",
      colorResultStringArray: ["red", "green", "blue"],
      fetchData: null,
    };
  },

  created() {
    // if(this.getUseStatus){
    //   this.getUseStatus()
    // }
    // else{
    //    this.fetchQuotes();
    // }
    // if (this.getUseStatus()) {
    //   console.log("local item");
    //   return;
    // } else {
    //   console.log("fetch user");
    this.fetchQuotes();
  },
  methods: {
    saveUserStatus() {
      localStorage.setItem("userStatus", JSON.stringify(this.userStatus));
    },
    // getUseStatus() {
    //   let storedUser = localStorage.getItem("userStatus");
    //   if (storedUser) {
    //     this.userStatus = JSON.parse(storedUser);
    //     return this.userStatus;
    //   } else {
    //     return false;
    //   }
    // },
    async fetchQuotes() {
      try {
        const res = await fetch(this.api_url);
        const data = await res.json();
        this.fetchData = data;
        this.chooseGuess(this.fetchData);
        console.log(this.fetchData);
      } catch (err) {
        console.log(err);
      }
    },
    chooseGuess(sentence) {
      const regex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\’”1234567890]/;

      this.userStatus.chosenSentence = sentence.quote;
      this.userStatus.tobeGuessAuthor = sentence.author;
      for (
        let index = 0;
        index < this.userStatus.chosenSentence.length;
        index++
      ) {
        if (regex.test(this.userStatus.chosenSentence[index])) {
          this.userStatus.tobeGuessSentence +=
            this.userStatus.chosenSentence[index];
        } else if (this.userStatus.chosenSentence[index] === " ") {
          this.userStatus.tobeGuessSentence += " ";
        } else {
          this.userStatus.tobeGuessSentence += "_";
        }
      }

      return this.userStatus.tobeGuessSentence;
    },
    resetBtn() {
      this.userStatus = {
        healthBar: 3,
        tobeGuessSentence: "",
        tobeGuessAuthor: "",
        chosenSentence: "",
        completed: false,
        alreadyInput: false,
        inputLetter: [],
        resultString: "",
        disableGuessBtn: false,
        disableResetBtn: true,
        colorResultString: "",
      };
      this.saveUserStatus();
      this.fetchQuotes();
    },
    guessBtn(value) {
      this.changeLetter(
        value,
        this.userStatus.chosenSentence,
        this.userStatus.tobeGuessSentence
      );
      this.saveUserStatus();
    },
    changeLetter(letter, chosenSent, sentToComplete) {
      this.userStatus.alreadyInput = false;
      if (letter.length === 0) {
        this.userStatus.resultString = "Please enter a letter";
        this.userStatus.colorResultString = this.colorResultStringArray[0];
        return;
      }
      if (letter.length > 1) {
        this.userStatus.resultString = "Only one letter is accepted";
        this.userStatus.colorResultString = this.colorResultStringArray[0];
        return;
      }
      if (this.completed) {
        this.userStatus.disableGuessBtn = true;
        this.userStatus.disableResetBtn = false;
        this.userStatus.resultString = "You already got it. Contratulations!!";
        this.userStatus.colorResultString = this.colorResultStringArray[2];

        return;
      }
      if (this.userStatus.healthBar === 0) {
        this.userStatus.disableResetBtn = false;
        this.userStatus.disableGuessBtn = true;
        this.userStatus.resultString =
          "You don't have life anymore. The result was revealed";
        this.userStatus.colorResultString = this.colorResultStringArray[0];

        return;
      } else {
        for (let i = 0; i < this.userStatus.inputLetter.length; i++) {
          if (letter === this.userStatus.inputLetter[i]) {
            this.userStatus.alreadyInput = true;
          }
        }
      }
      if (this.userStatus.alreadyInput) {
        this.userStatus.resultString = `The letter " ${letter} " is already inputted`;
        this.userStatus.colorResultString = this.colorResultStringArray[0];

        return;
      }

      this.userStatus.resultString = `You input : ${letter}`;
      this.userStatus.colorResultString = this.colorResultStringArray[1];
      this.userStatus.inputLetter.push(letter);

      let isFlag = true;

      if (this.userStatus.healthBar > 0) {
        for (let index = 0; index < chosenSent.length; index++) {
          if (chosenSent[index] == letter.toUpperCase()) {
            sentToComplete = sentToComplete.split("");
            sentToComplete.splice(index, 1, letter.toUpperCase());
            sentToComplete = sentToComplete.join("");
            this.userStatus.tobeGuessSentence = sentToComplete;
            isFlag = false;
          } else if (chosenSent[index] === letter) {
            sentToComplete = sentToComplete.split("");
            sentToComplete.splice(index, 1, letter);
            sentToComplete = sentToComplete.join("");
            this.userStatus.tobeGuessSentence = sentToComplete;

            isFlag = false;
          }
        }
        if (isFlag) {
          this.userStatus.healthBar--;
          if (this.userStatus.healthBar === 0) {
            this.userStatus.disableGuessBtn = true;
            this.userStatus.disableResetBtn = false;
          }
          this.userStatus.resultString = `The letter you input does't not match anything`;
          this.userStatus.colorResultString = this.colorResultStringArray[0];
        }
      } else {
        this.userStatus.resultString =
          "You don't have life anymore. The result was revealed";
        this.userStatus.colorResultString = this.colorResultStringArray[0];
      }

      if (this.userStatus.healthBar === 0) {
        this.userStatus.disableResetBtn = false;

        this.userStatus.resultString =
          "You don't have life anymore. The result was revealed";
        this.userStatus.colorResultString = this.colorResultStringArray[0];
        this.userStatus.tobeGuessSentence = this.userStatus.chosenSentence;
      }

      if (chosenSent === sentToComplete) {
        this.userStatus.inputLetter = [];
        this.userStatus.completed = true;
        this.userStatus.disableGuessBtn = true;
        this.userStatus.disableResetBtn = false;
        this.userStatus.resultString = "You already got it. Contratulations!!";
        this.userStatus.colorResultString = this.colorResultStringArray[2];
        chosenSent = "";
        sentToComplete = "";
      }
    },
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
