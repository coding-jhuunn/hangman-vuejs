<template>
  <div class="inputPanel">
    <div class="inputDiv">
      <input type="text" placeholder="Enter your letter" />
    </div>
    <div class="btnDiv">
      <button>Guess</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "InputValue",
};
</script>
<style scoped>
.inputPanel {
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 10px;

  width: 50%;
}
input {
  font-size: 16px;
  height: 50px;
  padding: 15px 30px;
}
input:focus {
  outline: none;
}

button {
  background-color: black;
  color: #e7e7e7;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border: 1px solid black;
}
button:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
  cursor: -webkit-grab;
  cursor: grab;
}
</style>
