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
      guessedResult: "asd",
      result: "",
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
      if (value.length >= 2 || value.length === 0) {
        console.log("only signle character");
      } else {
        console.log("accepted");
        console.log(value);
      }
    },
    chooseGuess() {
      const regex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
      // this.result = this.task[Math.floor(Math.random() * this.task.length)];
      let guessedResult = "";
      this.result = this.task[0];
      for (let index = 0; index < this.result.length; index++) {
        if (regex.test(this.result[index])) {
          guessedResult += this.result[index];
        } else if (this.result[index] === " ") {
          guessedResult += " ";
        } else {
          guessedResult += "_";
        }
      }
      console.log(this.result);
      return guessedResult;
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
