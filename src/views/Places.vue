<template>
  <div>
    <div class="header">
      <h2>Japan</h2>
    </div>
    <div class="heading-place">
      Japan is divided into 47 prefectures (都道府県, todōfuken). They include
      43 prefectures proper (県, ken), two urban prefectures (府, fu: Osaka and
      Kyoto), one "circuit" or "territory" (道, dō: Hokkai-dō) and one
      metropolis (都, to: Tokyo)
    </div>

    <div class="place-body">
      <Placetag v-for="place in places" :key="place" :place="place" />
      <div class="more-infor">
        <p style="text-align: start; padding: 5%">
          <small>
            <span
              >All of 47 typographies were made by
              <span style="font-family: 'Cherry Bomb One', cursive; font-size: 1.5em;">
                ゆうなてや</span>, you can follow her on Twitter
            </span>
            <a href="https://twitter.com/teya_y" class="link-infor">
                <img
                src="../assets/Images/twitter.png"
                height="auto"
                width="15px"
                />
              <span style="font-family: 'Cherry Bomb One', cursive; margin-left: 0.3em;">@teya_y</span>
            </a>
          </small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Placetag from "@/components/Placetag.vue";
export default {
  name: "Places",
  components: { Placetag },
  data() {
    return {
      hello: "Hello world",
      places: [
        "Aichi",
        "Akita",
        "Aomori",
        "Chiba",
        "Ehime",
        "Fukui",
        "Fukuoka",
        "Fukushima",
        "Gifu",
        "Gunma",
        "Hiroshima",
        "Hokkaido",
        "Hyogo",
        "Ibaraki",
        "Ishikawa",
        "Iwate",
        "Kagawa",
        "Kagoshima",
        "Kanagawa",
        "Kochi",
        "Kumamoto",
        "Kyoto",
        "Mie",
        "Miyagi",
        "Miyazaki",
        "Nagano",
        "Nagasaki",
        "Nara",
        "Niigata",
        "Oita",
        "Okayama",
        "Okinawa",
        "Osaka",
        "Saga",
        "Saitama",
        "Shiga",
        "Shimane",
        "Shizuoka",
        "Tochigi",
        "Tokushima",
        "Tokyo",
        "Tottori",
        "Toyama",
        "Wakayama",
        "Yamagata",
        "Yamaguchi",
        "Yamanashi",
      ],
    };
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  text-align: center;
}
h2 {
  font-family: "Cherry Bomb One", cursive;
}
.heading-place {
  width: 75%;
  margin: auto;
}

.place-body {
  width: 75%;
  margin: auto;
  margin-top: 2.5em;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  row-gap: 1em;
}
.place-body div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.more-infor {
  grid-column: span 3 / span 5;
}

.link-infor{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}
</style>
