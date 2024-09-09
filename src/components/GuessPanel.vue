<template>
  <div class="main">
    <div class="top">{{ tobeGuessSentence }}</div>
    <div class="bot">{{ tobeGuessAuthor }}</div>
  </div>
</template>

<script>
export default {
  name: "GuessPanel",
  props: {
    tobeGuessSentence: String,
    tobeGuessAuthor: String,
  },
};
</script>
<style scoped>
.main {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 25px 0 25px;
}
.top {
  font-size: 26px;
  letter-spacing: 3px;
  max-width: 75%;
  padding: 15px;
}
.bot {
  font-size: 18px;
}
</style>
