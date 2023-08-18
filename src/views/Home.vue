<template>
  <div>
    <!-- <div style="position: fixed; top: 0; z-index: 200">
      {{ position }}
    </div> -->
    <div class="main-body">
      <div class="main-top">
        <div class="main-japan-intro">
          <img
            src="../assets/Images/picture/pc_main_top_local.jpg"
            alt=""
            class="main-img"
          />
          <div class="main-hiding">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            inventore dolor ratione deleniti officia fugit error, temporibus
            animi eius sapiente ea corrupti porro obcaecati? Corrupti eos amet
            voluptas possimus reiciendis!
            <router-link to="/"> Learn more</router-link>
          </div>
          <div class="small-heading">About Japan</div>
        </div>
        <div class="main-place">
          <img
            src="../assets/Images/picture/shinjuku-1200x800.jpg"
            alt=""
            class="main-img"
          />
          <div class="main-hiding">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            inventore dolor ratione deleniti officia fugit error, temporibus
            animi eius sapiente ea corrupti porro obcaecati? Corrupti eos amet
            voluptas possimus reiciendis!
            <router-link to="/places"> Learn more</router-link>
          </div>
          <div class="small-heading">Places</div>
        </div>
      </div>

      <div class="main-middle">
        <div class="main-culture">
          <img
            src="../assets/Images/picture/m_japonskie-pamiątki_Easy-Resize.com_-570x410.jpg"
            alt=""
            class="main-img"
          />
          <div class="main-hiding">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            inventore dolor ratione deleniti officia fugit error, temporibus
            animi eius sapiente ea corrupti porro obcaecati? Corrupti eos amet
            voluptas possimus reiciendis!
            <router-link to="/"> Learn more</router-link>
          </div>
          <div class="small-heading">Items</div>
        </div>
        <div class="main-culture">
          <img
            src="../assets/Images/picture/AR4A7103_1024-1024x682.jpg"
            alt=""
            class="main-img"
          />
          <div class="main-hiding">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            inventore dolor ratione deleniti officia fugit error, temporibus
            animi eius sapiente ea corrupti porro obcaecati? Corrupti eos amet
            voluptas possimus reiciendis!
            <router-link to="/"> Learn more</router-link>
          </div>
          <div class="small-heading">Foods and Drinks</div>
        </div>
        <div class="main-culture">
          <img
            src="../assets/Images/picture/animeyolo.jpg"
            alt=""
            class="main-img"
          />
          <div class="main-hiding">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            inventore dolor ratione deleniti officia fugit error, temporibus
            animi eius sapiente ea corrupti porro obcaecati? Corrupti eos amet
            voluptas possimus reiciendis!
            <router-link to="/"> Learn more</router-link>
          </div>
          <div class="small-heading">Anime and Movies</div>
        </div>
      </div>

      <div class="main-bottom">
        <div class="main-festival">
          <img
            src="../assets/Images/picture/C2qfOH7XgAE7ODZ.jpg"
            alt=""
            class="main-img"
          />
          <div class="main-hiding">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            inventore dolor ratione deleniti officia fugit error, temporibus
            animi eius sapiente ea corrupti porro obcaecati? Corrupti eos amet
            voluptas possimus reiciendis!
            <router-link to="/"> Learn more</router-link>
          </div>
          <div class="small-heading">Culture</div>
        </div>
        <div class="main-festival">
          <img
            src="../assets/Images/picture/interest_festival.jpg"
            alt=""
            class="main-img"
          />
          <div class="main-hiding">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            inventore dolor ratione deleniti officia fugit error, temporibus
            animi eius sapiente ea corrupti porro obcaecati? Corrupti eos amet
            voluptas possimus reiciendis!
            <router-link to="/"> Learn more</router-link>
          </div>
          <div class="small-heading">Festivals</div>
        </div>
      </div>

      <div class="video">
        <iframe
          :src="url"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "red",
      position: 0,
      url: "https://www.youtube.com/embed/aX7GMsbuz_s?autoplay=0&controls=0"
    };
  },
  methods: {
    positionSetup(currentpositon) {
      this.position = currentpositon;
      console.log(currentpositon);
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 800) {
        this.position = window.scrollY - 400;
        this.url = "https://www.youtube.com/embed/aX7GMsbuz_s?autoplay=0&controls=0"
      } else {
        if (window.scrollY <= 1300) {
          this.position = window.scrollY;
          this.url = "https://www.youtube.com/embed/aX7GMsbuz_s?autoplay=1&controls=0"
        }else{
          this.position = 1500 - window.scrollY;
          this.url = "https://www.youtube.com/embed/aX7GMsbuz_s?autoplay=0&controls=0"
        }
      }
      //console.log(window.scrollY);
    });
  },
};
</script>

<style scoped>
.main-body {
  padding-top: 1em;
  padding-bottom: 2em;
  padding-left: 0.5em;
  padding-right: 0.5em;
}

.main-top {
  display: grid;
  grid-template-columns: 65% 35%;
  margin-bottom: 0.3em;
}
.main-japan-intro {
  position: relative;
  width: 100%;
  height: 350px;
}

.main-place {
  position: relative;
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
  position: relative;
  display: grid;
  grid-template-columns: 33.25% 33.2% 33.2%;
  gap: 4px;
  margin-bottom: 0.2em;
}

.main-culture {
  position: relative;
}

.main-culture img {
  width: 100%;
  height: 350px;
}

.main-bottom {
  position: relative;
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 2px;
}

.main-festival {
  position: relative;
}
.main-festival img {
  width: 100%;
  height: 350px;
}

.main-hiding {
  position: absolute;
  top: 0;
  padding-left: 1em;
  padding-right: 1em;
  width: auto;
  height: 0%;
  background-color: black;
  z-index: 10;
  transition: linear 0.6s;
  overflow: hidden;
}

.main-japan-intro:hover .main-hiding {
  height: 100%;
}

.main-place:hover .main-hiding {
  height: 100%;
}

.main-culture:hover .main-hiding {
  height: 100%;
}

.main-festival:hover .main-hiding {
  height: 100%;
}

.small-heading {
  position: absolute;
  padding-left: 1em;
  padding-right: 1em;
  background-color: black;
  bottom: 0;
  left: 0;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  size: 2em;
}

.main-hiding a {
  position: absolute;
  bottom: 0.5em;
  right: 0.5em;
  color: #ffc0cb;
}

.video {
  text-align: center;
  width: 100%;
  opacity: calc((min(v-bind(position), 1000) / 1000));
  transition-delay: 4s;
  transition: linear 0.3s;
}

iframe {
  width: 80%;
  height: 500px;
}
</style>
