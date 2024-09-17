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
.top {
  display: flex;
  align-content: center;
  justify-content: center;
  text-indent: 50px;
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

@media (max-width: 600px) {
  .main {
    width: 100%;
    padding: 0 15px 0 15px;
  }
  .top {
    min-height: 150px;
    font-size: 16px;
    padding: 12px;
  }
  .bot {
    font-size: 12px;
  }
}
/* @media (max-width: 768px) {
  .header {
    font-size: 16px;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .header {
    font-size: 18px;
  }
}
@media (min-width: 1025px) and (max-width: 1200px) {
  .header {
    font-size: 20px;
  }
}
@media (min-width: 1201px) {
  .header {
    font-size: 22px;
  }
} */
</style>
