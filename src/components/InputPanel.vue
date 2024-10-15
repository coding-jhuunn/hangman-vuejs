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
      <button
        @click="startBtn"
        :class="{
          'btn-active': !disableStartBtn,
          'btn-inactive': disableStartBtn,
        }"
        :disabled="disableStartBtn"
      >
        Start
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
    disableStartBtn: Boolean,
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
    startBtn() {
      this.$emit("startBtn");
    },
  },
};
</script>
<style scoped>
.inputPanel {
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
input {
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  height: 20px;
  padding: 10px;
}
.btnDiv {
  width: 400px;
  display: flex;
  justify-content: space-evenly;
  height: 36px;
}
button {
  background-color: black;
  color: #e7e7e7;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: px;
  border: 1px solid black;
  padding: 5px;
  font-size: 12px;
  height: 100%;
  width: 75px;
  border-radius: 5px;
}
button:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
  cursor: -webkit-grab;
  cursor: grab;
}

.btn-active {
  color: white;
}

.btn-inactive {
  background-color: black;
  color: gray;
  pointer-events: none;
  cursor: not-allowed;
}
.btn-inactive:hover {
  pointer-events: none;
  cursor: not-allowed;
}
@media (min-width: 768px) {
  .btnDiv {
    width: 400px;
    display: flex;
    justify-content: space-evenly;
    height: 36px;
  }
}
</style>
