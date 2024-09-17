<template>
  <div class="header">
    <div class="left side">Hang Man Game</div>
    <div class="right side">
      <a href="https://github.com/coding-jhuunn/learn-vue-part2" target="_blank"
        >About</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-around;
  height: 75px;
}

.side {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  width: 50%;
}

.side:hover {
  border-bottom: 1px solid gainsboro;
}
a {
  text-decoration: none;
  color: black;
}
</style>
