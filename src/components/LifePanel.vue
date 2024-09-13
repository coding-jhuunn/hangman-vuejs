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
  /* background-color: skyblue; */
  width: 20%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
}
.healthBarPanel {
  /* background-color: burlywood; */
  height: 50%;
  width: 100%;
  font-size: 64px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 25px;
}
.heart {
  width: 48px;
  height: 48px;
}
.resultPanel {
  /* background-color: red; */
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
}
.resultTitle {
  height: 30%;
}
.resultString {
  height: 70%;
  font-size: 14px;
  /* background-color: green; */
  word-wrap: break-word;
}
</style>
