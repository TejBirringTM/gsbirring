<template>
  <div class="home">


    <section class="text-center w-70 mx-auto">
      <img class="profile-main" src="../assets/images/profile.png"  alt="" />
      <h1 tabindex="0" nogrow>Computer Systems Engineer, <br>Founder, Historian, Author,<br>
        Technology (& Facial Hair) Enthusiast...</h1>
    </section>

    <div class="feature text-center" hide-on-mobile-devices>
      <div class="d-flex-col-nowrap">
        <cmn-arrow-keys />
        <p class="mt-1 w-70" tabindex="0" nogrow>
          Use the arrow keys to navigate this website.<br>
        </p>
        (Supported by most modern browsers.)
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import CmnArrowKeys from "../components/common/cmn-arrow-keys";

export default {
  name: 'home',
  components: {CmnArrowKeys},
}
</script>
