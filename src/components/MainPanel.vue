<template>
  <div class="mainPanel">
    <GuessPanel :task="task"></GuessPanel>
    <LifePanel></LifePanel>
  </div>
  <div class="subPanel">
    <InputPanel></InputPanel>
  </div>
</template>
<script>
import GuessPanel from "./GuessPanel.vue";
import LifePanel from "./LifePanel.vue";
import InputPanel from "./InputPanel.vue";
export default {
  name: "MainPanel",
  components: {
    GuessPanel,
    LifePanel,
    InputPanel,
  },
  data() {
    return {
      task: [],
    };
  },
  created() {
    this.task = [
      "The1 glacier came alive as the climbers hiked closer.",
      "The2 three-year-old girl ran down the beach as the kite flew behind her.",
      "She3 found it strange that people use their cellphones to actually talk to one another.",
      "Last4 Friday I saw a spotted striped blue worm shake hands with a legless lizard.",
      "The5 best part of marriage is animal crackers with peanut butter.",
    ];
  },
};
</script>
<style>
.mainPanel {
  display: flex;
  width: 100%;
  margin-top: 25px;

  height: 600px;
  width: 100%;
  padding: 25px;
}
.subPanel {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
