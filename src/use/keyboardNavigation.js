import { inject, onMounted } from "vue";


function isInViewport(elem) {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}





export default function useKeyboardNavigation() {
    const smoothScroll = inject('smoothScroll');
    let activeElement = null;

    function setFocus(elem) {
        activeElement = elem;
        elem.focus({preventScroll:true});
    }

    function scrollToElement(el) {
        smoothScroll({
            scrollTo: el,
            updateHistory: false,
            offset: -150
        });
    }

    onMounted(() => {
        /*
        *
        * When element is in focus,
        * Make sure to:
        * 1. keep a reference to it.
        * 2. scroll to it.
        *
        *  */
        document.addEventListener("focus", (ev) => {
            activeElement = ev.target;
            scrollToElement(activeElement);
        }, true);

        /*
        *
        * On key down:
        *
        * */
        document.body.addEventListener("keydown", (ev) => {
            const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
            const focusableElements = Array.from(document.querySelectorAll("a, button, [tabindex='0']"));

            const focusOnFirstFocusableElementInView = () => {
                for (const el of focusableElements) {
                    if (isInViewport(el)) {
                        setFocus(el);
                        break;
                    }
                }
            };


            switch (ev.key) {
                case "ArrowRight":
                    if (!activeElement) {
                        // console.log("No active element. Focussing on first in view.");
                        focusOnFirstFocusableElementInView();
                    }
                    else if (activeElement) {
                        // console.log("activeElement: ", activeElement);
                        // get next element, if it exists
                        const idxThis = focusableElements.indexOf(activeElement);
                        const elNext = focusableElements[idxThis+1] ?  focusableElements[idxThis+1] : focusableElements[0];
                        setFocus(elNext);
                    }
                    break;

                case "ArrowLeft":
                    if (!activeElement) {
                        // console.log("No active element. Focussing on first in view.");
                        focusOnFirstFocusableElementInView();
                    }
                    else if (activeElement) {
                        // console.log("activeElement: ", activeElement);
                        // get prev element, if it exists
                        const idxThis = focusableElements.indexOf(activeElement);
                        const elPrev = focusableElements[idxThis-1] ?  focusableElements[idxThis-1] : focusableElements[focusableElements.length-1];
                        setFocus(elPrev);
                    }
                    break;

                case "ArrowDown":
                    smoothScroll({
                        scrollTo: window.scrollY + (vh*.5),
                        updateHistory: false,
                    });
                    activeElement = undefined;
                    break;

                case "ArrowUp":
                    smoothScroll({
                        scrollTo: window.scrollY - (vh*.5),
                        updateHistory: false,
                    });
                    activeElement = undefined;
                    break;
                default:
            }
        }); // switch

        console.log("Keyboard Navigation initialized.");
    });
}

