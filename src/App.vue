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


  export default {
    data() { return {
      activeElement: null,
    }},
    created() {
      console.log("App created");

      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    document.addEventListener("focus", (ev) => {
      this.activeElement = ev.target;
      this.scrollToElement(this.activeElement);
    }, true);

      document.body.addEventListener('keydown', (ev) => {
        const focusableElements = Array.from(document.querySelectorAll("a, button, [tabindex='0']"));

        const focusOnFirstFocusableElementInView = () => {
          for (const el of focusableElements) {
            if (isInViewport(el)) {
              this.setFocus(el);
              break;
            }
          }
        };

        switch (ev.key) {
          case "ArrowRight":
            if (!this.activeElement) {
              focusOnFirstFocusableElementInView();
            }
            else if (this.activeElement) {
              // get next element, if it exists
              const idxThis = focusableElements.indexOf(this.activeElement);
              const elNext = focusableElements[idxThis+1] ?  focusableElements[idxThis+1] : focusableElements[0];
              this.setFocus(elNext);
            }

            break;
          case "ArrowLeft":
            if (!this.activeElement) {
              focusOnFirstFocusableElementInView();
            }
            else if (this.activeElement) {
              // get prev element, if it exists
              const idxThis = focusableElements.indexOf(this.activeElement);
              const elPrev = focusableElements[idxThis-1] ?  focusableElements[idxThis-1] : focusableElements[focusableElements.length-1];
              this.setFocus(elPrev);
            }
            break;
          case "ArrowDown":
            this.$smoothScroll({
              scrollTo: window.scrollY + (vh*.5),
              updateHistory: false,
            });
            this.activeElement = undefined;
            break;
          case "ArrowUp":
            this.$smoothScroll({
              scrollTo: window.scrollY - (vh*.5),
              updateHistory: false,
            });
            this.activeElement = undefined;
            break;
          default:
        }
      });
    },
    methods: {
      setFocus(el) {
        el.focus({preventScroll:true});
      },
      scrollToElement(el) {
        this.$smoothScroll({
          scrollTo: el,
          updateHistory: false,
          offset: -150
        });
      }
    }
  }
</script>