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
@media (max-width: 600px) {
  .inputPanel {
    width: 100%;
    height: 65px;
    display: flex;
  }
  input {
    font-size: 14px;
    height: 25px;
    padding: 15px 30px;
    width: 100%;
    height: 100%;
  }
  .inputDiv {
    width: 50%;
  }
  button {
    height: 25px;
    padding: 15px 32px;
    font-size: 14px;
    height: 100%;
    width: 50%;
  }
  .btnDiv {
    width: 50%;
  }
}
</style>
