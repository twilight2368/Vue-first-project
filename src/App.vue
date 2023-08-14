<template>
  <div>
    <Header/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    Header
  }
  
}
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
