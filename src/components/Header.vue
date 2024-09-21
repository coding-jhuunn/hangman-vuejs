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
  margin-bottom: 24px;
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
@media (min-width: 769px) and (max-width: 1024px) {
  .header {
    margin-bottom: 36px;
  }
  .side {
    font-size: 18px;
    height: 60px;
  }
}
@media (min-width: 1025px) and (max-width: 1200px) {
  .header {
    margin-bottom: 40px;
  }
  .side {
    height: 64px;
    font-size: 20px;
  }
}
@media (min-width: 1201px) {
  .header {
    margin-bottom: 40px;
  }
  .side {
    height: 68px;
    font-size: 22px;
  }
}
</style>
