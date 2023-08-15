<template>
  <div class="header">
    <div class="Header">
      <img
        src="../assets/Images/cherry-blossom.png"
        alt=""
        class="logo-header"
      />
      <h1>Nipponese</h1>
    </div>
    <div class="navigation">
      <nav><router-link to="/">Home</router-link> </nav>
      <nav>
        <router-link to="/about">About me</router-link>
      </nav>
      <nav> <router-link to="/contact">Contact me</router-link></nav>
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
}

a {
  text-decoration: none;
}
.navigation nav a.router-link-exact-active {
  color: pink;
  padding: 0.2em;
  border-style: inset;
  border-top-width: 0;
  border-right-width: 0;
  border-left-width: 0;
  border-bottom-width: 2px;
  border-color: pink;
} 

a:visited {
  color: aliceblue;
}

a:active {
   color: pink;
}
</style>
