<template>
    <nav>
        <p class="title text-center">
            {{ title }}
        </p>

        <div class="nav-buttons">
            <router-link
                    v-for="option in navOptions"
                    :key="option.text"
                    class="icon-button"
                    :to="option.path">
                <i :class="option.icon"></i>
                <div class="icon-caption">{{ option.text }}</div>
            </router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "nav-menu",
        props: {
            /*
             *  [
             *      { text, icon, path }, ...
             *  ]
             *
             */
            navOptions: {
                type: Array,
                required: true
            },
            /*
            *  Title to show at the top.
            */
            title: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    /* start: navigation menu */
    nav {
        background-color: $theme-color-1;
        position: relative;
        top: 0;
        width: 100%;

        .title { // height: 5rem
            padding: 3rem 1rem;
            background-color: $theme-color-2;
            color: $theme-color-1;
            font-family: Montserrat, sans-serif;
            font-size: 3rem;
            line-height: 1;
            font-weight: 200;
            text-transform: uppercase;
            letter-spacing: .5rem;
        }

        .nav-buttons {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;

            $margin: 0.6rem;
            .icon-button {
                margin: 0 $margin;
            }

            .icon-button:hover, .icon-button:focus {
                @media(min-width: $breakpoint-portrait-tablet) {
                    margin-left: $margin + 0.4rem;
                    margin-right: $margin + 0.4rem;
                    transition-duration: 0.3s;
                    transition-property: margin;
                }
            }
        }
    }
    /* end: navigation menu */

    /* start: navigation icon buttons */
    .icon-button {
        border-radius: 5%;
        height: 60px;
        width: 60px;
        background-color: transparent;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;

        i {
            font-size: 2rem;
            margin-top: -0.2rem;
            display: block;
            color: $theme-color-3;
        }

        .icon-caption {
            position: absolute;
            z-index: 1;
            visibility: hidden;
            bottom: -1.4rem;
            color: $theme-color-3;
            font-family: Montserrat, sans-serif;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: .3rem;
        }

        &:hover, &:focus {
            background-color: $theme-color-4;

            transition-duration: 0.3s;
            transition-property: transform;
            transform: scale(1.2);

            i {
                color: $theme-color-3;
                font-size: 2.4rem;
            }

            @media(min-width: $breakpoint-portrait-tablet) {
                .icon-caption {
                    visibility: visible;
                }
            }
        }

        &:active {
            background-color: $theme-color-4;
            .icon-caption {
                color: $theme-color-4;
            }
        }
    }
    /* end: navigation icon buttons */
</style>