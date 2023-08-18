<template>
  <div ref="main">
    <div class="header-app">
      <Header />
    </div>
    <div class="body-app">
      <Body>
        <router-view />
      </Body>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Body,
    Footer,
  },
};
</script>

<style>
#app {
  margin: 0;
}

.header-app {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
}

.body-app{
  margin-top: 6.5em;
}

.header {
  width: 100%;
  text-align: center;
  margin: 0;
}

h1 {
  margin: 0;
}
</style>
