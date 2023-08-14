<template>
  <div class="header">
    <div class="Header">
    <img src="../assets/Images/cherry-blossom.png" alt="" class="logo-header" />
    <h1> Nipponese </h1>
  </div>
  <div class="navigation">
    <nav>
      Home
    </nav>
    <nav>
      About me
    </nav>
    <nav>
      Contact
    </nav>
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
  color: azure;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.navigation nav {
  width: 6em;
  padding: 0.2em;
  border-radius: 3em;
  transition: linear 0.1s;
}
.navigation nav:hover {
  color: black;
  text-decoration: underline;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
