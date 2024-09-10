<template>
  <div class="inputPanel">
    <div class="inputDiv">
      <input
        type="text"
        name="guessLetter"
        v-model="guessLetter"
        placeholder="Enter your letter"
      />
    </div>
    <div class="btnDiv">
      <button @click="guessBtn" :disabled="hideGuessBtn">Guess</button>
      <button @click="resetBtn">Reset</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "InputValue",
  props: {
    inputValue: String,
    hideGuessBtn: Boolean,
  },
  data() {
    return {
      guessLetter: "",
    };
  },
  methods: {
    guessBtn(guessLetter) {
      this.$emit("guessBtn", this.guessLetter);
      this.guessLetter = "";
    },
    resetBtn() {
      this.$emit("resetBtn");
    },
  },
  // methods: {
  //   guessBtn() {
  //     if (this.inputValue.length >= 2 || this.inputValue.length === 0) {
  //       console.log("only single character");
  //       this.inputValue = "";
  //     } else {
  //       if (this.inputValue) console.log(this.inputValue);
  //       this.submittedValue = this.inputValue;
  //       this.inputValue = "";
  //     }
  //   },
  // },
};
</script>
<style scoped>
.inputPanel {
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 10px;

  width: 50%;
}
input {
  font-size: 16px;
  height: 50px;
  padding: 15px 30px;
}
input:focus {
  outline: none;
}

button {
  background-color: black;
  color: #e7e7e7;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border: 1px solid black;
}
button:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
  cursor: -webkit-grab;
  cursor: grab;
}

.guessButton:hover {
  cursor: not-allowed;
}
</style>
