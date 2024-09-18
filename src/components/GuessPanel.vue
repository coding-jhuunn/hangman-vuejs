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
  text-indent: 25px;
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
    min-height: 200px;
    font-size: 16px;
    padding: 12px;
  }
  .bot {
    font-size: 12px;
  }
}
@media (max-width: 768px) {
  .main {
    width: 100%;
    padding: 0 30px 0 30px;
  }
  .top {
    min-height: 225px;
    font-size: 18px;
    padding: 15px;
  }
  .bot {
    font-size: 14px;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .main {
    width: 100%;
    padding: 0 60px 0 60px;
  }
  .top {
    min-height: 225px;
    font-size: 18px;
    padding: 15px;
  }
  .bot {
    font-size: 16px;
  }
}
@media (min-width: 1025px) and (max-width: 1200px) {
  .main {
    width: 100%;
    padding: 0 60px 0 60px;
  }
  .top {
    font-size: 22px;
    padding: 18px;
  }
  .bot {
    font-size: 18px;
  }
}
/*

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
