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
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
}
input {
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  height: 40px;
  padding-left: 25px;
}
.btnDiv {
  width: 250px;
  display: flex;
  justify-content: space-evenly;
  height: 42px;
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
  padding: 10px;
  font-size: 12px;
  height: 100%;
  width: 110px;
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

/* input {
  border: none;
  border-bottom: 1px solid black;
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
}*/
/* .inputPanel {
  width: 250px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
input {
  font-size: 12px;
  padding: 10px;
  width: 100%;
  height: 100%;
}
.inputDiv {
  width: 50%;
}
button {
  padding: 10px;
  font-size: 12px;
  height: 100%;
  width: 50%;
  margin-left: 5px;
  border-radius: 5px;
}
.btnDiv {
  width: 50%;
}
@media (max-width: 600px) {
  .inputPanel {
    width: 250px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    font-size: 12px;
    padding: 10px;
    width: 100%;
    height: 100%;
  }
  .inputDiv {
    width: 50%;
  }
  button {
    padding: 10px;
    font-size: 12px;
    height: 100%;
    width: 50%;
    margin-left: 5px;
    border-radius: 5px;
  }
  .btnDiv {
    width: 50%;
  }
}
@media (max-width: 768px) {
  .inputPanel {
    width: 275px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    font-size: 14px;
    padding: 10px;
    width: 100%;
    height: 100%;
  }
  .inputDiv {
    width: 50%;
  }
  button {
    padding: 10px;
    font-size: 12px;
    height: 100%;
    width: 50%;
    margin-left: 10px;
    border-radius: 5px;
  }
  .btnDiv {
    width: 50%;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .inputPanel {
    width: 325px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    font-size: 16px;
    padding: 10px;
    width: 100%;
    height: 100%;
  }
  .inputDiv {
    width: 50%;
  }
  button {
    padding: 10px;
    font-size: 14px;
    height: 100%;
    width: 50%;
    margin-left: 18px;
    border-radius: 5px;
  }
  .btnDiv {
    width: 50%;
  }
}
@media (min-width: 1025px) {
  .inputPanel {
    width: 450px;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    font-size: 18px;
    padding: 10px;
    width: 100%;
    height: 100%;
  }
  .inputDiv {
    width: 50%;
  }
  button {
    padding: 10px;
    font-size: 16px;
    height: 100%;
    width: 50%;
    margin-left: 24px;
    border-radius: 5px;
  }
  .btnDiv {
    width: 50%;
  }
} */
</style>
