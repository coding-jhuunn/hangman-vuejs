<template>
  <div class="mainLifePanel">
    <div class="healthBarPanel center">
      <div v-for="bar in healthBar" :key="bar" class="box">
        <box-icon name="heart" class="heart"></box-icon>
      </div>
    </div>

    <div class="resultPanel center">
      <div class="resultTitle">
        <p v-if="!disableStartBtn">Please start the game</p>
        <p v-else-if="disableStartBtn" :class="colorResultString">
          {{ resultString }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LifePanel",
  props: {
    healthBar: Number,
    resultString: String,
    colorResultString: String,
    disableStartBtn: Boolean,
  },
};
</script>
<style scoped>
.green {
  color: green;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
.heart {
  width: 28px;
  height: 28px;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 75px;
}
.mainLifePanel {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.healthBarPanel {
  display: flex;
}
.resultPanel {
  font-size: 12px;
}
.resultTitle {
  width: 100%;
  display: flex;
  justify-content: center;
}
@media (min-width: 576px) and (max-width: 991.98px) {
  .resultPanel {
    font-size: 12px;
  }
  .heart {
    width: 32px;
    height: 32px;
  }
}
@media (min-width: 768px) {
  .mainLifePanel {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
@media (min-width: 992px) {
  .resultPanel {
    font-size: 14px;
  }
  .heart {
    width: 34px;
    height: 34px;
  }
}
</style>
