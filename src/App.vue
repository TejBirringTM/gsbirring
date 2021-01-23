<template>
  <router-view/>
</template>

<script>
  import useKeyboardNavigation from "./use/keyboardNavigation";



  export default {

    setup() {
      useKeyboardNavigation();
    },

    created() {
      console.log("App created.");
    },

  }
</script>