<template>
  <Header></Header>
  <MainPanel :task="task"></MainPanel>
</template>

<script>
import Header from "./components/Header.vue";
import MainPanel from "./components/MainPanel.vue";

export default {
  name: "App",
  components: {
    Header,
    MainPanel,
  },
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    this.task = [
      "The glacier came alive as the climbers hiked closer.",
      "The three-year-old girl ran down the beach as the kite flew behind her.",
      "She found it strange that people use their cellphones to actually talk to one another.",
      "Last Friday I saw a spotted striped blue worm shake hands with a legless lizard.",
      "The best part of marriage is animal crackers with peanut butter.",
    ];
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
</style>
