<template>
  <div>{{ guessedResult }}</div>
</template>

<script>
export default {
  name: "GuessPanel",
  props: {
    guessedResult: String,
  },
};
</script>
<style scoped>
div {
  width: 70%;
  max-width: 450px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  padding: 0 25px 0 25px;
  letter-spacing: 5px;
}
</style>
