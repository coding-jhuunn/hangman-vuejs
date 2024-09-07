<template>
  <div class="mainLifePanel">
    <div class="healthBarPanel">
      <div v-for="bar in healthBar" :key="bar">
        <box-icon name="heart"></box-icon>
      </div>
    </div>

    <div class="resultPanel">
      <div>Result</div>
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
  width: 40%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
}
.healthBarPanel {
  height: 50%;
  width: 100%;
  font-size: 64px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: green;
  padding: 25px;
}
.resultPanel {
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  padding: 25px;
}

.resultString {
  font-size: 14px;
}
</style>
