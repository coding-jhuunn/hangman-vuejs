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
      let result = this.task[Math.floor(Math.random() * this.task.length)];
      return result;
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
