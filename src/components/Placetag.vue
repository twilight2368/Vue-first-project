<template>
  <div class="bodytag">
    <img :src="takeImg" alt="">
    <div class="tagname">
        {{ placeName }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaceTag",
  props: ["place"],
  data() {
    return {
      placeName: this.place,
    };
  },
  computed: {
    takeImg() {
      let result = require("../assets/Images/picture/47/" + this.placeName + ".png");
      return result;
    },
  },
};
</script>

<style scoped>

.bodytag {
  position: relative;
}
.bodytag img {
  width: 60%;
  transition: linear 0.3s;
}

.tagname{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  padding-right: 0.5em;
  padding-left: 0.5em;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  text-align: center;
  transition: linear 0.3s;
  font-size: 1em;
  width: 5em;
  opacity: 0;
  transition: linear 0.4s;
}

.bodytag:hover img {
  opacity: 0.3;
}

.bodytag:hover .tagname{
  opacity: 1;
}
</style>
