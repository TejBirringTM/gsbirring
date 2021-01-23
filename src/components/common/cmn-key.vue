<template>
    <div class="key disable-select" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "cmn-key",
        props: {
            special: {
                type: Boolean
            },
            icon: {
                type: Boolean
            }
        },
        computed: {
            classes() {
                let classes = {};

                if (this.special)
                    classes.special = true;

                if (this.icon)
                    classes.icon = true;

                return classes;
            }
        }
    }
</script>

<style scoped>
</style>