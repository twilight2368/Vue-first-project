<template>
  <div class="header">
    <div class="Header">
    <img src="../assets/Images/cherry-blossom.png" alt="" class="logo-header" />
    <h1> Nipponese </h1>
  </div>
  <div class="navigation">
 
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
  flex-direction: row;
}
.Header {
  width: 50%;
  background-color: black;
  color: azure;
  text-align: center;
  padding-top: 1em;
  padding-bottom: 1em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

h1 {
  font-family: "Cherry Bomb One", cursive;
}

.logo-header {
  height: 4em;
  margin-right: 2em;
}

.navigation {
  background-color: black;
  width: 50%;
}
</style>
