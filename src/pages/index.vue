<template>

  <cmn-jumbo>
    <div class="d-flex-col-nowrap text-center">
      <cmn-arrow-keys class="mt-1" />
      <h6 tabindex="0" nogrow>Use your arrow keys to navigate this website.</h6>
      <p>(Supported by most modern browsers.)</p>
    </div>
  </cmn-jumbo>

  <cmn-main-content>
    <div class="profile">
      <img src="../assets/images/profile.png"  alt="" />
      <div>
        <p class="text-medium-large text-theme-5">You can call me <strong>Tej.</strong> I am a: </p>
        <h1 class="mt-0" tabindex="0" nogrow>
          <span class="text-theme-3">Computer Systems Engineer, </span>
          <span class="text-theme-2-faded">Associative Thinker, </span>
          <span class="text-theme-3">Digital Products Prototyper, </span>
          <span class="text-theme-2-faded">Martial Artist, </span>
          <span class="text-theme-3">Technology Advocate, </span>
          <span class="text-theme-2-faded">Writer, </span>
          <span class="">Programming Enthusiast, </span>
          <span class="text-theme-2-faded">Historian, </span>
          <span class="no-wrap">INFJ-T...</span>
        </h1>

<!--          <cmn-button class="mt-2" text="Check out my blog" icon="feather-file-text" :on-click="print" />-->
      </div>
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

<style scoped lang="scss">
  div.profile {
    display: flex;
    flex-flow: row nowrap;
    @media (max-width: $breakpoint-landscape-tablet) {
      flex-flow: column nowrap;
    }
    justify-content: center;
    align-content: center;
    overflow: hidden;

    img {
      align-self: center;
      border-radius: 50%;
      width: 40vmin;
      height: 40vmin;
      margin-right: 4rem;
      @media (max-width: $breakpoint-landscape-tablet) {
        width: 60vmin;
        height: 60vmin;
        margin-bottom: 2rem;
        margin-right: 0;
      }
    }

    div {
      align-self: center;
      color: $theme-color-2;
      text-align: left;
      max-width: 50%;

      @media (max-width: $breakpoint-landscape-tablet) {
        text-align: center;
        max-width: 100%;
        margin-bottom: 1rem;
      }
    }
  }
</style>

