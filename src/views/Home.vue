<template>
  <div>
    <div class="main-body">
      <div class="main-top">
        <div class="main-japan-intro">
          <img src="../assets/Images/picture/pc_main_top_local.jpg" alt="" class="main-img"/>
        </div>
        <div class="main-place">
          <img src="../assets/Images/picture/shinjuku-1200x800.jpg" alt="" class="main-img">
        </div>
      </div>

      <div class="main-middle">
        <div class="main-culture">
          <img src="../assets/Images/picture/m_japonskie-pamiątki_Easy-Resize.com_-570x410.jpg" alt="" class="main-img">
        </div>
        <div class="main-culture">
          <img src="../assets/Images/picture/AR4A7103_1024-1024x682.jpg" alt="" class="main-img">
        </div>
        <div class="main-culture">
          <img src="../assets/Images/picture/anime-your-name-wallpaper-preview.jpg" alt="" class="main-img">
        </div>
      </div>

      <div class="main-bottom">
        <div class="main-festival">
          <img src="../assets/Images/picture/C2qfOH7XgAE7ODZ.jpg" alt="" class="main-img">
        </div>
        <div class="main-festival">
          <img src="../assets/Images/picture/interest_festival.jpg" alt="" class="main-img">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-body {
  padding-top: 1em;
  padding-bottom: 2em;
  padding-left: 0.5em;
  padding-right: 0.5em;
}

.main-top{
  display: grid;
  grid-template-columns: 65% 35%;
  margin-bottom: 0.3em;
}
.main-japan-intro {
  width: 100%;
  height: 350px;
}

.main-place {
  width: 100%;
  height: 350px;
}

.main-place img {
  width: 100%;
  height: 100%;
}

.main-japan-intro img {
  width: 100%;
  height: 100%;
}

.main-middle {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  margin-bottom: 0.2em;
}

.main-culture img {
  width: 100%;
  height: 350px;
}

.main-bottom{
  display: grid;
  grid-template-columns: 40% 60%;
}

.main-festival img{
  width: 100%;
  height: 350px;
}

</style>
