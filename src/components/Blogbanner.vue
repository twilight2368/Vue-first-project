<template>
  <div class="blog-banner">
    <img src="../assets/Images/banner.jpg" alt="" />
    <div class="blog-header">
      <div class="blog-header-name">
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
          laudantium voluptate illum ratione officiis.
        </h3>
      </div>
      <div class="blog-small-content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
        qui reiciendis beatae voluptate suscipit sint alias doloribus fuga,
        saepe culpa, consectetur numquam ipsa excepturi autem modi temporibus
        eaque eius magni? Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Iusto molestias iure modi quidem vel esse voluptates assumenda
        accusamus dolores, facere minus consequuntur laboriosam optio earum nemo
        ipsum ab reprehenderit ullam?
      </div>
      
      <div class="blog-link">
        <router-link to="/">Learn more ...</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogBanner",
};
</script>

<style scoped>
.blog-banner {
  width: 100%;
  height: 15em;
  position: relative;
}

.blog-banner img {
  width: 100%;
  height: 100%;
}

.blog-header {
  position: absolute;
  bottom: 0;
  width: auto;
  padding-left: 0.3em;
  padding-right: 0.3em;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  height: 3em;
  transition: linear 0.4s;
}


.blog-banner:hover .blog-header{
    height: 100%;
}

.blog-small-content {
    opacity: 0;
    padding-top: 0.5em;
    transition: linear 0.2s;
    transition-delay: 0.3s;
}

.blog-banner:hover .blog-small-content{
    opacity: 1;
}

.blog-header h3 {
    transition: linear 0.4s;
    margin: 0;
}

.blog-banner:hover .blog-header h3{
    color: pink;
}

.blog-header-name{
    height: 3em;
}

.blog-link{
    position: absolute;
    bottom: 0;
    left: 0.5em;
    z-index: 10;
    height: 0;
    width: 100%;
}

.blog-banner:hover .blog-link{
    height: 2em;
}

a {
    text-decoration: none;
    color: pink;
}
</style>
