<template>
  <div class="header">
    <div class="left side">Hang Man Game</div>
    <div class="right side">About</div>
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
</style>
