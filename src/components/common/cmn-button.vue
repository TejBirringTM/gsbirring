<template>
    <button @click.prevent.stop="click">
        {{text}}
        <i v-if="icon" :class="icon"></i>
    </button>
</template>

<script>
    export default {
        name: "cmn-button",
        props: {
            icon: {
                type: String,
                default: null
            },
            text: {
                type: String,
                required: true
            },
            onClick: {
                type: Function,
                default: null
            }
        },
        methods: {
            click() {
                this.onClick();
            }
        }
    }
</script>

<style scoped>

</style>