<template>
  <div class="mainPanel">
    <GuessPanel :task="task"></GuessPanel>
    <LifePanel></LifePanel>
  </div>
</template>
<script>
import GuessPanel from "./GuessPanel.vue";
import LifePanel from "./LifePanel.vue";
export default {
  name: "MainPanel",
  props: {
    task: Array,
  },
  components: {
    GuessPanel,
    LifePanel,
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
</style>
