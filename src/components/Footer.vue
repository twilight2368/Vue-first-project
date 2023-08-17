<template>
    <div class="Footer">
      <div class="logo-container">
        <img src="../assets/torii-gate.png" alt="" class="footer-logo">
      </div>
      <div class="logo-social-media">
          <div>
            <img src="../assets/Images/facebook.png" alt="Facebook" title="Facebook">
          </div>
          <div>
            <img src="../assets/Images/twitter.png" alt="Twitter" title="Twitter">
          </div>
          <div>
            <img src="../assets/Images/instagram.png" alt="Instagram" title="Instagram">
          </div>
          <div>
            <img src="../assets/Images/youtube.png" alt="YouTube" title="YouTube">
          </div>
      </div>
      <div class="name-footer">
        ©2023 Nipponese | All Rights Reserved
      </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>

.logo-container{
  padding-top: 1em;
  padding-bottom: 0.2em ;
  width: 100%;
  text-align: center;
}
.footer-logo{
  height: 3em;
}
.Footer {
    margin-top: 1em;
    position: relative;
    bottom: 0;
    width: 100%;
    background-color: black;
    min-height: 6em;
    align-items: center;
    color: azure;
}

.logo-social-media {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    color: azure;
    width: 20%;
    margin: auto;
    padding-top: 1em;
    padding-top: 1em;
}

.logo-social-media div img {
    height: 2em;
}

.name-footer {
    width: 100%;
    text-align: center;
    margin-top: 1em;
    margin-bottom: 1em;
}
</style>