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
  height: 75px;
}

.side {
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
  color: black;
}
.right:hover {
  border-bottom: 1px solid black;
}

@media (max-width: 600px) {
  .header {
    font-size: 14px;
  }
}
@media (max-width: 768px) {
  .header {
    font-size: 16px;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .header {
    font-size: 18px;
  }
}
@media (min-width: 1025px) and (max-width: 1200px) {
  .header {
    font-size: 20px;
  }
}
@media (min-width: 1201px) {
  .header {
    font-size: 22px;
  }
}
</style>
