<template>

  <cmn-jumbo>
    <div class="d-flex-col-nowrap text-center">
      <cmn-arrow-keys />
      <p class="mt-1 w-70" tabindex="0" nogrow>
        Use your arrow keys to navigate this website.<br>
      </p>
      (Feature is supported by most modern browsers.)
    </div>
  </cmn-jumbo>

  <cmn-main-content>
    <div class="text-center">
      <img class="profile-main" src="../assets/images/profile.png"  alt="" />
      <h1 tabindex="0" nogrow>Computer Systems Engineer, <br>Founder, Historian, Author,<br>
        Technology (& Facial Hair) Enthusiast...</h1>
    </div>
  </cmn-main-content>

</template>

<script>
// @ is an alias to /src
import CmnArrowKeys from "../components/common/cmn-arrow-keys";
import CmnJumbo from "../components/common/modals/cmn-jumbo";
import CmnMainContent from "../components/common/cmn-main-content";

export default {
  name: 'home',
  components: {CmnMainContent, CmnJumbo, CmnArrowKeys},
}
</script>
