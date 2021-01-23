<template>
  <router-view/>
</template>

<script>
  import useKeyboardNavigation from "./use/keyboardNavigation";
  import useDisableContextMenus from "./use/disableContextMenus";
  import usePlaformSpecificAdjustments from "./use/plaformSpecificAdjustments";



  export default {

    setup() {
      useKeyboardNavigation();
      useDisableContextMenus();
      usePlaformSpecificAdjustments();
    },

    created() {
      console.log("App created.");
    },

  }
</script>