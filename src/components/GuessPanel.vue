<template>
  <div class="mainGuessPanel">
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
.mainGuessPanel {
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-indent: 25px;
  width: 200px;
}
.top {
  font-size: 14px;
}
.bot {
  margin-top: 15px;
  font-size: 12px;
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .mainGuessPanel {
    width: 250px;
  }
  .top {
    font-size: 16px;
  }
  .bot {
    font-size: 14px;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .mainGuessPanel {
    width: 450px;
  }
  .top {
    font-size: 18px;
  }
  .bot {
    font-size: 16px;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .mainGuessPanel {
    width: 650px;
  }
  .top {
    font-size: 20px;
  }
  .bot {
    font-size: 18px;
  }
}
@media (min-width: 1200px) {
  .mainGuessPanel {
    width: 720px;
  }
  .top {
    font-size: 20px;
  }
  .bot {
    font-size: 18px;
  }
}
</style>
