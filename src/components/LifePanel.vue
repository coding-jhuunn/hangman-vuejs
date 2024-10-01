<template>
  <div class="mainLifePanel">
    <div class="healthBarPanel center">
      <div v-for="bar in healthBar" :key="bar" class="box">
        <box-icon name="heart" class="heart"></box-icon>
      </div>
    </div>

    <div class="resultPanel center">
      <div class="resultTitle">
        <p v-if="!resultString">Waiting...</p>
        <p v-else-if="resultString">{{ resultString }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LifePanel",
  props: {
    healthBar: Number,
    resultString: String,
  },
};
</script>
<style scoped>
.heart {
  width: 28px;
  height: 28px;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 75px;
}
.mainLifePanel {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.healthBarPanel {
  display: flex;
}
.resultPanel {
  font-size: 12px;
}
.resultTitle {
  width: 100%;
  display: flex;
  justify-content: center;
}
@media (min-width: 576px) and (max-width: 991.98px) {
  .resultPanel {
    font-size: 14px;
  }
  .heart {
    width: 32px;
    height: 32px;
  }
}
@media (min-width: 768px) {
  .mainLifePanel {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
@media (min-width: 992px) {
  .resultPanel {
    font-size: 16px;
  }
  .heart {
    width: 34px;
    height: 34px;
  }
}

/* .mainLifePanel {
  background: lightgrey;
}
.healthBarPanel {
  background: lightgreen;
}
.resultPanel {
  background: lightgoldenrodyellow;
}
.resultTitle {
  background: lightseagreen;
}

.healthBarPanel {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
}
.resultPanel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50%;
}
.resultString {
  background: lightsteelblue;
  display: flex;
}
@media (max-width: 768px) {
  .mainLifePanel {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .resultPanel {
    display: flex;
    justify-content: space-between;
  }
} */
/* .mainLifePanel {
  height: 75px;
  width: 100%;
}
.healthBarPanel {
  display: flex;
  justify-content: center;
  align-items: center;
}
.resultPanel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.mainLifePanel {
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
}
.heart {
  width: 16px;
  height: 16px;
}
.healthBarPanel {
  height: 100%;
  width: 50%;
}
.resultPanel {
  width: 50%;
  height: 100%;
}
@media (max-width: 600px) {
  .mainLifePanel {
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
  }
  .heart {
    width: 16px;
    height: 16px;
  }
  .healthBarPanel {
    height: 100%;
    width: 50%;
  }
  .resultPanel {
    width: 50%;
    height: 100%;
  }
}
@media (max-width: 768px) {
  .mainLifePanel {
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
  }
  .heart {
    width: 18px;
    height: 18px;
  }
  .healthBarPanel {
    height: 100%;
    width: 50%;
  }
  .resultPanel {
    width: 50%;
    height: 100%;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .mainLifePanel {
    height: 125px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
  }
  .heart {
    width: 20px;
    height: 20px;
  }
  .healthBarPanel {
    height: 100%;
    width: 50%;
  }
  .resultPanel {
    width: 50%;
    height: 100%;
  }
}
@media (min-width: 1025px) {
  .mainLifePanel {
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
  }
  .heart {
    width: 32px;
    height: 32px;
  }
  .healthBarPanel {
    height: 100%;
    width: 100%;
  }
  .resultPanel {
    width: 100%;
    height: 100%;
  }
  .resutlTitle {
    font-size: 16px;
  }
  .resultString {
    font-size: 14px;
  }
} */
</style>
