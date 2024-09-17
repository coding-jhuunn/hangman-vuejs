<template>
  <div class="mainLifePanel">
    <div class="healthBarPanel">
      <div v-for="bar in healthBar" :key="bar">
        <box-icon name="heart" class="heart"></box-icon>
      </div>
    </div>

    <div class="resultPanel">
      <div class="resultTitle">Result</div>
      <div class="resultString">{{ resultString }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LifePanel",
  props: {
    healthBar: Number,
    resultString: String,
  },
};
</script>
<style scoped>
.mainLifePanel {
  height: 75px;
  width: 100%;
}
.healthBarPanel {
  display: flex;
  justify-content: center;
  align-items: center;
}
.resultPanel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media (max-width: 600px) {
  .mainLifePanel {
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
  }
  .heart {
    width: 16px;
    height: 16px;
  }
  .healthBarPanel {
    height: 100%;
    width: 50%;
  }
  .resultPanel {
    width: 50%;
    height: 100%;
  }
}
</style>
