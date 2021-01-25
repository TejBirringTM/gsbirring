<template>
    <nav-menu title="Gurtēj Singh Birring" :nav-options="navOptions"/>




    <div class="page">

      <main>
          <router-view/>
      </main>

      <footer>
          <div class="holder">
              <p>
                Copyright © {{ year }} by Gurtēj Singh Birring. All Rights Reserved.
              </p>
          </div>
      </footer>
    </div>





</template>

<script>
  import NavMenu from "../components/navigation/nav-menu";
  export default {
    components: {NavMenu},
    data() { return {
        navOptions: [
          {
            text: "Home",
            icon: "feather-home",
            path: "/"
          },
          {
            text: "CV",
            icon: "feather-briefcase",
            path: "/cv"
          },
          {
            text: "Contact",
            icon: "feather-mail",
            path: "/get-in-touch"
          }
        ],
        year: (new Date()).getFullYear()
      }
    }
  }
</script>