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
  background-color: burlywood;
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
