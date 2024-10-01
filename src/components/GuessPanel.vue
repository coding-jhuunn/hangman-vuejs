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
/* .mainGuessPanel {
  background: lightgoldenrodyellow;
}
.top {
  background: lightgray;
}
.bot {
  background: lightgreen;
}
.mainGuessPanel {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.top {
  text-indent: 25px;
}
@media (max-width: 600px) {
}
@media (max-width: 768px) {
  .mainGuessPanel {
    min-height: 250px;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .mainGuessPanel {
    min-height: 450px;
    min-width: 450px;
  }
} */
/*}
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

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
@media (min-width: 1025px) {
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

@media (min-width: 1025px) and (max-width: 1200px) {
  .main {
    width: 100%;
    padding: 0 45px 0 45px;
  }
  .top {
    font-size: 20px;
    padding: 18px;
  }
  .bot {
    font-size: 16px;
  }
}
@media (min-width: 1201px) {
  .main {
    width: 100%;
    padding: 0 30px 0 30px;
  }
  .top {
    font-size: 22px;
    padding: 18px;
  }
  .bot {
    font-size: 18px;
  }
} */
</style>
