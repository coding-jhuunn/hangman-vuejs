<template>
  <Header></Header>
  <MainPanel></MainPanel>
</template>

<script>
import Header from "./components/Header.vue";
import MainPanel from "./components/MainPanel.vue";

export default {
  name: "App",
  data() {
    return {
      tasks: [],
    };
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
