<template>
  <div class="mainPanel">
    <GuessPanel></GuessPanel>
    <LifePanel></LifePanel>
  </div>
</template>
<script>
import GuessPanel from "./GuessPanel.vue";
import LifePanel from "./LifePanel.vue";
export default {
  name: "MainPanel",
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

  background-color: red;
  height: 600px;
  width: 100%;
  padding: 25px;
}
</style>
