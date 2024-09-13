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
      <button
        :disabled="disableGuessBtn"
        @click="guessBtn"
        :class="{
          'btn-active': !disableGuessBtn,
          'btn-inactive': disableGuessBtn,
        }"
      >
        Guess
      </button>
      <button
        @click="resetBtn"
        :class="{
          'btn-active': !disableResetBtn,
          'btn-inactive': disableResetBtn,
        }"
        :disabled="disableResetBtn"
      >
        Reset
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "InputValue",
  props: {
    inputValue: String,
    disableResetBtn: Boolean,
    disableGuessBtn: Boolean,
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
.btnDiv {
  display: flex;
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
.btn-active {
  /* Active background color */
  color: white;
}

.btn-inactive {
  background-color: black; /* Inactive background color */
  color: gray;
  pointer-events: none;
  cursor: not-allowed;
}
.btn-inactive:hover {
  pointer-events: none;
  cursor: not-allowed;
}
</style>
