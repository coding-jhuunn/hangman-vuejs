<template>
  <div>{{ chooseGuess() }}</div>
</template>

<script>
export default {
  name: "GuessPanel",
  props: {
    task: Array,
  },
  methods: {
    chooseGuess() {
      const regex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
      let result = this.task[Math.floor(Math.random() * this.task.length)];
      let guessedResult = "";
      for (let index = 0; index < result.length; index++) {
        if (regex.test(result[index])) {
          guessedResult += result[index];
        } else if (result[index] === " ") {
          guessedResult += " ";
        } else {
          guessedResult += "_";
        }
      }
      return guessedResult;
    },
  },
};
</script>
<style scoped>
div {
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  padding: 0 25px 0 25px;
  letter-spacing: 5px;
}
</style>
