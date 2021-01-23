<template>
  <nav>
    <p class="title text-center">
      Gurtēj Singh Birring
    </p>

    <div class="nav-buttons">
    <router-link class="icon-button" to="/">
      <i class="feather-home"></i>
      <div class="icon-caption">Home</div>
    </router-link>
    <router-link class="icon-button" to="/cv">
      <i class="feather-briefcase"></i>
      <div class="icon-caption">CV</div>
    </router-link>
<!--    <router-link class="icon-button" to="/cv">-->
<!--      <i class="feather-grid"></i>-->
<!--      <div class="icon-caption">Projects</div>-->
<!--    </router-link>-->
      <router-link class="icon-button" to="/cv">
        <i class="feather-mail"></i>
        <div class="icon-caption">Contact</div>
      </router-link>
    </div>
  </nav>

  <div class="page">
    <main>
      <router-view/>
    </main>

    <footer>
      <p>Copyright © {{ year }} by Gurtēj Singh Birring. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
  export default {
    data() { return {
        year: (new Date()).getFullYear()
      }
    }
  }
</script>