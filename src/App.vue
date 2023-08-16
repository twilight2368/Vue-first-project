<template>
  <div>
    <div>
      <Header />
    </div>
    <Body>
      <router-view />
    </Body>
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

.header {
  width: 100%;
  text-align: center;
  margin: 0;
}

h1 {
  margin: 0;
}
</style>
