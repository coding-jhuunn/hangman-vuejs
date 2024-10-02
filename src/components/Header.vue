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
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.side {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
}

a {
  text-decoration: none;
  color: black;
}
.right:hover {
  border-bottom: 1px solid black;
}

@media (max-width: 600px) {
  .side {
    font-size: 14px;
  }
}
@media (max-width: 768px) {
  .side {
    font-size: 16px;
  }
}
@media (min-width: 769px) {
  .side {
    font-size: 18px;
    height: 60px;
  }
}
</style>
