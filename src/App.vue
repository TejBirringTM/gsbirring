<template>
  <router-view/>
</template>

<script>
  function isInViewport(elem) {
    let bounding = elem.getBoundingClientRect();
    return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }


  function _focus(el, scrollFunct) {
      el.focus({preventScroll:true});

      if (scrollFunct)
        scrollFunct(el);
  }


  function focus(idx, scrollFunct) {
    const all = document.querySelectorAll("a, button, [tabindex='0']");

    const focusOnZeroEl = () => {
      if (all[0]) {
        const prev = all[all.length-1] ? all.length-1 : 0;
        _focus(all[0], scrollFunct);
        return {prevFocusIdx: prev, currentFocusIdx: 0, nextFocusIdx: 1};
      }
    };

    if (!idx)
      focusOnZeroEl();

    if (all[idx]) {
      const prev = all[idx-1] ? idx-1 : all[all.length-1] ? all.length-1 : 0;
      const next = all[idx+1] ? idx+1 : 0;
      _focus(all[idx], scrollFunct);
      return {prevFocusIdx: prev, currentFocusIdx: idx, nextFocusIdx: next};
    }
  }


  function ensureFocusOnElementInViewport(prevIdx, currIdx, nextIdx) {
    const all = document.querySelectorAll("a, button, [tabindex='0']");

    const currEl = all[currIdx];

    let retVal = {prevFocusIdx: prevIdx, currentFocusIdx: currIdx, nextFocusIdx: nextIdx};

    if (currEl && !isInViewport(currEl)) {
      let idx = 0;
      for (const el of all) {
        if (isInViewport(el)) {
          const prev = all[idx-1] ? idx-1 : 0;
          const next = all[idx+1] ? idx+1 : 0;
          retVal = {prevFocusIdx: prev, currentFocusIdx: idx, nextFocusIdx: next}; // TODO: check if indexes actually exist as elements in list.
          break; // exit loop
        }
        idx++;
      }
    }

    return retVal;
  }


  export default {
    data() { return {
      nextFocusIdx: null,
      currentFocusIdx: null,
      prevFocusIdx: null
    }},
    created() {
      console.log("App created");

      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

      // Ensure that when item is clicked, it is focus on
      // TODO: perhaps re-factor
      document.addEventListener('focus', (ev) => {
        const arr = Array.from(document.querySelectorAll("a, button, [tabindex='0']"));
        const idx = arr.indexOf(ev.target);
        this.currentFocusIdx = idx;
        this.prevFocusIdx = arr[idx-1] ? idx-1 : 0;
        this.nextFocusIdx = arr[idx+1] ? idx+1 : 0;
      }, true);


      document.body.addEventListener('keydown', (ev) => {
        switch (ev.key) {
          case "ArrowRight":
            if (!this.nextFocusIdx)
              this.focus(0);
            else
              this.focus(this.nextFocusIdx);
            break;
          case "ArrowLeft":
            if (!this.prevFocusIdx)
              this.focus(0);
            else
              this.focus(this.prevFocusIdx);
            break;
          case "ArrowDown":
            this.$smoothScroll({
              scrollTo: window.scrollY + (vh*.5),
              updateHistory: false,
            });
            this.setFocusIndexes( ensureFocusOnElementInViewport(this.prevFocusIdx, this.currentFocusIdx, this.nextFocusIdx) );
            break;
          case "ArrowUp":
            this.$smoothScroll({
              scrollTo: window.scrollY - (vh*.5),
              updateHistory: false,
            });
            this.setFocusIndexes( ensureFocusOnElementInViewport(this.prevFocusIdx, this.currentFocusIdx, this.nextFocusIdx) );
            break;
          default:
        }
      });
    },
    methods: {
      focus(idx) {
        const smoothScroll = (el) => {
          this.$smoothScroll({
            scrollTo: el,
            updateHistory: false,
            offset: -150
          })
        };

        this.setFocusIndexes( focus(idx, smoothScroll) );
      },

      setFocusIndexes(obj) {
        console.log(obj);
        this.prevFocusIdx = obj.prevFocusIdx;
        this.currentFocusIdx = obj.currentFocusIdx;
        this.nextFocusIdx = obj.nextFocusIdx;
      }
    }
  }
</script>