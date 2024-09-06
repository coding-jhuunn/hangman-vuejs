<template>
  <div class="mainLifePanel">
    <div class="healthBarPanel">
      <div v-for="bar in healthBar" :key="bar">
        <box-icon name="heart"></box-icon>
      </div>
    </div>

    <div class="resultPanel">
      <div>result</div>
      <div>{{ resultString }}</div>
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
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.healthBarPanel {
  height: 50%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.resultPanel {
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
