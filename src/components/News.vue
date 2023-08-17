<template>
  <div class="body-news">
    <div class="news-img">
      <img src="../assets/Images/newspaper-background-concept.jpg" alt="" />
    </div>
    <div class="news-name">
      <router-link to="/"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, maiores. </router-link>
      <div>01/01/0101</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
};
</script>

<style scoped>
.body-news {
  width: 100%;
  padding: 0;
}

.news-img {
  text-align: center;
}

.news-img img {
  width: 80%;
}

.news-name {
  width: 80%;
  margin: auto;
  overflow-wrap: break-word;
}


a {
  color: azure;
  text-decoration: none;
}

.body-news:hover a{
  color: pink;
}
</style>
