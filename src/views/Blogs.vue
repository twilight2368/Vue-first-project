<template>
   <div class="blog-body">
      <Blogbanner/>
      <Blogbanner/>
      <Blogbanner/>
      <Blogbanner/>
      <Blogbanner/>
      <Blogbanner/>
      <Blogbanner/>
      <Blogbanner/>
   </div>
</template>

<script>
import Blogbanner from '@/components/Blogbanner.vue';
export default {
  components: {Blogbanner}
};
</script>

<style scoped>
.blog-body{
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 3em;
  display: grid;
  gap: 1em;
  grid-template-columns: 48% 48%;
}

</style>
