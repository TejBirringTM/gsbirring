<template>
    <nav-menu title="Gurtēj Singh Birring" :additional-info="['www.gsbirring.com', '+44 (0) 7840 820 898', 'tej.birring@gmail.com']" :nav-options="navOptions"/>



    <div class="page">

      <main>
          <router-view/>
      </main>

      <footer>
          <div class="holder">
              <p>
                  <span class="c">©</span> {{ year }} <span class="text-uppercase">Gurtēj Singh Birring</span>
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