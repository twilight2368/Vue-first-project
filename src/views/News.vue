<template>
  <div class="body">
    <div>
      <h2>Economic</h2>
      <div class="news-container">
          <div>
            <News/>
          </div>
          <div>
            <News/>
          </div>
          <div>
            <News/>
          </div>
          <div>
            <News/>
          </div>
      </div>
    </div>

    <div>
      <h2>Politic</h2>
      <div class="news-container">
          <div>
            <News/>
          </div>
          <div>
            <News/>
          </div>
          <div>
            <News/>
          </div>
          <div>
            <News/>
          </div>
      </div>
    </div>


    <div>
      <h2>Sports</h2>
      <div class="news-container">
          <div>
            <News/>
          </div>
          <div>
            <News/>
          </div>
          <div>
            <News/>
          </div>
          <div>
            <News/>
          </div>
      </div>
    </div>


    <div>
      <h2>Entertainment</h2>
      <div class="news-container">
          <div>
            <News/>
          </div>
          <div>
            <News/>
          </div>
          <div>
            <News/>
          </div>
          <div>
            <News/>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import News from '../components/News.vue';

export default {
  components : { News }
};
</script>

<style scoped>
.body{
  padding-left: 2em;
  padding-right: 2em;
}
h2{
  color: pink;
  border: 2px;
  border-color: pink;
  border-style: inset;
  border-top: 0;
  border-right: 0;
  border-left: 0;
}

.news-container{
  width: 100%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
</style>
