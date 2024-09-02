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
  props: {
    task: Array,
  },
  components: {
    GuessPanel,
    LifePanel,
    InputPanel,
  },
};
</script>
<style>
.mainPanel {
  display: flex;
  width: 100%;
  margin-top: 25px;
  background-color: red;
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
